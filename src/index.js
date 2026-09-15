/**
 * Cloudflare Worker: serve static HTML from public/ via ASSETS.
 * Production site is not Next.js.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
