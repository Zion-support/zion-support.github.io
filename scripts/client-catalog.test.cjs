'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { createHash } = require('node:crypto');
const ts = require('typescript');
const { CLIENT_FIELDS, GENERATED, projectCatalog, projectService, ensureClientCatalog, ClientCatalogBoundaryPlugin } = require('./client-catalog.cjs');
const root = path.resolve(__dirname, '..');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const source = JSON.parse(fs.readFileSync(path.join(root, 'app/data/servicesData.json'), 'utf8'));
// Execute the actual server module's normalizer as the independent reference.
const serverCode = ts.transpileModule(fs.readFileSync(path.join(root, 'app/data/servicesData.ts'), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
function normalized(input) {
  const module = { exports: {} };
  new Function('require', 'module', 'exports', serverCode)(request => {
    assert.equal(request, './servicesData.json'); return input;
  }, module, module.exports);
  return module.exports.allServices;
}
const original = normalized(source);
const projected = JSON.parse(JSON.stringify(projectCatalog(source)));
function temporary(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'client-catalog-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}
function write(dir, file, content) {
  const target = path.join(dir, file); fs.mkdirSync(path.dirname(target), { recursive: true }); fs.writeFileSync(target, content);
}

test('real catalog preserves every consumer field, absence, ID order, pricing order and complete arrays', () => {
  assert.ok(original.length > 0);
  assert.equal(projected.length, original.length);
  original.forEach((row, index) => {
    const out = projected[index];
    assert.equal(out.id, row.id);
    for (const field of CLIENT_FIELDS) {
      assert.equal(own(out, field), own(row, field), `${index}:${field}:presence`);
      assert.deepEqual(out[field], row[field], `${index}:${field}:value`);
    }
    assert.ok(Object.keys(out).every(key => CLIENT_FIELDS.includes(key)));
    assert.deepEqual(Object.keys(out.pricing || {}), Object.keys(row.pricing || {}));
    assert.deepEqual(Object.values(out.pricing || {}), Object.values(row.pricing || {}));
  });
});

test('fallbacks, missing/null/false values, duplicate IDs and numeric pricing keys match server semantics', () => {
  const input = [
    { id: 'duplicate', name: 'Fallback', desc: 'Desc', href: '', features: ['f'], benefits: ['b'], pricing: { enterprise: '900', basic: '10' } },
    { id: 'duplicate', title: '', name: null, description: false, desc: '', href: null, industry: null, popular: false, tags: [], released_at: null },
    { id: 'numeric', title: 'T', description: 'D', name: 'Other', href: '/custom/', pricing: { '10': 'ten', '2': 'two', pro: '50', basic: '10' }, features: ['a','b','c','d','e','f'], benefits: [] },
  ];
  const reference = normalized(input);
  for (const shape of [input, { services: input }]) {
    const output = JSON.parse(JSON.stringify(projectCatalog(shape)));
    reference.forEach((row, index) => CLIENT_FIELDS.forEach(key => {
      assert.equal(own(output[index], key), own(row, key));
      assert.deepEqual(output[index][key], row[key]);
    }));
  }
  assert.deepEqual(projectCatalog([]), []);
  assert.throws(() => projectCatalog({ missing: [] }), /must be an array/);
  assert.throws(() => projectService(null), /service objects/);
});

test('generation refreshes source changes, repairs corruption and caches only matching bytes', t => {
  const dir = temporary(t);
  write(dir, 'app/data/servicesData.json', JSON.stringify([{ id: 'one', name: 'One' }]));
  const first = ensureClientCatalog(dir);
  assert.equal(first.changed, true);
  assert.equal(ensureClientCatalog(dir).changed, false);
  write(dir, GENERATED + '.meta.json', 'null');
  assert.equal(ensureClientCatalog(dir).changed, true);
  write(dir, GENERATED, 'corrupt');
  assert.equal(ensureClientCatalog(dir).changed, true);
  write(dir, 'app/data/servicesData.json', JSON.stringify([{ id: 'two', name: 'Two' }]));
  const next = ensureClientCatalog(dir);
  assert.equal(next.changed, true);
  assert.notEqual(next.sourceSha256, first.sourceSha256);
  assert.equal(JSON.parse(fs.readFileSync(path.join(dir, GENERATED)))[0].id, 'two');
  assert.equal(next.outputSha256, hash(fs.readFileSync(path.join(dir, GENERATED))));
  assert.equal(fs.readdirSync(path.join(dir, 'app/data')).some(name => name.endsWith('.tmp')), false);
});

function declarations(file, names) {
  const code = fs.readFileSync(path.join(root, file), 'utf8');
  const ast = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);
  const found = new Map();
  function visit(node) {
    if (ts.isFunctionDeclaration(node) && names.includes(node.name?.text)) found.set(node.name.text, node.getText(ast));
    if (ts.isVariableDeclaration(node) && names.includes(node.name.getText(ast))) found.set(node.name.getText(ast), `const ${node.getText(ast)};`);
    ts.forEachChild(node, visit);
  }
  visit(ast);
  assert.equal(found.size, names.length, 'consumer declarations must still exist');
  return ts.transpileModule(names.map(name => found.get(name)).join('\n'), { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
}

test('actual Quiz scorer preserves ranked IDs, ties, scores and recommendation text across scenarios', () => {
  const code = declarations('app/components/ServiceMatchQuiz.tsx', ['INDUSTRY_CATS', 'CHALLENGE_BOOST', 'BUDGET_TIERS', 'parsePrice', 'calculateResults']);
  const create = new Function('allServices', code + '\nreturn { run: calculateResults, industries: Object.keys(INDUSTRY_CATS), challenges: Object.keys(CHALLENGE_BOOST), budgets: Object.keys(BUDGET_TIERS) };');
  const before = create(original), after = create(projected);
  const compare = result => ({ ...result, services: result.services.map(row => ({ id: row.id, score: row._score })) });
  for (let i = 0; i < before.industries.length; i++) for (let j = 0; j < before.budgets.length; j++) {
    const answers = { industry: before.industries[i], budget: before.budgets[j], challenge: before.challenges[(i + j) % before.challenges.length] };
    assert.deepEqual(compare(after.run(answers)), compare(before.run(answers)));
  }
});

test('actual Comparator decision and displayed reasoning preserve pair/triple choices', () => {
  const code = declarations('app/components/ServiceComparisonTool.tsx', ['getComparisonAnalysis']);
  const run = new Function('allServices', 'selectedServices', code + '\nreturn getComparisonAnalysis();');
  const candidates = original.filter(row => typeof row.pricing?.enterprise === 'string');
  for (let i = 0; i < 12; i++) {
    const ids = [candidates[i].id, candidates[candidates.length - 1 - i].id];
    if (i % 2) ids.push(candidates[100 + i].id);
    assert.deepEqual(run(projected, ids), run(original, ids));
  }
});

test('actual Hub filter/sort/group callbacks preserve results, order, counts and samples', () => {
  const code = declarations('app/components/ServicesHub.tsx', ['industries', 'filteredServices', 'categoryCounts']);
  const run = new Function('allServices', 'filters', 'activeIndustry', 'useMemo', code + '\nreturn { industries, categoryCounts, ids: filteredServices.map(row => row.id) };');
  for (const sortBy of ['popularity', 'newest', 'price-low', 'price-high', 'title']) {
    for (const searchQuery of ['', 'cloud', 'security']) {
      const filters = { searchQuery, selectedCategories: [], priceRange: [0, 1000], featuredOnly: sortBy === 'popularity', sortBy };
      const industry = searchQuery ? original[0].industry : null;
      assert.deepEqual(run(projected, filters, industry, fn => fn()), run(original, filters, industry, fn => fn()));
    }
  }
});

async function compile(config) {
  const { webpack } = require('next/dist/compiled/webpack/webpack');
  const compiler = webpack(config);
  return new Promise((resolve, reject) => compiler.run((error, stats) => compiler.close(closeError => {
    if (error || closeError) reject(error || closeError); else resolve(stats);
  })));
}

test('real webpack blocks transitive full JSON and reports hashes of final minified lazy assets', async t => {
  const dir = temporary(t);
  write(dir, 'app/data/servicesData.json', '[{"id":"one","name":"One"}]');
  ensureClientCatalog(dir);
  write(dir, 'entry.js', 'globalThis.loadServices = () => import("./app/data/servicesClientData.generated.json");');
  const events = [];
  const logger = console.log;
  console.log = (...args) => { if (args[0] === '[client-catalog-assets]') events.push(JSON.parse(args[1])); else logger(...args); };
  t.after(() => { console.log = logger; });
  // Next's webpack fork replaces the default minifier path. Use its bundled
  // real Terser at the normal optimization stage for this bounded fixture.
  const { webpack, sources } = require('next/dist/compiled/webpack/webpack');
  const minifier = { apply(compiler) {
    compiler.hooks.compilation.tap('FixtureMinifier', compilation => {
      compilation.hooks.processAssets.tapPromise({ name: 'FixtureMinifier', stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE }, async assets => {
        for (const [name, source] of Object.entries(assets)) {
          if (!name.endsWith('.js')) continue;
          const result = await require('next/dist/compiled/terser').minify(source.source().toString());
          compilation.updateAsset(name, new sources.RawSource(result.code), { minimized: true });
        }
      });
    });
  } };
  const config = { mode: 'production', context: dir, entry: './entry.js', output: { path: path.join(dir, 'out'), filename: 'static/chunks/main.js', chunkFilename: 'static/chunks/[id].[contenthash].js' }, optimization: { minimizer: [minifier] }, plugins: [new ClientCatalogBoundaryPlugin()] };
  const good = await compile(config);
  assert.equal(good.hasErrors(), false, good.toString({ all: false, errors: true }));
  const assets = events.flatMap(event => event.assets);
  assert.ok(assets.length > 0, 'catalog asset must be observable after minification');
  for (const asset of assets) {
    const bytes = fs.readFileSync(path.join(dir, 'out', asset.path.replace('/_next/', '')));
    assert.equal(asset.bytes, bytes.length); assert.equal(asset.sha256, hash(bytes));
  }
  write(dir, 'bridge.cjs', 'module.exports = require("./app/data/servicesData.json");');
  write(dir, 'entry.js', 'globalThis.loadServices = () => import("./bridge.cjs");');
  const bad = await compile(config);
  assert.equal(bad.hasErrors(), true, bad.toString({ all: false, errors: true, modules: true }));
  assert.match(bad.toString({ all: false, errors: true }), /Complete service catalog reached the browser/);
});
