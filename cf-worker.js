/**
 * Cloudflare Worker: serve static HTML from public/ via ASSETS.
 * Keep in sync with src/index.js (wrangler main).
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
