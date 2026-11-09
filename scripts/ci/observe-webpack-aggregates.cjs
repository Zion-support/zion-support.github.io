'use strict';

// Diagnostic only. Never materialize sources, maps, snapshots or identifiers.
const path = require('node:path');
const { performance } = require('node:perf_hooks');
const NAME = 'ZionAggregateObserver';
const INTERVAL = 2048;
const own = (object, key) => object && Object.getOwnPropertyDescriptor(object, key)?.value;
const mapSize = Object.getOwnPropertyDescriptor(Map.prototype, 'size').get;
const setSize = Object.getOwnPropertyDescriptor(Set.prototype, 'size').get;
function cardinality(value) {
  try { return Reflect.apply(mapSize, value, []); } catch {}
  try { return Reflect.apply(setSize, value, []); } catch {}
  return null;
}
function countArray(value) { return Array.isArray(value) ? value.length : 0; }
function number(object, key) {
  const value = own(object, key);
  return Number.isSafeInteger(value) && value >= 0 ? value : null;
}
function emitDefault(record) {
  try { require('node:fs').writeSync(2, '[next-aggregate] ' + JSON.stringify(record) + '\n'); } catch {}
}
function empty() {
  return {
    modulesObserved: 0, builtEvents: 0, restoredEvents: 0, failedEvents: 0,
    appEntries: 0, appSources: 0, dependencies: 0, otherModules: 0,
    sourceRaw: 0, sourceOriginal: 0, sourceMap: 0, sourceCached: 0, sourceOther: 0, sourceMissing: 0,
    sourceStringUnits: 0, sourceBufferBytes: 0, sourceMapStringUnits: 0, sourceMapBufferBytes: 0,
    originalSourceStringUnits: 0, originalSourceBufferBytes: 0, sourceMapObjects: 0,
    mapMappingsUnits: 0, mapSourcesCount: 0, mapSourceContentUnits: 0, mapContentArraysTruncated: 0,
    dependencyReferences: 0, presentationalDependencyReferences: 0, asyncBlocks: 0,
    blockWalksTruncated: 0, modulesWithAst: 0, modulesWithSnapshot: 0,
    requestStringUnits: 0, loaderListsTruncated: 0, observationErrors: 0,
  };
}
function addPayload(totals, object, fields, stringKey, bufferKey) {
  // Count distinct references/values within this one object, not unique heap bytes.
  const seen = new Set();
  for (const field of fields) {
    const value = own(object, field);
    if (seen.has(value)) continue;
    seen.add(value);
    if (typeof value === 'string') totals[stringKey] += value.length;
    else if (Buffer.isBuffer(value)) totals[bufferKey] += value.length;
  }
}
function sourceMetrics(totals, source, sources) {
  if (!source) { totals.sourceMissing++; return; }
  let depth = 0;
  while (source && depth++ < 4) {
    const proto = Object.getPrototypeOf(source);
    if (proto === sources.CachedSource?.prototype) {
      totals.sourceCached++;
      addPayload(totals, source, ['_cachedSource', '_cachedBuffer'], 'sourceStringUnits', 'sourceBufferBytes');
      source = own(source, '_source');
      continue;
    }
    const raw = proto === sources.RawSource?.prototype;
    const original = proto === sources.OriginalSource?.prototype;
    const mapped = proto === sources.SourceMapSource?.prototype;
    if (raw) totals.sourceRaw++;
    else if (original) totals.sourceOriginal++;
    else if (mapped) totals.sourceMap++;
    else { totals.sourceOther++; return; }
    addPayload(totals, source, ['_value', '_valueAsString', '_valueAsBuffer'], 'sourceStringUnits', 'sourceBufferBytes');
    if (mapped) {
      addPayload(totals, source, ['_sourceMapAsString', '_sourceMapAsBuffer', '_innerSourceMapAsString', '_innerSourceMapAsBuffer'], 'sourceMapStringUnits', 'sourceMapBufferBytes');
      addPayload(totals, source, ['_originalSourceAsString', '_originalSourceAsBuffer'], 'originalSourceStringUnits', 'originalSourceBufferBytes');
      for (const field of ['_sourceMapAsObject', '_innerSourceMapAsObject']) {
        const map = own(source, field);
        if (!map || typeof map !== 'object') continue;
        totals.sourceMapObjects++;
        const mappings = own(map, 'mappings');
        if (typeof mappings === 'string') totals.mapMappingsUnits += mappings.length;
        totals.mapSourcesCount += countArray(own(map, 'sources'));
        const contents = own(map, 'sourcesContent');
        if (Array.isArray(contents)) {
          const length = Math.min(contents.length, 1024);
          if (length < contents.length) totals.mapContentArraysTruncated++;
          for (let i = 0; i < length; i++) {
            const value = own(contents, String(i));
            if (typeof value === 'string') totals.mapSourceContentUnits += value.length;
          }
        }
      }
    }
    return;
  }
  totals.sourceOther++;
}
function moduleMetrics(totals, module, context, sources) {
  const loaders = own(module, 'loaders');
  let entry = false;
  if (Array.isArray(loaders)) {
    if (loaders.length > 64) totals.loaderListsTruncated++;
    for (let i = 0; i < Math.min(loaders.length, 64); i++) {
      const loader = own(own(loaders, String(i)), 'loader');
      if (typeof loader === 'string' && /[/\\]next-app-loader[/\\]index\.js$/.test(loader)) { entry = true; break; }
    }
  }
  const resource = own(module, 'resource');
  if (entry) totals.appEntries++;
  else if (typeof resource === 'string' && resource.startsWith(path.join(context, 'app') + path.sep)) totals.appSources++;
  else if (typeof resource === 'string' && /[/\\]node_modules[/\\]/.test(resource)) totals.dependencies++;
  else totals.otherModules++;
  const request = own(module, 'request');
  if (typeof request === 'string') totals.requestStringUnits += request.length;
  if (own(module, '_ast') != null) totals.modulesWithAst++;
  if (own(own(module, 'buildInfo'), 'snapshot') != null) totals.modulesWithSnapshot++;
  totals.presentationalDependencyReferences += countArray(own(module, 'presentationalDependencies'));
  const pending = [module];
  let visits = 0;
  while (pending.length && visits++ < 1024) {
    const block = pending.pop();
    totals.dependencyReferences += countArray(own(block, 'dependencies'));
    const blocks = own(block, 'blocks');
    if (Array.isArray(blocks)) {
      totals.asyncBlocks += blocks.length;
      for (let i = 0; i < blocks.length && pending.length < 1024; i++) pending.push(own(blocks, String(i)));
      if (blocks.length > 1024) totals.blockWalksTruncated++;
    }
  }
  if (pending.length) totals.blockWalksTruncated++;
  sourceMetrics(totals, own(module, '_source'), sources);
}
function snapshotCounts(compilation) {
  const graph = own(compilation, 'moduleGraph');
  const info = own(compilation, 'fileSystemInfo');
  return {
    compilationModules: cardinality(own(compilation, 'modules')),
    graphModules: cardinality(own(graph, '_moduleMap')),
    graphDependencies: cardinality(own(graph, '_dependencyMap')),
    moduleMemoryCache: cardinality(own(compilation, 'moduleMemCaches')),
    fileHashes: cardinality(own(info, '_fileHashes')),
    contextHashes: cardinality(own(info, '_contextHashes')),
    managedItems: cardinality(own(info, '_managedItems')),
    createdSnapshots: number(info, '_statCreatedSnapshots'),
    testedSnapshotEntries: number(info, '_statTestedEntries'),
  };
}
function observeCompilation(compilation, compiler, sources, emit, runtime, now) {
  const hooks = compilation.hooks;
  if (!['succeedModule', 'stillValidModule', 'failedModule', 'finishModules'].every(key => typeof hooks?.[key]?.tap === 'function')) return false;
  const compilerName = ['server', 'client', 'edge-server'].includes(compiler.name) ? compiler.name : 'other';
  const context = typeof compiler.context === 'string' ? compiler.context : '';
  const totals = empty();
  const seen = new WeakSet();
  const started = now();
  function report(event) {
    try {
      const memory = runtime.memoryUsage();
      emit({ phase: 'compiler-aggregate', event, compiler: compilerName, pid: runtime.pid, elapsedMs: now() - started,
        rssBytes: memory.rss, heapUsedBytes: memory.heapUsed, heapTotalBytes: memory.heapTotal,
        externalBytes: memory.external, arrayBuffersBytes: memory.arrayBuffers, ...totals, ...snapshotCounts(compilation) });
    } catch { totals.observationErrors++; }
  }
  function completed(module, event) {
    try {
      totals[event]++;
      if (!module || typeof module !== 'object' || seen.has(module)) return;
      seen.add(module);
      totals.modulesObserved++;
      try { moduleMetrics(totals, module, context, sources); } catch { totals.observationErrors++; }
      if (totals.modulesObserved % INTERVAL === 0) report('milestone');
    } catch { totals.observationErrors++; }
  }
  hooks.succeedModule.tap(NAME, module => { completed(module, 'builtEvents'); });
  hooks.stillValidModule.tap(NAME, module => { completed(module, 'restoredEvents'); });
  hooks.failedModule.tap(NAME, () => { totals.failedEvents++; });
  hooks.finishModules.tap(NAME, () => { report('finish-modules'); });
  report('start');
  return true;
}
function installCompilerObserver(webpack, { emit = emitDefault, runtime = process, now = () => performance.now() } = {}) {
  const proto = webpack?.Compiler?.prototype;
  const descriptor = proto && Object.getOwnPropertyDescriptor(proto, 'newCompilation');
  if (!descriptor?.writable || typeof descriptor.value !== 'function' || !webpack.sources) return null;
  const original = descriptor.value;
  function newCompilation(...args) {
    const compilation = Reflect.apply(original, this, args);
    try { observeCompilation(compilation, this, webpack.sources, emit, runtime, now); } catch {}
    return compilation;
  }
  try { Object.defineProperty(proto, 'newCompilation', { ...descriptor, value: newCompilation }); } catch { return null; }
  return { restore() { Object.defineProperty(proto, 'newCompilation', descriptor); } };
}
module.exports = { installCompilerObserver, observeCompilation, empty, moduleMetrics, sourceMetrics, snapshotCounts, INTERVAL };
