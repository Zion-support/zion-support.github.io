'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const runner = path.join(__dirname, 'run-test-coverage.sh');

for (const status of [0, 1, 42, 134, 137]) {
  test(`preserves reports, stderr and exit ${status}`, () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'coverage-runner-'));
    try {
      fs.mkdirSync(path.join(dir, 'node_modules/.bin'), { recursive: true });
      fs.writeFileSync(path.join(dir, 'node_modules/.bin/jest'), `#!/bin/bash
printf '%s\\n' "$@" > coverage/args.txt
echo test-output
echo test-diagnostic >&2
mkdir -p coverage/lcov-report
echo 'available report' > coverage/lcov-report/index.html
echo 'TN:' > coverage/lcov.info
exit ${status}
`, { mode: 0o755 });
      const result = spawnSync('bash', [runner], { cwd: dir, encoding: 'utf8' });
      assert.equal(result.status, status, result.stderr);
      const log = fs.readFileSync(path.join(dir, 'coverage/jest.log'), 'utf8');
      assert.match(log, /test-output/);
      assert.match(log, /test-diagnostic/);
      assert.match(fs.readFileSync(path.join(dir, 'coverage/process-status.txt'), 'utf8'), new RegExp('jest_exit=' + status));
      assert.ok(fs.existsSync(path.join(dir, 'coverage/lcov-report/index.html')));
      assert.ok(fs.existsSync(path.join(dir, 'coverage/lcov.info')));
      const args = fs.readFileSync(path.join(dir, 'coverage/args.txt'), 'utf8');
      for (const arg of ['--runInBand', '--coverageProvider=v8', '--coverageReporters=json-summary', '--coverageReporters=lcov']) assert.ok(args.includes(arg));
      assert.ok(!args.includes('--passWithNoTests'));
      assert.ok(!args.includes('--collectCoverageFrom'));
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
}
test('missing Jest executable stays a failure and produces diagnostics', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'coverage-missing-'));
  try {
    const result = spawnSync('bash', [runner], { cwd: dir, encoding: 'utf8' });
    assert.equal(result.status, 127);
    assert.match(fs.readFileSync(path.join(dir, 'coverage/jest.log'), 'utf8'), /No such file/);
    assert.match(fs.readFileSync(path.join(dir, 'coverage/process-status.txt'), 'utf8'), /jest_exit=127/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
