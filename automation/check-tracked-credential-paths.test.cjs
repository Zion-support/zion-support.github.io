'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { classifyPath, scanPaths, listTrackedPaths, run } = require('./check-tracked-credential-paths.cjs');

for (const name of [
  '.ssh/id_ed25519', '.ssh/id_rsa', 'nested/.ssh/id_ecdsa',
  '.aws/credentials', 'data/.kube/config', 'other/.netrc', '.pypirc',
  '.env', '.env.production', 'backend/.env.local', 'backup.p12',
  'server.pfx', 'infra/terraform.tfstate.backup',
]) {
  test('high-risk filename ' + name, () => assert.equal(classifyPath(name), 'high'));
}
for (const name of [
  '.ssh/id_ed25519.pub', '.env.example', '.env.sample', '.env.template',
  'docs/guide.md', 'cert.crt', 'password-policy.md',
]) {
  test('non-secret filename ' + name, () => assert.equal(classifyPath(name), null));
}
for (const name of ['.npmrc', 'project/.npmrc', 'cert.pem', 'service.key']) {
  test('review-only filename ' + name, () => assert.equal(classifyPath(name), 'review'));
}
test('counts all matched paths but caps exposed filename samples', () => {
  const r = scanPaths(['.ssh/id_rsa', '.ssh/id_ed25519', '.npmrc', 'notes.txt'], 1);
  assert.equal(r.highRiskCount, 2);
  assert.equal(r.reviewCount, 1);
  assert.deepEqual(r.highRiskPaths, ['.ssh/id_rsa']);
  assert.equal(r.truncated, true);
});
test('Git index scanner includes tracked files only; no file bytes are read', () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-path-only-'));
  try {
    const git = (...args) => {
      const r = spawnSync('git', args, { cwd, encoding: 'utf8' });
      assert.equal(r.status, 0, args.join(' ') + ': ' + r.stderr);
    };
    git('init', '-q');
    fs.mkdirSync(path.join(cwd, '.ssh'));
    fs.writeFileSync(path.join(cwd, '.ssh', 'id_ed25519'), 'INERT TEST DATA; NOT A KEY');
    fs.writeFileSync(path.join(cwd, '.env.local'), 'INERT TEST DATA');
    fs.writeFileSync(path.join(cwd, 'not-tracked.txt'), 'INERT TEST DATA');
    git('add', '.ssh/id_ed25519', '.env.local');
    const names = listTrackedPaths(cwd);
    assert.deepEqual(names.sort(), ['.env.local', '.ssh/id_ed25519']);
    const exitCode = run(cwd, 'reports/guard.json');
    assert.equal(exitCode, 1);
    const report = JSON.parse(fs.readFileSync(path.join(cwd, 'reports/guard.json'), 'utf8'));
    assert.equal(report.highRiskCount, 2);
    assert.doesNotMatch(JSON.stringify(report), /INERT TEST DATA/);
  } finally {
    fs.rmSync(cwd, { recursive: true, force: true });
  }
});
test('missing Git checkout fails closed and generates an error report', () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-no-git-'));
  try {
    assert.equal(run(cwd, 'out/report.json'), 1);
    const r = JSON.parse(fs.readFileSync(path.join(cwd, 'out/report.json'), 'utf8'));
    assert.equal(r.status, 'error');
  } finally {
    fs.rmSync(cwd, { recursive: true, force: true });
  }
});
