'use strict';
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const assert = require('node:assert/strict');
const { test } = require('node:test');

const html = readFileSync(resolve(__dirname, '../../public/guides/glpi-readiness/index.html'), 'utf8');

test('pt-BR document has a clear title, canonical and description', () => {
  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<title>Checklist de prontidão GLPI e Service Desk/);
  assert.match(html, /<meta name="description" content="[^"]+">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/ziontechgroup\.com\/guides\/glpi-readiness\/">/);
});

test('the educational checklist has exactly eight topical cards and a FAQ', () => {
  const checklist = html.split('<section id="checklist"')[1]?.split('</section>')[0];
  assert.ok(checklist, 'checklist section required');
  assert.equal((checklist.match(/<article>/g) || []).length, 8);
  assert.equal((checklist.match(/<h3>/g) || []).length, 8);
  assert.match(html, /<section id="perguntas"/);
  assert.ok((html.match(/<details>/g) || []).length >= 3);
});

test('contains authoritative source references for GLPI security, catalog and SLA', () => {
  assert.match(html, /www\.glpi-project\.org\/en\/glpi-12-0-2-and-11-0-13-are-available\//);
  assert.match(html, /help\.glpi-project\.org\/documentation\/modules\/assistance\/service-catalog/);
  assert.match(html, /help\.glpi-project\.org\/documentation\/modules\/configuration\/service_levels/);
  assert.match(html, /rollback/i);
});

test('manual commercial CTA and free discovery are available', () => {
  assert.match(html, /mailto:commercial@ziontechgroup\.com\?subject=/);
  assert.match(html, /href="\/discovery\/"/);
  assert.match(html, /href="\/services\/"/);
  assert.match(html, /href="\/contact\/"/);
});

test('no automated capture, booking, payment, client data or credential transfer', () => {
  assert.doesNotMatch(html, /<form[\s>]|fetch\s*\(|XMLHttpRequest|navigator\.sendBeacon|localStorage|sessionStorage|stripe\.com|<iframe/i);
  assert.doesNotMatch(html, /api[_-]?key|authorization:\s*bearer|secret[_-]?key/i);
});

test('no unsupported official-partnership, fixed quote or SLA commitment', () => {
  assert.match(html, /não comprova credenciamento/i);
  assert.match(html, /não fornece cotação/i);
  assert.match(html, /O diagnóstico garante implantação ou suporte 24×7\?/);
  assert.match(html, /Não\. Capacidade, equipe, horário, SLA, preço e datas/);
  assert.doesNotMatch(html, /aggregateRating|"@type":\s*"Offer"/);
});

test('JSON-LD contains only one valid article object', () => {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, 'structured data required');
  const data = JSON.parse(match[1]);
  assert.equal(data['@type'], 'Article');
  assert.equal(data.inLanguage, 'pt-BR');
  assert.equal(data.mainEntityOfPage['@id'], 'https://ziontechgroup.com/guides/glpi-readiness/');
});

test('no network-facing inline scripts or event attributes', () => {
  assert.doesNotMatch(html, /<script\b(?![^>]*type="application\/ld\+json")/i);
  assert.doesNotMatch(html, /\son(?:click|submit|load|error|change|input)\s*=/i);
});
