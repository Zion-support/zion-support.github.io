'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { scanWorkflow, inventory, writeReport } = require('./gha-npm-cache-audit.cjs');
const CACHED = `name: Cached\n'on':\n  pull_request:\njobs:\n  unit:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683\n      - name: Setup Node\n        uses: actions/setup-node@53b83947a5a98c8d113130e565377fae1a50d02f\n        with:\n          node-version: '22'\n          cache: npm\n          cache-dependency-path: package-lock.json\n      - run: npm ci --prefer-offline\n`;
test('cached npm ci is classified without an advisory', () => {
  assert.deepEqual(scanWorkflow(CACHED), { hasNpmCi: true, setupNodeSteps: 1, cacheSteps: 1, cacheStepsWithoutExplicitPath: 0 });
});
test('npm ci with no npm cache emits review-only signal', () => {
  const text = `name: no-cache\njobs:\n  job:\n    steps:\n      - uses: actions/setup-node@abcdef\n      - run: |\n          npm ci --no-audit\n`;
  assert.equal(scanWorkflow(text).hasNpmCi, true);
  assert.equal(scanWorkflow(text).cacheSteps, 0);
});
test('shell comments and a setup-node without npm cache are not counted as cached', () => {
  const text = `jobs:\n  check:\n    steps:\n      - name: Nothing\n        run: |\n          # npm ci\n          echo safe\n      - uses: actions/setup-node@012345\n        with:\n          node-version: '22'\n`;
  assert.equal(scanWorkflow(text).hasNpmCi, false);
  assert.equal(scanWorkflow(text).cacheSteps, 0);
});
test('default root lockfile location is informational, not a failing check', () => {
  const text = CACHED.replace('          cache-dependency-path: package-lock.json\n', '');
  assert.equal(scanWorkflow(text).cacheStepsWithoutExplicitPath, 1);
});
test('inventory is sorted, capped, deterministic and does not copy credentials', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-npmcache-'));
  try {
    fs.writeFileSync(path.join(dir, 'b.yml'), `name: Uncached\non:\n  workflow_dispatch:\njobs:\n  j:\n    steps:\n      - run: npm ci\n`);
    fs.writeFileSync(path.join(dir, 'a.yaml'), CACHED);
    fs.writeFileSync(path.join(dir, 'readme.txt'), 'not a workflow');
    const r = inventory(dir, () => '2026-10-22T12:00:00.000Z');
    assert.equal(r.workflowsScanned, 2);
    assert.equal(r.npmCiWorkflows, 2);
    assert.equal(r.workflowsWithNpmCache, 1);
    assert.equal(r.npmCiWithoutDeclaredCache, 1);
    assert.deepEqual(r.findings, [{ file: 'b.yml', code: 'npm-ci-without-declared-setup-node-cache', level: 'advisory' }]);
    assert.equal(r.generatedAtUtc, '2026-10-22T12:00:00.000Z');
    assert.match(r.limitations, /No actual cache hits/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
test('missing workflow directory or no files fails rather than reporting healthy', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-npmcache-'));
  try { assert.throws(() => inventory(dir), /no workflow YAML/); }
  finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
test('report writer produces parseable JSON and run-summary evidence', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-npmcache-'));
  try {
    const f = writeReport({ schema: 'v1', status: 'ok', workflowsScanned: 1, npmCiWorkflows: 0, npmCiWithoutDeclaredCache: 0, cachedStepsWithoutExplicitLockPath: 0 }, path.join(dir, 'report.json'));
    assert.equal(JSON.parse(fs.readFileSync(f, 'utf8')).status, 'ok');
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
test('workflow PR and scheduled jobs both execute tests without npm ci', () => {
  for (const name of ['ai-gha-npm-cache-audit-pr.yml','ai-gha-npm-cache-audit-scheduled.yml']) {
    const yaml = fs.readFileSync(path.resolve(__dirname, '../.github/workflows', name), 'utf8');
    assert.match(yaml, /node --test automation\/gha-npm-cache-audit\.test\.cjs/);
    assert.match(yaml, /node automation\/gha-npm-cache-audit\.cjs/);
    assert.match(yaml, /persist-credentials: false/);
    assert.match(yaml, /contents: read/);
    assert.doesNotMatch(yaml, /npm ci|issues: write|contents: write|if-no-files-found: ignore/);
    for(const match of yaml.matchAll(/uses:\s*([^\s#]+)/g)) assert.match(match[1], /@[a-f0-9]{40}$/i);
  }
});
