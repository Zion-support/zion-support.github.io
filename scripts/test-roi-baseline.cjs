'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const renderer = require('./render-roi-baseline.cjs');
const root = path.resolve(__dirname, '..');
const script = fs.readFileSync(path.join(root, 'public/assets/js/operational-tools.js'), 'utf8');
const copy = JSON.parse(fs.readFileSync(path.join(root, 'content/roi-baseline.json'), 'utf8'));
const common = JSON.parse(fs.readFileSync(path.join(root, 'content/operational-tools.json'), 'utf8'));

// Check numerical invariants independently of the generated UI.
const context = { module: { exports: {} } };
vm.runInNewContext(script, context);
const math = context.module.exports;
assert.equal(math.roi(40, 45).monthly, 1800);
assert.equal(math.roi(40, 45).yearly, 21600);
assert.equal(math.roi(1.5, 17.25).monthly, 25.875);
assert.equal(math.roi(1.5, 17.25).yearly, 310.5);
assert.equal(math.roi(0, 45).monthly, 0);
assert.equal(math.roi(40, 0).yearly, 0);
assert.equal(math.roi(1e6, 1e6).yearly, 12e12);
for (const bad of [-1, 1e6 + 1, NaN, Infinity, -Infinity, '40']) {
  assert.throws(() => math.roi(bad, 45));
  assert.throws(() => math.roi(40, bad));
}
// Shared-asset smoke check: the SLA formula is unchanged.
assert(Math.abs(math.sla(99.9, 30, 1000, 5, 1).total - 14) < 1e-8);

class Element {
  constructor() { this.dataset = {}; this.attributes = {}; this.children = []; this._text = ''; }
  get textContent() { return this._text + this.children.map(child => child.textContent).join(''); }
  set textContent(text) { this._text = String(text); this.children = []; }
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this._text = ''; this.children = children; }
  setAttribute(name, value) { this.attributes[name] = value; }
  removeAttribute(name) {
    delete this.attributes[name];
    if (name === 'data-error') delete this.dataset.error;
  }
}

function exerciseRuntime(config, locale) {
  const result = new Element(), error = new Element();
  const hours = new Element(), rate = new Element();
  hours.value = '40'; rate.value = '45';
  const events = {};
  let disabled = true;
  const button = {
    get disabled() { return disabled; },
    set disabled(value) {
      if (value === false) assert.equal(typeof events.submit, 'function', 'Submit interception must precede enabling');
      disabled = value;
    }
  };
  const form = { dataset: { kind: 'roi' }, addEventListener(name, callback) {
    if (name === 'submit') assert.equal(button.disabled, true, 'Form starts disabled');
    events[name] = callback;
  } };
  const elements = {
    'ops-copy': { textContent: JSON.stringify(config) }, 'ops-form': form,
    'ops-result': result, 'ops-error': error, 'roi-calculate': button, hours, rate
  };
  const document = { getElementById: id => elements[id] || null, createElement: () => new Element() };
  vm.runInNewContext(script, { document, Intl });
  assert.equal(button.disabled, false, 'Successful initialization enables the local calculation');
  const submit = () => {
    let prevented = false;
    events.submit({ preventDefault() { prevented = true; } });
    assert(prevented, 'No native navigation on submit');
  };
  assert.equal(JSON.parse(result.dataset.metrics).monthly, 1800);
  assert(result.textContent.includes(new Intl.NumberFormat(config.locale, { style: 'currency', currency: 'USD' }).format(1800)));
  assert.equal(error.textContent, '');

  hours.value = '80';
  events.input();
  assert.equal(result.textContent, copy[locale].pending);
  assert.equal(result.dataset.metrics, undefined, 'Previous metrics removed immediately after editing');
  assert.equal(result.dataset.pending, 'true');
  submit();
  assert.equal(JSON.parse(result.dataset.metrics).monthly, 3600);
  assert.equal(JSON.parse(result.dataset.metrics).yearly, 43200);
  assert.equal(result.dataset.pending, undefined);

  for (const id of ['hours', 'rate']) {
    for (const bad of ['', '-1', '1000001', 'Infinity', 'NaN', 'not-a-number']) {
      hours.value = '40'; rate.value = '45';
      elements[id].value = bad;
      events.input();
      assert.equal(result.dataset.metrics, undefined);
      submit();
      assert.equal(result.dataset.metrics, undefined, 'Invalid values cannot retain valid results');
      assert.equal(result.dataset.error, 'true');
      assert.equal(error.textContent, copy[locale].error);
      assert.equal(elements[id].attributes['aria-invalid'], 'true');
    }
  }
  hours.value = '0'; rate.value = '0';
  events.change();
  assert.equal(result.dataset.error, undefined);
  assert.equal(error.textContent, '');
  assert.equal(hours.attributes['aria-invalid'], undefined);
  assert.equal(rate.attributes['aria-invalid'], undefined);
  submit();
  assert.equal(JSON.parse(result.dataset.metrics).yearly, 0);
  assert.equal(result.dataset.error, undefined);
}

// Failed parsing or failed handler registration must leave the button disabled.
for (const failRegistration of [false, true]) {
  const button = { disabled: true };
  const elements = {
    'ops-copy': { textContent: failRegistration ? JSON.stringify({ locale: 'en-US' }) : '{invalid-json' },
    'ops-form': { dataset: { kind: 'roi' }, addEventListener() { throw new Error('Listener registration failed'); } },
    'ops-result': new Element(), 'ops-error': new Element(), 'roi-calculate': button
  };
  assert.throws(() => vm.runInNewContext(script, { document: { getElementById: id => elements[id] || null }, Intl }));
  assert.equal(button.disabled, true, 'Initialization failure cannot enable native submission');
}

const output = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-roi-baseline-'));
try {
  const unrelated = path.join(output, 'sla-calculator/index.html');
  fs.mkdirSync(path.dirname(unrelated), { recursive: true });
  fs.writeFileSync(unrelated, 'preserve unrelated calculator');
  const report = renderer.run(output);
  assert.equal(report.pages.length, 5);
  const firstPass = new Map();
  for (const locale of renderer.locales) {
    const route = renderer.route(locale), file = path.join(output, route.slice(1), 'index.html');
    const html = fs.readFileSync(file, 'utf8');
    firstPass.set(file, html);
    assert(html.includes('<html lang="' + common[locale].lang + '">'));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal((html.match(/aria-current="page"/g) || []).length, 1);
    assert.equal((html.match(/rel="alternate"/g) || []).length, 6);
    assert(html.includes('<link rel="canonical" href="https://ziontechgroup.com' + route + '">'));
    for (const other of renderer.locales) {
      assert(html.includes('hreflang="' + common[other].lang + '" href="https://ziontechgroup.com' + renderer.route(other) + '"'));
      assert(html.includes('href="' + renderer.route(other) + '"' + (other === locale ? ' aria-current="page"' : '') + '>'));
    }
    const prefix = locale === 'en' ? '/' : '/' + locale + '/';
    for (const target of ['apps/', 'discovery/', 'apps/operational-planning-tools.html', 'apps/finops-scenario-estimator.html', 'apps/finops-pilot-guide.html', 'apps/network.html', 'apps/app-verification-guide.html']) {
      assert(html.includes('href="' + prefix + target + '"'), 'Same-language destination: ' + locale + target);
    }
    assert(html.includes('id="ops-error" class="roi-error" role="alert"'));
    assert(html.includes('aria-live="polite" aria-atomic="true"'));
    assert.equal((html.match(/id="ops-form"/g) || []).length, 1);
    assert.equal((html.match(/type="number"/g) || []).length, 2);
    assert(html.includes('<button id="roi-calculate" type="submit" disabled>'), 'JavaScript-disabled and fail-load fallback stays disabled');
    for (const input of html.match(/<input\b[^>]*>/g) || []) assert(!/\bname\s*=/i.test(input), 'Inputs are not successful native form controls');
    assert(!/field-service-evidence-guide|Em breve|Coming soon|Starter\s*\$|Growth\s*\$/i.test(html));
    const config = JSON.parse(html.match(/<script id="ops-copy" type="application\/json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(config.locale, common[locale].locale);
    assert.deepEqual(config.labels, copy[locale].labels);
    assert.deepEqual(config.outputs, copy[locale].outputs);
    exerciseRuntime(config, locale);
  }
  renderer.run(output);
  for (const [file, bytes] of firstPass) assert.equal(fs.readFileSync(file, 'utf8'), bytes, 'Deterministic repeated rendering');
  assert.equal(fs.readFileSync(unrelated, 'utf8'), 'preserve unrelated calculator');
  assert.equal(fs.readFileSync(path.join(output, 'assets/js/operational-tools.js'), 'utf8'), script);
  assert(!/fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon/.test(script), 'No transmission or browser storage');
  console.log('PASS ROI baseline: arithmetic and bounds; five translated reciprocal editions; fresh/error/pending UI states; local currency formatting; unchanged unrelated page; deterministic render.');
} finally {
  fs.rmSync(output, { recursive: true, force: true });
}
