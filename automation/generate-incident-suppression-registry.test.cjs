'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

function runFixture(mode, previous, extraEnv = {}, telemetry = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'incident-registry-'));
  try {
    fs.mkdirSync(path.join(root, 'reports'));
    const script = path.join(root, 'generate.cjs');
    fs.copyFileSync(path.join(__dirname, 'generate-incident-suppression-registry.cjs'), script);
    const output = path.join(root, 'reports', 'incident-suppression-registry-latest.json');
    if (previous !== undefined) fs.writeFileSync(output, previous);
    for (const [name, value] of Object.entries(telemetry)) {
      if (value !== undefined) fs.writeFileSync(path.join(root, 'reports', name),
        typeof value === 'string' ? value : JSON.stringify(value));
    }
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
      env: { PATH: root + path.delimiter + path.dirname(process.execPath) + path.delimiter + process.env.PATH, FIXTURE_MODE: mode,
        GITHUB_REPOSITORY: 'example/test', GITHUB_RUN_ID: '123', ...extraEnv },
    });
    return { leftovers: fs.readdirSync(path.dirname(output)).filter(name => name.endsWith('.tmp')), status: result.status, output: fs.existsSync(output) ? fs.readFileSync(output, 'utf8') : undefined };
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
const previousState = {
  version: 3, cooldownHours: 18, recommendedCooldownHours: 18,
  openclawCooldownHours: 18, slaCooldownHours: 18,
  noise: {emaOpenIncidents: 5, emaAlpha: 0.35, rawOpenTotal: 5},
  openIssueCounts: {openclaw: 1, pm2: 3, sla: 1}, totalOpenIncidents: 5,
  domains: Object.fromEntries(['pm2Slo', 'pm2Restart', 'openclawIncident', 'openclawSla']
    .map(name => [name, {breachStreak: 9, openIssueCount: 1}])),
  customPreserved: {hold: true},
};
const previous = JSON.stringify(previousState, null, 2) + '\n';
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

const healthy = {
  'pm2-slo-latest.json': {unhealthyCount: 0, criticalCount: 0},
  'pm2-restart-guardian-latest.json': {unhealthyCount: 0},
  'openclaw-autonomous-app-improver-latest.json': {
    contractFailures: 0, lowValueCycles: 0, parseFailures: 0,
    failures: 0, successes: 10, updatedAt: new Date().toISOString(),
  },
};
function assertPreserved(result, before) {
  assert.equal(result.status, 1);
  assert.deepEqual(Buffer.from(result.output), Buffer.from(before));
  assert.deepEqual(result.leftovers, []);
}
test('complete healthy telemetry permits easing and resets streaks', () => {
  const result = runFixture('ok', previous, {}, healthy);
  assert.equal(result.status, 0);
  const data = JSON.parse(result.output);
  assert.equal(data.cooldownHours, 15);
  assert.equal(data.domains.pm2Slo.breachStreak, 0);
  assert.equal(data.noise.emaOpenIncidents, 5);
  assert.deepEqual(result.leftovers, []);
  // A generated v3 snapshot must remain acceptable on the next iteration.
  assert.equal(runFixture('ok', result.output, {}, healthy).status, 0);
});
test('complete unhealthy telemetry increments streaks', () => {
  const telemetry = structuredClone(healthy);
  telemetry['pm2-slo-latest.json'].unhealthyCount = 1;
  const result = runFixture('ok', previous, {}, telemetry);
  assert.equal(result.status, 0);
  assert.equal(JSON.parse(result.output).domains.pm2Slo.breachStreak, 10);
});
for (const [name, sample] of Object.entries(healthy)) {
  for (const invalid of [null, {}, [], 0, false, '"text"', '{broken']) {
    test(name + ' rejects shape ' + JSON.stringify(invalid), () => {
      assertPreserved(runFixture('ok', previous, {}, {...healthy, [name]: invalid}), previous);
    });
  }
  for (const field of Object.keys(sample).filter(key => key !== 'updatedAt')) {
    for (const invalid of [undefined, null, '0', 'bad', -1, 0.5, false, 1e100, Infinity]) {
      test(name + '.' + field + ' rejects ' + String(invalid), () => {
        assertPreserved(runFixture('ok', previous, {},
          {...healthy, [name]: {...sample, [field]: invalid}}), previous);
      });
    }
  }
  test(name + ' absent does not ease cooldown', () => {
    const result = runFixture('ok', previous, {}, {...healthy, [name]: undefined});
    assert.equal(result.status, 0);
    assert.ok(JSON.parse(result.output).cooldownHours >= 18);
  });
}
for (const updatedAt of [undefined, null, 123, 'bad', '2999-01-01T00:00:00Z']) {
  test('invalid timestamp preserves bytes: ' + updatedAt, () => {
    assertPreserved(runFixture('ok', previous, {}, {...healthy,
      'openclaw-autonomous-app-improver-latest.json': {
        ...healthy['openclaw-autonomous-app-improver-latest.json'], updatedAt,
      }}), previous);
  });
}
for (const invalid of [null, {}, [], false, 4, 'text']) {
  test('invalid previous root preserves bytes: ' + JSON.stringify(invalid), () => {
    const before = JSON.stringify(invalid) + '\n';
    assertPreserved(runFixture('ok', before, {}, healthy), before);
  });
}
const statePaths = [
  ['version'], ['domains'], ['domains', 'pm2Slo'],
  ...['pm2Slo', 'pm2Restart', 'openclawIncident', 'openclawSla']
    .flatMap(name => [['domains', name, 'breachStreak'], ['domains', name, 'openIssueCount']]),
  ['noise'], ['noise', 'emaOpenIncidents'], ['noise', 'emaAlpha'], ['noise', 'rawOpenTotal'],
  ['openIssueCounts'], ...['openclaw', 'pm2', 'sla'].map(name => ['openIssueCounts', name]),
  ['totalOpenIncidents'], ...['cooldownHours', 'recommendedCooldownHours',
    'openclawCooldownHours', 'slaCooldownHours'].map(name => [name]),
];
for (const keys of statePaths) {
  for (const invalid of [undefined, null, 'bad', -1, 1e100]) {
    test('invalid prior ' + keys.join('.') + ': ' + String(invalid), () => {
      const state = structuredClone(previousState);
      let parent = state;
      for (const key of keys.slice(0, -1)) parent = parent[key];
      parent[keys.at(-1)] = invalid;
      const before = JSON.stringify(state, null, 2) + '\n';
      assertPreserved(runFixture('ok', before, {}, healthy), before);
    });
  }
}
test('non-finite JSON number preserves exact bytes', () => {
  const before = previous.replace('"emaOpenIncidents": 5', '"emaOpenIncidents": 1e309');
  assertPreserved(runFixture('ok', before, {}, healthy), before);
});
test('streak overflow preserves exact bytes', () => {
  const state = structuredClone(previousState);
  state.domains.pm2Slo.breachStreak = Number.MAX_SAFE_INTEGER;
  const before = JSON.stringify(state);
  assertPreserved(runFixture('ok', before), before);
});
test('inconsistent previous totals preserve exact bytes', () => {
  const before = JSON.stringify({...previousState, totalOpenIncidents: 6});
  assertPreserved(runFixture('ok', before, {}, healthy), before);
});
test('invalid telemetry on first run creates no snapshot', () => {
  const result = runFixture('ok', undefined, {}, {...healthy, 'pm2-slo-latest.json': null});
  assert.equal(result.status, 1);
  assert.equal(result.output, undefined);
  assert.deepEqual(result.leftovers, []);
});
