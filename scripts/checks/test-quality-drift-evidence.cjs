'use strict';
// Offline regression tests for the exact Node validators embedded in the workflow.
// Run from the repository root: node scripts/checks/test-quality-drift-evidence.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const workflowPath = path.resolve(__dirname, '../../.github/workflows/autonomous-quality-drift-sentinel.yml');
const workflow = fs.readFileSync(workflowPath, 'utf8');
const blocks = [...workflow.matchAll(/^          node --input-type=commonjs <<'NODE'\r?\n([\s\S]*?)^          NODE\r?$/gm)]
  .map(match => match[1].split('\n').map(line => line.replace(/^          /, '')).join('\n'));
assert.equal(blocks.length, 2, 'Expected command and report validators in workflow');
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-quality-evidence-'));
const outputPath = path.join(root, 'github-output');
let passed = 0;
function command(value) {
  fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({scripts: {'autonomy:quality-drift': value}}));
}
function report(value) {
  fs.mkdirSync(path.join(root, 'automation/reports'), {recursive: true});
  fs.writeFileSync(path.join(root, 'automation/reports/autonomous-quality-drift-latest.json'), typeof value === 'string' ? value : JSON.stringify(value));
}
function run(index, expectedStatus, validated = false) {
  fs.writeFileSync(outputPath, '');
  const script = path.join(root, `validator-${index}.cjs`);
  fs.writeFileSync(script, blocks[index]);
  const result = spawnSync(process.execPath, [script], {cwd: root, encoding: 'utf8', env: {...process.env, GITHUB_OUTPUT: outputPath}});
  if (result.error) throw result.error;
  assert.equal(result.status, expectedStatus, result.stderr || result.stdout);
  assert.equal(fs.readFileSync(outputPath, 'utf8').includes('validated=true'), validated, 'Escalation must require validated evidence');
  passed += 1;
}
try {
  command("echo 'autonomy:quality-drift: OK (stub - automation paused post-P0)'"); run(0, 1);
  command(''); run(0, 1);
  command('node automation/real-quality-check.cjs'); run(0, 0);
  run(1, 1);
  report('{broken json'); run(1, 1);
  report({severity: 'ok', failedCount: 0, checks: []}); run(1, 1);
  report({severity: 'ok', failedCount: 0, checks: [{id: 'test', passed: 'true'}]}); run(1, 1);
  report({severity: 'ok', failedCount: 0, checks: [{id: 'test', passed: false}]}); run(1, 1);
  report({severity: 'warning', failedCount: 1, checks: [{id: 'test', passed: false}]}); run(1, 1, true);
  report({severity: 'ok', failedCount: 0, checks: [{id: 'test', passed: true}]}); run(1, 0, true);
  console.log(`PASS: ${passed} quality-evidence regression cases (offline; not production validation).`);
} finally {
  fs.rmSync(root, {recursive: true, force: true});
}
