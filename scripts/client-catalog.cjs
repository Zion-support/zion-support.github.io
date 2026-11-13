'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { createHash, randomUUID } = require('node:crypto');

// Shared browser contract. Keep complete arrays and pricing enumeration order.
// name/desc are retained only when searchServices can reach their fallback; href/tags
// are consumed by search, recommendations, and the lazy release-news lookup.
const CLIENT_FIELDS = Object.freeze([
  'id', 'icon', 'title', 'description', 'category', 'industry', 'popular',
  'released_at', 'pricing', 'features', 'benefits', 'href', 'tags', 'name', 'desc',
]);
const GENERATED = 'app/data/servicesClientData.generated.json';
const digest = value => createHash('sha256').update(value).digest('hex');

function projectService(service) {
  if (!service || typeof service !== 'object' || Array.isArray(service)) {
    throw new TypeError('Client catalog requires service objects');
  }
  // Same truthiness fallbacks as app/data/servicesData.ts; do not coerce types.
  const normalized = {
    ...service,
    title: service.title || service.name || '',
    description: service.description || service.desc || '',
    href: service.href || `/services/${service.id}`,
  };
  return Object.fromEntries(CLIENT_FIELDS.filter(key =>
    Object.prototype.hasOwnProperty.call(normalized, key) &&
    // Preserve falsy fallback values and absence; omit only unreachable copies.
    !(key === 'name' && normalized.title) &&
    !(key === 'desc' && normalized.description)
  ).map(key => [key, normalized[key]]));
}

function projectCatalog(input) {
  const rows = Array.isArray(input) ? input : input?.services;
  if (!Array.isArray(rows)) throw new TypeError('Catalog must be an array or { services: [] }');
  return rows.map(projectService);
}

function atomicWrite(file, bytes) {
  const temporary = `${file}.${process.pid}.${randomUUID()}.tmp`;
  try {
    fs.writeFileSync(temporary, bytes, { flag: 'wx' });
    fs.renameSync(temporary, file);
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
}

function ensureClientCatalog(root = process.cwd()) {
  const source = fs.readFileSync(path.join(root, 'app/data/servicesData.json'));
  const sourceSha256 = digest(source);
  const generatorSha256 = digest(fs.readFileSync(__filename));
  const outputPath = path.join(root, GENERATED);
  const metadataPath = outputPath + '.meta.json';
  try {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    if (metadata && metadata.sourceSha256 === sourceSha256 && metadata.generatorSha256 === generatorSha256 &&
        digest(fs.readFileSync(outputPath)) === metadata.outputSha256) {
      return { ...metadata, changed: false };
    }
  } catch (error) {
    if (!(error.code === 'ENOENT' || error instanceof SyntaxError)) throw error;
  }
  const rows = projectCatalog(JSON.parse(source));
  const output = Buffer.from(JSON.stringify(rows));
  const metadata = { sourceSha256, generatorSha256, outputSha256: digest(output), records: rows.length, bytes: output.length };
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  atomicWrite(outputPath, output);
  atomicWrite(metadataPath, JSON.stringify(metadata) + '\n');
  return { ...metadata, changed: true };
}

// Check actual resolved webpack resources, including transitive and dynamic
// imports. Server compilations still use the complete catalog when needed.
class ClientCatalogBoundaryPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('ClientCatalogBoundaryPlugin', compilation => {
      compilation.hooks.finishModules.tap('ClientCatalogBoundaryPlugin', modules => {
        for (const module of modules) {
          const resource = (module.resource || '').split('?')[0].replace(/\\/g, '/');
          if (/(?:^|\/)data\/servicesData\.(?:json|tsx?|[cm]?js)$/.test(resource)) {
            compilation.errors.push(new Error('Complete service catalog reached the browser: ' + resource + '. Import servicesClientData instead.'));
          }
        }
      });
      compilation.hooks.afterProcessAssets.tap('ClientCatalogBoundaryPlugin', () => {
        const files = new Set();
        for (const module of compilation.modules) {
          const resource = (module.resource || '').split('?')[0].replace(/\\/g, '/');
          if (!resource.endsWith('/' + GENERATED)) continue;
          for (const chunk of compilation.chunkGraph.getModuleChunksIterable(module)) {
            for (const file of chunk.files) if (file.endsWith('.js')) files.add(file);
          }
        }
        const assets = [...files].sort().map(file => {
          const source = compilation.getAsset(file).source;
          const bytes = source.buffer ? source.buffer() : Buffer.from(source.source());
          return { path: '/_next/' + file, bytes: bytes.length, sha256: digest(bytes) };
        });
        // Build-log evidence only; no catalog data or public diagnostic file.
        console.log('[client-catalog-assets]', JSON.stringify({ assets }));
      });
    });
  }
}

module.exports = { CLIENT_FIELDS, GENERATED, projectService, projectCatalog, ensureClientCatalog, ClientCatalogBoundaryPlugin };
if (require.main === module) console.log(JSON.stringify(ensureClientCatalog()));
