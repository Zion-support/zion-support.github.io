const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

function runFixture(t, diagnostic) {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-build-verdict-'));
  t.after(() => fs.rmSync(cwd, { recursive: true, force: true }));
  for (const name of ['index.html', '404.html', 'data/services.json', 'service-index.json']) {
    const file = path.join(cwd, 'out', name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, name.endsWith('.json') ? '{}' : '<!doctype html>');
  }
  if (diagnostic) {
    const file = path.join(cwd, '.next/diagnostics/build-diagnostics.json');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify({ error: diagnostic }));
  }
  const result = spawnSync(process.execPath, [path.join(__dirname, 'build-and-verify.cjs')], {
    cwd, encoding: 'utf8', timeout: 5000
  });
  assert.ifError(result.error);
  const receipt = JSON.parse(fs.readFileSync(path.join(cwd, 'automation/reports/build-and-verify-latest.json'), 'utf8'));
  return { result, receipt };
}

test('existing export artifacts do not mask a failed Next build', t => {
  const { result, receipt } = runFixture(t, 'Next build worker exited with code: 1');
  assert.equal(result.status, 2);
  assert.equal(receipt.missingCount, 0);
  assert.equal(receipt.buildError, 'next-build-worker-failure');
  assert.equal(receipt.next, 'build regression — inspect referenced scripts/logs');
});

test('complete artifacts without a build error are verified', t => {
  const { result, receipt } = runFixture(t);
  assert.equal(result.status, 0);
  assert.equal(receipt.buildError, null);
  assert.equal(receipt.next, 'verified local static export');
});
