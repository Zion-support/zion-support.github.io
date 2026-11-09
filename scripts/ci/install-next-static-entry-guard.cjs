'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const VERSION = '16.4.5';
const ORIGINALS = new Set([
  '42bce6601be85db8019657324eba0ab5fa2a3cf0b62dd636705a4cc17a3d42ac',
  '9191d8db39fbf2b0ccf7c7566ddf41416077b7d0b846a50d26b7352290c07733',
]);
const PATCHED = new Set(['e5a560aa079ecc9d07c51daaa1497d4d4828f379a1b75393e5a8fd8b48bcccdc', '553b1e323ce5a85c6299eeb7f3dd7bc8713ccb9606486ab87645c6a650624045']);
const digest = value => crypto.createHash('sha256').update(value).digest('hex');
function fail(code) { throw new Error(code); }
function replaceExactly(source, before, after, count) {
  if (source.split(before).length - 1 !== count) fail('NEXT_ENTRY_UNEXPECTED_CONTENT');
  return source.split(before).join(after);
}
function transform(source, version) {
  if (version !== VERSION) fail('NEXT_ENTRY_UNSUPPORTED_VERSION');
  const hash = digest(source);
  if (PATCHED.has(hash)) return { source, changed: false };
  if (!ORIGINALS.has(hash)) fail('NEXT_ENTRY_UNSUPPORTED_HASH');
  try { new vm.Script(source); } catch { fail('NEXT_ENTRY_INVALID_SOURCE'); }
  let output = replaceExactly(source, 'function getAppEntry(opts) {', `function getAppEntry(opts) {
    // Keep caller-owned options untouched, including the Rspack projectRoot assignment.
    opts = { ...opts };
    // Only the JavaScript loader has the audited static-sibling early return.
    // Unknown shapes and all potentially dynamic paths retain the complete list.
    const isStaticPath = (value)=>typeof value === 'string' && value.length > 0 && !value.includes('[') && !/%(?:25)*5b/i.test(value);
    const knownStaticAppPaths = typeof opts.appPaths === 'string'
        ? isStaticPath(opts.appPaths)
        : Array.isArray(opts.appPaths) && Array.from(opts.appPaths).every(isStaticPath);
    if (!process.env.BUILTIN_APP_LOADER && isStaticPath(opts.page) && isStaticPath(opts.pagePath) && knownStaticAppPaths) {
        delete opts.allNormalizedAppPaths;
    }`, 1);
  output = replaceExactly(output, '    const getEntryHandler = (mappings, pagesType)=>async (page)=>{', '    const allNormalizedAppPaths = Object.freeze(Object.keys(appPathsPerRoute));\n    const getEntryHandler = (mappings, pagesType)=>async (page)=>{', 1);
  output = replaceExactly(output, 'allNormalizedAppPaths: Object.keys(appPathsPerRoute),', 'allNormalizedAppPaths,', 2);
  try { new vm.Script(output); } catch { fail('NEXT_ENTRY_INVALID_PATCH'); }
  if (!PATCHED.has(digest(output))) fail('NEXT_ENTRY_PATCH_INTEGRITY');
  return { source: output, changed: true };
}
function install(nextDir) {
  const file = path.join(nextDir, 'dist/build/entries.js');
  try { if (!fs.lstatSync(file).isFile() || fs.lstatSync(file).isSymbolicLink()) fail('NEXT_ENTRY_SYMLINK_REJECTED'); } catch { fail('NEXT_ENTRY_TARGET_REJECTED'); }
  let version, input;
  try { version = JSON.parse(fs.readFileSync(path.join(nextDir,'package.json'),'utf8')).version; input = fs.readFileSync(file,'utf8'); }
  catch { fail('NEXT_ENTRY_READ_FAILED'); }
  const result = transform(input, version);
  if (!result.changed) return false;
  // All validation is complete before creating a temporary file. Rename publishes atomically.
  const tmp = file + '.static-entry-guard-' + crypto.randomUUID() + '.tmp';
  try {
    const initialStat = fs.lstatSync(file);
    if (!initialStat.isFile() || initialStat.isSymbolicLink()) fail('NEXT_ENTRY_TARGET_REJECTED');
    fs.writeFileSync(tmp,result.source,{flag:'wx',mode:initialStat.mode});
    const currentStat = fs.lstatSync(file);
    if (!currentStat.isFile() || currentStat.isSymbolicLink() || currentStat.ino !== initialStat.ino || currentStat.dev !== initialStat.dev || fs.readFileSync(file,'utf8') !== input) fail('NEXT_ENTRY_CONCURRENT_CHANGE');
    fs.renameSync(tmp,file);
  } catch(error) {
    try { fs.unlinkSync(tmp); } catch {}
    if (error.message === 'NEXT_ENTRY_CONCURRENT_CHANGE') throw error;
    fail('NEXT_ENTRY_WRITE_FAILED');
  }
  return true;
}
module.exports = {transform,install,digest};
if (require.main === module) {
  try {
    const nextDir = process.argv[2] || path.dirname(require.resolve('next/package.json'));
    console.log(install(nextDir) ? 'NEXT_ENTRY_PATCH_APPLIED' : 'NEXT_ENTRY_PATCH_ALREADY_APPLIED');
  } catch { console.error('NEXT_ENTRY_PATCH_FAILED'); process.exitCode = 1; }
}
