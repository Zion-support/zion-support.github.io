// Shared, versioned format. No per-request mutable state.
export const PREFIX = '/__zion_packed_v1/';
export const PACK_BYTES = 1024 * 1024;
export const FILE_BYTES = 4 * 1024 * 1024;
export const INDEX_BYTES = 512 * 1024;
export const SHARDS = 1024;
export const ASSET_BYTES = 25 * 1024 * 1024;
export const STREAM_BYTES = 64 * 1024 * 1024;
export const STREAM_MIME = { '.js': 'text/javascript; charset=utf-8' };
export const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};
export function shardFromDigest(bytes) {
  return (((bytes[0] << 8) | bytes[1]) % SHARDS).toString(16).padStart(3, '0');
}
