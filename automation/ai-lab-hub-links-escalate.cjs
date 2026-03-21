#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Escalate/close issue for AI Lab hub-links smoke failures.
 * Reads compare report first, then falls back to production report.
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { recordEscalation } = require('./lib/incident-cooldown-mesh.cjs');

const ROOT = process.cwd();
const COMPARE = path.join(ROOT, 'automation', 'reports', 'ai-lab-hub-links-smoke-compare-latest.json');
const PROD = path.join(ROOT, 'automation', 'reports', 'ai-lab-hub-links-smoke-prod.json');
const DEDUPE = path.join(ROOT, 'scripts', 'automation', 'gh-issue-dedupe-or-create.cjs');
const CLOSE = path.join(ROOT, 'scripts', 'automation', 'gh-issue-close-on-recovery.cjs');
const BODY = path.join(ROOT, 'automation', 'reports', '.runtime', 'ai-lab-hub-links-smoke-body.md');
const FP = 'ai-lab-hub-links-smoke-failing|v1';

function readJsonSafe(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

function runNode(script, env) {
  return spawnSync(process.execPath, [script], {
    cwd: ROOT,
    encoding: 'utf8',
    env: { ...process.env, ...env },
  });
}

function closeRecovered() {
  const r = runNode(CLOSE, {
    ISSUE_FINGERPRINT: FP,
    CLOSE_COMMENT: 'Auto-closing: AI Lab hub-links smoke recovered.',
  });
  if (r.status !== 0) {
    console.warn('[ai-lab-hub-links-escalate] close-on-recovery non-fatal:', r.stderr || r.stdout);
  }
}

function main() {
  const cmp = readJsonSafe(COMPARE);
  const prod = readJsonSafe(PROD);

  let failed = [];
  let summary = 'No report data available.';
  if (cmp && Array.isArray(cmp.regressedInPreview)) {
    failed = cmp.regressedInPreview.slice(0, 40);
    summary = `Preview regressions vs production: ${cmp.regressedInPreview.length}`;
  } else if (prod && Array.isArray(prod.results)) {
    failed = prod.results.filter((r) => r.ok !== true).map((r) => r.path).slice(0, 40);
    summary = `Production failures: ${failed.length}`;
  }

  if (failed.length === 0) {
    console.log('[ai-lab-hub-links-escalate] healthy; attempting close-on-recovery');
    closeRecovered();
    return;
  }

  const lines = [
    'AI Lab hub-links smoke reported failures.',
    '',
    `- Summary: ${summary}`,
    `- Compare report: ${path.relative(ROOT, COMPARE)}`,
    `- Prod report: ${path.relative(ROOT, PROD)}`,
    '',
    '## Failing routes',
    ...failed.map((p) => `- \`${p}\``),
  ];
  fs.mkdirSync(path.dirname(BODY), { recursive: true });
  fs.writeFileSync(BODY, `${lines.join('\n')}\n`, 'utf8');

  const r = runNode(DEDUPE, {
    ISSUE_TITLE: '[automation] AI Lab hub links smoke failing',
    ISSUE_BODY_FILE: BODY,
    ISSUE_LABELS: 'automation,ai-lab',
    ISSUE_FINGERPRINT: FP,
    COOLDOWN_HOURS: String(process.env.COOLDOWN_HOURS || '12'),
  });
  process.stdout.write(r.stdout || '');
  process.stderr.write(r.stderr || '');
  if (r.status !== 0) process.exit(r.status);

  recordEscalation('ai-lab-hub-links-smoke', { meta: { failedCount: failed.length } });
}

main();
