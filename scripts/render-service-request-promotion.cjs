'use strict';

// Keep the datacenter request entry consistent with its five catalog editions.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {data, locales, route} = require('./render-apps-directory.cjs');
const start = '<!--datacenter-request-home:start-->';
const end = '<!--datacenter-request-home:end-->';
const anchor = '<!--verification-guide-home:end-->';
const release = 'datacenter-request-home-2026-10-30-v1';
const labels = {
  en: ['Prepare your service request', 'Explore the app network'],
  pt: ['Prepare sua solicitação de serviço', 'Explore a rede de apps'],
  es: ['Prepare su solicitud de servicio', 'Explore la red de apps'],
  fr: ['Préparez votre demande de service', 'Explorez le réseau d’apps'],
  de: ['Serviceanfrage vorbereiten', 'App-Netzwerk entdecken']
};
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const protectedParts = html => html.match(/<script\b[\s\S]*?<\/script>|<form\b[\s\S]*?<\/form>|<style\b[\s\S]*?<\/style>/gi) || [];

function block(locale) {
  const resource = data.resources.find(r => r.id === 'service-request');
  assert(resource, 'Service-request catalog resource is missing');
  const planner = data.resources.find(r => r.id === 'service-cost-planner');
  assert(planner, 'Service cost planner catalog resource is missing');
  const c = resource.text[locale];
  const p = planner.text[locale];
  const landing = '/zion-app-network/' + (locale === 'en' ? '' : 'home-' + locale + '.html');
  const plannerCard = `<article class="card cta-box" data-service-cost-planner="service-cost-planner-home-2026-10-31-v1" aria-labelledby="service-cost-planner-home-title"><h4 id="service-cost-planner-home-title"><a href="${route(locale,planner)}">${escape(p.title)}</a></h4><p>${escape(p.description)}</p></article>`;
  return start + `<section class="section section-soft" id="datacenter-service-request-home" data-service-request-home="${release}" aria-labelledby="datacenter-request-home-title"><h3 id="datacenter-request-home-title">${escape(c.title)}</h3><p>${escape(c.description)}</p><div class="actions"><a class="btn" href="${route(locale,resource)}">${escape(labels[locale][0])}</a><a class="btn alt" href="${landing}">${escape(labels[locale][1])}</a></div>${plannerCard}</section>` + end;
}

function render(html, locale) {
  const original = protectedParts(html);
  const pattern = /<!--datacenter-request-home:start-->[\s\S]*?<!--datacenter-request-home:end-->/g;
  const clean = html.replace(pattern, '');
  assert.equal(clean.split(anchor).length - 1, 1, 'Expected one existing guide promotion anchor: ' + locale);
  const next = clean.replace(anchor, anchor + block(locale));
  assert.deepEqual(protectedParts(next), original, 'Existing forms/scripts/styles changed: ' + locale);
  assert.equal(next.split('id="datacenter-service-request-home"').length - 1, 1);
  return next;
}

function run(root = path.join(__dirname,'../public'), check = false) {
  for (const locale of locales) {
    const file = path.join(root, locale === 'pt' ? 'index.html' : locale + '/index.html');
    const before = fs.readFileSync(file,'utf8');
    const after = render(before,locale);
    if (check) assert.equal(before,after,'Stale homepage promotion: ' + locale);
    else fs.writeFileSync(file,after);
  }
  console.log(`${check ? 'Verified' : 'Rendered'} service-request and cost-planner promotions in five homepages; existing forms, scripts and styles preserved.`);
}

module.exports = {block,render,run};
if (require.main === module) run(process.argv[2] && process.argv[2] !== '--check' ? process.argv[2] : undefined, process.argv.includes('--check'));
