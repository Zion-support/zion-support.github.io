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
 *   GITHUB_OUTPUT — when set, writes has_fp_incidents=true|false for downstream steps
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { spawnSync } = require('child_process');

const root = process.cwd();
const reportsDir = path.join(root, 'automation', 'reports');
const jsonPath = path.join(reportsDir, 'automation-fingerprint-incidents-latest.json');
const mdPath = path.join(reportsDir, 'automation-fingerprint-incidents-latest.md');

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

function appendGithubOutput(key, value) {
  const p = process.env.GITHUB_OUTPUT;
  if (!p) return;
  fs.appendFileSync(p, `${key}=${value}\n`);
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
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
