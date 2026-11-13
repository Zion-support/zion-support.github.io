import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { gzipSync, gunzipSync } from 'node:zlib';
import { pathToFileURL } from 'node:url';
import { PREFIX, PACK_BYTES, FILE_BYTES, INDEX_BYTES, SHARDS, MIME, shardFromDigest } from '../cloudflare/asset-format.mjs';

export async function verifyDiscovery(input, source) {
  const canonical = await fs.readFile(source);
  const exported = await fs.readFile(path.join(input, 'discovery/index.html'));
  if (!canonical.includes(Buffer.from('id="dq"')) || !canonical.equals(exported)) {
    throw new Error('Discovery export must preserve the canonical public questionnaire byte-for-byte');
  }
}

async function* files(dir, base = '') {
  for (const e of (await fs.readdir(dir, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    const relative = path.posix.join(base, e.name);
    if (e.isDirectory()) yield* files(path.join(dir, e.name), relative);
    else if (e.isFile()) yield relative;
    else throw new Error(`Unsupported non-regular output: ${relative}`);
  }
}

export async function packAssets(input = 'out', output = '.worker-assets') {
  input = path.resolve(input); output = path.resolve(output);
  if (input === output || output.startsWith(input + path.sep) || input.startsWith(output + path.sep)) throw new Error('Output must be separate from source');
  // Never overwrite an existing directory. The caller can archive an old generated package.
  await fs.mkdir(output);
  const internal = path.join(output, PREFIX);
  await fs.mkdir(internal, { recursive: true });
  const indices = Array.from({ length: SHARDS }, () => Object.create(null));
  const exact = new Set();
  const aliases = [];
  const report = { format: 1, inputFiles: 0, packedFiles: 0, directFiles: 0, controlFiles: [], originalBytes: 0, compressedBytes: 0, packs: 0, shards: SHARDS, maxPackBytes: 0, maxIndexBytes: 0, verifiedFiles: 0 };
  let chunks = [], used = 0, packId = 0;
  const indexFor = (p) => indices[parseInt(shardFromDigest(createHash('sha256').update(p).digest()), 16)];
  const put = (p, entry) => { indexFor(p)[p] = entry; };
  async function flush() {
    if (!used) return;
    await fs.writeFile(path.join(internal, `p${packId}.bin`), Buffer.concat(chunks, used));
    report.maxPackBytes = Math.max(report.maxPackBytes, used);
    report.packs++; packId++; used = 0; chunks = [];
  }
  try {
    for await (const relative of files(input)) {
      const url = '/' + relative;
      if (url.startsWith(PREFIX)) throw new Error('Reserved output path collision');
      report.inputFiles++; exact.add(url);
      // These are legacy Netlify control files, inactive on the existing GitHub Pages site.
      // Activating them would redirect real pages (including /case-studies/) away.
      if (['_headers', '_redirects', '.assetsignore'].includes(relative)) { report.controlFiles.push(relative); continue; }
      const src = path.join(input, relative), stat = await fs.stat(src), type = MIME[path.extname(relative)];
      report.originalBytes += stat.size;
      let entry;
      if (type && stat.size <= FILE_BYTES) {
        const data = await fs.readFile(src), compressed = gzipSync(data, { level: 6 });
        if (compressed.length <= PACK_BYTES) {
          if (used + compressed.length > PACK_BYTES) await flush();
          if (!gunzipSync(compressed, { maxOutputLength: FILE_BYTES }).equals(data)) throw new Error(`Round-trip mismatch: ${relative}`);
          entry = [packId, used, compressed.length, data.length, createHash('sha256').update(data).digest('hex'), type];
          chunks.push(compressed); used += compressed.length;
          put(url, entry); report.packedFiles++; report.verifiedFiles++; report.compressedBytes += compressed.length;
        }
      }
      if (!entry) {
        if (stat.size > 25 * 1024 * 1024) throw new Error(`Direct asset exceeds 25 MiB: ${relative}`);
        const dest = path.join(output, relative);
        await fs.mkdir(path.dirname(dest), { recursive: true });
        try { await fs.link(src, dest); }
        catch (error) { if (['EXDEV', 'ENOTSUP', 'EPERM'].includes(error.code)) await fs.copyFile(src, dest); else throw error; }
        report.directFiles++;
        // A small index entry lets folder aliases also resolve large direct HTML files.
        if (type) { entry = { direct: url }; put(url, entry); }
      }
      if (relative.endsWith('/index.html') || relative === 'index.html') {
        const canonical = url.slice(0, -10);
        aliases.push([canonical, entry]);
        if (canonical !== '/') aliases.push([canonical.slice(0, -1), { redirect: canonical }]);
      } else if (relative.endsWith('.html')) aliases.push([url.slice(0, -5), entry]);
    }
    await flush();
    // Exact exported files win over inferred aliases. Folder indexes win over .html aliases.
    aliases.sort((a, b) => Number(!a[1]?.redirect) - Number(!b[1]?.redirect));
    for (const [url, entry] of aliases) if (!exact.has(url) && entry && !Object.hasOwn(indexFor(url), url)) put(url, entry);
    for (let i = 0; i < SHARDS; i++) {
      const bytes = Buffer.from(JSON.stringify(indices[i]));
      if (bytes.length > INDEX_BYTES) throw new Error(`Index shard ${i} exceeds bounded read size`);
      report.maxIndexBytes = Math.max(report.maxIndexBytes, bytes.length);
      await fs.writeFile(path.join(internal, `i${i.toString(16).padStart(3, '0')}.json`), bytes);
    }
    await fs.writeFile(path.join(output, '_headers'), '/*\n  Cache-Control: public, max-age=300, stale-while-revalidate=86400\n\n/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable\n');
    report.uploadFiles = report.directFiles + report.packs + SHARDS;
    if (report.uploadFiles > 20000) throw new Error(`Package exceeds Free asset count: ${report.uploadFiles}`);
    await fs.writeFile(output + '.report.json', JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ event: 'worker-assets-packaged', ...report }));
    return report;
  } catch (error) {
    // Keep incomplete files for diagnosis; no destructive cleanup or partial upload.
    await fs.writeFile(output + '.failed.json', JSON.stringify({ error: error.message }));
    throw error;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await verifyDiscovery(process.argv[2] || 'out', 'public/discovery/index.html');
  await packAssets(process.argv[2], process.argv[3]);
}
