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
