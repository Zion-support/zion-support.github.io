#!/usr/bin/env node
/**
 * ⚠️ DEPRECATED — Netlify decommissioned. This script is a no-op.
 *
 * Formerly resolved Netlify deploy id/url for the current commit via Netlify API.
 * Netlify is being decommissioned. This script exits cleanly without doing anything.
 *
 * Previous env: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID, GITHUB_SHA
 * Previous output: NETLIFY_DEPLOY_ID, NETLIFY_DEPLOY_URL (written to GITHUB_ENV)
 */
const fs = require('fs');
const path = require('path');

const CACHE_PATH = path.join(process.cwd(), 'automation', 'reports', 'netlify-deploy-lookup-cache-latest.json');

async function main() {
  console.log(
    '[fetch-netlify-deploy-for-sha] SKIP — Netlify has been decommissioned. ' +
    'This script no longer contacts the Netlify API. ' +
    'Update your workflow to use the current deploy platform.'
  );

  // Write placeholder env vars so downstream steps that expect them don't break
  const ghEnv = process.env.GITHUB_ENV;
  if (ghEnv) {
    fs.appendFileSync(ghEnv, 'NETLIFY_DEPLOY_ID=netlify-decommissioned\n');
    fs.appendFileSync(ghEnv, 'NETLIFY_DEPLOY_URL=\n');
  }

  // Touch the cache file so downstream consumers that check for it don't fail
  try {
    fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
    fs.writeFileSync(
      CACHE_PATH,
      JSON.stringify(
        {
          decommissioned: true,
          fetchedAt: new Date().toISOString(),
          siteId: 'netlify-decommissioned',
          reason: 'Netlify has been decommissioned — this script is a no-op',
        },
        null,
        2
      ) + '\n',
      'utf8'
    );
  } catch {
    /* non-fatal */
  }

  process.exit(0);
}

main();
