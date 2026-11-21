'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const cp = require('node:child_process');
const aggregate = require('./observe-webpack-aggregates.cjs');
const next = process.env.NEXT_TEST_DIR ? path.resolve(process.env.NEXT_TEST_DIR) : path.dirname(require.resolve('next/package.json'));
const { webpack } = require(path.join(next, 'dist/compiled/webpack/webpack.js'));
const runtime = { pid: 7, memoryUsage: () => ({ rss: 10, heapUsed: 6, heapTotal: 8, external: 1, arrayBuffers: 0 }) };
class Hook {
  constructor() { this.callbacks = []; }
  tap(name, fn) { this.callbacks.push(fn); }
  call(...args) { for (const fn of this.callbacks) assert.equal(fn(...args), undefined); }
}
function fakeCompilation() {
  return { hooks: Object.fromEntries(['succeedModule', 'stillValidModule', 'failedModule', 'finishModules'].map(key => [key, new Hook()])),
    modules: new Set(), moduleGraph: { _moduleMap: new Map(), _dependencyMap: new Map() },
    fileSystemInfo: { _statCreatedSnapshots: 5, _fileHashes: new Map(), _contextHashes: new Map() } };
}
async function build(root, observer, cache = false) {
  const events = [];
  const original = webpack.Compiler.prototype.newCompilation;
  const installed = observer ? aggregate.installCompilerObserver(webpack, { emit: e => events.push(e) }) : null;
  const compiler = webpack({ name: 'server', mode: 'development', devtool: false, context: root,
    entry: './main.js', cache, parallelism: 1, output: { path: path.join(root, 'out'), filename: 'main.js' }, optimization: { minimize: false } });
  try {
    const stats = await new Promise((resolve, reject) => compiler.run((err, value) => err ? reject(err) : resolve(value)));
    const code = fs.existsSync(path.join(root, 'out/main.js')) ? fs.readFileSync(path.join(root, 'out/main.js'), 'utf8') : null;
    return { code, errors: stats.hasErrors(), events, modules: stats.compilation.modules.size };
  } finally {
    await new Promise(resolve => compiler.close(resolve));
    installed?.restore();
    assert.equal(webpack.Compiler.prototype.newCompilation, original);
  }
}
async function main() {
  const totals = aggregate.empty();
  const raw = new webpack.sources.RawSource('NEVER_LOG_CONTENT');
  for (const name of ['source', 'map', 'buffer', 'size', 'sourceAndMap']) raw[name] = () => { throw new Error('materialization forbidden'); };
  aggregate.moduleMetrics(totals, { _source: raw, resource: '/fixture/app/private.js', request: 'NEVER_LOG_REQUEST', dependencies: [1, 2], blocks: [{ dependencies: [3], blocks: [] }], presentationalDependencies: [4], buildInfo: { snapshot: {} }, _ast: {} }, '/fixture', webpack.sources);
  assert.equal(totals.sourceRaw, 1); assert.equal(totals.sourceStringUnits, 'NEVER_LOG_CONTENT'.length);
  assert.equal(totals.appSources, 1); assert.equal(totals.dependencyReferences, 3);
  assert.equal(totals.asyncBlocks, 1); assert.equal(totals.modulesWithAst, 1); assert.equal(totals.modulesWithSnapshot, 1);
  const mapped = new webpack.sources.SourceMapSource('foo', 'NEVER_LOG_FILENAME', { version: 3, sources: ['NEVER_LOG_ROUTE'], mappings: 'AAAA', sourcesContent: ['NEVER_LOG_MAP_CONTENT'] });
  aggregate.sourceMetrics(totals, mapped, webpack.sources);
  assert.equal(totals.sourceMap, 1); assert.equal(totals.sourceMapObjects, 1);
  assert.equal(totals.mapMappingsUnits, 4); assert.equal(totals.mapSourceContentUnits, 'NEVER_LOG_MAP_CONTENT'.length);
  aggregate.sourceMetrics(totals, new webpack.sources.CachedSource(new webpack.sources.OriginalSource('bar', 'NEVER_LOG_NAME')), webpack.sources);
  assert.equal(totals.sourceCached, 1); assert.equal(totals.sourceOriginal, 1);
  const unknown = {}; Object.defineProperty(unknown, '_value', { get() { throw new Error('getter forbidden'); } });
  aggregate.sourceMetrics(totals, unknown, webpack.sources); assert.equal(totals.sourceOther, 1);
  const sourceBuffer = new webpack.sources.RawSource(Buffer.from('abc'));
  aggregate.sourceMetrics(totals, sourceBuffer, webpack.sources); assert.equal(totals.sourceBufferBytes, 3);
  assert(!JSON.stringify(totals).includes('NEVER_LOG'));
  const events = [], compilation = fakeCompilation(), compiler = { name: 'server', context: '/fixture' };
  assert(aggregate.observeCompilation(compilation, compiler, webpack.sources, e => events.push(e), runtime, () => 10));
  const repeat = { _source: raw, resource: '/fixture/node_modules/a.js', dependencies: [], blocks: [] };
  compilation.hooks.succeedModule.call(repeat); compilation.hooks.stillValidModule.call(repeat);
  for (let i = 1; i < aggregate.INTERVAL; i++) compilation.hooks.succeedModule.call({ dependencies: [], blocks: [], loaders: [{ loader: '/fixture/next-app-loader/index.js' }] });
  compilation.hooks.failedModule.call({}, new Error('NEVER_LOG_ERROR'));
  compilation.hooks.finishModules.call();
  assert.deepEqual(events.map(e => e.event), ['start', 'milestone', 'finish-modules']);
  const last = events.at(-1);
  assert.equal(last.modulesObserved, aggregate.INTERVAL); assert.equal(last.restoredEvents, 1); assert.equal(last.failedEvents, 1);
  assert.equal(last.dependencies, 1); assert.equal(last.appEntries, aggregate.INTERVAL - 1);
  assert.equal(last.createdSnapshots, 5); assert.equal(last.moduleMemoryCache, null);
  assert(!JSON.stringify(events).includes('NEVER_LOG')); assert(!JSON.stringify(events).includes('/fixture'));
  for (const event of events) for (const [key, value] of Object.entries(event)) {
    assert(['phase', 'event', 'compiler'].includes(key) || value === null || (typeof value === 'number' && Number.isFinite(value)));
  }
  const broken = fakeCompilation(); assert(aggregate.observeCompilation(broken, compiler, webpack.sources, () => { throw new Error('observer only'); }, runtime, () => 0));
  broken.hooks.succeedModule.call(Object.create(null)); broken.hooks.finishModules.call();
  assert.equal(aggregate.observeCompilation({ hooks: {} }, compiler, webpack.sources, () => {}, runtime, () => 0), false);
  const badRuntime = fakeCompilation();
  assert(aggregate.observeCompilation(badRuntime, compiler, webpack.sources, () => {}, { memoryUsage() { throw new Error(); } }, () => 0));
  badRuntime.hooks.finishModules.call();
  const cycle = { dependencies: [], blocks: [] }; cycle.blocks.push(cycle);
  const bounded = aggregate.empty(); aggregate.moduleMetrics(bounded, cycle, '/fixture', webpack.sources);
  assert(bounded.blockWalksTruncated > 0); assert(bounded.asyncBlocks <= 1024);
  const wide = { dependencies: [], blocks: Array.from({ length: 4096 }, () => ({ dependencies: [], blocks: [] })), loaders: Array.from({ length: 1000 }, () => ({})) };
  aggregate.moduleMetrics(bounded, wide, '/fixture', webpack.sources); assert.equal(bounded.loaderListsTruncated, 1);
  const largeEvents = [], large = fakeCompilation();
  aggregate.observeCompilation(large, compiler, webpack.sources, event => largeEvents.push(event), runtime, () => 0);
  for (let i = 0; i < aggregate.INTERVAL * 10; i++) large.hooks.succeedModule.call({ _source: raw, dependencies: [], blocks: [] });
  large.hooks.finishModules.call(); assert.equal(largeEvents.length, 12);
  assert.equal(largeEvents.at(-1).modulesObserved, aggregate.INTERVAL * 10); assert.equal(largeEvents.at(-1).observationErrors, 0);
  const sentinel = new Error('original failure'); let throwOriginal = false, receivedThis, receivedArgs;
  class FakeCompiler { newCompilation(...args) { receivedThis = this; receivedArgs = args; if (throwOriginal) throw sentinel; return fakeCompilation(); } }
  const fake = new FakeCompiler(), original = FakeCompiler.prototype.newCompilation;
  const installed = aggregate.installCompilerObserver({ Compiler: FakeCompiler, sources: webpack.sources }, { runtime, emit: () => {} });
  assert(installed); assert(fake.newCompilation(42)); assert.equal(receivedThis, fake); assert.deepEqual(receivedArgs, [42]);
  throwOriginal = true; assert.throws(() => fake.newCompilation(), e => e === sentinel); installed.restore(); assert.equal(FakeCompiler.prototype.newCompilation, original);
  assert.equal(aggregate.installCompilerObserver({ Compiler: class {}, sources: webpack.sources }), null);
  const spanObserver = require('./observe-next-build-memory.cjs');
  const RealSpan = require(path.join(next, 'dist/trace/trace.js')).Span;
  let callbacks = 0; const observed = spanObserver.installSpanObserver(RealSpan, () => {}, runtime, () => { callbacks++; throw sentinel; });
  new RealSpan({ name: 'root' }).traceChild('run-webpack-compiler'); assert.equal(callbacks, 1); observed.restore();
  const child = cp.spawnSync(process.execPath, ['--no-warnings', __filename, '--activation-child'], { encoding: 'utf8', timeout: 5000, env: { ...process.env, ZION_NEXT_MEMORY_OBSERVER: '1', DEBUG: spanObserver.NAMESPACE } });
  assert.equal(child.status, 0); assert(child.stderr.includes('[next-aggregate]')); assert(!child.stderr.includes('REJECTED'));
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'webpack-aggregate-test-'));
  try {
    fs.writeFileSync(path.join(dir, 'main.js'), 'import { value } from "./value.js"; console.log(value); import("./lazy.js");');
    fs.writeFileSync(path.join(dir, 'value.js'), 'export const value = 42;');
    fs.writeFileSync(path.join(dir, 'lazy.js'), 'export default 43;');
    const baseline = await build(dir, false), candidate = await build(dir, true);
    assert.equal(baseline.errors, false); assert.equal(candidate.errors, false); assert.equal(candidate.code, baseline.code);
    const end = candidate.events.find(e => e.event === 'finish-modules'); assert(end);
    assert.equal(end.modulesObserved, 3); assert.equal(end.modulesWithSnapshot, 3); assert.equal(end.modulesWithAst, 0);
    assert.equal(end.observationErrors, 0); assert.equal(end.sourceRaw + end.sourceOriginal, 3);
    fs.writeFileSync(path.join(dir, 'value.js'), 'export const = syntax error;');
    // Webpack may report syntax errors via a built module's diagnostics rather
    // than failedModule. Completion events do not certify an error-free build.
    const failing = await build(dir, true); assert.equal(failing.errors, true);
    assert(!JSON.stringify(candidate.events).includes(dir));
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
  console.log('WEBPACK_AGGREGATE_TESTS_PASS');
}
if (process.argv[2] === '--activation-child') {
  process.argv = [process.execPath, path.join(next, 'dist/bin/next'), 'build'];
  require('./observe-next-build-memory.cjs');
  const Span = require(path.join(next, 'dist/trace/trace.js')).Span;
  new Span({ name: 'test-root' }).traceChild('run-webpack-compiler');
  const compiler = webpack({ mode: 'development', entry: {}, optimization: { minimize: false } });
  compiler.newCompilation(compiler.newCompilationParams());
  compiler.close(() => {});
} else {
  main().catch(() => { console.error('WEBPACK_AGGREGATE_TESTS_FAILED'); process.exitCode = 1; });
}
