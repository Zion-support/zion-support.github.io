// Validation-branch experiment against the two exact modules in the lockfile.
const { createHash } = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const build = path.resolve(process.argv[2] || 'node_modules/next/dist/build');
const report = process.argv.includes('--entry-metrics');

function original(file, expected) {
  const data = fs.readFileSync(path.join(build, file));
  if (createHash('sha256').update(data).digest('hex') !== expected) {
    throw new Error('Unexpected Next.js source, refusing to patch ' + file);
  }
  return data.toString();
}

function replace(source, from, to, count = 1) {
  if (source.split(from).length !== count + 1) throw new Error('Unexpected number of source anchors for ' + from);
  return source.replaceAll(from, to);
}

const loaderPath = 'webpack/loaders/next-app-loader/index.js';
const entries = original('entries.js', '42bce6601be85db8019657324eba0ab5fa2a3cf0b62dd636705a4cc17a3d42ac');
const loader = original(loaderPath, '61dec03764a93db3db816346c00f31b1a14f3b743b3498d7dab534dcdb7709f3');
const anchor = '    const getEntryHandler = (mappings, pagesType)=>async (page)=>{';
const setup = [
  '    const routes = Object.keys(appPathsPerRoute);',
  '    const shared = !isDev && appDir && appPaths && !process.env.NEXT_RSPACK && process.env.ZION_NEXT_SHARED_ROUTE_MANIFEST === "1";',
  '    const routeOption = shared',
  '        ? { normalizedAppPathsFile: require("./zion-route-manifest.cjs").publishRouteList(_path.resolve(rootDir, config.distDir, "cache", "app-route-lists"), routes) }',
  '        : { allNormalizedAppPaths: routes };',
  anchor
].join('\n');
let newEntries = replace(entries, anchor, setup);
newEntries = replace(newEntries, 'allNormalizedAppPaths: Object.keys(appPathsPerRoute),', '...routeOption,', 2);
const newLoader = replace(loader, 'const allNormalizedAppPaths = allNormalizedAppPathsOption ?? [];', [
  'const allNormalizedAppPaths = loaderOptions.normalizedAppPathsFile',
  '        ? require("../../../zion-route-manifest.cjs").readRouteList(loaderOptions.normalizedAppPathsFile)',
  '        : allNormalizedAppPathsOption ?? [];'
].join('\n'));

// Logging is optional and follows the actual construction of the complete entries map.
let reportSource;
if (report) {
  const marker = '    // Create deferred entrypoints if configured';
  const impl = original('webpack-build/impl.js', '421731ea3b8122fb42321462bb8b0556b635976a14f163860449e4ce0f729f72');
  reportSource = replace(impl, marker, [
    '    const sizes = Object.values(entrypoints.server).filter(x => typeof x?.import === "string" && x.import.startsWith("next-app-loader?")).map(x => x.import.length);',
    '    console.log("ZION_COMPLETE_ENTRIES " + JSON.stringify({ server: Object.keys(entrypoints.server).length, appLoaderCount: sizes.length, maxQueryChars: sizes.reduce((m, n) => Math.max(m, n), 0), heapMiB: Math.round(process.memoryUsage().heapUsed / 1048576) }));',
    marker
  ].join('\n'));
}

fs.copyFileSync(path.join(__dirname,'manifest.cjs'), path.join(build,'zion-route-manifest.cjs'),fs.constants.COPYFILE_EXCL);
fs.writeFileSync(path.join(build, 'entries.js'), newEntries);
fs.writeFileSync(path.join(build, loaderPath), newLoader);
if (report) fs.writeFileSync(path.join(build, 'webpack-build/impl.js'), reportSource);
