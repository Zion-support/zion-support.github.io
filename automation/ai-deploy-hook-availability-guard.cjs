#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const intervalMinutes = parseInt(process.env.DEPLOY_HOOK_GUARD_INTERVAL_MINUTES || '60', 10);
const requiredHooks = ['NETLIFY_BUILD_HOOK'];

function log(message) {
  console.log(`[DeployHookGuard] ${new Date().toISOString()} | ${message}`);
}

function check() {
  const missing = requiredHooks.filter((name) => !process.env[name] || String(process.env[name]).trim() === '');
  const report = {
    timestamp: new Date().toISOString(),
    requiredHooks,
    missing,
    healthy: missing.length === 0,
    note:
      missing.length === 0
        ? 'All deploy hooks available in environment.'
        : 'Some deploy hooks missing; local deploys will skip remote trigger.',
  };

  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(path.join(REPORTS_DIR, 'deploy-hook-availability-guard-latest.json'), JSON.stringify(report, null, 2));

  if (!report.healthy) {
    log(`Missing hooks: ${missing.join(', ')}`);
  } else {
    log('All deploy hooks available.');
  }
}

function start() {
  log(`Starting deploy-hook availability guard (interval=${intervalMinutes}m)`);
  check();
  setInterval(check, intervalMinutes * 60 * 1000);
}

start();
