'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const page = fs.readFileSync(path.join(root, 'public/services/datacenter-maintenance-brazil/index.html'), 'utf8');
const hub = fs.readFileSync(path.join(root, 'public/services/index.html'), 'utf8');

test('Brazil datacenter landing has one canonical, title, description and Portuguese language', () => {
  assert.match(page, /<html lang="pt-BR">/);
  assert.equal((page.match(/rel="canonical"/g) || []).length, 1);
  assert.match(page, /<title>Manutenção de Datacenters no Brasil/);
  assert.match(page, /<meta name="description"/);
  assert.match(page, /https:\/\/ziontechgroup\.com\/services\/datacenter-maintenance-brazil\//);
});
test('structured data describes a genuine service and a consistent breadcrumb trail', () => {
  const content = page.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(content, 'Missing JSON-LD');
  const json = JSON.parse(content);
  const service = json['@graph'].find(s => s['@type'] === 'Service');
  const crumbs = json['@graph'].find(s => s['@type'] === 'BreadcrumbList');
  assert.equal(service.provider.name, 'Zion Tech Group');
  assert.equal(service.areaServed.name, 'Brazil');
  assert.equal(crumbs.itemListElement.length, 3);
  assert.equal(crumbs.itemListElement[2].item, service.url);
});
test('CTA is identifiable and scope qualification does not assert guaranteed availability', () => {
  assert.match(page, /mailto:commercial@ziontechgroup\.com/);
  assert.match(page, /técnicos, preços, SLA e cobertura local são confirmados após qualificação/);
  assert.match(page, /Não envie senhas/);
});
test('services hub links to landing and page points back to hub', () => {
  assert.match(hub, /href="\/services\/datacenter-maintenance-brazil\/"/);
  assert.match(page, /href="\/services\/"/);
});


test('RFQ draft is assembled on explicit user submit without remote transmission or storage', () => {
  assert.match(page, /<form id="rfq-template"/);
  assert.match(page, /<button class="button" type="submit">Gerar texto da RFQ<\/button>/);
  assert.match(page, /event\.preventDefault\(\)/);
  assert.match(page, /new FormData\(form\)/);
  assert.match(page, /output\.textContent = body/);
  assert.match(page, /encodeURIComponent\(body\)/);
  assert.match(page, /mailto:commercial@ziontechgroup\.com/);
  assert.doesNotMatch(page, /\bfetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon/);
});
test('RFQ form bounds input and explicitly states no automatic sending', () => {
  assert.match(page, /name="city" maxlength="100" required/);
  assert.match(page, /name="scope" maxlength="500" rows="4" required/);
  assert.match(page, /name="window" maxlength="120" required/);
  assert.match(page, /não envia e-mail automaticamente/);
  assert.match(page, /role="status" aria-live="polite"/);
});

test('commercial sitemap discovers the canonical page exactly once without an invented lastmod', () => {
  const site = fs.readFileSync(path.join(root, 'public/sitemap-0.xml'), 'utf8');
  const canonical = 'https://ziontechgroup.com/services/datacenter-maintenance-brazil/';
  assert.equal(site.split('<loc>' + canonical + '</loc>').length - 1, 1);
  const entry = site.match(/<url>\s*<loc>https:\/\/ziontechgroup\.com\/services\/datacenter-maintenance-brazil\/<\/loc>[\s\S]*?<\/url>/);
  assert.ok(entry, 'Sitemap missing the public canonical URL');
  assert.doesNotMatch(entry[0], /<lastmod>/, 'Do not advertise an unverified publication date');
});


const vm = require('node:vm');

function rfqBrowserHarness(values, valid = true, available = true) {
  const inlineScript = page.match(/<script>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(inlineScript, 'RFQ interaction script missing');
  const handlers = {};
  const nodes = {};
  for (const id of ['rfq-preview', 'rfq-output', 'rfq-mail', 'rfq-feedback'])
    nodes[id] = { hidden: id === 'rfq-preview', textContent: '', href: '' };
  nodes['rfq-template'] = {
    addEventListener: (kind, callback) => { handlers[kind] = callback; },
    reportValidity: () => valid,
  };
  nodes['rfq-copy'] = {
    addEventListener: (kind, callback) => { handlers.copy = callback; },
  };
  const copied = [];
  const navigator = { clipboard: available ? { writeText: async value => { copied.push(value); } } : null };
  class FormData { constructor() { this.values = values; } get(key) { return this.values[key] ?? null; } }
  vm.runInNewContext(inlineScript, {
    document: { getElementById: id => nodes[id] },
    FormData, navigator, encodeURIComponent,
  });
  return { handlers, nodes, copied };
}

test('real RFQ handler generates an encoded mailto only after explicit valid submit', () => {
  const h = rfqBrowserHarness({
    city: 'São Paulo, SP',
    category: 'Servidores e storage',
    scope: 'Trocar HD & revisar <incidente>',
    window: '16/11 às 10h',
  });
  assert.equal(h.nodes['rfq-preview'].hidden, true);
  let prevented = false;
  h.handlers.submit({ preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(h.nodes['rfq-preview'].hidden, false);
  const draft = h.nodes['rfq-mail'].href;
  assert.ok(draft.startsWith('mailto:commercial@ziontechgroup.com?subject='));
  const [subject, body] = draft.split('?')[1].split('&')
    .map(part => decodeURIComponent(part.split('=').slice(1).join('=')));
  assert.match(subject, /São Paulo/);
  assert.match(body, /Trocar HD & revisar <incidente>/);
  assert.equal(h.nodes['rfq-output'].textContent, body);
});

test('invalid form or missing required values cannot generate a draft', () => {
  const invalid = rfqBrowserHarness({ city: 'SP', category: '', scope: '', window: '' }, false);
  invalid.handlers.submit({ preventDefault() {} });
  assert.equal(invalid.nodes['rfq-preview'].hidden, true);
  assert.equal(invalid.nodes['rfq-mail'].href, '');
  const empty = rfqBrowserHarness({ city: 'SP', category: '', scope: 'Test', window: 'Tomorrow' });
  empty.handlers.submit({ preventDefault() {} });
  assert.equal(empty.nodes['rfq-preview'].hidden, true);
});

test('RFQ copy requires a click and clipboard failure has a safe fallback', async () => {
  const values = { city: 'Campinas, SP', category: 'Redes e racks', scope: 'Patch panel', window: '16/11' };
  const h = rfqBrowserHarness(values);
  h.handlers.submit({ preventDefault() {} });
  assert.equal(h.copied.length, 0);
  await h.handlers.copy();
  assert.equal(h.copied[0], h.nodes['rfq-output'].textContent);
  const unavailable = rfqBrowserHarness(values, true, false);
  unavailable.handlers.submit({ preventDefault() {} });
  await unavailable.handlers.copy();
  assert.match(unavailable.nodes['rfq-feedback'].textContent, /manualmente/);
});
