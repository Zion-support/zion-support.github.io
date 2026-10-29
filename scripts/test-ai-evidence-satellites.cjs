'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ROOT = process.env.ZION_APPS_ROOT || path.resolve(__dirname, '..', 'public');
const SLUGS = ['agent-trace-evidence-lab', 'field-sla-acceptance-matrix', 'ai-dependency-blast-radius'];
class Element {
  constructor(id = '') {
    this.id = id; this.value = ''; this.checked = false; this.textContent = '';
    this.className = ''; this.children = []; this.events = []; this.options = [];
  }
  addEventListener(name, fn) { this.events[name] = fn; }
  replaceChildren(...items) {
    this.children = [...items];
    if (this.id === 'failure') { this.options = [...items]; this.value = items[0]?.value || ''; }
  }
  append(...items) {
    this.children.push(...items);
    if (this.id === 'failure') {
      this.options.push(...items);
      if (this.options.length === 1) this.value = items[0].value;
    }
  }
  appendChild(item) { this.append(item); return item; }
  click() { assert.equal(typeof this.events.click, 'function', 'missing click handler ' + this.id); return this.events.click(); }
}
function boot(slug) {
  const html = fs.readFileSync(path.join(ROOT, slug, 'index.html'), 'utf8');
  const code = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(code, slug + ': no inline JS');
  new vm.Script(code, { filename: slug + '.js' });
  const elements = new Map();
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, new Element(id));
      return elements.get(id);
    },
    createElement(tag) { return new Element(tag); }
  };
  const el = id => document.getElementById(id);
  if (slug === 'field-sla-acceptance-matrix') {
    for (const [k,v] of Object.entries({
      sites:'2', concurrent:'1', hrs:'4', travel:'1.5', handoff:'1',
      techs:'0', vendor:'100', extras:'0', skill:'no', verified:'no'
    })) el(k).value = v;
  }
  vm.runInNewContext(code, {document, navigator:{}, console, BigInt, Number, JSON, Set, Map, Error, Math, String, Array, RegExp}, { timeout: 2000 });
  return { html, el };
}
test('three local-only apps expose truthful canonical, Discovery and reciprocal paths', () => {
  for (const slug of SLUGS) {
    const {html} = boot(slug);
    assert.ok(html.includes('https://ziontechgroup.com/' + slug + '/'));
    assert.ok(html.includes('https://ziontechgroup.com/discovery/'));
    assert.ok(html.includes('commercial@ziontechgroup.com'));
    assert.ok(!/<script[^>]+src=|<iframe|<form[^>]+action=/.test(html));
    for (const other of SLUGS.filter(s => s !== slug)) {
      assert.ok(html.includes('https://ziontechgroup.com/' + other + '/'), slug + ' must link ' + other);
    }
  }
});
test('trace demo parses nested OTLP and invalid JSON safely', () => {
  const {el} = boot('agent-trace-evidence-lab');
  el('demo').click();
  assert.match(el('status').textContent, /Analyzed 2 spans locally/);
  assert.match(el('metrics').children.map(x => x.children.map(y => y.textContent).join(':')).join('|'), /180/);
  el('trace').value = '{invalid'; el('analyze').click();
  assert.match(el('status').textContent, /Could not analyze/);
});
test('field SLA: one FE can qualify sequential sites but not concurrent sites', () => {
  const {el} = boot('field-sla-acceptance-matrix');
  el('techs').value = '1'; el('skill').value = 'yes'; el('assess').click();
  assert.match(el('result').textContent, /HOLD/);
  assert.ok(!el('evidence').children.some(x => x.textContent.includes('Missing: Individual qualified')));
  assert.ok(el('evidence').children.some(x => x.textContent.includes('Missing: Applicable PO')));
  for (const id of ['parts','siteaccess','client','po','zion']) el(id).checked = true;
  el('verified').value = 'yes'; el('assess').click();
  assert.match(el('result').textContent, /EVIDENCE PRESENT/);
  assert.match(el('commercial').textContent, /140\.00/);
  el('concurrent').value = '2'; el('assess').click();
  assert.match(el('result').textContent, /HOLD/);
  assert.ok(el('evidence').children.some(x => x.textContent.includes('Missing: Individual qualified')));
  el('concurrent').value = '3'; el('assess').click();
  assert.match(el('result').textContent, /concurrency no greater than sites/);
});
test('dependency graph: impacted paths are transitive; invalid refs rejected', () => {
  const {el} = boot('ai-dependency-blast-radius');
  el('sample').click();
  assert.match(el('status').textContent, /Validated 9 nodes/);
  el('failure').value = 'gpu-cluster'; el('simulate').click();
  assert.ok(el('affected').children.some(x => x.textContent.includes('customer-portal')));
  el('graph').value = JSON.stringify([{id:'a',dependsOn:['missing']}]);
  el('parse').click();
  assert.match(el('status').textContent, /Unknown dependency/);
});