#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Optional Telegram ping when deploy contention is high but deploy is not blocked.
 * Reads automation/reports/pm2-deploy-contention-latest.json (from contention guard).
 *
 * Env:
 *   DEPLOY_CONTENTION_NOTIFY_TELEGRAM=1   — also set from deploy.cjs when same
 *   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID  — same as ai-telegram-notification-agent
 *   PM2_CONTENTION_NOTIFY_COOLDOWN_HOURS  — min hours between sends (default 6)
 *   DEPLOY_CONTENTION_NOTIFY_ON_MEDIUM=1  — also notify when riskLevel is medium
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const REPORT_PATH = path.join(ROOT, 'automation', 'reports', 'pm2-deploy-contention-latest.json');
const STATE_PATH = path.join(ROOT, 'automation', 'reports', 'pm2-deploy-contention-notify-state.json');
const COOLDOWN_H = Number(process.env.PM2_CONTENTION_NOTIFY_COOLDOWN_HOURS || '6');

function readJson(p) {
  try {
    if (!fs.existsSync(p)) return null;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function shouldNotify(report) {
  if (!report || typeof report.riskScore !== 'number') return false;
  if (report.blockOnRisk === true) {
    console.log('[contention-notify] blockOnRisk=true (deploy would fail); skip duplicate Telegram.');
    return false;
  }
  const mediumOk =
    process.env.DEPLOY_CONTENTION_NOTIFY_ON_MEDIUM === '1' ||
    process.env.DEPLOY_CONTENTION_NOTIFY_ON_MEDIUM === 'true';
  if (report.riskLevel === 'high') return true;
  if (mediumOk && report.riskLevel === 'medium') return true;
  return false;
}

function cooldownAllows() {
  const state = readJson(STATE_PATH);
  const last = state && state.lastSentAt ? Date.parse(state.lastSentAt) : 0;
  if (!last) return true;
  const hours = (Date.now() - last) / 3600000;
  if (hours < COOLDOWN_H) {
    console.log(`[contention-notify] Cooldown active (${hours.toFixed(2)}h < ${COOLDOWN_H}h).`);
    return false;
  }
  return true;
}

function writeState() {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(
    STATE_PATH,
    JSON.stringify({ lastSentAt: new Date().toISOString() }, null, 2),
  );
}

function main() {
  const report = readJson(REPORT_PATH);
  if (!report) {
    console.log('[contention-notify] No contention report yet.');
    process.exit(0);
  }
  if (!shouldNotify(report)) {
    process.exit(0);
  }
  if (!cooldownAllows()) {
    process.exit(0);
  }

  const msg = [
    '⚠️ <b>Deploy contention</b>',
    `riskScore=${report.riskScore} level=${report.riskLevel}`,
    `threshold=${report.threshold ?? '—'}`,
    report.recommendation ? `Tip: ${report.recommendation}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const r = spawnSync(
    process.execPath,
    [path.join(ROOT, 'automation', 'ai-telegram-notification-agent.cjs'), 'send', msg],
    { cwd: ROOT, stdio: 'inherit', env: process.env },
  );
  if (r.status !== 0) {
    console.error('[contention-notify] Telegram send exited', r.status);
    process.exitCode = 1;
    return;
  }
  writeState();
}

main();
