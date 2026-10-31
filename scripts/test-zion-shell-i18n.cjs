'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(
  path.join(__dirname, '..', 'public', 'assets', 'js', 'zion-shell.js'), 'utf8',
);

function render(lang, options = {}) {
  const inserted = [];
  const styles = [];
  const main = {};
  const legacy = { style: {}, setAttribute() {} };
  let readyHandler;
  const document = {
    documentElement: { lang },
    readyState: options.loading ? 'loading' : 'complete',
    head: { appendChild(node) { styles.push(node); } },
    body: { insertAdjacentHTML(position, html) { inserted.push({ position, html }); } },
    createElement() { return {}; },
    addEventListener(event, callback) {
      assert.equal(event, 'DOMContentLoaded');
      readyHandler = callback;
    },
    getElementById(id) { return options.existingMainId && id === 'conteudo' ? main : null; },
    querySelector(selector) {
      if (selector === 'header.nav') return options.header ? {} : null;
      if (selector === 'footer .foot') return options.footer ? {} : null;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === 'link[rel="stylesheet"]') {
        return options.stylesheet ? [{ getAttribute() { return '/assets/css/site.css'; } }] : [];
      }
      if (selector === 'main') return [main];
      if (selector === 'nav.top') return [legacy];
      return [];
    },
  };
  const context = vm.createContext({ window: {}, document });
  vm.runInContext(source, context);
  return {
    inserted, styles, main, legacy, context,
    ready() { readyHandler(); },
    html() { return inserted.map(item => item.html).join('\n'); },
  };
}

const locales = [
  ['en', '/en/', '/apps/', '/discovery/', 'Open menu', 'Company', 'Free Discovery'],
  ['pt-BR', '/pt/', '/pt/apps/', '/pt/discovery/', 'Abrir menu', 'Empresa', 'Discovery gratuito'],
  ['es', '/es/', '/es/apps/', '/es/discovery/', 'Abrir menú', 'Empresa', 'Discovery gratuito'],
  ['fr', '/fr/', '/fr/apps/', '/fr/discovery/', 'Ouvrir le menu', 'Entreprise', 'Discovery gratuit'],
  ['de', '/de/', '/de/apps/', '/de/discovery/', 'Menü öffnen', 'Unternehmen', 'Kostenloser Erstcheck'],
];

for (const [lang, home, apps, discovery, menu, company, free] of locales) {
  test('fallback chrome matches ' + lang + ' and links localized core journeys', () => {
    const html = render(lang).html();
    assert.ok(html.includes('href="' + home + '"'), 'localized home');
    assert.ok(html.includes('href="' + apps + '"'), 'localized Apps catalog');
    assert.ok(html.includes('href="' + discovery + '"'), 'localized Discovery');
    assert.ok(html.includes('aria-label="' + menu + '"'), 'localized mobile navigation');
    assert.ok(html.includes('<h3>' + company + '</h3>'), 'localized footer');
    assert.ok(html.includes(free), 'localized free Discovery invitation');
    for (const code of ['en', 'pt-BR', 'es', 'fr', 'de']) {
      assert.ok(html.includes('hreflang="' + code + '"'), 'language link ' + code);
    }
    assert.ok(html.includes('aria-expanded="false"'), 'mobile menu starts collapsed');
    assert.ok(html.includes("setAttribute('aria-expanded'"), 'mobile expansion is announced');
    if (lang !== 'en') {
      assert.ok(!html.includes('>Free Discovery<'), 'no English Discovery label');
      assert.ok(!html.includes('aria-label="Open menu"'), 'no English menu label');
    }
  });
}

test('regional and mixed-case locale tags select their supported language', () => {
  for (const [regional, expected] of [
    ['PT-br', 'pt-BR'], ['es-MX', 'es'], ['fr-CA', 'fr'], ['de-CH', 'de'],
  ]) {
    assert.equal(render(regional).html(), render(expected).html());
  }
});

test('unknown, missing and unusual locale tags safely fall back to English', () => {
  for (const lang of ['ja', '', undefined, '"><script>alert(1)</script>']) {
    assert.equal(render(lang).html(), render('en').html());
  }
});

test('page-owned header and footer are preserved in every supported language', () => {
  for (const [lang] of locales) {
    assert.equal(render(lang, { header: true, footer: true }).inserted.length, 0);
  }
});

test('an existing header still allows only the missing footer to be added', () => {
  const page = render('fr', { header: true });
  assert.equal(page.inserted.length, 1);
  assert.equal(page.inserted[0].position, 'beforeend');
  assert.ok(page.html().includes('Entreprise'));
});

test('an existing footer still allows only the missing header to be added', () => {
  const page = render('de', { footer: true });
  assert.equal(page.inserted.length, 1);
  assert.equal(page.inserted[0].position, 'afterbegin');
  assert.ok(page.html().includes('Menü öffnen'));
});

test('the injected header retains its original destinations even with a page-owned footer', () => {
  for (const [lang, , , discovery] of locales) {
    const html = render(lang, { footer: true }).html();
    for (const href of [
      '/services/', '/plans/', '/autonomous-ai-agents/', '/field-services/',
      '/offers/', '/cases/', '/contact/', '/blog/', discovery,
    ]) {
      assert.ok(html.includes('href="' + href + '"'), lang + ' header retains ' + href);
    }
  }
});

test('repeated script execution does not duplicate chrome or styles', () => {
  const page = render('es');
  vm.runInContext(source, page.context);
  assert.equal(page.inserted.length, 2);
  assert.equal(page.styles.length, 1);
});

test('existing stylesheet and main target remain intact', () => {
  const page = render('en', { stylesheet: true, existingMainId: true });
  assert.equal(page.styles.length, 0);
  assert.equal(page.main.id, undefined);
  assert.equal(page.legacy.style.display, 'none');
});

test('loading documents wait for DOMContentLoaded before injection', () => {
  const page = render('pt-BR', { loading: true });
  assert.equal(page.inserted.length, 0);
  page.ready();
  assert.equal(page.inserted.length, 2);
  assert.equal(page.main.id, 'conteudo');
});

test('existing navigation destinations remain available in the consolidated header and footer', () => {
  for (const [lang] of locales) {
    const html = render(lang).html();
    for (const href of [
      '/services/', '/plans/', '/autonomous-ai-agents/', '/field-services/',
      '/offers/', '/cases/', '/contact/', '/blog/', '/about/', '/status-page/',
      '/telegram/', '/finops-consulting/', '/terms/', '/cookies/',
      'mailto:kleber@ziontechgroup.com',
    ]) {
      assert.ok(html.includes('href="' + href + '"'), lang + ' retains ' + href);
    }
  }
});

test('mobile menu toggles its open state and announces both transitions', () => {
  const html = render('de').html();
  const onclick = html.match(/onclick="([^"]+)"/)[1];
  let open = false;
  const attributes = {};
  const menu = { classList: { toggle(name) {
    assert.equal(name, 'open');
    open = !open;
    return open;
  } } };
  const document = { getElementById(id) {
    assert.equal(id, 'zion-shell-links');
    return menu;
  } };
  const handler = vm.runInNewContext('(function () {' + onclick + '})', { document });
  const button = { setAttribute(name, value) { attributes[name] = value; } };
  handler.call(button);
  assert.equal(open, true);
  assert.equal(attributes['aria-expanded'], 'true');
  handler.call(button);
  assert.equal(open, false);
  assert.equal(attributes['aria-expanded'], 'false');
});
