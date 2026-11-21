// Run with: node --test __tests__/article-structured-data-contract.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const cache = new Map();

// Load the actual TSX pages with the same @/ -> app/ alias as tsconfig.json.
function loadTsx(relative) {
  const filename = path.join(root, relative);
  if (cache.has(filename)) return cache.get(filename);
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    fileName: filename,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText;
  const module = { exports: {} };
  cache.set(filename, module.exports);
  const localRequire = createRequire(filename);
  function resolveImport(specifier) {
    if (!specifier.startsWith('@/')) return localRequire(specifier);
    const base = path.join('app', specifier.slice(2));
    const target = [base, `${base}.tsx`, `${base}.ts`].find(candidate =>
      fs.existsSync(path.join(root, candidate)) && fs.statSync(path.join(root, candidate)).isFile()
    );
    assert(target, `Existing alias must resolve: ${specifier}`);
    return loadTsx(target);
  }
  new Function('require', 'module', 'exports', output)(resolveImport, module, module.exports);
  return module.exports;
}

function renderedArticle(slug) {
  const Page = loadTsx(`app/blog/${slug}/page.tsx`).default;
  const html = renderToStaticMarkup(React.createElement(Page));
  const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(match => JSON.parse(match[1]));
  const article = graphs.find(value => value['@type'] === 'Article');
  assert(article, `Article JSON-LD must render for ${slug}`);
  assert.equal(article.mainEntityOfPage['@id'], `https://ziontechgroup.com/blog/${slug}`);
  return article;
}

test('the undated ITSM article omits both dates without inventing metadata', () => {
  const article = renderedArticle('ai-itsm-modernization-playbook-2026');
  assert.equal(article.headline, 'AI ITSM Modernization Playbook 2026 | Zion Tech Group');
  assert(!Object.hasOwn(article, 'datePublished'));
  assert(!Object.hasOwn(article, 'dateModified'));
  assert.equal(article.author['@type'], 'Organization');
  assert.equal(article.author.name, 'Zion Tech Group');
  assert.equal(article.author.url, 'https://ziontechgroup.com');
  assert.equal(article.publisher['@type'], 'Organization');
  assert.equal(article.publisher.name, 'Zion Tech Group');
});

test('the dated chatbot article retains its publication and modification dates', () => {
  const article = renderedArticle('ai-chatbot-builder');
  assert.equal(article.datePublished, '2026-07-08');
  assert.equal(article.dateModified, '2026-07-08');
  assert.equal(article.author['@type'], 'Organization');
  assert.equal(article.publisher.name, 'Zion Tech Group');
});

for (const slug of [
  'ai-email-outreach-automation-for-msps-2026',
  'ai-phone-agent-for-small-business-free-tools-2026',
  'healthcare-crm-automation-ai-patient-workflows-2026',
]) {
  test(`${slug} preserves its person author, organization publisher and dates`, () => {
    const article = renderedArticle(slug);
    assert.equal(article.datePublished, '2026-07-07');
    assert.equal(article.dateModified, '2026-07-07');
    assert.equal(article.author['@type'], 'Person');
    assert.equal(article.author.name, 'Kleber Garcia Alcatrão');
    assert(!Object.hasOwn(article.author, 'url'));
    assert.equal(article.publisher['@type'], 'Organization');
    assert.equal(article.publisher.name, 'Zion Tech Group');
  });
}
