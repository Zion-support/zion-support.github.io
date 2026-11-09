'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const VERSION='16.4.5';
const ORIGINAL='61dec03764a93db3db816346c00f31b1a14f3b743b3498d7dab534dcdb7709f3';
const PATCHED='1350401612d99bd26861546a1e4a0dd144053c6d06e72c3adcd733118fb25289';
const digest=value=>crypto.createHash('sha256').update(value).digest('hex');
function fail(code){throw new Error(code);}
function transformSource(source){
 if(crypto.createHash('sha256').update(source).digest('hex')!=='61dec03764a93db3db816346c00f31b1a14f3b743b3498d7dab534dcdb7709f3')throw Error('UNKNOWN_SOURCE');
 const start=source.indexOf('    async function resolveAdjacentParallelSegments(segmentPath) {');
 const end=source.indexOf('    async function createSubtreePropsFromSegmentPath(',start);
 if(start<0||end<0)throw Error('UNEXPECTED_SOURCE');
 const replacement=`    async function resolveAdjacentParallelSegments(segmentPath) {
        const absoluteSegmentPath = resolveDir(\`\${appDirPrefix}\${segmentPath}\`);
        if (!absoluteSegmentPath) return [];
        if (!await isDirectory(absoluteSegmentPath)) return [];
        if (adjacentNamesCache) loaderContext.addContextDependency(absoluteSegmentPath);
        let fingerprint;
        if (adjacentNamesCache) fingerprint = await adjacentDirectoryFingerprint(absoluteSegmentPath);
        const record = adjacentNamesCache && adjacentNamesCache.get(absoluteSegmentPath);
        const cachedNames = fingerprint !== undefined && record && record.fingerprint === fingerprint ? record.names : undefined;
        if (record && cachedNames === undefined) adjacentNamesCache.delete(absoluteSegmentPath);
        // Preserve original miss ordering: open, then children, then iterate.
        const files = cachedNames === undefined ? await _fs.promises.opendir(absoluteSegmentPath) : undefined;
        const parallelSegments = [];
        if (!explicitParallelRouteChildren || await hasDeclaredChildrenSlot(absoluteSegmentPath)) parallelSegments.push('children');
        if (cachedNames !== undefined) return parallelSegments.concat(cachedNames);
        const names = [];
        for await (const dirent of files) {
            if (dirent.isDirectory() && dirent.name.charCodeAt(0) === 64) names.push(dirent.name);
        }
        // Failed/incomplete scans never publish cache entries or promises.
        if (adjacentNamesCache && fingerprint !== undefined && fingerprint === await adjacentDirectoryFingerprint(absoluteSegmentPath)) adjacentNamesCache.set(absoluteSegmentPath, {fingerprint, names:Object.freeze(names)});
        return parallelSegments.concat(names);
    }
`;
 let result=source.slice(0,start)+replacement+source.slice(end);
 result=result.replace('const containsPageOrDefaultMapMap = new WeakMap();',`const adjacentNamesByCompilation = new WeakMap();
async function adjacentDirectoryFingerprint(directory) {
    try {
        const stat = await _fs.promises.stat(directory, {bigint:true});
        if (!stat.isDirectory() || ![stat.dev,stat.ino,stat.mtimeNs,stat.ctimeNs].every((value)=>typeof value === 'bigint')) return undefined;
        return [stat.dev,stat.ino,stat.mtimeNs,stat.ctimeNs].join(':');
    } catch { return undefined; }
}
function allowsAdjacentCache(loaderContext, isDev) {
    if (isDev || !loaderContext._compilation || typeof loaderContext.addContextDependency !== 'function') return false;
    try {
        const plugins = loaderContext._compiler.options.plugins;
        return Array.isArray(plugins) && !plugins.some((plugin)=>plugin && plugin.constructor && plugin.constructor.name === 'DeferredEntriesPlugin');
    } catch { return false; }
}
const containsPageOrDefaultMapMap = new WeakMap();`);
 result=result.replace('    const compilation = loaderContext._compilation;',`    const compilation = loaderContext._compilation;
    let adjacentNamesCache;
    if (allowsAdjacentCache(loaderContext, isDev)) {
        adjacentNamesCache = adjacentNamesByCompilation.get(compilation);
        if (!adjacentNamesCache) { adjacentNamesCache = new Map(); adjacentNamesByCompilation.set(compilation, adjacentNamesCache); }
    }`);
 return result;
}
function transform(source,version){
 if(version!==VERSION)fail('NEXT_ADJACENT_UNSUPPORTED_VERSION');
 const hash=digest(source);
 if(hash===PATCHED)return {source,changed:false};
 if(hash!==ORIGINAL)fail('NEXT_ADJACENT_UNSUPPORTED_HASH');
 try{new vm.Script(source);}catch{fail('NEXT_ADJACENT_INVALID_SOURCE');}
 const output=transformSource(source);
 try{new vm.Script(output);}catch{fail('NEXT_ADJACENT_INVALID_PATCH');}
 if(digest(output)!==PATCHED)fail('NEXT_ADJACENT_PATCH_INTEGRITY');
 return {source:output,changed:true};
}
function install(nextDir) {
  const file = path.join(nextDir, 'dist/build/webpack/loaders/next-app-loader/index.js');
  try { if (!fs.lstatSync(file).isFile() || fs.lstatSync(file).isSymbolicLink()) fail('NEXT_ADJACENT_SYMLINK_REJECTED'); } catch { fail('NEXT_ADJACENT_TARGET_REJECTED'); }
  let version, input;
  try { version = JSON.parse(fs.readFileSync(path.join(nextDir,'package.json'),'utf8')).version; input = fs.readFileSync(file,'utf8'); }
  catch { fail('NEXT_ADJACENT_READ_FAILED'); }
  const result = transform(input, version);
  if (!result.changed) return false;
  // All validation is complete before creating a temporary file. Rename publishes atomically.
  const tmp = file + '.adjacent-slot-cache-' + crypto.randomUUID() + '.tmp';
  try {
    const initialStat = fs.lstatSync(file);
    if (!initialStat.isFile() || initialStat.isSymbolicLink()) fail('NEXT_ADJACENT_TARGET_REJECTED');
    fs.writeFileSync(tmp,result.source,{flag:'wx',mode:initialStat.mode});
    const currentStat = fs.lstatSync(file);
    if (!currentStat.isFile() || currentStat.isSymbolicLink() || currentStat.ino !== initialStat.ino || currentStat.dev !== initialStat.dev || fs.readFileSync(file,'utf8') !== input) fail('NEXT_ADJACENT_CONCURRENT_CHANGE');
    fs.renameSync(tmp,file);
  } catch(error) {
    try { fs.unlinkSync(tmp); } catch {}
    if (error.message === 'NEXT_ADJACENT_CONCURRENT_CHANGE') throw error;
    fail('NEXT_ADJACENT_WRITE_FAILED');
  }
  return true;
}
module.exports = {transform,install,digest};
if (require.main === module) {
  try {
    const nextDir = process.argv[2] || path.dirname(require.resolve('next/package.json'));
    console.log(install(nextDir) ? 'NEXT_ADJACENT_PATCH_APPLIED' : 'NEXT_ADJACENT_PATCH_ALREADY_APPLIED');
  } catch { console.error('NEXT_ADJACENT_PATCH_FAILED'); process.exitCode = 1; }
}
