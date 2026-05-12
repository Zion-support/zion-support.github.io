#!/usr/bin/env node
/**
 * Error Aggregator — groups errors by fingerprint, detects spikes, alerts
 * Runs hourly; creates GitHub issues for new error types or frequency surges
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'automation', 'reports', 'errors');
const STATE_DIR = path.join(ROOT, '.hermes', 'memory', 'error-tracker');
const LOG_FILE = path.join(STATE_DIR, 'error-aggregator.log');
const HISTORY_FILE = path.join(STATE_DIR, 'error-history.json');
const ISSUES_FILE = path.join(STATE_DIR, 'error-issues.json'); // track created issues

function ts() { return new Date().toISOString(); }

function log(msg) {
  const line = `[${ts()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureDirs() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(STATE_DIR)) fs.mkdirSync(STATE_DIR, { recursive: true });
}

function loadHistory() {
  if (!fs.existsSync(HISTORY_FILE)) return { fingerprints: {}, lastRun: null };
  return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
}

function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

function loadIssues() {
  if (!fs.existsSync(ISSUES_FILE)) return {};
  return JSON.parse(fs.readFileSync(ISSUES_FILE, 'utf8'));
}

function saveIssues(issues) {
  fs.writeFileSync(ISSUES_FILE, JSON.stringify(issues, null, 2));
}

function readTodayErrors() {
  const today = new Date().toISOString().slice(0, 10);
  const filePath = path.join(DATA_DIR, `errors-${today}.jsonl`);
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  return content
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function groupByFingerprint(errors) {
  const groups = new Map();
  for (const e of errors) {
    const fp = e.fingerprint || `${e.message}::${e.stack || ''}`;
    if (!groups.has(fp)) groups.set(fp, []);
    groups.get(fp).push(e);
  }
  return groups;
}

function calculateSpike(currentCount, previousCount) {
  if (previousCount === 0) return currentCount > 5 ? 'new' : null;
  const increase = currentCount - previousCount;
  const percent = (increase / previousCount) * 100;
  return percent > 50 ? 'spike' : null;
}

async function main() {
  ensureDirs();
  log('🚨 Starting Error Aggregator...');

  // 1. Load today's errors
  const errors = readTodayErrors();
  log(`📥 Loaded ${errors.length} errors from today`);

  if (errors.length === 0) {
    log('✅ No errors to process');
    return;
  }

  // 2. Group by fingerprint
  const groups = groupByFingerprint(errors);
  log(`📊 Found ${groups.size} unique error fingerprints`);

  // 3. Load history and issues
  const history = loadHistory();
  const issues = loadIssues();

  const now = ts();
  const newErrors = []; // fingerprints that are new or spiking
  const alerts = [];

  for (const [fp, occurrences] of groups.entries()) {
    const count = occurrences.length;
    const lastError = occurrences[0];
    const prev = history.fingerprints[fp] || { count: 0, lastSeen: null, issueCreated: false };

    const spikeType = calculateSpike(count, prev.count);
    const isNew = !prev.count;

    if (isNew || spikeType) {
      newErrors.push({
        fingerprint: fp,
        message: lastError.message,
        stack: lastError.stack,
        type: lastError.type,
        currentCount: count,
        previousCount: prev.count,
        spike: spikeType,
        firstSeen: isNew ? lastError.timestamp : prev.lastSeen,
        lastSeen: now,
      });

      // Decide if we need to create an issue
      const shouldIssue = isNew || (spikeType === 'spike' && count >= 10);
      if (shouldIssue && !prev.issueCreated) {
        await createGitHubIssue(fp, lastError, count, spikeType);
        prev.issueCreated = true;
        if (!issues[fp]) issues[fp] = [];
        issues[fp].push({ createdAt: now, count });
      }
    }

    // Update history
    history.fingerprints[fp] = {
      count,
      lastSeen: now,
      issueCreated: prev.issueCreated || false,
    };

    // Alert via Telegram for new critical errors (unhandled)
    if ((isNew && (lastError.type === 'unhandled' || lastError.type === 'promise')) || (spikeType && count > 20)) {
      alerts.push({
        fp,
        message: lastError.message.substring(0, 100),
        count,
        type: lastError.type,
      });
    }
  }

  saveHistory(history);
  saveIssues(issues);

  log(`✅ Processed ${newErrors.length} new/spiking error fingerprints`);

  // 4. Send Telegram summary if there are alerts
  if (alerts.length > 0) {
    await sendTelegram(alerts);
  }

  log('✅ Error aggregator complete');
}

async function createGitHubIssue(fp, error, count, spikeType) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    log('⚠️ GITHUB_TOKEN missing; skipping issue');
    return;
  }

  const title = `🚨 Runtime Error — ${error.type || 'unknown'} — ${new Date().toLocaleDateString()}`;
  const body = [
    '## Runtime Error Report',
    '',
    `**Type:** ${error.type || 'unhandled'}`,
    `**Message:** ${error.message}`,
    `**Fingerprint:** \`${fp.substring(0, 64)}\``,
    `**Occurrences today:** ${count}`,
    spikeType === 'spike' ? `**Spike:** >50% increase vs yesterday` : '',
    '',
    '### Stack Trace',
    '```',
    error.stack || 'No stack trace available',
    '```',
    '',
    '### Action',
    'Review this error in production. Check user reports and console logs.',
    '',
    '---',
    '*Generated by automation/error-aggregator.cjs*',
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const escapedBody = body.replace(/"/g, '\\"').replace(/\$/g, '\\$');
    execSync(`gh issue create --title "${title}" --body "${escapedBody}" --label "automation,bug,error-tracker"`, {
      cwd: ROOT,
      stdio: 'pipe',
    });
    log(`✅ GitHub issue created for error fingerprint: ${fp.substring(0, 32)}...`);
  } catch (e) {
    log('⚠️ gh CLI failed; issue not created: ' + e.message);
  }
}

async function sendTelegram(alerts) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return;

  const chatId = process.env.TELEGRAM_CHAT_ID || '8435383377';
  const lines = [
    '🐛 *Runtime Error Alert* — ' + new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    `${alerts.length} new/spiking error(s) detected:`,
    '',
  ];

  alerts.slice(0, 5).forEach((a) => {
    lines.push(`• [${a.type}] ${a.message}`);
    lines.push(`  Count: ${a.count} (${a.spike === 'new' ? 'new' : a.spike})`);
    lines.push('');
  });

  if (alerts.length > 5) {
    lines.push(`... and ${alerts.length - 5} more. Check automation/reports/errors/`);
  }

  const https = require('https');
  const payload = new URLSearchParams({ chat_id: chatId, text: lines.join('\n'), parse_mode: 'Markdown' });

  await new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${botToken}/sendMessage`,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': payload.byteLength },
    }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => (res.statusCode === 200 ? resolve() : reject(new Error(`Telegram ${res.statusCode}: ${body}`))));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
  log('✅ Telegram alert sent');
}

main().catch((err) => {
  console.error('❌ Error aggregator failed:', err);
  process.exit(1);
});
