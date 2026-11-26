// Work around quadratic app-loader requests in the locked Next.js webpack builder.
const fs = require('node:fs');
const path = require('node:path');
const { createHash, randomUUID } = require('node:crypto');

const checksum = bytes => createHash('sha256').update(bytes).digest('hex');
const handler = '    const getEntryHandler = (mappings, pagesType)=>async (page)=>{';
const routeOption = [
  '    const routes = Object.keys(appPathsPerRoute);',
  '    const shared = !isDev && appDir && appPaths && !process.env.NEXT_RSPACK && process.env.ZION_NEXT_SHARED_ROUTE_MANIFEST !== "0";',
  '    const routeOption = shared',
  '        ? { normalizedAppPathsFile: require("./zion-route-manifest.cjs").publishRouteList(_path.resolve(rootDir, config.distDir, "cache", "app-route-lists"), routes) }',
  '        : { allNormalizedAppPaths: routes };',
  handler
].join('\n');

// The new loader accepts old inline requests. Install it before switching the writer.
const changes = [
  {
    file: 'webpack/loaders/next-app-loader/index.js',
    original: '61dec03764a93db3db816346c00f31b1a14f3b743b3498d7dab534dcdb7709f3',
    patched: '26a56c3af9131b5db8f9018490b63c74009f87eda7113567be7e9ef38c6863d3',
    edit: text => text.replace('const allNormalizedAppPaths = allNormalizedAppPathsOption ?? [];', [
      'const allNormalizedAppPaths = loaderOptions.normalizedAppPathsFile',
      '        ? require("../../../zion-route-manifest.cjs").readRouteList(loaderOptions.normalizedAppPathsFile)',
      '        : allNormalizedAppPathsOption ?? [];'
    ].join('\n'))
  },
  {
    file: 'entries.js',
    original: '42bce6601be85db8019657324eba0ab5fa2a3cf0b62dd636705a4cc17a3d42ac',
    patched: '2f811f65ae12f6eeec22d9fa2701d0d27c4aeccd3495573da8d386c3cbcc5a09',
    edit: text => text.replace(handler, routeOption)
      .replaceAll('allNormalizedAppPaths: Object.keys(appPathsPerRoute),', '...routeOption,')
  }
];

function publish(filename, contents, mode = 0o644) {
  const tmp = filename + '.' + randomUUID() + '.tmp';
  try {
    fs.writeFileSync(tmp, contents, { flag: 'wx', mode });
    fs.renameSync(tmp, filename);
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

function install(build) {
  const prepared = changes.map(change => {
    const filename = path.join(build, change.file);
    const original = fs.existsSync(filename) ? fs.readFileSync(filename) : null;
    const hash = original && checksum(original);
    return { change, filename, original, hash };
  });
  if (prepared.some(({ change, hash }) => hash !== change.original && hash !== change.patched)) {
    if (prepared.some(({ change, hash }) => hash === change.patched)) {
      throw new Error('Mixed Next.js module versions. Reinstall the locked dependencies with npm ci.');
    }
    console.warn('[next-route-manifest] Unrecognized Next.js build modules. Using the installed framework as provided.');
    return;
  }

  for (const item of prepared.filter(({ change, hash }) => hash === change.original)) {
    item.contents = Buffer.from(item.change.edit(item.original.toString('utf8')));
    if (checksum(item.contents) !== item.change.patched) throw new Error('Unexpected patch result for ' + item.filename);
  }
  const helper = path.join(build, 'zion-route-manifest.cjs');
  const contents = fs.readFileSync(path.join(__dirname, 'manifest.cjs'));
  if (!fs.existsSync(helper)) {
    publish(helper, contents);
  } else if (!contents.equals(fs.readFileSync(helper))) {
    throw new Error('Unexpected route manifest helper. Reinstall the locked dependencies with npm ci.');
  }
  for (const item of prepared) {
    if (item.contents) publish(item.filename, item.contents, fs.statSync(item.filename).mode & 0o777);
  }
}

if (require.main === module) {
  let nextPackage;
  try {
    nextPackage = require.resolve('next/package.json');
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') throw error;
  }
  if (nextPackage) install(path.join(path.dirname(nextPackage), 'dist', 'build'));
}

module.exports = { install };
