#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Runs approved OpenClaw queue commands only after handoff/policy cross-check.
 *
 * Default: dry-run (prints planned commands, exits 0).
 * OPENCLAW_RUNNER_EXECUTE=1 — actually run (still requires allowlisted npm run form unless OPENCLAW_RUNNER_ALLOW_SHELL=1).
 * OPENCLAW_RUNNER_RESPECT_HOLD=1 — skip non-ultra-safe commands when deploy gate is hold_deploy.
 * OPENCLAW_RUNNER_MAX — max items (default 3).
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = process.cwd();
const REPORTS = path.join(ROOT, 'automation', 'reports');
const HANDOFF = path.join(REPORTS, 'openclaw-autonomy-handoff-latest.json');
const APPROVED = path.join(REPORTS, 'openclaw-action-approved-queue-latest.json');
const POLICY = path.join(REPORTS, 'openclaw-action-policy-latest.json');

const ULTRA_SAFE = /npm run (lint:check|type-check|test:ci|build:lock:check|build:lock:heal)\b/;

function readJson(p, fb = null) {
  try {
    if (!fs.existsSync(p)) return fb;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return fb;
  }
}

function parseNpmRun(cmd) {
  const t = String(cmd || '').trim();
  const m = /^npm run ([\w:@./-]+)\s*$/i.exec(t);
  return m ? ['run', m[1]] : null;
}

function main() {
  const execute = process.env.OPENCLAW_RUNNER_EXECUTE === '1';
  const respectHold = process.env.OPENCLAW_RUNNER_RESPECT_HOLD === '1';
  const allowShell = process.env.OPENCLAW_RUNNER_ALLOW_SHELL === '1';
  const max = Math.max(0, Number.parseInt(process.env.OPENCLAW_RUNNER_MAX || '3', 10));

  const handoff = readJson(HANDOFF, null);
  const approvedData = readJson(APPROVED, { queue: [] });
  const policy = readJson(POLICY, null);

  const queue = Array.isArray(approvedData.queue) ? approvedData.queue : [];
  const approvedIds = new Set(Array.isArray(policy?.approvedIds) ? policy.approvedIds : []);
  const denied = Array.isArray(policy?.denied) ? policy.denied : [];
  const deniedIds = new Set(denied.map((d) => d.id).filter(Boolean));

  const holdFromHandoff = handoff?.deployGate?.decision === 'hold_deploy';

  if (queue.length === 0) {
    console.log('openclaw runner: no approved queue items.');
    process.exit(0);
  }

  if (!policy || approvedIds.size === 0) {
    console.error('openclaw runner: missing or empty policy snapshot; refusing to run.');
    process.exit(1);
  }

  let ran = 0;
  for (const item of queue) {
    if (ran >= max) break;
    const id = item.id;
    const cmd = String(item.recommendedCommand || '').trim();
    if (!id || !cmd) continue;

    if (deniedIds.has(id)) {
      console.error(`openclaw runner: refuse — id ${id} appears in policy.denied.`);
      process.exit(1);
    }
    if (!approvedIds.has(id)) {
      console.error(`openclaw runner: refuse — id ${id} not in policy.approvedIds (stale handoff?).`);
      process.exit(1);
    }

    if (respectHold && holdFromHandoff && !ULTRA_SAFE.test(cmd)) {
      console.log(`openclaw runner: skip (deploy hold): ${id} ${cmd}`);
      continue;
    }

    const npmArgs = parseNpmRun(cmd);
    if (!npmArgs && !allowShell) {
      console.error(`openclaw runner: refuse — command not strict "npm run <script>" form: ${cmd}`);
      process.exit(1);
    }

    console.log(`${execute ? 'EXEC' : 'DRY'} ${id}: ${cmd}`);
    if (!execute) {
      ran += 1;
      continue;
    }

    const res = npmArgs
      ? spawnSync('npm', npmArgs, { cwd: ROOT, stdio: 'inherit', shell: false, env: process.env })
      : spawnSync(cmd, { cwd: ROOT, stdio: 'inherit', shell: true, env: process.env });
    if (res.status !== 0) {
      console.error(`openclaw runner: command failed with status ${res.status}`);
      process.exit(res.status || 1);
    }
    ran += 1;
  }

  if (!execute) {
    console.log('openclaw runner: dry-run complete. Set OPENCLAW_RUNNER_EXECUTE=1 to run.');
  }
}

main();
