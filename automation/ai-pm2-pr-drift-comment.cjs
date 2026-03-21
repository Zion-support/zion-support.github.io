#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Post a short PM2 drift summary as a PR comment (GitHub Actions).
 *
 * Env:
 *   PR_NUMBER — required
 *   GITHUB_REPOSITORY — owner/repo (default from env)
 *   GITHUB_TOKEN or GH_TOKEN
 *
 * Reads: automation/reports/pm2-config-drift-guard-latest.json
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'automation', 'reports', 'pm2-config-drift-guard-latest.json');

function readReport() {
  try {
    if (!fs.existsSync(REPORT)) return null;
    return JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  } catch {
    return null;
  }
}

function main() {
  const pr = process.env.PR_NUMBER || process.env.GITHUB_PR_NUMBER;
  if (!pr) {
    console.error('ai-pm2-pr-drift-comment: PR_NUMBER missing');
    process.exit(2);
  }

  const r = readReport();
  const lines = ['### PM2 config drift guard (CI)', ''];
  if (!r) {
    lines.push('_No drift report found — drift guard may not have run._');
  } else {
    const n = Number(r.driftCount || 0);
    lines.push(`**Drift count:** ${n}`);
    if (n > 0) {
      lines.push('');
      lines.push('Align `package.json` PM2 scripts with `ecosystem.config.cjs` app names before merge.');
    } else {
      lines.push('');
      lines.push('No npm/ecosystem PM2 drift detected in this run.');
    }
  }

  const body = lines.join('\n');
  const tmp = path.join(ROOT, '.pm2-drift-pr-comment.md');
  fs.writeFileSync(tmp, body);

  const res = spawnSync('gh', ['pr', 'comment', String(pr), '--body-file', tmp], {
    cwd: ROOT,
    encoding: 'utf8',
    env: process.env,
  });
  try {
    fs.unlinkSync(tmp);
  } catch {
    /* ignore */
  }

  if (res.status !== 0) {
    console.error(res.stderr || res.stdout || 'gh pr comment failed');
    process.exit(1);
  }
  console.log(`Commented on PR #${pr}`);
}

main();
