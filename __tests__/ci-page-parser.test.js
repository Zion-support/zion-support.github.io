/** @jest-environment node */
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const root = path.resolve(__dirname, '..');
const affected = [
  'app/ai-business-advisor/page.tsx',
  'app/ai-experiences/page.tsx',
  'app/ai-experiments/page.tsx',
  'app/search/page.tsx',
  'app/search/layout.tsx',
  'app/services-agritech-page.tsx',
  'app/services-ai-page.tsx',
  'app/solutions-hub/page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx',
  'app/components/AppPageTemplate.tsx',
  'app/data/appsNetwork.ts',
];

function source(file) {
  return ts.createSourceFile(file, fs.readFileSync(path.join(root, file), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}

function nodes(tree, predicate) {
  const matches = [];
  function visit(node) {
    if (predicate(node)) matches.push(node);
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return matches;
}

describe('CI page syntax regressions', () => {
  test.each(affected)('%s parses without recovery', (file) => {
    expect(source(file).parseDiagnostics.map((d) => ts.flattenDiagnosticMessageText(d.messageText, '\n'))).toEqual([]);
  });

  test.each(['ai-business-advisor', 'ai-experiences', 'ai-experiments'])('%s preserves the apostrophe in all metadata descriptions', (slug) => {
    const page = require(`../app/${slug}/page`);
    expect(page.metadata.description).toContain("Zion's");
    expect(page.metadata.openGraph.description).toBe(page.metadata.description);
    expect(page.metadata.twitter.description).toBe(page.metadata.description);
    expect(renderToStaticMarkup(React.createElement(page.default))).toContain('<h1');
  });

  test.each([
    ['agritech', '/services/agritech-irrigation-optimization'],
    ['ai', '/services/ai-credit-risk-scoring'],
  ])('restores the %s fragment without deleting its existing cards', (slug, href) => {
    const Page = require(`../app/services-${slug}-page`).default;
    const html = renderToStaticMarkup(React.createElement(Page));
    expect(html).toMatch(/^<main>/);
    expect(html.split(`href="${href}"`)).toHaveLength(3);
  });

  test('solutions hub keeps one server metadata export and renders', () => {
    const file = source('app/solutions-hub/page.tsx');
    expect(file.statements.some((n) => ts.isExpressionStatement(n) && n.expression.text === 'use client')).toBe(false);
    expect(nodes(file, (n) => ts.isVariableDeclaration(n) && n.name.getText(file) === 'metadata')).toHaveLength(1);
    const page = require('../app/solutions-hub/page');
    expect(page.metadata.alternates.canonical).toBe('/solutions-hub/');
    expect(renderToStaticMarkup(React.createElement(page.default))).toContain('Solutions that fit');
  });

  test('search metadata lives in the server layout, not the interactive page', () => {
    const file = source('app/search/page.tsx');
    expect(file.statements.some((n) => ts.isExpressionStatement(n) && n.expression.text === 'use client')).toBe(true);
    expect(nodes(file, (n) => ts.isVariableDeclaration(n) && n.name.getText(file) === 'metadata')).toHaveLength(0);
    const layout = require('../app/search/layout');
    expect(layout.metadata.title).toBe('Search AI & IT Services | Zion Tech Group');
    expect(layout.metadata.alternates.canonical).toBe('/search/');
  });

  test('search renders both industry spans only when the industry exists', () => {
    const file = source('app/search/page.tsx');
    const conditions = nodes(file, (n) => ts.isBinaryExpression(n) && n.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken && n.left.getText(file) === 'service.industry');
    expect(conditions).toHaveLength(1);
    // Compile the actual JSX condition, rather than a hand-written copy of it.
    const result = ts.transpileModule(`module.exports = function Industry({service}) { return <div>{${conditions[0].getText(file)}}</div>; };`, {
      compilerOptions: { jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS },
    });
    const compiled = { exports: {} };
    new Function('module', 'React', result.outputText)(compiled, React);
    const render = (industry) => renderToStaticMarkup(React.createElement(compiled.exports, { service: { industry } }));
    expect(render('Healthcare')).toBe('<div><span class="text-slate-500">•</span><span class="text-slate-500">Healthcare</span></div>');
    expect(render(undefined)).toBe('<div></div>');
    expect(render('')).toBe('<div></div>');
  });

  test('email marketing has a default page and loads its real template and catalog', () => {
    const page = require('../app/zion-ai-email-marketing-pro/page');
    expect(page.metadata.alternates.canonical).toBe('/zion-ai-email-marketing-pro/');
    const html = renderToStaticMarkup(React.createElement(page.default));
    expect(html).toContain('Zion AI Email Marketing Pro');
    expect(html).toContain('AI-driven email sequences, segmentation and deliverability for revenue growth.');
    expect(html).toContain('Related apps in this network');
  });
});
