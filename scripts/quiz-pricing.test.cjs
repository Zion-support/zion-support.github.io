'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// Render the actual JSX price span, not a second formatter implementation.
const file = path.join(__dirname, '../app/components/ServiceMatchQuiz.tsx');
const source = fs.readFileSync(file, 'utf8');
const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
const spans = [];
function visit(node) {
  if (ts.isJsxElement(node) && node.openingElement.tagName.getText(ast) === 'span' &&
      node.getText(ast).includes('Object.values(service.pricing')) spans.push(node.getText(ast));
  ts.forEachChild(node, visit);
}
visit(ast);
assert.equal(spans.length, 1, 'Locate the exact Quiz price presentation');
const javascript = ts.transpileModule(`function Price({ service }: { service: any }) { return (${spans[0]}); }`, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.React },
}).outputText;
const Price = new Function('React', javascript + '\nreturn Price;')(React);
function render(pricing) {
  return renderToStaticMarkup(React.createElement(Price, { service: { pricing } }))
    .replace(/^<span[^>]*>/, '').replace(/<\/span>$/, '');
}

test('preserves already formatted monthly prices without repeating the period', () => {
  assert.equal(render({ basic: '$999/mo', pro: '$2,999/mo', enterprise: 'Custom' }), 'From $999/mo');
  assert.equal(render({ basic: '$399/mo', pro: '$1,499/mo', enterprise: 'Custom' }), 'From $399/mo');
});

test('preserves numeric values and numeric strings without inventing currency or period', () => {
  for (const value of [0, 399, 999.5, '0', '399', '999.50']) {
    assert.equal(render({ basic: value }), 'From ' + String(value));
  }
});

test('preserves supplied currencies, other billing periods and nonnumeric labels', () => {
  for (const value of ['$99/year', '€49/month', 'R$ 250/mês', '$80/hour', '$1,200 setup', 'Custom', 'Contact for pricing', 'Free']) {
    assert.equal(render({ first: value }), 'From ' + value);
  }
});

test('keeps the existing first Object.values pricing choice, including integer-like keys', () => {
  assert.equal(render({ enterprise: '$900/mo', basic: '$10/mo' }), 'From $900/mo');
  assert.equal(render({ 10: '$100/mo', 2: '$20/mo', basic: '$10/mo' }), 'From $20/mo');
});
