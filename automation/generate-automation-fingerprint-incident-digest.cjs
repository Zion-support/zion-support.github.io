#!/usr/bin/env node
/**
 * Summarize open GitHub issues that carry automation fingerprint labels (automation-fp-*).
 * Writes JSON + Markdown under automation/reports/ for humans and other agents.
 *
 * Env:
 *   GH_TOKEN / GITHUB_TOKEN — required on CI; if missing, writes empty digest and exits 0
 *   DIGEST_LIMIT — max issues to scan (default 300)
 *   DIGEST_NOTIFY_TELEGRAM — if "1"/"true" and open count > 0, send Telegram (needs TELEGRAM_* secrets)
 *   AUTOMATION_DIGEST_SLACK_WEBHOOK — optional; posts plain-text summary when open count > 0
 *   AUTOMATION_DIGEST_DISCORD_WEBHOOK — optional; posts { content: text } when open count > 0
 *   DIGEST_ROLLUP_ISSUE — if "1"/"true", create/update rolling digest issue (needs issues: write)
 *   DIGEST_ESCALATION_MIN_COUNT — optional; escalate when open fp issues >= this count
 *   DIGEST_ESCALATION_STALE_DAYS — optional; escalate when any issue updatedAt older than this many days
 *   DIGEST_ESCALATION_GENERIC_WEBHOOK — optional Slack-compatible JSON { text }
 *   DIGEST_ESCALATION_SLACK_WEBHOOK — alias for generic webhook
 *   DIGEST_ESCALATION_PAGERDUTY_ROUTING_KEY — optional PagerDuty Events API v2
 *   GITHUB_OUTPUT — when set, writes has_fp_incidents=true|false for downstream steps
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const https = require('https');
const { spawnSync } = require('child_process');

const root = process.cwd();
const reportsDir = path.join(root, 'automation', 'reports');
const jsonPath = path.join(reportsDir, 'automation-fingerprint-incidents-latest.json');
const mdPath = path.join(reportsDir, 'automation-fingerprint-incidents-latest.md');

const ROLLUP_TITLE = 'Automation fingerprint incidents — rolling digest';
const ROLLUP_LABEL = 'automation-fp-digest-rollup';

function gh(args) {
  return spawnSync('gh', args, {
    encoding: 'utf8',
    env: process.env,
  });
}

function truthy(v) {
  return ['1', 'true', 'yes'].includes(String(v || '').toLowerCase());
}

function notifySlack(webhookUrl, text) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ text: text.slice(0, 4000) });
    const u = new URL(webhookUrl);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        res.on('data', () => {});
        res.on('end', () => resolve(res.statusCode));
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function notifyDiscord(webhookUrl, text) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ content: text.slice(0, 2000) });
    const u = new URL(webhookUrl);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        res.on('data', () => {});
        res.on('end', () => resolve(res.statusCode));
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function postJsonUrl(url, bodyObj) {
  return new Promise((resolve, reject) => {
    try {
      const u = new URL(url);
      const body = JSON.stringify(bodyObj);
      const req = https.request(
        {
          hostname: u.hostname,
          path: u.pathname + u.search,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(body),
          },
        },
        (res) => {
          res.on('data', () => {});
          res.on('end', () => resolve(res.statusCode));
        }
      );
      req.on('error', reject);
      req.write(body);
      req.end();
    } catch (e) {
      reject(e);
    }
  });
}

function appendGithubOutput(key, value) {
  const p = process.env.GITHUB_OUTPUT;
  if (!p) return;
  fs.appendFileSync(p, `${key}=${value}\n`);
}

function ensureRollupLabel() {
  const r = gh([
    'label',
    'create',
    ROLLUP_LABEL,
    '--color',
    '0366d6',
    '--description',
    'Rolling digest issue for automation fingerprint incidents',
  ]);
  if (r.status !== 0 && !/already exists/i.test(r.stderr || '')) {
    console.warn('gh label create rollup (non-fatal):', r.stderr || r.stdout);
  }
}

function findRollupIssue() {
  const list = gh([
    'issue',
    'list',
    '--state',
    'open',
    '--label',
    ROLLUP_LABEL,
    '--json',
    'number,title',
    '--limit',
    '30',
  ]);
  if (list.status !== 0) return null;
  try {
    const arr = JSON.parse(list.stdout || '[]');
    return arr.find((i) => i.title === ROLLUP_TITLE) || null;
  } catch {
    return null;
  }
}

function buildRollupBody(fpIssues, generatedAt) {
  const lines = [
    '<!-- automation-fp-digest-rollup -->',
    '',
    `_Last updated: ${generatedAt}_`,
    '',
    `Open issues with an \`automation-fp-*\` label: **${fpIssues.length}**`,
    '',
  ];
  if (fpIssues.length === 0) {
    lines.push('_No open fingerprint-tagged incidents._');
  } else {
    lines.push('### Open incidents');
    lines.push('');
    for (const i of fpIssues) {
      lines.push(`- [ ] [#${i.number}](${i.url}) — ${i.title}`);
    }
  }
  lines.push('');
  lines.push('_Maintained by workflow `ai-automation-fingerprint-digest-weekly`._');
  return lines.join('\n');
}

function upsertRollupIssue(fpIssues, generatedAt) {
  if (!process.env.GH_TOKEN && !process.env.GITHUB_TOKEN) return;
  ensureRollupLabel();
  const body = buildRollupBody(fpIssues, generatedAt);
  const tmp = path.join(os.tmpdir(), `fp-digest-rollup-${process.pid}-${Date.now()}.md`);
  fs.writeFileSync(tmp, body, 'utf8');
  try {
    const existing = findRollupIssue();
    if (existing) {
      const r = gh(['issue', 'edit', String(existing.number), '--body-file', tmp]);
      if (r.status !== 0) {
        console.warn('Rollup issue edit failed:', r.stderr || r.stdout);
      } else {
        console.log(`Updated rollup issue #${existing.number}.`);
      }
    } else {
      const r = gh([
        'issue',
        'create',
        '--title',
        ROLLUP_TITLE,
        '--body-file',
        tmp,
        '--label',
        ROLLUP_LABEL,
      ]);
      if (r.status !== 0) {
        console.warn('Rollup issue create failed:', r.stderr || r.stdout);
      } else {
        console.log('Created rollup issue:', (r.stdout || '').trim());
      }
    }
  } finally {
    try {
      fs.unlinkSync(tmp);
    } catch {
      /* ignore */
    }
  }
}

function shouldEscalate(fpIssues) {
  const minCount = parseInt(String(process.env.DIGEST_ESCALATION_MIN_COUNT || '0'), 10);
  const staleDays = parseFloat(String(process.env.DIGEST_ESCALATION_STALE_DAYS || '0'));
  if (!fpIssues.length) return false;
  if (Number.isFinite(minCount) && minCount > 0 && fpIssues.length >= minCount) return true;
  if (Number.isFinite(staleDays) && staleDays > 0) {
    const threshold = Date.now() - staleDays * 86400000;
    for (const i of fpIssues) {
      const t = new Date(i.updatedAt).getTime();
      if (Number.isFinite(t) && t < threshold) return true;
    }
  }
  return false;
}

async function notifyEscalation(fpIssues) {
  const lines = [
    `Automation fingerprint ESCALATION: ${fpIssues.length} open incident(s)`,
    ...fpIssues.slice(0, 15).map((i) => `#${i.number} ${i.title} ${i.url}`),
    fpIssues.length > 15 ? `… +${fpIssues.length - 15} more` : '',
  ].filter(Boolean);
  const plain = lines.join('\n').slice(0, 4000);

  const slackUrl =
    process.env.DIGEST_ESCALATION_SLACK_WEBHOOK || process.env.DIGEST_ESCALATION_GENERIC_WEBHOOK;
  const pdKey = process.env.DIGEST_ESCALATION_PAGERDUTY_ROUTING_KEY;

  if (slackUrl) {
    try {
      await notifySlack(slackUrl, plain);
      console.log('Escalation webhook sent.');
    } catch (e) {
      console.warn('Escalation slack/generic failed:', e.message);
    }
  }

  if (pdKey) {
    const pdBody = {
      routing_key: pdKey,
      event_action: 'trigger',
      payload: {
        summary: plain.slice(0, 1024),
        source: 'zion-automation-fp-digest',
        severity: 'warning',
      },
    };
    try {
      const code = await postJsonUrl('https://events.pagerduty.com/v2/enqueue', pdBody);
      console.log('PagerDuty escalation:', code);
    } catch (e) {
      console.warn('PagerDuty escalation failed:', e.message);
    }
  }
}

async function notifyChannels(report, fpIssues) {
  const n = fpIssues.length;
  if (n === 0) return;

  const lines = [
    `<b>Automation fingerprint incidents</b>`,
    `Open: <b>${n}</b>`,
    ...fpIssues.slice(0, 8).map((i) => `#${i.number} — ${escapeHtml(i.title)}`),
    n > 8 ? `… +${n - 8} more` : '',
  ].filter(Boolean);
  const html = lines.join('\n');

  if (truthy(process.env.DIGEST_NOTIFY_TELEGRAM)) {
    const r = spawnSync(process.execPath, [path.join(root, 'automation', 'ai-telegram-notification-agent.cjs'), 'send', html], {
      encoding: 'utf8',
      env: { ...process.env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    if (r.status !== 0) {
      console.warn('Telegram notify:', r.stderr || r.stdout || 'failed');
    }
  }

  const slackUrl = process.env.AUTOMATION_DIGEST_SLACK_WEBHOOK;
  if (slackUrl) {
    const plain = `Automation fingerprint incidents: ${n} open\n${fpIssues
      .slice(0, 12)
      .map((i) => `#${i.number} ${i.title} ${i.url}`)
      .join('\n')}`;
    try {
      await notifySlack(slackUrl, plain);
    } catch (e) {
      console.warn('Slack notify failed:', e.message);
    }
  }

  const discordUrl = process.env.AUTOMATION_DIGEST_DISCORD_WEBHOOK;
  if (discordUrl) {
    const plain = `Automation fingerprint incidents: ${n} open\n${fpIssues
      .slice(0, 12)
      .map((i) => `#${i.number} ${i.title} ${i.url}`)
      .join('\n')}`;
    try {
      await notifyDiscord(discordUrl, plain);
    } catch (e) {
      console.warn('Discord notify failed:', e.message);
    }
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function main() {
  if (!process.env.GH_TOKEN && !process.env.GITHUB_TOKEN) {
    const stub = {
      generatedAt: new Date().toISOString(),
      skipped: true,
      reason: 'No GH_TOKEN/GITHUB_TOKEN; digest not generated locally.',
      issues: [],
    };
    fs.mkdirSync(reportsDir, { recursive: true });
    fs.writeFileSync(jsonPath, JSON.stringify(stub, null, 2));
    fs.writeFileSync(
      mdPath,
      '# Automation fingerprint incidents\n\n_Skipped: no GitHub token in environment._\n'
    );
    appendGithubOutput('has_fp_incidents', 'false');
    console.log('Digest skipped (no token).');
    return;
  }

  const limit = String(process.env.DIGEST_LIMIT || '300');
  const list = gh([
    'issue',
    'list',
    '--state',
    'open',
    '--limit',
    limit,
    '--json',
    'number,title,labels,updatedAt,url',
  ]);

  if (list.status !== 0) {
    console.error('gh issue list failed:', list.stderr || list.stdout);
    process.exit(1);
  }

  let issues;
  try {
    issues = JSON.parse(list.stdout || '[]');
  } catch {
    issues = [];
  }

  const fpIssues = issues
    .map((issue) => {
      const fpLabels = (issue.labels || [])
        .map((l) => (typeof l === 'string' ? l : l.name))
        .filter((name) => name && name.startsWith('automation-fp-'));
      return fpLabels.length ? { ...issue, automationFpLabels: fpLabels } : null;
    })
    .filter(Boolean);

  const report = {
    generatedAt: new Date().toISOString(),
    openWithFingerprintLabel: fpIssues.length,
    issues: fpIssues.map((i) => ({
      number: i.number,
      title: i.title,
      url: i.url,
      updatedAt: i.updatedAt,
      automationFpLabels: i.automationFpLabels,
    })),
  };

  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));

  const lines = [
    '# Automation fingerprint incidents',
    '',
    `_Generated: ${report.generatedAt}_`,
    '',
    'Open issues with an `automation-fp-*` label: **' + fpIssues.length + '**',
    '',
  ];

  for (const i of report.issues) {
    lines.push(`- [#${i.number}](${i.url}) — ${i.title}`);
    lines.push(`  - Labels: ${i.automationFpLabels.join(', ')}`);
    lines.push(`  - Updated: ${i.updatedAt}`);
    lines.push('');
  }

  if (fpIssues.length === 0) {
    lines.push('_No open fingerprint-tagged incidents._');
    lines.push('');
  }

  fs.writeFileSync(mdPath, lines.join('\n'));
  console.log(`Wrote ${path.relative(root, jsonPath)} (${fpIssues.length} issue(s)).`);

  appendGithubOutput('has_fp_incidents', fpIssues.length > 0 ? 'true' : 'false');

  try {
    await notifyChannels(report, fpIssues);
  } catch (e) {
    console.warn('notifyChannels:', e.message);
  }

  if (truthy(process.env.DIGEST_ROLLUP_ISSUE)) {
    try {
      upsertRollupIssue(fpIssues, report.generatedAt);
    } catch (e) {
      console.warn('upsertRollupIssue:', e.message);
    }
  }

  const escalationConfigured =
    process.env.DIGEST_ESCALATION_SLACK_WEBHOOK ||
    process.env.DIGEST_ESCALATION_GENERIC_WEBHOOK ||
    process.env.DIGEST_ESCALATION_PAGERDUTY_ROUTING_KEY;

  if (fpIssues.length > 0 && shouldEscalate(fpIssues) && escalationConfigured) {
    try {
      await notifyEscalation(fpIssues);
    } catch (e) {
      console.warn('notifyEscalation:', e.message);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
