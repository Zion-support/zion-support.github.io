import { PREFIX, PACK_BYTES, FILE_BYTES, INDEX_BYTES, shardFromDigest } from './asset-format.mjs';

async function boundedBody(response, limit) {
  if (!response.ok || !response.body) throw new Error('Missing package asset');
  const reader = response.body.getReader();
  const parts = []; let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read(); if (done) break;
      size += value.length;
      if (size > limit) { await reader.cancel(); throw new Error('Package asset exceeds bound'); }
      parts.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const part of parts) { bytes.set(part, offset); offset += part.length; }
  return bytes;
}

async function lookup(path, env) {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(path)));
  const response = await env.ASSETS.fetch(`https://assets.invalid${PREFIX}i${shardFromDigest(digest)}.json`);
  const index = JSON.parse(new TextDecoder().decode(await boundedBody(response, INDEX_BYTES)));
  return Object.hasOwn(index, path) ? index[path] : undefined;
}

function acceptsGzip(header) {
  const values = new Map((header || '').toLowerCase().split(',').map(s => {
    const [name, ...params] = s.trim().split(';');
    const q = params.find(p => p.trim().startsWith('q='));
    return [name, q ? Number(q.trim().slice(2)) : 1];
  }));
  return (values.get('gzip') ?? values.get('*') ?? 0) > 0;
}

async function packedResponse(entry, request, env, status = 200) {
  if (entry?.direct) {
    const response = await env.ASSETS.fetch(new Request(new URL(entry.direct, request.url), request));
    if (!response.ok && response.status !== 304) throw new Error('Missing direct package asset');
    if (response.status === 304) return response;
    return new Response(response.body, { status, headers: response.headers });
  }
  if (!Array.isArray(entry) || entry.length !== 6) throw new Error('Invalid package entry');
  const [pack, offset, length, original, hash, mime] = entry;
  if (![pack, offset, length, original].every(Number.isSafeInteger) || pack < 0 || offset < 0 || length <= 0 || offset + length > PACK_BYTES || original < 0 || original > FILE_BYTES) throw new Error('Invalid package bounds');
  const gzip = acceptsGzip(request.cf?.clientAcceptEncoding ?? request.headers.get('Accept-Encoding'));
  const etag = `"${hash}${gzip ? '-gz' : ''}"`;
  const headers = new Headers({ 'Content-Type': mime, ETag: etag, Vary: 'Accept-Encoding', 'Cache-Control': 'public, max-age=300, stale-while-revalidate=86400', 'X-Content-Type-Options': 'nosniff' });
  // Ranges are ignored (200/full body), as permitted by HTTP and native Workers assets.
  // This avoids interpreting a range against the wrong compressed representation.
  const matches = request.headers.get('If-None-Match')?.split(',').some(s => s.trim().replace(/^W\//, '') === etag || s.trim() === '*');
  if (status === 200 && matches) return new Response(null, { status: 304, headers });
  if (gzip) headers.set('Content-Encoding', 'gzip');
  headers.set('Content-Length', String(gzip ? length : original));
  if (request.method === 'HEAD') return new Response(null, { status, headers, encodeBody: 'manual' });
  const response = await env.ASSETS.fetch(`https://assets.invalid${PREFIX}p${pack}.bin`);
  const bytes = await boundedBody(response, PACK_BYTES);
  if (offset + length > bytes.length) throw new Error('Truncated package');
  const body = bytes.slice(offset, offset + length);
  if (gzip) return new Response(body, { status, headers, encodeBody: 'manual' });
  // At most FILE_BYTES can be produced by a validated build-time entry.
  const decoded = await boundedBody(new Response(new Blob([body]).stream().pipeThrough(new DecompressionStream('gzip'))), FILE_BYTES);
  if (decoded.length !== original) throw new Error('Invalid decompressed size');
  return new Response(decoded, { status, headers });
}

export default {
  async fetch(request, env) {
    if (!['GET', 'HEAD'].includes(request.method)) return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    const url = new URL(request.url);
    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { return new Response('Bad Request', { status: 400 }); }
    if (pathname.startsWith(PREFIX) || pathname.includes('\0') || pathname.includes('\\') || pathname.split('/').some(p => p === '.' || p === '..')) return new Response('Not Found', { status: 404 });
    try {
      const entry = await lookup(pathname, env);
      if (entry?.redirect) { url.pathname = entry.redirect; return new Response(null, { status: 308, headers: { Location: url.href } }); }
      if (entry) return await packedResponse(entry, request, env);
      const direct = await env.ASSETS.fetch(request);
      if (direct.status !== 404) return direct;
      const missing = await lookup('/404.html', env);
      return missing ? await packedResponse(missing, request, env, 404) : new Response(request.method === 'HEAD' ? null : 'Not Found', { status: 404 });
    } catch (error) {
      console.error(JSON.stringify({ event: 'static-package-error', message: error.message }));
      return new Response(request.method === 'HEAD' ? null : 'Temporarily unavailable', { status: 503, headers: { 'Cache-Control': 'no-store', 'Retry-After': '60' } });
    }
  },
};
