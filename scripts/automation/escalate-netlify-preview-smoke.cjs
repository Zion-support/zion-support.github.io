#!/usr/bin/env node
/**
 * Escalate repeated Netlify preview smoke failures as a deduped GitHub issue.
 *
 * Reads:
 * - automation/reports/netlify-preview-smoke-latest.json
 * Writes:
 * - automation/reports/netlify-preview-smoke-state.json (consecutive failures)
 *
 * Env:
 * - NETLIFY_PREVIEW_SMOKE_FAIL_STREAK (default: 3)
 * - NETLIFY_PREVIEW_SMOKE_RECOVERY_STREAK (default: 2) consecutive healthy runs to auto-close
 * - NETLIFY_PREVIEW_SMOKE_STREAK_AUTHORITY — set to "0" to update state only and skip issue escalation
 * - GITHUB_SHA, GITHUB_WORKFLOW
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'automation', 'reports', 'netlify-preview-smoke-latest.json');
const STATE = path.join(ROOT, 'automation', 'reports', 'netlify-preview-smoke-state.json');
const BODY = path.join(ROOT, 'automation', 'reports', 'netlify-preview-smoke-escalation-body.md');

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
}

function main() {
  const threshold = Math.max(1, Number(process.env.NETLIFY_PREVIEW_SMOKE_FAIL_STREAK || 3));
  const recoveryStreak = Math.max(1, Number(process.env.NETLIFY_PREVIEW_SMOKE_RECOVERY_STREAK || 2));
  const report = readJson(REPORT);
  if (!report || report.skipped) {
    process.exit(0);
  }

  const unhealthyCount = Number(report.unhealthyCount || 0);
  const prior = readJson(STATE) || { consecutiveFailures: 0, consecutiveHealthy: 0 };
  const nextFailures = unhealthyCount > 0 ? Number(prior.consecutiveFailures || 0) + 1 : 0;
  const nextHealthy = unhealthyCount === 0 ? Number(prior.consecutiveHealthy || 0) + 1 : 0;

  writeJson(STATE, {
    updatedAt: new Date().toISOString(),
    consecutiveFailures: nextFailures,
    consecutiveHealthy: nextHealthy,
    latestUnhealthyCount: unhealthyCount,
    baseUrl: report.baseUrl || null,
  });

  if (unhealthyCount === 0 && nextHealthy >= recoveryStreak) {
    const list = spawnSync(
      'gh',
      [
        'issue',
        'list',
        '--state',
        'open',
        '--label',
        'automation-fp-netlify-preview-smoke-repeated',
        '--json',
        'number',
        '--limit',
        '20',
      ],
      { cwd: ROOT, encoding: 'utf8', env: process.env },
    );
    if (list.status === 0) {
      let nums = [];
      try {
        nums = JSON.parse(list.stdout || '[]').map((x) => x.number);
      } catch {
        nums = [];
      }
      for (const num of nums) {
        spawnSync(
          'gh',
          [
            'issue',
            'close',
            String(num),
            '--comment',
            `Auto-close: Netlify preview smoke recovered for ${nextHealthy} consecutive run(s).`,
          ],
          { cwd: ROOT, encoding: 'utf8', env: process.env },
        );
      }
      if (nums.length) {
        console.log('preview-smoke-escalate: closed recovered issue(s):', nums.join(','));
      }
    }
  }

  if (nextFailures < threshold || unhealthyCount === 0) {
    console.log('preview-smoke-escalate: below threshold', { nextFailures, nextHealthy, threshold, unhealthyCount });
    process.exit(0);
  }

  if (String(process.env.NETLIFY_PREVIEW_SMOKE_STREAK_AUTHORITY || '1').toLowerCase() === '0') {
    console.log('preview-smoke-escalate: streak authority disabled — state updated, skipping issue');
    process.exit(0);
  }

  const unhealthy = Array.isArray(report.routes)
    ? report.routes
        .filter((r) => !r.ok)
        .slice(0, 20)
        .map((r) => `- ${r.path} (${r.status}) [${r.kind || 'n/a'}]`)
    : [];

  const md = [
    '## Netlify preview smoke repeated failures',
    '',
    `- **Dedupe key:** \`netlify-preview-smoke-repeated\``,
    `- **Consecutive failures:** ${nextFailures}`,
    `- **Threshold:** ${threshold}`,
    `- **Preview URL:** ${report.baseUrl || 'n/a'}`,
    `- **Workflow:** ${process.env.GITHUB_WORKFLOW || 'unknown'}`,
    `- **SHA:** ${(process.env.GITHUB_SHA || 'unknown').slice(0, 12)}`,
    '',
    '### Latest unhealthy routes',
    unhealthy.length ? unhealthy.join('\n') : '- none',
  ].join('\n');

  fs.writeFileSync(BODY, `${md}\n`, 'utf8');
  const env = {
    ...process.env,
    ISSUE_TITLE: 'Netlify preview smoke failing repeatedly after deploy',
    ISSUE_BODY_FILE: BODY,
    ISSUE_LABELS: 'bug,automation,automation-slo-critical',
    ISSUE_FINGERPRINT: 'netlify-preview-smoke-repeated',
    COOLDOWN_HOURS: '12',
  };
  const r = spawnSync('node', ['scripts/automation/gh-issue-dedupe-or-create.cjs'], {
    cwd: ROOT,
    encoding: 'utf8',
    env,
  });
  if (r.status !== 0) {
    console.warn('preview-smoke-escalate: issue create failed', r.stderr || r.stdout);
    process.exit(1);
  }
  console.log('preview-smoke-escalate: issue ensured');
}

main();
