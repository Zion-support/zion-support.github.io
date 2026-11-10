'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

function runFixture(mode, previous, extraEnv = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'incident-registry-'));
  try {
    fs.mkdirSync(path.join(root, 'reports'));
    const script = path.join(root, 'generate.cjs');
    fs.copyFileSync(path.join(__dirname, 'generate-incident-suppression-registry.cjs'), script);
    const output = path.join(root, 'reports', 'incident-suppression-registry-latest.json');
    if (previous !== undefined) fs.writeFileSync(output, previous);
    const gh = path.join(root, 'gh');
    fs.writeFileSync(gh, '#!/usr/bin/env node\n' +
      "const mode = process.env.FIXTURE_MODE;\n" +
      "if (mode === 'failure') process.exit(1);\n" +
      "if (mode === 'malformed') { console.log('not-json'); process.exit(0); }\n" +
      "const count = mode === 'capped' ? 1000 : mode === 'invalid' ? -1 : 1;\n" +
      "console.log(JSON.stringify(count < 0 ? [{number: 'x'}] : Array.from({length: count}, (_, i) => ({number: i + 1}))));\n");
    fs.chmodSync(gh, 0o755);
    const result = spawnSync(process.execPath, [script], {
      encoding: 'utf8',
      env: { PATH: root + path.delimiter + process.env.PATH, FIXTURE_MODE: mode,
        GITHUB_REPOSITORY: 'example/test', GITHUB_RUN_ID: '123', ...extraEnv },
    });
    return { status: result.status, output: fs.existsSync(output) ? fs.readFileSync(output, 'utf8') : undefined };
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
}
test('restores schema v3 output with conservative bootstrap and no healthy assumption', () => {
  const result = runFixture('ok');
  assert.equal(result.status, 0);
  const data = JSON.parse(result.output);
  assert.equal(data.version, 3);
  assert.equal(data.totalOpenIncidents, 5);
  assert.equal(data.cooldownHours, 24);
  assert.equal(data.domains.pm2Slo.breachStreak, 1);
  assert.equal(data.correlation.correlationId, 'suppression-reg-123');
});
const previous = JSON.stringify({version:3, cooldownHours:18, recommendedCooldownHours:18,
  domains:{pm2Slo:{breachStreak:9}}, customPreserved:{hold:true}});
test('preserves unknown fields and does not ease cooldown with missing telemetry', () => {
  const result = runFixture('ok', previous);
  assert.equal(result.status, 0);
  const data = JSON.parse(result.output);
  assert.deepEqual(data.customPreserved, {hold:true});
  assert.equal(data.cooldownHours, 18);
  assert.equal(data.domains.pm2Slo.breachStreak, 10);
});
for (const mode of ['failure', 'malformed', 'capped', 'invalid']) {
  test(mode + ' query preserves existing snapshot byte for byte', () => {
    const result = runFixture(mode, previous);
    assert.equal(result.status, 1);
    assert.equal(result.output, previous);
  });
}
test('invalid previous JSON is not reset', () => {
  const result = runFixture('ok', '{broken');
  assert.equal(result.status, 1);
  assert.equal(result.output, '{broken');
});
test('invalid EMA fails before creating a registry', () => {
  const result = runFixture('ok', undefined, {REGISTRY_EMA_ALPHA:'2'});
  assert.equal(result.status, 1);
  assert.equal(result.output, undefined);
});
test('failed first query creates no empty replacement', () => {
  const result = runFixture('failure');
  assert.equal(result.status, 1);
  assert.equal(result.output, undefined);
});
