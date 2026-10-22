'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { ROUTES, normalizeTarget, anchorItems, freeToPaidConflicts, audit, saveReport } = require('./growth-signal-verifier.cjs');
const HOME = '<html><body><h1>Zion Tech Group Discovery</h1><a href="/app-network-discovery.html">Free AI Discovery</a><a href="/discovery/">Free Discovery</a></body></html>';
const GOOD = {
  '/': HOME,
  '/apps/': '<html><h1>Zion Apps Network</h1><p>Free Discovery available and many apps available across the entire free IT and AI tooling network for operators.</p></html>',
  '/app-network-discovery.html': '<html><h1>Free AI Discovery</h1><p>8 questions with instant results, recommendations and a fully free public questionnaire.</p></html>',
  '/discovery/': '<html><h1>Discovery $99 for Consulting</h1><a href="https://buy.stripe.com/mock">Pay $99</a><p>Executive process map and consulting session included in paid Discovery.</p></html>',
  '/contact/': '<html><h1>Contact Zion Tech Group</h1><p>hello@ziontechgroup.com and engineering team for IT on demand support and detailed consultations.</p></html>',
};
function probeFor(overrides = {}) {
  const responses = { ...GOOD, ...overrides };
  return async (url) => ({ status: 200, type: 'text/html; charset=utf-8', body: responses[new URL(url).pathname] });
}

test('on-origin HTTPS guard rejects unsafe origins and non-HTTPS URLs', () => {
  assert.equal(normalizeTarget('/apps/').toString(), 'https://ziontechgroup.com/apps/');
  for (const x of ['http://ziontechgroup.com/', 'https://evil.test/', 'https://ziontechgroup.com.evil.test/', 'https://u:p@ziontechgroup.com/']) {
    assert.throws(() => normalizeTarget(x));
  }
});
test('extract href and label, ignoring other markup', () => {
  assert.deepEqual(anchorItems('<a class="hero" href="/discovery/"><strong>Free</strong> Discovery</a>'), [{ href: '/discovery/', text: 'Free Discovery' }]);
});
test('a free CTA into a paid Discovery page is a real warning, not a checkout failure', async () => {
  const result = await audit({ probe: probeFor(), now: () => '2026-10-22T00:00:00Z' });
  assert.equal(result.severity, 'warning');
  assert.equal(result.healthy_routes, 5);
  assert.equal(result.unhealthy_routes, 0);
  assert.equal(result.free_paid_label_conflicts, 1);
  assert.equal(result.generated_at_utc, '2026-10-22T00:00:00Z');
});
test('a free CTA to the free page, or a paid CTA to the paid page, is healthy', async () => {
  const html = HOME.replace('<a href="/discovery/">Free Discovery</a>', '<a href="/discovery/">Consulting Discovery $99</a>');
  const result = await audit({ probe: probeFor({ '/': html }) });
  assert.equal(result.severity, 'ok');
  assert.equal(result.free_paid_label_conflicts, 0);
});
test('does not claim a conflict when the destination is no longer a paid page', () => {
  assert.equal(freeToPaidConflicts(HOME, '<h1>Free Discovery</h1>'), 0);
});
test('broken HTTP, wrong type, missing markers and network errors are not green', async () => {
  const probe = async (url) => {
    const p = new URL(url).pathname;
    if (p === '/apps/') return { status: 500, type: 'text/html', body: '' };
    if (p === '/contact/') throw new Error('ETIMEDOUT: a url');
    if (p === '/discovery/') return { status: 200, type: 'application/json', body: '{}' };
    return probeFor()(url);
  };
  const result = await audit({ probe });
  assert.equal(result.severity, 'critical');
  assert.equal(result.unhealthy_routes, 3);
  assert.equal(result.routes.find(x => x.route === '/contact/').reason, 'network-error');
  assert.equal(result.free_paid_label_conflicts, 0);
});
test('saveReport writes bounded machine and human evidence, without source page contents', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-growth-'));
  try {
    const report = await audit({ probe: probeFor() });
    const files = saveReport(report, dir);
    const json = JSON.parse(fs.readFileSync(files.json, 'utf8'));
    const md = fs.readFileSync(files.markdown, 'utf8');
    assert.equal(json.severity, 'warning');
    assert.match(md, /Working routes/);
    assert.doesNotMatch(JSON.stringify(json), /buy\.stripe\.com\/mock/);
    assert.doesNotMatch(md, /hello@ziontechgroup\.com/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
test('workflow owns a single daily schedule, read-only permissions, no npm install or issue writes', () => {
  const workflow = fs.readFileSync(path.join(__dirname, '..', '.github/workflows/autonomous-growth-signal-monitor.yml'), 'utf8');
  assert.match(workflow, /contents: read/);
  assert.match(workflow, /cron: '43 10 \* \* \*'/);
  assert.match(workflow, /node --test automation\/growth-signal-verifier\.test\.cjs/);
  assert.match(workflow, /node automation\/growth-signal-verifier\.cjs/);
  assert.match(workflow, /persist-credentials: false/);
  assert.doesNotMatch(workflow, /issues: write|contents: write|npm ci|autonomy:growth-signal|gh-issue-/);
  assert.equal((workflow.match(/cron:/g) || []).length, 1);
  for (const m of workflow.matchAll(/uses:\s*([^\s#]+)/g)) {
    assert.match(m[1], /@[a-f0-9]{40}$/i);
  }
});
test('expected monitored production paths stay explicit', () => {
  assert.deepEqual(ROUTES.map(x => x.pathname), ['/', '/apps/', '/app-network-discovery.html', '/discovery/', '/contact/']);
});
