'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');

// Execute the real useMemo callback; the slower reference states the ordering contract.
const file = path.join(root, 'app/components/ServiceGridWithSearch.tsx');
const source = fs.readFileSync(file, 'utf8');
const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
const declarations = [];
function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(ast) === 'results') declarations.push('const ' + node.getText(ast) + ';');
  ts.forEachChild(node, visit);
}
visit(ast);
assert.equal(declarations.length, 1, 'Locate the actual homepage result selector');
const code = ts.transpileModule(declarations[0], { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
const execute = new Function('searchServices', 'query', 'catFilter', 'useMemo', 'MAX_RESULTS', code + '\nreturn results;');
const select = (rows, query = '', category = null) => execute(rows, query, category, callback => callback(), 12);
function reference(rows, query, category) {
  const q = query.toLowerCase().trim();
  return rows.filter(s => {
    const matchCat = category ? s.category === category : true;
    const matchQ = !q || s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.id.toLowerCase().includes(q);
    return matchCat && matchQ;
  }).sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)).slice(0, 12);
}
function realSearchRows() {
  const allServices = JSON.parse(fs.readFileSync(path.join(root, 'app/data/servicesClientData.generated.json'), 'utf8'));
  const moduleCode = ts.transpileModule(fs.readFileSync(path.join(root, 'app/data/searchServices.ts'), 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', moduleCode)(request => {
    assert.equal(request, './servicesClientData'); return { allServices };
  }, module, module.exports);
  return module.exports.searchServices;
}

test('actual homepage selector preserves all real category/query results', () => {
  const rows = realSearchRows();
  assert.equal(rows.length, 29120);
  const categories = [null, ...new Set(rows.map(row => row.category))];
  const queries = ['', 'cloud', 'security', 'AI', 'an impossible unmatched query', rows[0].id, rows[100].title.slice(0, 8)];
  for (const category of categories) for (const query of queries) {
    assert.deepEqual(select(rows, query, category), reference(rows, query, category));
  }
});

test('keeps stable ties, duplicate IDs, truthy/falsy popularity and normalized queries', () => {
  const flags = [false, 0, '', null, undefined, NaN, true, 1, 'yes', {}, []];
  const rows = Array.from({ length: 38 }, (_, index) => ({
    id: index % 4 ? 'duplicate' : 'Cloud-ID', title: index % 3 ? 'Cloud title' : 'Other',
    description: index % 2 ? 'Security description' : '', category: index % 5 ? 'cloud' : 'it',
    popular: flags[index % flags.length], href: '/services/' + index,
  }));
  delete rows[3]; // Array.filter skips holes; keep that behavior too.
  for (const category of [null, '', 'cloud', 'it', 'absent']) for (const query of ['', '  ClOuD  ', ' SECURITY ', 'cloud-id', 'missing']) {
    const before = rows.slice();
    const expected = reference(rows, query, category);
    const actual = select(rows, query, category);
    assert.deepEqual(actual, expected);
    actual.forEach((row, index) => assert.equal(row, expected[index]));
    assert.deepEqual(rows, before, 'Input order and objects remain unchanged');
  }
});

test('does not inspect the tail after twelve matching popular results are known', () => {
  const rows = Array.from({ length: 12 }, (_, index) => ({ id: String(index), title: 'Cloud', description: '', category: 'cloud', popular: true }));
  const expected = rows.slice();
  Object.defineProperty(rows, 12, { get() { throw new Error('Unnecessary tail read'); }, enumerable: true });
  assert.deepEqual(select(rows, 'CLOUD', 'cloud'), expected);
});

test('scans to the end when fewer than twelve popular matches or no matches exist', () => {
  const rows = Array.from({ length: 40 }, (_, index) => ({ id: String(index), title: 'Cloud', description: '', category: 'cloud', popular: index === 39 }));
  for (const query of ['cloud', 'missing']) {
    let reads = 0;
    const observed = new Proxy(rows, { get(target, property, receiver) {
      if (/^\d+$/.test(String(property))) reads++;
      return Reflect.get(target, property, receiver);
    } });
    assert.deepEqual(select(observed, query), reference(rows, query, null));
    assert.equal(reads, rows.length);
  }
});
