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
 *   DIGEST_DELTA_NOTIFY_ONLY — if "1"/"true", only notify Slack/Discord/Telegram when delta (new/resolved) since last run
 *   DIGEST_ROLLUP_ISSUE — if "1"/"true", create/update rolling digest issue (needs issues: write)
 *   DIGEST_ROLLUP_AUTO_CLOSE — if "1"/"true", close rollup issue when fp issue count is 0; reopen on next incident
 *   DIGEST_ROLLUP_ASSIGNEE — optional GitHub username to assign when creating rollup issue
 *   DIGEST_ESCALATION_MIN_COUNT — optional; escalate when open fp issues >= this count (warning tier)
 *   DIGEST_ESCALATION_STALE_DAYS — optional; escalate when any issue updatedAt older than this many days (warning)
 *   DIGEST_ESCALATION_CRITICAL_MIN_COUNT — optional; critical tier when count >= this
 *   DIGEST_ESCALATION_CRITICAL_STALE_DAYS — optional; critical tier when any issue older than this many days
 *   DIGEST_ESCALATION_COOLDOWN_HOURS — optional; min hours between escalation sends (default 24)
 *   DIGEST_ESCALATION_GENERIC_WEBHOOK / DIGEST_ESCALATION_SLACK_WEBHOOK — warning-tier Slack webhook
 *   DIGEST_ESCALATION_PAGERDUTY_ROUTING_KEY — warning-tier PagerDuty
 *   DIGEST_ESCALATION_CRITICAL_GENERIC_WEBHOOK / DIGEST_ESCALATION_CRITICAL_SLACK_WEBHOOK — critical-tier webhook
 *   DIGEST_ESCALATION_CRITICAL_PAGERDUTY_ROUTING_KEY — critical-tier PagerDuty
 *   DIGEST_EXTRAS_CONFIG — optional path to JSON (default: automation/config/automation-fingerprint-digest-extras.json)
 *   DIGEST_AUTO_ASSIGN_SUGGESTED — if "1"/"true", `gh issue edit --add-assignee` using extras.json assigneeRules (skips if already assigned)
 *   DIGEST_ROLLUP_CRITICAL_COMMENT — if "1"/"true", comment on rollup when severity is critical and there are new issues this run
 *   DIGEST_SLACK_USE_BLOCKS — if "1"/"true", post Slack incoming webhook with Block Kit (still includes fallback text)
 *   DIGEST_DISCORD_USE_EMBEDS — if "1"/"true", post Discord webhook with embeds (shorter plain fallback)
 *   DIGEST_PROJECT_OWNER — optional org or user login for `gh project item-add`
 *   DIGEST_PROJECT_NUMBER — optional project number (classic / new CLI) for new issues in delta
 *   DIGEST_EMA_SIBLING_COMMENT — if "1"/"true", comment on hottest issue when registry EMA exceeds threshold
 *   DIGEST_EMA_SIBLING_THRESHOLD — default 3 (uses incident-suppression-registry-latest.json noise.emaOpenIncidents)
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
const escalationStatePath = path.join(reportsDir, 'automation-fingerprint-incidents-escalation-state.json');
const digestLastStatePath = path.join(reportsDir, 'automation-fingerprint-incidents-digest-last.json');
const hotnessStatePath = path.join(reportsDir, 'automation-fingerprint-incidents-hotness-state.json');
const trendPath = path.join(reportsDir, 'automation-fingerprint-incidents-trend.json');
const registryPath = path.join(root, 'automation', 'reports', 'incident-suppression-registry-latest.json');
const defaultExtrasPath = path.join(root, 'automation', 'config', 'automation-fingerprint-digest-extras.json');

const ROLLUP_TITLE = 'Automation fingerprint incidents — rolling digest';
const ROLLUP_LABEL = 'automation-fp-digest-rollup';

const MS_H = 3600000;
const MS_D = 86400000;

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

function readJsonMaybe(p) {
  try {
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function loadExtras() {
  const p = process.env.DIGEST_EXTRAS_CONFIG || defaultExtrasPath;
  const abs = path.isAbsolute(p) ? p : path.join(root, p);
  const j = readJsonMaybe(abs);
  if (!j) return { assigneeRules: [], runbookRules: [] };
  return {
    assigneeRules: Array.isArray(j.assigneeRules) ? j.assigneeRules : [],
    runbookRules: Array.isArray(j.runbookRules) ? j.runbookRules : [],
  };
}

function resolveRunbookForIssue(issue, extras) {
  const title = String(issue.title || '');
  const rules = extras.runbookRules || [];
  for (const r of rules) {
    if (r.default) continue;
    const subs = r.matchTitleContains || [];
    if (subs.some((s) => title.includes(s))) return r.url || '';
  }
  const def = rules.find((r) => r.default);
  return def && def.url ? def.url : '';
}

function resolveAssigneeForIssue(issue, extras) {
  const title = String(issue.title || '');
  for (const r of extras.assigneeRules || []) {
    const subs = r.matchTitleContains || [];
    if (!subs.length) continue;
    if (subs.some((s) => title.includes(s))) {
      const a = String(r.assignee || '').trim();
      if (a) return a;
    }
  }
  return '';
}

function ageBucketMs(updatedAt) {
  const t = new Date(updatedAt).getTime();
  if (!Number.isFinite(t)) return 'unknown';
  const age = Date.now() - t;
  if (age < 24 * MS_H) return 'lt24h';
  if (age < 7 * MS_D) return 'd1_7';
  return 'gt7d';
}

function hotnessScore(issue, counts) {
  const t = new Date(issue.updatedAt).getTime();
  const hours = Number.isFinite(t) ? (Date.now() - t) / MS_H : 0;
  const n = counts[String(issue.number)] || 0;
  return hours * 1.5 + n * 3;
}

function bumpHotnessCounts(openIssues, prevState) {
  const counts = { ...(prevState && prevState.counts ? prevState.counts : {}) };
  for (const i of openIssues) {
    const k = String(i.number);
    counts[k] = (counts[k] || 0) + 1;
  }
  return { counts, updatedAt: new Date().toISOString() };
}

function readHotnessCounts() {
  const s = readJsonMaybe(hotnessStatePath);
  return s && s.counts ? s.counts : {};
}

function writeHotnessState(state) {
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(hotnessStatePath, JSON.stringify(state, null, 2));
}

function sortByHotness(fpIssues, counts) {
  return [...fpIssues].sort((a, b) => hotnessScore(b, counts) - hotnessScore(a, counts));
}

function computeDigestDelta(currentNumbers, lastState) {
  if (!lastState || !lastState.generatedAt) {
    return { newIssues: [], resolved: [], hadPrevious: false };
  }
  const prev = Array.isArray(lastState.issueNumbers) ? lastState.issueNumbers : [];
  const cur = new Set(currentNumbers);
  const pre = new Set(prev);
  const newIssues = [...cur].filter((n) => !pre.has(n));
  const resolved = [...pre].filter((n) => !cur.has(n));
  return { newIssues, resolved, hadPrevious: true };
}

function writeDigestLastState(issueNumbers, generatedAt) {
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    digestLastStatePath,
    JSON.stringify({ issueNumbers, generatedAt }, null, 2)
  );
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
    'all',
    '--label',
    ROLLUP_LABEL,
    '--json',
    'number,title,state',
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

function buildRollupBody(fpIssuesSorted, generatedAt, extras) {
  const lines = [
    '<!-- automation-fp-digest-rollup -->',
    '',
    `_Last updated: ${generatedAt}_`,
    '',
    `Open issues with an \`automation-fp-*\` label: **${fpIssuesSorted.length}**`,
    '',
  ];

  if (fpIssuesSorted.length === 0) {
    lines.push('_No open fingerprint-tagged incidents._');
    lines.push('');
  } else {
    const byBucket = { lt24h: [], d1_7: [], gt7d: [], unknown: [] };
    for (const i of fpIssuesSorted) {
      const b = ageBucketMs(i.updatedAt);
      if (byBucket[b]) byBucket[b].push(i);
      else byBucket.unknown.push(i);
    }

    const section = (title, hint, items) => {
      if (!items.length) return;
      lines.push(`### ${title}`);
      lines.push('');
      lines.push(`_${hint}_`);
      lines.push('');
      for (const i of items) {
        const rb = resolveRunbookForIssue(i, extras);
        const rbLine = rb ? ` · [Runbook](${rb})` : '';
        const staleHint =
          ageBucketMs(i.updatedAt) === 'gt7d'
            ? ' _(stale / needs ownership)_'
            : ageBucketMs(i.updatedAt) === 'd1_7'
              ? ' _(1–7d quiet)_'
              : '';
        lines.push(`- [ ] [#${i.number}](${i.url}) — ${i.title}${staleHint}${rbLine}`);
      }
      lines.push('');
    };

    section('Fresh (< 24h since update)', 'Recently touched; still hot contextually.', byBucket.lt24h);
    section('1–7 days', 'Review soon — triage or close if obsolete.', byBucket.d1_7);
    section('> 7 days (stale)', 'Prioritize or close; likely need owner attention.', byBucket.gt7d);
    if (byBucket.unknown.length) {
      section('Unknown age', 'Check timestamps.', byBucket.unknown);
    }

    lines.push('### Priority (hotness — older + recurring first)');
    lines.push('');
    for (const i of fpIssuesSorted.slice(0, 15)) {
      const rb = resolveRunbookForIssue(i, extras);
      const rbLine = rb ? ` · [Runbook](${rb})` : '';
      lines.push(`1. [#${i.number}](${i.url}) — ${i.title}${rbLine}`);
    }
    if (fpIssuesSorted.length > 15) {
      lines.push(`_… +${fpIssuesSorted.length - 15} more (see SLA sections above)._`);
    }
    lines.push('');
  }

  lines.push('_Maintained by workflow `ai-automation-fingerprint-digest-weekly`._');
  return lines.join('\n');
}

function upsertRollupIssue(fpIssuesSorted, generatedAt, extras) {
  if (!process.env.GH_TOKEN && !process.env.GITHUB_TOKEN) return null;
  ensureRollupLabel();
  const body = buildRollupBody(fpIssuesSorted, generatedAt, extras);
  const autoClose = truthy(process.env.DIGEST_ROLLUP_AUTO_CLOSE);
  const assignee = String(process.env.DIGEST_ROLLUP_ASSIGNEE || '').trim();
  const tmp = path.join(os.tmpdir(), `fp-digest-rollup-${process.pid}-${Date.now()}.md`);
  fs.writeFileSync(tmp, body, 'utf8');
  try {
    const existing = findRollupIssue();
    if (existing) {
      if (existing.state === 'closed' && fpIssuesSorted.length > 0) {
        const reopen = gh(['issue', 'reopen', String(existing.number)]);
        if (reopen.status !== 0) {
          console.warn('Rollup issue reopen failed:', reopen.stderr || reopen.stdout);
        }
      }
      const r = gh(['issue', 'edit', String(existing.number), '--body-file', tmp]);
      if (r.status !== 0) {
        console.warn('Rollup issue edit failed:', r.stderr || r.stdout);
      } else {
        console.log(`Updated rollup issue #${existing.number}.`);
      }
      if (autoClose && fpIssuesSorted.length === 0 && existing.state === 'open') {
        const closed = gh([
          'issue',
          'close',
          String(existing.number),
          '--comment',
          'Auto-closing rollup: no open automation fingerprint incidents remain.',
        ]);
        if (closed.status !== 0) {
          console.warn('Rollup issue close failed:', closed.stderr || closed.stdout);
        } else {
          console.log(`Closed rollup issue #${existing.number} (no open incidents).`);
        }
      }
    } else {
      const args = [
        'issue',
        'create',
        '--title',
        ROLLUP_TITLE,
        '--body-file',
        tmp,
        '--label',
        ROLLUP_LABEL,
      ];
      if (assignee) {
        args.push('--assignee', assignee);
      }
      const r = gh(args);
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
  const rollup = findRollupIssue();
  return rollup ? rollup.number : null;
}

function shouldEscalate(fpIssues) {
  const minCount = parseInt(String(process.env.DIGEST_ESCALATION_MIN_COUNT || '0'), 10);
  const staleDays = parseFloat(String(process.env.DIGEST_ESCALATION_STALE_DAYS || '0'));
  if (!fpIssues.length) return false;
  if (Number.isFinite(minCount) && minCount > 0 && fpIssues.length >= minCount) return true;
  if (Number.isFinite(staleDays) && staleDays > 0) {
    const threshold = Date.now() - staleDays * MS_D;
    for (const i of fpIssues) {
      const t = new Date(i.updatedAt).getTime();
      if (Number.isFinite(t) && t < threshold) return true;
    }
  }
  return false;
}

function escalationSeverity(fpIssues) {
  const critMin = parseInt(String(process.env.DIGEST_ESCALATION_CRITICAL_MIN_COUNT || '0'), 10);
  const critStale = parseFloat(String(process.env.DIGEST_ESCALATION_CRITICAL_STALE_DAYS || '0'));
  if (!fpIssues.length) return null;
  if (Number.isFinite(critMin) && critMin > 0 && fpIssues.length >= critMin) return 'critical';
  if (Number.isFinite(critStale) && critStale > 0) {
    const threshold = Date.now() - critStale * MS_D;
    for (const i of fpIssues) {
      const t = new Date(i.updatedAt).getTime();
      if (Number.isFinite(t) && t < threshold) return 'critical';
    }
  }
  if (shouldEscalate(fpIssues)) return 'warning';
  return null;
}

function escalationCooldownHours() {
  const n = parseFloat(String(process.env.DIGEST_ESCALATION_COOLDOWN_HOURS || '24'));
  if (!Number.isFinite(n) || n <= 0) return 0;
  return n;
}

function escalationCooldownAllows(nowIso) {
  const coolH = escalationCooldownHours();
  if (coolH <= 0) return true;
  const state = readJsonMaybe(escalationStatePath);
  const last = state && state.lastEscalatedAt ? Date.parse(state.lastEscalatedAt) : 0;
  if (!last) return true;
  const ageH = (Date.parse(nowIso) - last) / MS_H;
  if (ageH < coolH) {
    console.log(`Escalation cooldown active (${ageH.toFixed(2)}h < ${coolH}h); skipping.`);
    return false;
  }
  return true;
}

function writeEscalationState(nowIso, fpIssues, severity) {
  const state = {
    lastEscalatedAt: nowIso,
    lastSeverity: severity || null,
    openWithFingerprintLabel: fpIssues.length,
  };
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(escalationStatePath, JSON.stringify(state, null, 2));
}

async function notifyEscalation(fpIssues, severity) {
  const sorted = sortByHotness(fpIssues, readHotnessCounts());
  const lines = [
    `Automation fingerprint ESCALATION [${severity}]: ${fpIssues.length} open incident(s)`,
    ...sorted.slice(0, 15).map((i) => `#${i.number} ${i.title} ${i.url}`),
    fpIssues.length > 15 ? `… +${fpIssues.length - 15} more` : '',
  ].filter(Boolean);
  const plain = lines.join('\n').slice(0, 4000);

  const slackUrl =
    severity === 'critical'
      ? process.env.DIGEST_ESCALATION_CRITICAL_SLACK_WEBHOOK ||
        process.env.DIGEST_ESCALATION_CRITICAL_GENERIC_WEBHOOK ||
        process.env.DIGEST_ESCALATION_SLACK_WEBHOOK ||
        process.env.DIGEST_ESCALATION_GENERIC_WEBHOOK
      : process.env.DIGEST_ESCALATION_SLACK_WEBHOOK || process.env.DIGEST_ESCALATION_GENERIC_WEBHOOK;

  const pdKey =
    severity === 'critical'
      ? process.env.DIGEST_ESCALATION_CRITICAL_PAGERDUTY_ROUTING_KEY || process.env.DIGEST_ESCALATION_PAGERDUTY_ROUTING_KEY
      : process.env.DIGEST_ESCALATION_PAGERDUTY_ROUTING_KEY;

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
        severity: severity === 'critical' ? 'critical' : 'warning',
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

function formatDeltaPlain(delta, issueByNumber) {
  const parts = [];
  if (delta.newIssues.length) {
    parts.push(
      `New: ${delta.newIssues
        .map((n) => {
          const i = issueByNumber.get(n);
          return i ? `#${n} ${i.title}` : `#${n}`;
        })
        .join('; ')}`
    );
  }
  if (delta.resolved.length) {
    parts.push(`Resolved (no longer open): ${delta.resolved.map((n) => `#${n}`).join(', ')}`);
  }
  return parts.join('\n');
}

function buildSiblingLookup(fpIssues) {
  const byLabel = new Map();
  for (const issue of fpIssues) {
    for (const label of issue.automationFpLabels || []) {
      if (!byLabel.has(label)) byLabel.set(label, []);
      byLabel.get(label).push(issue.number);
    }
  }
  const out = new Map();
  for (const issue of fpIssues) {
    const s = new Set();
    for (const label of issue.automationFpLabels || []) {
      for (const n of byLabel.get(label) || []) {
        if (n !== issue.number) s.add(n);
      }
    }
    out.set(
      issue.number,
      [...s]
        .sort((a, b) => a - b)
        .slice(0, 4)
        .map((n) => `#${n}`),
    );
  }
  return out;
}

function bucketCounts(fpIssues) {
  const c = { lt24h: 0, d1_7: 0, gt7d: 0, unknown: 0 };
  for (const i of fpIssues) {
    const b = ageBucketMs(i.updatedAt);
    if (Object.prototype.hasOwnProperty.call(c, b)) c[b]++;
    else c.unknown++;
  }
  return c;
}

function appendTrendSnapshot(row) {
  const prev = readJsonMaybe(trendPath) || { history: [] };
  prev.history = Array.isArray(prev.history) ? prev.history : [];
  prev.history.push(row);
  if (prev.history.length > 104) prev.history = prev.history.slice(-104);
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(trendPath, JSON.stringify(prev, null, 2));
}

function readRegistryEma() {
  const j = readJsonMaybe(registryPath);
  const ema = j && j.noise && j.noise.emaOpenIncidents != null ? Number(j.noise.emaOpenIncidents) : null;
  return { ema: Number.isFinite(ema) ? ema : null, correlationId: j && j.correlation && j.correlation.correlationId };
}

function applySuggestedAssignees(fpIssues, extras) {
  if (!truthy(process.env.DIGEST_AUTO_ASSIGN_SUGGESTED)) return;
  if (!process.env.GH_TOKEN && !process.env.GITHUB_TOKEN) return;
  for (const issue of fpIssues) {
    const a = resolveAssigneeForIssue(issue, extras);
    if (!a) continue;
    const view = gh(['issue', 'view', String(issue.number), '--json', 'assignees']);
    if (view.status !== 0) continue;
    try {
      const j = JSON.parse(view.stdout || '{}');
      const existing = (j.assignees || []).map((x) => x.login);
      if (existing.includes(a)) continue;
    } catch {
      /* ignore */
    }
    const r = gh(['issue', 'edit', String(issue.number), '--add-assignee', a]);
    if (r.status !== 0) {
      console.warn(`assignee ${a} on #${issue.number} (non-fatal):`, r.stderr || r.stdout);
    } else {
      console.log(`Added assignee @${a} to #${issue.number}.`);
    }
  }
}

function commentRollupCriticalDelta(rollupNumber, sev, delta, issueByNumber) {
  if (!rollupNumber || !truthy(process.env.DIGEST_ROLLUP_CRITICAL_COMMENT)) return;
  if (sev !== 'critical' || !delta.newIssues.length) return;
  const marker = '<!-- fp-digest-critical-delta -->';
  const lines = [
    marker,
    '',
    '**Critical-tier digest delta** — new incidents this run:',
    '',
    ...delta.newIssues.map((n) => {
      const i = issueByNumber.get(n);
      return `- [ ] [#${n}](${i ? i.url : '#'}) — ${i ? i.title : '?'}`;
    }),
  ];
  const tmp = path.join(os.tmpdir(), `fp-critical-delta-${process.pid}.md`);
  fs.writeFileSync(tmp, lines.join('\n'), 'utf8');
  try {
    const r = gh(['issue', 'comment', String(rollupNumber), '--body-file', tmp]);
    if (r.status !== 0) {
      console.warn('Rollup critical-delta comment failed:', r.stderr || r.stdout);
    } else {
      console.log(`Posted critical-delta comment on rollup #${rollupNumber}.`);
    }
  } finally {
    try {
      fs.unlinkSync(tmp);
    } catch {
      /* ignore */
    }
  }
}

function addDeltaIssuesToProject(delta, issueByNumber) {
  const owner = String(process.env.DIGEST_PROJECT_OWNER || '').trim();
  const pnum = String(process.env.DIGEST_PROJECT_NUMBER || '').trim();
  if (!owner || !pnum || !delta.newIssues.length) return;
  for (const n of delta.newIssues) {
    const i = issueByNumber.get(n);
    if (!i || !i.url) continue;
    const r = gh(['project', 'item-add', pnum, '--owner', owner, '--url', i.url]);
    if (r.status !== 0) {
      console.warn(`project item-add #${n} (non-fatal):`, r.stderr || r.stdout);
    } else {
      console.log(`Added #${n} to project ${owner}/${pnum}.`);
    }
  }
}

function maybeEmaSiblingComment(fpSorted, registryEma) {
  if (!truthy(process.env.DIGEST_EMA_SIBLING_COMMENT)) return;
  const thr = parseFloat(String(process.env.DIGEST_EMA_SIBLING_THRESHOLD || '3'));
  if (!Number.isFinite(thr) || registryEma == null || registryEma < thr) return;
  const top = fpSorted[0];
  if (!top) return;
  const others = fpSorted.slice(1, 6);
  const lines = [
    '<!-- fp-digest-ema-sibling -->',
    '',
    `**Suppression registry EMA (open incidents):** ${registryEma.toFixed(2)} (threshold ≥ ${thr}).`,
    '',
    'Other open fingerprint issues in this digest:',
    ...others.map((i) => `- [#${i.number}](${i.url}) — ${i.title}`),
  ];
  if (!others.length) lines.push('_No other issues in digest._');
  const tmp = path.join(os.tmpdir(), `fp-ema-sibling-${process.pid}.md`);
  fs.writeFileSync(tmp, lines.join('\n'), 'utf8');
  try {
    const r = gh(['issue', 'comment', String(top.number), '--body-file', tmp]);
    if (r.status !== 0) {
      console.warn('EMA sibling comment failed:', r.stderr || r.stdout);
    } else {
      console.log(`Posted EMA sibling context on #${top.number}.`);
    }
  } finally {
    try {
      fs.unlinkSync(tmp);
    } catch {
      /* ignore */
    }
  }
}

function buildSlackDigestPayload(fpIssues, delta, issueByNumber, siblings) {
  const buckets = bucketCounts(fpIssues);
  const deltaPlain =
    delta && (delta.newIssues.length || delta.resolved.length) ? formatDeltaPlain(delta, issueByNumber) : '';
  const fallback = [
    deltaPlain ? `${deltaPlain}\n\n` : '',
    `Automation fingerprint incidents: ${fpIssues.length} open`,
    ...fpIssues.slice(0, 12).map((i) => {
      const sib = siblings.get(i.number) || [];
      return `#${i.number} ${i.title} ${i.url}${sib.length ? ` | siblings: ${sib.join(',')}` : ''}`;
    }),
  ]
    .filter(Boolean)
    .join('\n')
    .slice(0, 3900);

  const blocks = [
    {
      type: 'header',
      text: { type: 'plain_text', text: 'Automation fingerprint digest', emoji: true },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Open:*\n${fpIssues.length}` },
        { type: 'mrkdwn', text: `*SLA buckets:*\n<24h: ${buckets.lt24h} · 1–7d: ${buckets.d1_7} · >7d: ${buckets.gt7d}` },
      ],
    },
  ];
  if (deltaPlain) {
    blocks.push({ type: 'section', text: { type: 'mrkdwn', text: `*Delta*\n${deltaPlain.slice(0, 2800)}` } });
  }
  const topLines = fpIssues.slice(0, 8).map((i) => {
    const sib = siblings.get(i.number) || [];
    return `• <${i.url}|#${i.number}> ${i.title}${sib.length ? ` _(${sib.join(', ')})_` : ''}`;
  });
  blocks.push({
    type: 'section',
    text: { type: 'mrkdwn', text: `*Top (hotness)*\n${topLines.join('\n') || '—'}` },
  });
  return { text: fallback, blocks };
}

function buildDiscordEmbedPayload(fpIssues, delta, issueByNumber, siblings) {
  const buckets = bucketCounts(fpIssues);
  const deltaPlain =
    delta && (delta.newIssues.length || delta.resolved.length) ? formatDeltaPlain(delta, issueByNumber) : '';
  const desc = fpIssues
    .slice(0, 10)
    .map((i) => {
      const sib = siblings.get(i.number) || [];
      return `**#${i.number}** ${i.title}\n${i.url}${sib.length ? `\n_siblings: ${sib.join(', ')}_` : ''}`;
    })
    .join('\n\n')
    .slice(0, 3800);
  return {
    content: '\u200b',
    embeds: [
      {
        title: 'Automation fingerprint digest',
        color: 0x0366d6,
        fields: [
          { name: 'Open', value: String(fpIssues.length), inline: true },
          {
            name: 'SLA buckets',
            value: `<24h: ${buckets.lt24h} · 1–7d: ${buckets.d1_7} · >7d: ${buckets.gt7d}`,
            inline: true,
          },
          ...(deltaPlain
            ? [{ name: 'Delta', value: deltaPlain.slice(0, 1000), inline: false }]
            : []),
          { name: 'Issues', value: desc || '—', inline: false },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };
}

async function notifyChannels(report, fpIssues, delta, issueByNumber) {
  const n = fpIssues.length;
  if (n === 0) return;
  const siblings = buildSiblingLookup(fpIssues);

  const deltaPlain =
    delta && (delta.newIssues.length || delta.resolved.length)
      ? formatDeltaPlain(delta, issueByNumber)
      : '';

  const lines = [
    `<b>Automation fingerprint incidents</b>`,
    deltaPlain ? `<pre>${escapeHtml(deltaPlain)}</pre>` : '',
    `Open: <b>${n}</b>`,
    ...fpIssues.slice(0, 8).map((i) => {
      const sib = siblings.get(i.number) || [];
      return `${`#${i.number}`} — ${escapeHtml(i.title)}${sib.length ? ` (siblings: ${sib.join(', ')})` : ''}`;
    }),
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
    try {
      if (truthy(process.env.DIGEST_SLACK_USE_BLOCKS)) {
        const payload = buildSlackDigestPayload(fpIssues, delta, issueByNumber, siblings);
        const code = await postJsonUrl(slackUrl, { text: payload.text, blocks: payload.blocks });
        console.log('Slack blocks notify:', code);
      } else {
        const plain = `${deltaPlain ? `${deltaPlain}\n\n` : ''}Automation fingerprint incidents: ${n} open\n${fpIssues
          .slice(0, 12)
          .map((i) => {
            const sib = siblings.get(i.number) || [];
            return `#${i.number} ${i.title} ${i.url}${sib.length ? ` | siblings: ${sib.join(',')}` : ''}`;
          })
          .join('\n')}`;
        await notifySlack(slackUrl, plain);
      }
    } catch (e) {
      console.warn('Slack notify failed:', e.message);
    }
  }

  const discordUrl = process.env.AUTOMATION_DIGEST_DISCORD_WEBHOOK;
  if (discordUrl) {
    try {
      if (truthy(process.env.DIGEST_DISCORD_USE_EMBEDS)) {
        const payload = buildDiscordEmbedPayload(fpIssues, delta, issueByNumber, siblings);
        const code = await postJsonUrl(discordUrl, payload);
        console.log('Discord embed notify:', code);
      } else {
        const plain = `${deltaPlain ? `${deltaPlain}\n\n` : ''}Automation fingerprint incidents: ${n} open\n${fpIssues
          .slice(0, 12)
          .map((i) => {
            const sib = siblings.get(i.number) || [];
            return `#${i.number} ${i.title} ${i.url}${sib.length ? ` | siblings: ${sib.join(',')}` : ''}`;
          })
          .join('\n')}`;
        await notifyDiscord(discordUrl, plain);
      }
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
  const extras = loadExtras();

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

  const lastDigestState = readJsonMaybe(digestLastStatePath);
  const currentNumbers = fpIssues.map((i) => i.number);
  const delta = computeDigestDelta(currentNumbers, lastDigestState);
  const issueByNumber = new Map(fpIssues.map((i) => [i.number, i]));

  const prevHotness = readJsonMaybe(hotnessStatePath);
  const counts = bumpHotnessCounts(fpIssues, prevHotness).counts;
  const fpSorted = sortByHotness(fpIssues, counts);
  const sev = escalationSeverity(fpIssues);
  const { ema: registryEma } = readRegistryEma();

  const report = {
    generatedAt: new Date().toISOString(),
    openWithFingerprintLabel: fpIssues.length,
    escalationSeverity: sev,
    registry: {
      emaOpenIncidents: registryEma,
    },
    delta: {
      newIssues: delta.newIssues,
      resolved: delta.resolved,
      hadPrevious: delta.hadPrevious,
    },
    issues: fpSorted.map((i) => ({
      number: i.number,
      title: i.title,
      url: i.url,
      updatedAt: i.updatedAt,
      automationFpLabels: i.automationFpLabels,
      ageBucket: ageBucketMs(i.updatedAt),
      hotnessScore: hotnessScore(i, counts),
      suggestedAssignee: resolveAssigneeForIssue(i, extras) || null,
      runbookUrl: resolveRunbookForIssue(i, extras) || null,
    })),
  };

  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));

  appendTrendSnapshot({
    generatedAt: report.generatedAt,
    open: fpIssues.length,
    newCount: delta.newIssues.length,
    resolvedCount: delta.resolved.length,
    severity: sev || 'none',
    registryEma: registryEma != null ? registryEma : null,
  });

  const lines = [
    '# Automation fingerprint incidents',
    '',
    `_Generated: ${report.generatedAt}_`,
    '',
    `Open issues with an \`automation-fp-*\` label: **${fpIssues.length}**`,
    '',
  ];

  if (delta.newIssues.length || delta.resolved.length) {
    lines.push('## Delta since last run');
    lines.push('');
    for (const n of delta.newIssues) {
      const i = issueByNumber.get(n);
      lines.push(`- **New:** [#${n}](${i ? i.url : '#'}) — ${i ? i.title : '?'}`);
    }
    for (const n of delta.resolved) {
      lines.push(`- **Resolved / closed:** #${n}`);
    }
    lines.push('');
  }

  for (const i of report.issues) {
    lines.push(`- [#${i.number}](${i.url}) — ${i.title}`);
    lines.push(`  - Labels: ${i.automationFpLabels.join(', ')}`);
    lines.push(`  - Updated: ${i.updatedAt} · bucket: \`${i.ageBucket}\` · hotness: ${i.hotnessScore.toFixed(1)}`);
    if (i.runbookUrl) lines.push(`  - Runbook: ${i.runbookUrl}`);
    if (i.suggestedAssignee) lines.push(`  - Suggested assignee (config): @${i.suggestedAssignee}`);
    lines.push('');
  }

  if (fpIssues.length === 0) {
    lines.push('_No open fingerprint-tagged incidents._');
    lines.push('');
  }

  if (registryEma != null) {
    lines.push(`_Suppression registry EMA (open): **${registryEma.toFixed(2)}**_`);
    lines.push('');
  }

  fs.writeFileSync(mdPath, lines.join('\n'));
  console.log(`Wrote ${path.relative(root, jsonPath)} (${fpIssues.length} issue(s)).`);

  appendGithubOutput('has_fp_incidents', fpIssues.length > 0 ? 'true' : 'false');

  writeHotnessState({ counts, updatedAt: report.generatedAt });

  applySuggestedAssignees(fpIssues, extras);
  addDeltaIssuesToProject(delta, issueByNumber);

  const deltaSkip =
    truthy(process.env.DIGEST_DELTA_NOTIFY_ONLY) &&
    delta.hadPrevious &&
    delta.newIssues.length === 0 &&
    delta.resolved.length === 0;

  if (!deltaSkip) {
    try {
      await notifyChannels(report, fpSorted, delta, issueByNumber);
    } catch (e) {
      console.warn('notifyChannels:', e.message);
    }
  } else {
    console.log('DIGEST_DELTA_NOTIFY_ONLY: no new/resolved delta; skipping Slack/Discord/Telegram.');
  }

  let rollupNumber = null;
  if (truthy(process.env.DIGEST_ROLLUP_ISSUE)) {
    try {
      rollupNumber = upsertRollupIssue(fpSorted, report.generatedAt, extras);
    } catch (e) {
      console.warn('upsertRollupIssue:', e.message);
    }
  }

  commentRollupCriticalDelta(rollupNumber, sev, delta, issueByNumber);
  maybeEmaSiblingComment(fpSorted, registryEma);

  const escalationConfigured =
    process.env.DIGEST_ESCALATION_SLACK_WEBHOOK ||
    process.env.DIGEST_ESCALATION_GENERIC_WEBHOOK ||
    process.env.DIGEST_ESCALATION_PAGERDUTY_ROUTING_KEY ||
    process.env.DIGEST_ESCALATION_CRITICAL_SLACK_WEBHOOK ||
    process.env.DIGEST_ESCALATION_CRITICAL_GENERIC_WEBHOOK ||
    process.env.DIGEST_ESCALATION_CRITICAL_PAGERDUTY_ROUTING_KEY;

  if (fpIssues.length > 0 && sev && escalationConfigured && escalationCooldownAllows(report.generatedAt)) {
    try {
      await notifyEscalation(fpIssues, sev);
      writeEscalationState(report.generatedAt, fpIssues, sev);
    } catch (e) {
      console.warn('notifyEscalation:', e.message);
    }
  }

  writeDigestLastState(currentNumbers, report.generatedAt);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
