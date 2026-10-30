'use strict';
// Offline regression checks for the guide family; never runs the legacy release chain.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const origin = 'https://ziontechgroup.com';
const locales = ['en', 'pt', 'es', 'fr', 'de'];
const lang = code => code === 'pt' ? 'pt-BR' : code;
const guide = code => '/apps/field-service-evidence-guide' + (code === 'en' ? '' : '.' + (code === 'pt' ? 'pt-br' : code)) + '.html';
const map = code => (code === 'en' ? '' : '/' + code) + '/apps/network.html';
const text = html => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map(m => [m[1].toLowerCase(), m[2]]));
const required = {
  en: [/formal written client confirmation/i, /corresponding purchase order \(PO\)/i, /specific Zion operational release/i, /before any purchase, reservation or dispatch/i],
  pt: [/confirmação formal escrita do cliente/i, /PO correspondente/i, /liberação operacional específica da Zion/i, /antes de qualquer compra, reserva ou despacho/i],
  es: [/confirmación formal por escrito del cliente/i, /orden de compra \(PO\) correspondiente/i, /autorización operativa específica de Zion/i, /antes de cualquier compra, reserva o despacho/i],
  fr: [/confirmation écrite formelle du client/i, /bon de commande \(PO\) correspondant/i, /autorisation opérationnelle spécifique de Zion/i, /avant tout achat, réservation ou envoi d’une équipe/i],
  de: [/formelle schriftliche Kundenbestätigung/i, /zugehörige Bestellung \(PO\)/i, /spezifische operative Freigabe durch Zion/i, /vor jedem Kauf, jeder Reservierung oder Entsendung/i]
};
const alternatives = /(?:applicable PO(?:\/| or )reference|PO\/referência|PO ou referência|PO o referencia|orden de compra o referencia|bon de commande ou la référence|Bestell(?:ung|nummer) oder Referenz)/i;
const privacy = {
  en: /public guide does not request/i,
  pt: /guia público não solicita/i,
  es: /guía pública no solicita/i,
  fr: /guide public ne demande pas/i,
  de: /öffentliche Leitfaden fordert diese Daten nicht an/i
};
const serviceTimes = {
  en: /response, restoration and resolution/i,
  pt: /resposta, restauração e solução/i,
  es: /respuesta, restauración y resolución/i,
  fr: /réponse, de rétablissement et de résolution/i,
  de: /Reaktionszeit, Wiederherstellungszeit und endgültige Behebung/i
};
const rights = {
  en: /Physical maintenance does not automatically grant/i,
  pt: /Manutenção física não concede automaticamente/i,
  es: /El mantenimiento físico no otorga automáticamente/i,
  fr: /La maintenance physique ne confère pas automatiquement/i,
  de: /Physische Wartung gewährt nicht automatisch/i
};

function checkApproval(value, locale, label) {
  const plain = text(value);
  for (const pattern of required[locale]) assert(pattern.test(plain), label + ': missing ' + pattern);
  assert(!alternatives.test(plain), label + ': obsolete PO alternative');
}

function checkGuide(html, locale, label) {
  checkApproval(html, locale, label);
  assert(html.includes('<html lang="' + lang(locale) + '">'), label + ': document language');
  assert.equal((html.match(/<h1\b/gi) || []).length, 1, label + ': one page heading');
  assert(!/<form\b|<script\b/i.test(html), label + ': read-only guide');
  assert(privacy[locale].test(text(html)), label + ': authorized-channel privacy boundary');
  assert(serviceTimes[locale].test(text(html)), label + ': distinct service times');
  assert(rights[locale].test(text(html)), label + ': physical-maintenance entitlement boundary');
  assert(html.includes('href="' + map(locale) + '"'), label + ': matching-language network map');
  const links = (html.match(/<link\b[^>]*>/gi) || []).map(attrs);
  const canonical = links.filter(link => link.rel === 'canonical');
  assert.equal(canonical.length, 1, label + ': one canonical');
  assert.equal(canonical[0].href, origin + guide(locale), label + ': canonical target');
  const alternates = links.filter(link => link.rel === 'alternate');
  assert.equal(alternates.length, 6, label + ': exactly six alternates');
  for (const code of [...locales, 'x-default']) {
    const language = code === 'x-default' ? code : lang(code);
    const matches = alternates.filter(link => link.hreflang === language);
    assert.equal(matches.length, 1, label + ': unique alternate ' + language);
    assert.equal(matches[0].href, origin + guide(code === 'x-default' ? 'en' : code));
  }
  const navs = html.match(/<nav\b[^>]*\bdata-field-evidence-languages\b[^>]*>[\s\S]*?<\/nav>/gi) || [];
  assert.equal(navs.length, 1, label + ': one guide language selector');
  assert(html.indexOf(navs[0]) > html.indexOf('<body'), label + ': selector belongs inside body');
  for (const code of locales) assert(navs[0].includes('href="' + guide(code) + '"'), label + ': guide locale destination ' + code);
  if (locale !== 'en') {
    assert(!/<h3>(?:Supplier Quote Evidence Workbench|SLA Calculator|ROI Calculator|Automation Pilot Planner)<\/h3>/.test(html), label + ': untranslated tool title');
    assert(!/>Field visit readiness<\/a>/.test(html), label + ': untranslated footer');
  }
}

function checkArtifact(directory) {
  for (const locale of locales) {
    const canonical = fs.readFileSync(path.join(directory, guide(locale).slice(1)), 'utf8');
    checkGuide(canonical, locale, guide(locale));
    if (locale !== 'en') {
      const alias = '/' + locale + '/apps/field-service-evidence-guide.html';
      const aliasHtml = fs.readFileSync(path.join(directory, alias.slice(1)), 'utf8');
      checkGuide(aliasHtml, locale, alias);
      assert.equal(aliasHtml, canonical, alias + ': final alias/canonical bytes differ');
    }
  }
  console.log('PASS nine field-guide routes: cumulative approvals, localized copy, service distinctions, metadata and exact alias parity');
}

function templateCopy(name) {
  const source = fs.readFileSync(path.join(__dirname, name), 'utf8');
  const stop = source.indexOf('const esc=');
  assert(stop > 0, 'Template data boundary changed: ' + name);
  // Evaluate only constant data before any rendering or chained modules.
  return vm.runInNewContext(source.slice(0, stop) + '\ncopy;', { require, process: { argv: [] } });
}

function checkTemplates() {
  const templates = [
    ['render-field-evidence-locales.cjs', copy => copy.steps[3]],
    ['render-field-evidence-quality.cjs', copy => copy.gates[2]],
    ['render-field-evidence-pack.cjs', copy => copy.items[4]],
    ['render-field-evidence-faq.cjs', copy => copy.items[3][1]]
  ];
  for (const [name, approval] of templates) {
    for (const [locale, copy] of Object.entries(templateCopy(name))) checkApproval(approval(copy), locale, name + ':' + locale);
  }
  console.log('PASS four template layers: every approval clause requires client confirmation, corresponding PO and Zion operational release');
}

function selfTest() {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'zion-field-guide-'));
  try {
    for (const locale of locales) {
      const stage = path.join(temporary, locale);
      fs.mkdirSync(path.join(stage, 'apps'), { recursive: true });
      fs.mkdirSync(path.join(stage, 'assets/js'), { recursive: true });
      fs.copyFileSync(path.join(root, 'public', guide('en').slice(1)), path.join(stage, guide('en').slice(1)));
      fs.copyFileSync(path.join(root, 'public/assets/js/discovery-delivery.js'), path.join(stage, 'assets/js/discovery-delivery.js'));
      const nativeNav = '<nav data-map-language-selector><a href="' + map(locale) + '">Map language</a></nav>';
      const protectedContent = '<form><input name="unchanged"></form><script>window.example = "unchanged";</script>';
      const fixture = '<!DOCTYPE html><html lang="' + lang(locale) + '"><head><title>Map fixture</title></head><body>' + nativeNav + protectedContent + '<nav data-field-evidence-locales-return aria-label="Field evidence guide languages"><a href="' + guide('pt') + '">Português</a></nav></body></html>';
      const mapFile = path.join(stage, 'apps/network.html');
      fs.writeFileSync(mapFile, fixture);
      const renderer = path.join(__dirname, 'render-field-evidence-locales.cjs');
      const render = () => vm.runInNewContext(fs.readFileSync(renderer, 'utf8'), {
        require, process: { argv: [process.execPath, renderer, stage] }, console: { log() {} }
      }, { filename: renderer });
      render();
      const once = fs.readFileSync(mapFile, 'utf8');
      const section = once.match(/<section\b[^>]*data-field-evidence-locales-return[^>]*>[\s\S]*?<\/section>/i)?.[0];
      assert(section, locale + ': topic-labelled guide section');
      assert(/<h2\b[^>]*>[^<]+<\/h2>/.test(section), locale + ': visible topic heading');
      assert(section.includes('lang="' + lang(locale) + '"'), locale + ': return heading language');
      assert.equal((once.match(/data-field-evidence-locales-return/g) || []).length, 1, locale + ': old anonymous navigation replaced');
      assert(once.includes(nativeNav), locale + ': same-topic map language selector preserved');
      assert(once.includes(protectedContent), locale + ': forms and scripts preserved');
      for (const code of locales) {
        assert(section.includes('href="' + guide(code) + '"'), locale + ': guide return ' + code);
        checkGuide(fs.readFileSync(path.join(stage, guide(code).slice(1)), 'utf8'), code, 'generated ' + code);
      }
      const firstGuides = locales.map(code => fs.readFileSync(path.join(stage, guide(code).slice(1)), 'utf8'));
      render();
      assert.equal(fs.readFileSync(mapFile, 'utf8'), once, locale + ': return-navigation idempotence');
      for (const [i, code] of locales.entries()) assert.equal(fs.readFileSync(path.join(stage, guide(code).slice(1)), 'utf8'), firstGuides[i], code + ': guide idempotence');
    }
    console.log('PASS five locale navigation fixtures: visible topic, preserved map selector/forms/scripts and two-pass idempotence');
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
}

checkTemplates();
if (process.argv.includes('--self-test')) selfTest();
const directory = process.argv.slice(2).find(arg => !arg.startsWith('--'));
checkArtifact(path.resolve(directory || path.join(root, 'public')));
