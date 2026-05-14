#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * ⚠️ DEPRECATED — Netlify decommissioned. This script is a no-op.
 *
 * Formerly ran headless Chromium smoke tests via Playwright against Netlify deploy URL
 * (from automation/reports/deploy-status-latest.json), with fallback to production
 * (ZION_PRODUCTION_URL / https://ziontechgroup.com).
 * Netlify is being decommissioned. This script exits cleanly without doing anything.
 *
 * Previous env: NETLIFY_DEPLOY_URL, ZION_PRODUCTION_URL, NETLIFY_PLAYWRIGHT_MAX_ROUTES,
 *               NETLIFY_PLAYWRIGHT_FAIL_ON_ERROR
 * Previous output: automation/reports/netlify-playwright-smoke-latest.json
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(process.cwd(), 'automation', 'reports', 'netlify-playwright-smoke-latest.json');

async function main() {
  console.log(
    '[netlify-playwright-smoke] SKIP — Netlify has been decommissioned. ' +
    'This script no longer runs Playwright smoke tests against Netlify deploys. ' +
    'Update your workflow to use the current deploy platform.'
  );

  const payload = {
    generatedAt: new Date().toISOString(),
    skipped: true,
    reason: 'Netlify has been decommissioned — this script is a no-op',
    allOk: null,
    results: [],
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
