const test = require('node:test');
const assert = require('node:assert/strict');
const { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const { spawnSync } = require('node:child_process');

const script = join(__dirname, 'check-automation-health-static-freshness.cjs');
const hoursAgo = (hours) => new Date(Date.now() - hours * 36e5).toISOString();

function runCheck(t, { snapshot, raw, maxHours } = {}) {
  const cwd = mkdtempSync(join(tmpdir(), 'zion-freshness-'));
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  const healthPath = join(cwd, 'public', 'api', 'automation-health.json');
  if (snapshot !== undefined || raw !== undefined) {
    mkdirSync(join(cwd, 'public', 'api'), { recursive: true });
    writeFileSync(healthPath, raw !== undefined ? raw : JSON.stringify(snapshot));
  }
  const outputPath = join(cwd, 'github-output');
  writeFileSync(outputPath, 'previous_output=preserved\n');
  const env = { ...process.env, GITHUB_OUTPUT: outputPath };
  delete env.AUTOMATION_HEALTH_STATIC_MAX_HOURS;
  if (maxHours !== undefined) env.AUTOMATION_HEALTH_STATIC_MAX_HOURS = maxHours;
  const result = spawnSync(process.execPath, [script], { cwd, env, encoding: 'utf8' });
  assert.ifError(result.error);
  const report = JSON.parse(readFileSync(join(cwd, 'automation', 'reports', 'automation-health-static-freshness-latest.json'), 'utf8'));
  assert.deepEqual(JSON.parse(result.stdout), report);
  const output = readFileSync(outputPath, 'utf8');
  assert.equal(output, `previous_output=preserved\nstatic_health_fresh=${report.staticHealthFresh}\n`);
  return { result, report };
}

for (const maxHours of [undefined, '', '  ']) {
  test(`unset or blank threshold uses 24 hours (${JSON.stringify(maxHours)})`, (t) => {
    const { result, report } = runCheck(t, { snapshot: { timestamp: hoursAgo(2) }, maxHours });
    assert.equal(result.status, 0);
    assert.equal(report.maxHoursAllowed, 24);
    assert.equal(report.staticHealthFresh, 'true');
    assert.equal(report.staticHealthValid, true);
  });
}

test('stale snapshot fails and still persists an artifact and false output', (t) => {
  const { result, report } = runCheck(t, { snapshot: { timestamp: hoursAgo(48) } });
  assert.equal(result.status, 1);
  assert.equal(report.staticHealthValid, true);
  assert.equal(report.staticHealthFresh, 'false');
  assert.equal(report.coreStatus, 'stale');
});

test('explicit threshold controls both evaluation and report', (t) => {
  const { result, report } = runCheck(t, { snapshot: { generatedAt: hoursAgo(2) }, maxHours: ' 1.5 ' });
  assert.equal(result.status, 1);
  assert.equal(report.maxHoursAllowed, 1.5);
  assert.equal(report.staticHealthFresh, 'false');
});

test('explicit zero is retained rather than replaced by the default', (t) => {
  const { result, report } = runCheck(t, { snapshot: { timestamp: hoursAgo(1) }, maxHours: '0' });
  assert.equal(result.status, 1);
  assert.equal(report.maxHoursAllowed, 0);
});

for (const maxHours of ['invalid', '-1', 'Infinity']) {
  test(`invalid threshold fails closed (${maxHours})`, (t) => {
    const { result, report } = runCheck(t, { snapshot: { timestamp: hoursAgo(1) }, maxHours });
    assert.equal(result.status, 1);
    assert.equal(report.staticHealthFresh, 'false');
    assert.equal(report.maxHoursAllowed, null);
    assert.match(report.error, /finite non-negative/);
  });
}

for (const fixture of [{}, { raw: '' }, { raw: '{broken' }, { snapshot: {} }, { snapshot: { timestamp: 'invalid' } }, { snapshot: { timestamp: 123 } }]) {
  test(`invalid or missing snapshot writes failure evidence (${JSON.stringify(fixture)})`, (t) => {
    const { result, report } = runCheck(t, fixture);
    assert.equal(result.status, 1);
    assert.equal(report.staticHealthFresh, 'false');
    assert.equal(report.staticHealthValid, false);
    assert.ok(report.error);
  });
}

test('future timestamp is never fresh', (t) => {
  const { result, report } = runCheck(t, { snapshot: { timestamp: hoursAgo(-2) } });
  assert.equal(result.status, 1);
  assert.equal(report.staticHealthFresh, 'false');
  assert.ok(report.staticHealthAgeHours < 0);
});
