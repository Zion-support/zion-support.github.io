#!/usr/bin/env node
/**
 * ⚠️ DEPRECATED — Netlify decommissioned. This script is a no-op.
 *
 * Formerly smoke-tested routes on NETLIFY_DEPLOY_URL (Netlify preview deploy hostname).
 * Netlify is being decommissioned. This script exits cleanly without doing anything.
 *
 * Previous env: NETLIFY_DEPLOY_URL, SMOKE_NETLIFY_MAX_ROUTES
 * Previous output: automation/reports/netlify-preview-smoke-latest.json
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(process.cwd(), 'automation', 'reports', 'netlify-preview-smoke-latest.json');

async function main() {
  console.log(
    '[smoke-netlify-deploy-preview] SKIP — Netlify has been decommissioned. ' +
    'This script no longer smoke-tests preview deploy routes. ' +
    'Update your workflow to use the current deploy platform.'
  );

  const payload = {
    generatedAt: new Date().toISOString(),
    skipped: true,
    reason: 'Netlify has been decommissioned — this script is a no-op',
    failureClass: 'none',
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

  process.exit(0);
}

main();
