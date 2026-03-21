#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Auto-open draft PR when route-contract autofix changes smoke routes.
 */
const { spawnSync } = require('child_process');

const ROOT = process.cwd();

function run(cmd, args, extraEnv = {}) {
  return spawnSync(cmd, args, {
    cwd: ROOT,
    encoding: 'utf8',
    env: { ...process.env, ...extraEnv },
  });
}

function must(cmd, args, extraEnv = {}) {
  const r = run(cmd, args, extraEnv);
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.stderr) process.stderr.write(r.stderr);
  if (r.status !== 0) process.exit(r.status || 1);
  return r;
}

function main() {
  must(process.execPath, ['automation/validate-ai-lab-route-contract.cjs', '--fix']);

  const st = run('git', ['status', '--porcelain', '--', 'config/smoke-routes.txt']);
  if ((st.stdout || '').trim() === '') {
    console.log('[ai-lab-route-contract-auto-pr] no route contract drift to fix');
    return;
  }

  const branch = `ai-lab-route-contract-autofix-${Date.now()}`;
  must('git', ['checkout', '-b', branch]);
  must('git', ['add', 'config/smoke-routes.txt']);
  must('git', ['commit', '-m', 'chore(ai-lab): auto-fix route contract smoke routes']);
  must('git', ['push', '-u', 'origin', branch]);

  const body = [
    'Automated route-contract drift fix.',
    '',
    '- Ran `validate-ai-lab-route-contract --fix`',
    '- Updated `config/smoke-routes.txt` to restore AI Lab contract alignment',
  ].join('\n');
  must('gh', ['pr', 'create', '--draft', '--title', 'chore(ai-lab): auto-fix route-contract smoke routes', '--body', body]);
}

main();
