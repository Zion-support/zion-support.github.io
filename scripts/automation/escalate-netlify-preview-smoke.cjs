#!/usr/bin/env node
/**
 * ⚠️ DEPRECATED — Netlify decommissioned. This script is a no-op.
 *
 * Formerly escalated repeated Netlify preview smoke failures as a deduped GitHub issue.
 * Netlify is being decommissioned. This script exits cleanly without doing anything.
 *
 * Previous env: NETLIFY_PREVIEW_SMOKE_FAIL_STREAK, NETLIFY_PREVIEW_SMOKE_RECOVERY_STREAK,
 *               NETLIFY_PREVIEW_SMOKE_STREAK_AUTHORITY, ISSUE_FINGERPRINT, GITHUB_SHA, GITHUB_WORKFLOW
 * Previous reads:  automation/reports/netlify-preview-smoke-latest.json
 * Previous writes: automation/reports/netlify-preview-smoke-state.json
 */
const fs = require('fs');
const path = require('path');

const STATE = path.join(process.cwd(), 'automation', 'reports', 'netlify-preview-smoke-state.json');

function main() {
  console.log(
    '[escalate-netlify-preview-smoke] SKIP — Netlify has been decommissioned. ' +
    'This script no longer escalates preview smoke failures. ' +
    'Update your workflow to use the current deploy platform.'
  );

  // Touch the state file so downstream consumers that check for it don't fail
  try {
    fs.mkdirSync(path.dirname(STATE), { recursive: true });
    fs.writeFileSync(
      STATE,
      JSON.stringify(
        {
          decommissioned: true,
          updatedAt: new Date().toISOString(),
          consecutiveFailures: 0,
          consecutiveHealthy: 0,
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
