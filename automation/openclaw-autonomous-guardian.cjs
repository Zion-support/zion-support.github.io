#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const REPORT_PATH = path.join(ROOT, 'automation', 'reports', 'openclaw-autonomous-app-improver-latest.json');
const PROCESS_NAME = process.env.OPENCLAW_PROMPT_PROCESS_NAME || 'openclaw-autonomous-prompts';
const MAX_STALE_SECONDS = Math.max(60, Number.parseInt(process.env.OPENCLAW_GUARDIAN_STALE_SECONDS || '300', 10));
const LOOP_SECONDS = Math.max(30, Number.parseInt(process.env.OPENCLAW_GUARDIAN_INTERVAL_SECONDS || '120', 10));

function run(command) {
  return execSync(command, { cwd: ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
}

function log(message, data) {
  const line = `[${new Date().toISOString()}] ${message}${data ? ` ${JSON.stringify(data)}` : ''}`;
  console.log(line);
}

function pm2ProcessRunning() {
  try {
    const json = run('pm2 jlist');
    const list = JSON.parse(json);
    const proc = list.find((p) => p && p.name === PROCESS_NAME);
    return Boolean(proc && proc.pm2_env && proc.pm2_env.status === 'online');
  } catch {
    return false;
  }
}

function ensureProcess() {
  if (pm2ProcessRunning()) {
    return;
  }
  log('OpenClaw prompt process missing, starting', { process: PROCESS_NAME });
  run(`pm2 start npm --name ${PROCESS_NAME} -- run openclaw:autonomous --update-env`);
}

function readReport() {
  if (!fs.existsSync(REPORT_PATH)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
  } catch {
    return null;
  }
}

function isStale(report) {
  if (!report || !report.updatedAt) {
    return true;
  }
  const updated = new Date(report.updatedAt).getTime();
  if (!Number.isFinite(updated)) {
    return true;
  }
  return Date.now() - updated > MAX_STALE_SECONDS * 1000;
}

function restartProcess(reason) {
  log('Restarting OpenClaw prompt process', { process: PROCESS_NAME, reason });
  run(`pm2 restart ${PROCESS_NAME} --update-env --time`);
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function tick() {
  ensureProcess();
  const report = readReport();
  if (isStale(report)) {
    restartProcess('stale_or_missing_report');
    return;
  }
  if (report.failures > report.successes + 2) {
    restartProcess('failure_burst_detected');
    return;
  }
  log('Guardian healthy', {
    process: PROCESS_NAME,
    lastUpdatedAt: report.updatedAt,
    successes: report.successes,
    failures: report.failures,
  });
}

async function main() {
  if (process.argv[2] === 'once') {
    await tick();
    return;
  }

  while (true) {
    await tick();
    await sleep(LOOP_SECONDS * 1000);
  }
}

main().catch((err) => {
  log('Guardian fatal error', { error: err.message });
  process.exit(1);
});
