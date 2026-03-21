#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Escalate when critical runner anomalies cluster in a rolling window.
 *
 * Env:
 *   HISTORY_FILE (default automation/reports/openclaw-runner-anomaly-history.json)
 *   WINDOW_HOURS (default 24)
 *   BREACH_MIN_CRITICAL (default 3)
 *   ISSUE_TITLE (default: [automation] OpenClaw anomaly trend breach)
 *   ISSUE_LABELS (default: automation,openclaw,automation-slo-warning)
 *   ISSUE_FINGERPRINT (default: openclaw-runner-anomaly-trend-breach|24h|v1)
 *   DRY_RUN
 *
 * Requires GH_TOKEN/GITHUB_TOKEN when not DRY_RUN.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');

function readJsonArraySafe(p) {
  try {
    const j = JSON.parse(fs.readFileSync(p, 'utf8'));
    return Array.isArray(j) ? j : [];
  } catch {
    return [];
  }
}

function gh(args) {
  const r = spawnSync('gh', args, { encoding: 'utf8', env: process.env });
  return { ok: r.status === 0, status: r.status, stdout: r.stdout || '', stderr: r.stderr || '' };
}

function main() {
  const root = process.cwd();
  const historyFile = path.isAbsolute(process.env.HISTORY_FILE || '')
    ? process.env.HISTORY_FILE
    : path.join(root, process.env.HISTORY_FILE || 'automation/reports/openclaw-runner-anomaly-history.json');
  const windowHours = Math.max(1, Number.parseInt(String(process.env.WINDOW_HOURS || '24'), 10) || 24);
  const breachMinCritical = Math.max(1, Number.parseInt(String(process.env.BREACH_MIN_CRITICAL || '3'), 10) || 3);
  const issueTitle = String(process.env.ISSUE_TITLE || '[automation] OpenClaw anomaly trend breach');
  const issueLabels = String(process.env.ISSUE_LABELS || 'automation,openclaw,automation-slo-warning');
  const issueFingerprint = String(process.env.ISSUE_FINGERPRINT || 'openclaw-runner-anomaly-trend-breach|24h|v1');
  const dry = ['1', 'true', 'yes'].includes(String(process.env.DRY_RUN || '').toLowerCase());

  const rows = readJsonArraySafe(historyFile);
  const since = Date.now() - windowHours * 3600000;
  const criticalRows = rows.filter((r) => {
    const ts = r && r.generatedAt ? Date.parse(String(r.generatedAt)) : NaN;
    return Number.isFinite(ts) && ts >= since && String(r.severity || '').toLowerCase() === 'critical';
  });
  const criticalCount = criticalRows.length;
  const breached = criticalCount >= breachMinCritical;
  const summary = `critical anomalies in last ${windowHours}h: ${criticalCount} (threshold ${breachMinCritical})`;
  console.log(`[openclaw-anomaly-trend-breach] ${summary}`);

  if (dry) process.exit(0);

  if (breached) {
    const bodyFile = path.join(os.tmpdir(), `openclaw-anomaly-trend-breach-${process.pid}.md`);
    const lines = [
      '## OpenClaw anomaly trend breach',
      '',
      `- Window: \`${windowHours}h\``,
      `- Critical anomaly count: \`${criticalCount}\``,
      `- Threshold: \`${breachMinCritical}\``,
      `- History file: \`${path.relative(root, historyFile)}\``,
      '',
      '### Latest critical anomaly points',
      '',
      ...criticalRows.slice(-8).map((r) => `- ${String(r.generatedAt || 'unknown')} · alerts=${Number(r.alertCount || 0)}`),
    ];
    fs.writeFileSync(bodyFile, `${lines.join('\n')}\n`, 'utf8');
    try {
      const cmd = [
        'scripts/automation/gh-issue-dedupe-or-create.cjs',
      ];
      const res = spawnSync('node', cmd, {
        encoding: 'utf8',
        env: {
          ...process.env,
          ISSUE_TITLE: issueTitle,
          ISSUE_LABELS: issueLabels,
          ISSUE_FINGERPRINT: issueFingerprint,
          COOLDOWN_HOURS: '6',
          ISSUE_BODY_FILE: bodyFile,
        },
      });
      if (res.status !== 0) {
        console.warn('openclaw-anomaly-trend-breach: dedupe/create failed:', res.stderr || res.stdout);
      }
    } finally {
      try {
        fs.unlinkSync(bodyFile);
      } catch {
        /* ignore */
      }
    }
    process.exit(0);
  }

  const close = spawnSync('node', ['scripts/automation/gh-issue-close-on-recovery.cjs'], {
    encoding: 'utf8',
    env: {
      ...process.env,
      ISSUE_FINGERPRINT: issueFingerprint,
      CLOSE_COMMENT: `Auto-closing: anomaly trend breach recovered (${summary}).`,
    },
  });
  if (close.status !== 0) {
    console.warn('openclaw-anomaly-trend-breach: close-on-recovery failed:', close.stderr || close.stdout);
  }
}

main();
