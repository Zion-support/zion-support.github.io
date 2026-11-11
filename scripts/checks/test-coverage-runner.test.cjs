'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync: spawnProcess } = require('node:child_process');
// These shell tests fake Jest and its prerequisite Node patch command.
// The separate real-Jest suite verifies actual patching and reporter behavior.
function spawnSync(command, args, options) {
  if (command === 'bash' && args[0] === runner) {
    const bin = path.join(options.cwd, 'patch-command-fixture');
    fs.mkdirSync(bin, {recursive: true});
    fs.writeFileSync(path.join(bin, 'node'), '#!/bin/bash\nexit 0\n', {mode: 0o755});
    options = {...options, env: {...process.env, ...options.env, PATH: bin + path.delimiter + (options.env?.PATH || process.env.PATH)}};
  }
  return spawnProcess(command, args, options);
}
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
echo '{"total":{"lines":{"total":1,"covered":1}}}' > coverage/coverage-summary.json
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

for (const status of [0, 42]) {
  test(`status-file write failure preserves Jest ${status} and reports both outcomes`, () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'coverage-status-write-'));
    try {
      fs.mkdirSync(path.join(dir, 'node_modules/.bin'), {recursive: true});
      fs.mkdirSync(path.join(dir, 'coverage/process-status.txt'), {recursive: true});
      fs.writeFileSync(path.join(dir, 'node_modules/.bin/jest'), `#!/bin/bash
echo original-diagnostic >&2
exit ${status}
`, {mode: 0o755});
      const result = spawnSync('bash', [runner], {cwd: dir, encoding: 'utf8'});
      assert.equal(result.status, status || 1);
      assert.match(result.stderr, /status_write_exit=1/);
      assert.match(result.stderr, new RegExp('jest_exit=' + status + ' log_exit=0'));
      assert.match(fs.readFileSync(path.join(dir, 'coverage/jest.log'), 'utf8'), /original-diagnostic/);
    } finally { fs.rmSync(dir, {recursive: true, force: true}); }
  });
}

