'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// Exercise the homepage's actual price JSX and actual popular-service selector.
const root = path.resolve(__dirname, '..');
const file = path.join(root, 'app/page.tsx');
const source = fs.readFileSync(file, 'utf8');
const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
const spans = [], selectors = [];
function visit(node) {
  if (ts.isJsxElement(node) && node.openingElement.tagName.getText(ast) === 'span' &&
      node.getText(ast).includes('Object.keys(service.pricing)')) spans.push(node.getText(ast));
  if (ts.isVariableDeclaration(node) && node.name.getText(ast) === 'popularServices') selectors.push(node.initializer.getText(ast));
  ts.forEachChild(node, visit);
}
visit(ast);
assert.equal(spans.length, 1, 'Locate the actual Popular Services price');
assert.equal(selectors.length, 1, 'Locate the actual Popular Services selector');
const javascript = ts.transpileModule(`function Price({ service }: { service: any }) { return (${spans[0]}); }`, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.React },
}).outputText;
const Price = new Function('React', javascript + '\nreturn Price;')(React);
const inner = markup => markup.replace(/^<span[^>]*>/, '').replace(/<\/span>$/, '');
const render = pricing => inner(renderToStaticMarkup(React.createElement(Price, { service: { pricing } })));

test('homepage preserves supplied currency, billing period and labels', () => {
  for (const value of ['$999/mo', '$399/mo', '$8/user/mo', '$4/device/mo', '$99/year', '€49/month', 'R$ 250/mês', '$80/hour', '$1,200 setup', 'Custom', 'Contact for pricing', 'Free']) {
    assert.equal(render({ basic: value }), 'From ' + value);
  }
});

test('homepage preserves bare numbers and the existing first-price ordering', () => {
  for (const value of [0, 399, 999.5, '0', '135', '95', '999.50']) {
    assert.equal(render({ first: value }), 'From ' + String(value));
  }
  assert.equal(render({ enterprise: '$900/mo', basic: '$10/mo' }), 'From $900/mo');
  assert.equal(render({ 10: '$100/mo', 2: '$20/year', basic: '$10/mo' }), 'From $20/year');
});

test('all actual homepage popular cards render their source prices unchanged', () => {
  const input = JSON.parse(fs.readFileSync(path.join(root, 'app/data/servicesData.json'), 'utf8'));
  const serverCode = ts.transpileModule(fs.readFileSync(path.join(root, 'app/data/servicesData.ts'), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', serverCode)(request => {
    assert.equal(request, './servicesData.json'); return input;
  }, module, module.exports);
  const selector = ts.transpileModule(`const popularServices = ${selectors[0]};`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const services = new Function('services', selector + '\nreturn popularServices;')(module.exports.allServices);
  assert.ok(services.length > 0 && services.length <= 50);
  for (const service of services) {
    const value = Object.values(service.pricing)[0];
    const expected = inner(renderToStaticMarkup(React.createElement('span', null, 'From ', value)));
    assert.equal(render(service.pricing), expected, service.id);
  }
});
