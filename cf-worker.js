/**
 * Cloudflare Workers entry for ziontechgroup.
 * Production site is static HTML in public/. Assets binding serves it.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
