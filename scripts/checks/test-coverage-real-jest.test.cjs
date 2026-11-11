'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const runner = process.env.COVERAGE_RUNNER || path.join(__dirname, 'run-test-coverage.sh');
const modules = path.resolve(__dirname, '../../node_modules');

// Real installed Jest, not a mocked executable. No network in these tests.
for (const scenario of ['healthy', 'collection-error', 'report-write-error']) {
  test('real Jest: ' + scenario, () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'coverage-real-'));
    try {
      fs.symlinkSync(modules, path.join(dir, 'node_modules'), 'dir');
      fs.mkdirSync(path.join(dir, 'src'));
      fs.writeFileSync(path.join(dir, 'src/good.js'), 'module.exports = () => 42;\n');
      fs.writeFileSync(path.join(dir, 'good.test.js'), "test('works', () => expect(require('./src/good')()).toBe(42));\n");
      fs.writeFileSync(path.join(dir, 'jest.config.cjs'), `module.exports = {
        rootDir: __dirname, testEnvironment: 'node', testMatch: ['<rootDir>/good.test.js'],
        collectCoverageFrom: ['src/*.js'], transform: {}
      };`);
      if (scenario === 'collection-error') {
        fs.writeFileSync(path.join(dir, 'src/bad.js'), 'module.exports = 99;\n');
        // Jest indexed this eligible file before tests; removal makes collection fail.
        fs.appendFileSync(path.join(dir, 'good.test.js'), "afterAll(() => require('fs').unlinkSync(require('path').join(__dirname, 'src/bad.js')));\n");
      }
      if (scenario === 'report-write-error') {
        // Deterministic EISDIR, including when the test runs as root.
        fs.mkdirSync(path.join(dir, 'coverage/lcov.info'), {recursive: true});
      }
      const result = spawnSync('bash', [runner], {cwd: dir, encoding: 'utf8', timeout: 60000});
      assert.equal(result.error, undefined);
      const log = fs.readFileSync(path.join(dir, 'coverage/jest.log'), 'utf8');
      const status = fs.readFileSync(path.join(dir, 'coverage/process-status.txt'), 'utf8');
      // These regressions are dangerous precisely because Jest returns zero.
      assert.match(status, /jest_exit=0/);
      assert.ok(fs.statSync(path.join(dir, 'coverage/coverage-summary.json')).size > 0);
      if (scenario === 'healthy') {
        assert.equal(result.status, 0, result.stdout + result.stderr);
        assert.ok(fs.statSync(path.join(dir, 'coverage/lcov.info')).isFile());
        assert.ok(fs.statSync(path.join(dir, 'coverage/lcov-report/index.html')).size > 0);
      } else {
        assert.equal(result.status, 1, result.stdout + result.stderr);
        assert.match(log, scenario === 'collection-error'
          ? /Failed to collect coverage from/ : /Failed to write coverage reports/);
        if (scenario === 'collection-error') {
          const summary = JSON.parse(fs.readFileSync(path.join(dir, 'coverage/coverage-summary.json'), 'utf8'));
          assert.ok(!Object.keys(summary).some(key => key.endsWith('/bad.js')));
          assert.ok(fs.statSync(path.join(dir, 'coverage/lcov.info')).size > 0);
        }
      }
    } finally { fs.rmSync(dir, {recursive: true, force: true}); }
  });
}
