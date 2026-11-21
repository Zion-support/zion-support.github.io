'use strict';
// Repo-only static asset contract. No network, publish step, credentials or writes.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const path = 'public/assets/js/zion-catalog.js';
const source = fs.readFileSync(path, 'utf8');
assert.ok(source.length > 300, 'Catalog asset is empty or incomplete');
new vm.Script(source, {filename: path});

for (const marker of [
  'name: "Free Discovery", href: "/discovery/"',
  'Agentes Telegram', 'Estimador FinOps', 'ensureFinops', 'finops-form'
]) {
  assert.ok(source.includes(marker), 'Required real resource missing: '+marker);
}
assert.doesNotMatch(source, /Discovery\s*(?:\$|USD|R\$)\s*99\b/i, 'Legacy paid Discovery must not return');
assert.doesNotMatch(source, /href:\s*["']\/agents\/["']/i, 'Broken /agents/ alias must not be advertised');
assert.doesNotMatch(source, /\b(?:fetch|XMLHttpRequest|sendBeacon)\s*\(/, 'Catalog must not send data');
const urls = [...source.matchAll(/\bhref:\s*"([^"]+)"/g)].map(m=>m[1]);
assert.ok(urls.length >= 5, 'Expected useful first-party links');
assert.ok(urls.every(url=>/^\/[a-z0-9/-]+\/$/.test(url)), 'Catalog has unsafe or non-canonical URLs');
const fakeDocument = {
  readyState: 'complete',
  getElementById: function () { return null; }
};
vm.runInNewContext(source, {document: fakeDocument, console}, {timeout:1000});
console.log('PASS: first-party links, no paid Discovery, parseable JS, no global DOM injection.');


// Isolated DOM model: assert a FinOps form neither navigates nor sends data,
// and the local estimate responds to input with bounded arithmetic.
const byId = new Map();
class Node {
  constructor(tag) {
    this.tagName = tag;
    this.children = [];
    this.listeners = {};
    this.textContent = '';
    this.value = '';
  }
  set id(value) { this._id = value; byId.set(value, this); }
  get id() { return this._id; }
  appendChild(child) { this.children.push(child); return child; }
  addEventListener(event, fn) { (this.listeners[event] ||= []).push(fn); }
  setAttribute(name, value) { this[name] = value; }
}
const host = new Node('section');
host.id = 'finops-estimator';
const dom = {
  readyState: 'complete',
  getElementById: id => byId.get(id) || null,
  createElement: tag => new Node(tag)
};
class LocalFormData {
  constructor(form) {
    this.values = new Map();
    function walk(node, target) {
      if (node.name) target.set(node.name, node.value);
      for (const child of node.children) walk(child, target);
    }
    walk(form, this.values);
  }
  get(name) { return this.values.get(name); }
}
vm.runInNewContext(source, {document: dom, FormData: LocalFormData, console}, {timeout:1000});
const form = byId.get('finops-form'), output = byId.get('finops-out');
assert.ok(form && output, 'Optional FinOps host must initialize an offline calculator');
function walk(node, results=[]) {
  if (node.name) results.push(node);
  for (const child of node.children) walk(child, results);
  return results;
}
const fields = Object.fromEntries(walk(form).map(node=>[node.name,node]));
assert.deepEqual(Object.keys(fields).sort(),['hours','idle','rate','spend']);
fields.spend.value = '1000';
fields.idle.value = '20';
fields.hours.value = '2';
fields.rate.value = '50';
assert.equal(form.listeners.input.length,1);
form.listeners.input[0]();
assert.match(output.textContent,/USD 3,600\b/);
assert.match(output.textContent,/nao representa economia comprovada ou garantida/);
let blocked = false;
assert.equal(form.listeners.submit.length,1,'Implicit form submit must be intercepted');
form.listeners.submit[0]({preventDefault() {blocked = true;}});
assert.equal(blocked,true,'Form must not submit a GET request with customer inputs');
fields.spend.value = '-100';
fields.hours.value = '-2';
fields.idle.value = '0';
form.listeners.input[0]();
assert.match(output.textContent,/USD 0\b/);
console.log('PASS: offline FinOps interaction, bounded example, prevented submit and zero network');
