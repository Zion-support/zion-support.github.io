'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const VERSION='16.4.5';
const ORIGINAL='1350401612d99bd26861546a1e4a0dd144053c6d06e72c3adcd733118fb25289';
const PATCHED='cb9dc123fdf2f32f57f5964a455b413d303428bf62e4b4141b431a9f7f7692a4';
const digest=value=>crypto.createHash('sha256').update(value).digest('hex');
function fail(code){throw new Error(code);}
function createDirectoryEligibility(io = fs.promises) {
  const compilations = new WeakMap();
  const tokens = new WeakMap();
  const fields = ['dev', 'ino', 'mode', 'nlink', 'size', 'mtimeNs', 'ctimeNs'];
  async function fingerprint(directory) {
    const parts = [];
    for (let current = directory;; current = path.dirname(current)) {
      const stat = await io.lstat(current, { bigint: true });
      if (!stat.isDirectory() || stat.isSymbolicLink()) return null;
      if (fields.some(key => typeof stat[key] !== 'bigint')) return null;
      parts.push(fields.map(key => String(stat[key])).join(':'));
      if (path.dirname(current) === current) break;
    }
    return parts.join('|');
  }
  return function forCompilation(compilation) {
    const usable = compilation && (typeof compilation === 'object' || typeof compilation === 'function');
    let cache = usable && compilations.get(compilation);
    if (!cache) { cache = new Map(); if (usable) compilations.set(compilation, cache); }
    async function assess(directory) {
      if (!usable || typeof directory !== 'string' || !path.isAbsolute(directory) || path.normalize(directory) !== directory) return null;
      try {
        const before = await fingerprint(directory);
        if (before === null) return null;
        let entry = cache.get(directory);
        if (!entry || entry.fingerprint !== before) {
          entry = { fingerprint: before, promise: undefined };
          entry.promise = (async () => {
            try {
              const children = await io.readdir(directory, { withFileTypes: true });
              if (children.some(child => child.isSymbolicLink() || !(child.isFile() || child.isDirectory()))) return false;
              return await fingerprint(directory) === before;
            } catch { return false; }
          })();
          cache.set(directory, entry);
        }
        if (!(await entry.promise) || await fingerprint(directory) !== before) return null;
        const token = Object.freeze({});
        tokens.set(token, { directory, fingerprint: before, compilation });
        return token;
      } catch { return null; }
    }
    async function validate(token) {
      try {
        const saved = tokens.get(token);
        return !!saved && saved.compilation === compilation && await fingerprint(saved.directory) === saved.fingerprint;
      } catch { return false; }
    }
    async function directoryEligibility(directory) { return !!(await assess(directory)); }
    directoryEligibility.assess = assess;
    directoryEligibility.validate = validate;
    return directoryEligibility;
  };
}

// One tracker per loader invocation. Call register synchronously at the old
// dependency-registration sites; it starts at most one assessment per directory.
// Await finalize() in the loader's finally block, after all resolver work ends.
// Holding the originals until final validation allows fail-closed restoration.
function createDependencyTracker(context, eligibility) {
  const directories = new Map();
  let closed = false;
  function register(directory, candidate, exists) {
    // Rejected Promise.all may leave sibling resolver work running. Preserve
    // baseline registration for those late calls rather than throw a new error.
    if (closed) { context.addMissingDependency(candidate); return; }
    if (exists) { context.addMissingDependency(candidate); return; }
    let entry = directories.get(directory);
    if (!entry) {
      entry = { skipped: new Set(), token: Promise.resolve().then(() => eligibility.assess(directory)).catch(() => null) };
      directories.set(directory, entry);
    }
    entry.skipped.add(candidate);
  }
  async function finalize() {
    if (closed) return;
    closed = true;
    for (const [directory, entry] of directories) {
      const token = await entry.token;
      let valid = false;
      try { valid = !!token && await eligibility.validate(token); } catch {}
      if (valid) context.addContextDependency(directory);
      else for (const candidate of entry.skipped) context.addMissingDependency(candidate);
    }
    directories.clear();
  }
  return { register, finalize };
}

function transformSource(source) {
  const anchor = 'const filesInDirMapMap = new WeakMap();';
  const guard = `function supportsDirectoryDependencies(context, options) {
    if (options.isDev !== false || options.nextConfigOutput !== 'export' || !context._compilation || typeof context.addContextDependency !== 'function') return false;
    const staticPath = (value) => typeof value === 'string' && value.length > 0 && !/\\[|%(?:25)*5b/i.test(value);
    if (!staticPath(options.page) || !staticPath(options.pagePath)) return false;
    if (typeof options.appPaths === 'string') { if (!staticPath(options.appPaths)) return false; }
    else if (!Array.isArray(options.appPaths) || options.appPaths.length === 0 || !Array.from(options.appPaths).every(staticPath)) return false;
    if (!Array.isArray(options.pageExtensions) || options.pageExtensions.length === 0 || !Array.from(options.pageExtensions).every((extension) => typeof extension === 'string' && /^[a-z0-9]+$/i.test(extension))) return false;
    try {
        const compiler = context._compiler.options;
        return compiler.mode === 'production' && Array.isArray(compiler.plugins) && !compiler.plugins.some((plugin) => plugin && plugin.constructor && plugin.constructor.name === 'DeferredEntriesPlugin');
    } catch { return false; }
}
`;
  const optionsAnchor = '    const loaderOptions = this.getOptions();';
  const tracking = `
    directoryTracker = supportsDirectoryDependencies(this, loaderOptions) ? makeDirectoryDependencyTracker(this, directoryDependencyEligibility(this._compilation)) : undefined;
    const registerCandidateDependency = (directory, candidate, exists) => {
        if (directoryTracker) directoryTracker.register(directory, candidate, exists);
        else this.addMissingDependency(candidate);
    };`;
  const runtime = 'const directoryDependencyEligibility = (' + createDirectoryEligibility.toString().replaceAll('fs.promises', '_fs.promises').replaceAll('path.', '_path.default.') + ')(_fs.promises);\nconst makeDirectoryDependencyTracker = ' + createDependencyTracker.toString() + ';\n';

  const dependency = '            this.addMissingDependency(absolutePathWithExtension);';
  if (source.split(anchor).length !== 2 || source.split(optionsAnchor).length !== 2 || source.split(dependency).length !== 3) fail('NEXT_DIRECTORY_UNEXPECTED_SOURCE');
  let output = source.replace(anchor, runtime + guard + anchor).replace(optionsAnchor, optionsAnchor + tracking);
  output = output.replace(dependency, '            registerCandidateDependency(dirname, absolutePathWithExtension, exists);');
  output = output.replace(dependency, '            registerCandidateDependency(absoluteDir, absolutePathWithExtension, exists);');
  const loaderStart = 'const nextAppLoader = async function nextAppLoader() {';
  const loaderEnd = '    return header + code;\n};';
  if (output.split(loaderStart).length !== 2 || output.split(loaderEnd).length !== 2) fail('NEXT_DIRECTORY_UNEXPECTED_LOADER');
  output = output.replace(loaderStart, loaderStart + '\n    let directoryTracker;\n    try {');
  output = output.replace(loaderEnd, '    return header + code;\n    } finally {\n        if (directoryTracker) await directoryTracker.finalize();\n    }\n};');
  output = output.replace('return (0, _createapproutecode.createAppRouteCode)({', 'return await (0, _createapproutecode.createAppRouteCode)({');
  return output;
}
function transform(source,version){
 if(version!==VERSION)fail('NEXT_DIRECTORY_UNSUPPORTED_VERSION');
 const hash=digest(source);
 if(hash===PATCHED)return {source,changed:false};
 if(hash!==ORIGINAL)fail('NEXT_DIRECTORY_UNSUPPORTED_HASH');
 try{new vm.Script(source);}catch{fail('NEXT_DIRECTORY_INVALID_SOURCE');}
 const output=transformSource(source);
 try{new vm.Script(output);}catch{fail('NEXT_DIRECTORY_INVALID_PATCH');}
 if(digest(output)!==PATCHED)fail('NEXT_DIRECTORY_PATCH_INTEGRITY');
 return {source:output,changed:true};
}
// Inspect and read the same opened object; a path check must not authorize a later path read.
function readTarget(file) {
  if (!Number.isInteger(fs.constants.O_NOFOLLOW) || fs.constants.O_NOFOLLOW === 0) fail('NEXT_DIRECTORY_TARGET_REJECTED');
  let fd;
  try { fd = fs.openSync(file, fs.constants.O_RDONLY | fs.constants.O_NOFOLLOW | fs.constants.O_NONBLOCK); }
  catch { fail('NEXT_DIRECTORY_TARGET_REJECTED'); }
  try {
    const stat = fs.fstatSync(fd);
    if (!stat.isFile()) fail('NEXT_DIRECTORY_TARGET_REJECTED');
    return { stat, source: fs.readFileSync(fd, 'utf8') };
  } finally { fs.closeSync(fd); }
}
function install(nextDir) {
  const file = path.join(nextDir, 'dist/build/webpack/loaders/next-app-loader/index.js');
  const initial = readTarget(file);
  let version;
  try { version = JSON.parse(fs.readFileSync(path.join(nextDir, 'package.json'), 'utf8')).version; }
  catch { fail('NEXT_DIRECTORY_READ_FAILED'); }
  const result = transform(initial.source, version);
  if (!result.changed) return false;
  // Serial CI installation in a trusted dependency directory. Rename publishes atomically,
  // but is not a compare-and-swap against an adversarial writer after the final recheck.
  const tmp = file + '.directory-dependencies-' + crypto.randomUUID() + '.tmp';
  try {
    fs.writeFileSync(tmp, result.source, { flag: 'wx', mode: initial.stat.mode });
    let current;
    try { current = readTarget(file); } catch { fail('NEXT_DIRECTORY_CONCURRENT_CHANGE'); }
    if (current.stat.ino !== initial.stat.ino || current.stat.dev !== initial.stat.dev || current.source !== initial.source) fail('NEXT_DIRECTORY_CONCURRENT_CHANGE');
    fs.renameSync(tmp, file);
  } catch (error) {
    try { fs.unlinkSync(tmp); } catch {}
    if (error.message === 'NEXT_DIRECTORY_CONCURRENT_CHANGE') throw error;
    fail('NEXT_DIRECTORY_WRITE_FAILED');
  }
  return true;
}
module.exports = {transform,install,digest,transformSource,createDirectoryEligibility,createDependencyTracker};
if (require.main === module) {
  try {
    const nextDir = process.argv[2] || path.dirname(require.resolve('next/package.json'));
    console.log(install(nextDir) ? 'NEXT_DIRECTORY_PATCH_APPLIED' : 'NEXT_DIRECTORY_PATCH_ALREADY_APPLIED');
  } catch { console.error('NEXT_DIRECTORY_PATCH_FAILED'); process.exitCode = 1; }
}
