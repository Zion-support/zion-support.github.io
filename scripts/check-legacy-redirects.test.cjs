const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { validateLegacyRedirects } = require('./check-legacy-redirects.cjs');

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-redirects-'));
  t.after(() => {
    const resolved = fs.realpathSync(root);
    assert.equal(path.dirname(resolved), fs.realpathSync(os.tmpdir()));
    assert.ok(path.basename(resolved).startsWith('zion-redirects-'));
    fs.rmSync(resolved, { recursive: true });
  });
  for (const route of ['why-ai-consulting-firm', 'enterprise-ai-services', 'stripe', 'services']) {
    fs.mkdirSync(path.join(root, route));
    fs.writeFileSync(path.join(root, route, 'index.html'), route === 'services' ? '<h1>Services</h1>' :
      '<link rel="canonical" href="https://ziontechgroup.com/services/">' +
      '<meta http-equiv="refresh" content="0; url=/services/">');
  }
  return root;
}

test('all three aliases reach the same stable catalog', t => {
  assert.equal(validateLegacyRedirects(fixture(t)), 3);
});

for (const route of ['why-ai-consulting-firm', 'enterprise-ai-services', 'stripe']) {
  test(`rejects the production self-refresh regression on /${route}/`, t => {
    const root = fixture(t);
    fs.writeFileSync(path.join(root, route, 'index.html'),
      `<meta content='0; URL=/${route}/' HTTP-EQUIV='refresh'>`);
    assert.throws(() => validateLegacyRedirects(root), /Self-refresh loop/);
  });
}

test('rejects mismatched canonical and redirect chain on the destination', t => {
  const root = fixture(t);
  const file = path.join(root, 'stripe', 'index.html');
  const good = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, good.replace('href="https://ziontechgroup.com/services/"', 'href="https://ziontechgroup.com/stripe/"'));
  assert.throws(() => validateLegacyRedirects(root), /canonical must match/);
  fs.writeFileSync(file, good);
  fs.writeFileSync(path.join(root, 'services', 'index.html'), '<meta http-equiv="refresh" content="0;url=/stripe/">');
  assert.throws(() => validateLegacyRedirects(root), /landing page/);
});
