#!/usr/bin/env node

/**
 * Escalate when AI Lab legacy scaffold candidate count is above threshold.
 * Uses deduped GitHub issues via scripts/automation/gh-issue-dedupe-or-create.cjs.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'automation', 'reports', 'ai-lab-legacy-scaffold-scan-latest.json');
const THRESHOLD = Number(process.env.AI_LAB_LEGACY_SCAFFOLD_THRESHOLD || '0');
const DEDUPE = path.join(ROOT, 'scripts', 'automation', 'gh-issue-dedupe-or-create.cjs');

function runNode(args, env) {
  return spawnSync(process.execPath, args, {
    cwd: ROOT,
    encoding: 'utf8',
    env: { ...process.env, ...env },
  });
}

function closeOnRecovery() {
  const closer = path.join(ROOT, 'scripts', 'automation', 'gh-issue-close-on-recovery.cjs');
  const res = runNode([closer], {
    ISSUE_FINGERPRINT: 'ai-lab-legacy-scaffold-drift',
    CLOSE_COMMENT: 'Auto-closing: AI Lab legacy scaffold drift is back within threshold.',
  });
  if (res.status !== 0) {
    console.warn('[ai-lab-legacy-scaffold-drift] close-on-recovery skipped/non-fatal');
  }
}

function main() {
  if (!fs.existsSync(REPORT)) {
    console.error('[ai-lab-legacy-scaffold-drift] Missing report:', REPORT);
    process.exit(1);
  }
  if (!fs.existsSync(DEDUPE)) {
    console.error('[ai-lab-legacy-scaffold-drift] Missing dedupe script:', DEDUPE);
    process.exit(1);
  }

  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const count = Number(report.count || 0);

  if (count <= THRESHOLD) {
    console.log(
      `[ai-lab-legacy-scaffold-drift] within threshold (${count} <= ${THRESHOLD}); attempting close-on-recovery`
    );
    closeOnRecovery();
    return;
  }

  const title = '[automation] AI Lab legacy scaffold drift above threshold';
  const rows = Array.isArray(report.candidates) ? report.candidates.slice(0, 30) : [];
  const detail = rows.map((r) => `- \`${r.path || r.file || 'unknown'}\``).join('\n');
  const body = [
    'AI Lab legacy scaffold scan is above threshold.',
    '',
    `- Threshold: ${THRESHOLD}`,
    `- Current count: ${count}`,
    `- Report at: ${report.at || 'n/a'}`,
    '',
    '## Top candidates',
    detail || '- none',
    '',
    'Runbook: migrate safe candidates with `npm run ai-lab:legacy-scaffold-migrate:apply` (exact-template only).',
  ].join('\n');

  const tmp = path.join(ROOT, 'automation', 'reports', '.runtime', 'ai-lab-legacy-scaffold-drift-body.md');
  fs.mkdirSync(path.dirname(tmp), { recursive: true });
  fs.writeFileSync(tmp, `${body}\n`, 'utf8');

  const res = runNode([DEDUPE], {
    ISSUE_TITLE: title,
    ISSUE_BODY_FILE: tmp,
    ISSUE_LABELS: 'automation,ai-lab',
    ISSUE_FINGERPRINT: 'ai-lab-legacy-scaffold-drift',
    COOLDOWN_HOURS: String(process.env.COOLDOWN_HOURS || '12'),
  });

  process.stdout.write(res.stdout || '');
  process.stderr.write(res.stderr || '');
  if (res.status !== 0) process.exit(res.status);
}

main();
