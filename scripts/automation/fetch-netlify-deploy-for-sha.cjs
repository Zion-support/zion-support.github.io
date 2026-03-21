#!/usr/bin/env node
/**
 * Optional: resolve Netlify deploy id/url for the current commit via Netlify API.
 * Writes NETLIFY_DEPLOY_ID and NETLIFY_DEPLOY_URL to GITHUB_ENV when running in Actions.
 *
 * Env:
 *   NETLIFY_AUTH_TOKEN - Personal access token with deploy read (required)
 *   NETLIFY_SITE_ID     - Site API id (required)
 *   GITHUB_SHA          - Full commit sha to match (required)
 *   GITHUB_ENV          - Set by GitHub Actions for env propagation
 */
const https = require('https');
const fs = require('fs');

function getJson(url, token) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Agent': 'zion-deploy-correlation/1.0',
        },
      },
      (res) => {
        let body = '';
        res.on('data', (c) => {
          body += c;
        });
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
            return;
          }
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(e);
          }
        });
      },
    );
    req.on('error', reject);
    req.setTimeout(25_000, () => {
      req.destroy(new Error('timeout'));
    });
  });
}

function main() {
  const token = process.env.NETLIFY_AUTH_TOKEN;
  const siteId = process.env.NETLIFY_SITE_ID;
  const sha = (process.env.GITHUB_SHA || '').trim();

  if (!token || !siteId || !sha || sha === 'unknown') {
    console.log('fetch-netlify-deploy-for-sha: skip (missing NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID, or GITHUB_SHA)');
    process.exit(0);
  }

  const short = sha.slice(0, 7);
  const url = `https://api.netlify.com/api/v1/sites/${encodeURIComponent(siteId)}/deploys?per_page=15`;

  getJson(url, token)
    .then((deploys) => {
      if (!Array.isArray(deploys)) {
        console.warn('Unexpected Netlify response shape');
        process.exit(0);
      }
      const match = deploys.find(
        (d) =>
          d &&
          (d.commit_ref === sha ||
            d.commit_ref === short ||
            (typeof d.commit_ref === 'string' && sha.startsWith(d.commit_ref)) ||
            (typeof d.sha === 'string' && (d.sha === sha || d.sha.startsWith(short)))),
      );
      const pick = match || deploys[0];
      if (!pick || !pick.id) {
        console.log('No Netlify deploy matched; skipping env export.');
        process.exit(0);
      }
      const deployUrl =
        pick.deploy_ssl_url ||
        pick.ssl_url ||
        pick.url ||
        (pick.admin_url ? String(pick.admin_url).replace(/\/deploys\/.*/, `/deploys/${pick.id}`) : '');
      const ghEnv = process.env.GITHUB_ENV;
      if (ghEnv) {
        const esc = (s) => String(s).replace(/\n/g, ' ');
        fs.appendFileSync(ghEnv, `NETLIFY_DEPLOY_ID=${esc(pick.id)}\n`);
        if (deployUrl) {
          fs.appendFileSync(ghEnv, `NETLIFY_DEPLOY_URL=${esc(deployUrl)}\n`);
        }
        console.log('Wrote Netlify deploy metadata to GITHUB_ENV:', pick.id);
      } else {
        console.log('NETLIFY_DEPLOY_ID=', pick.id);
        console.log('NETLIFY_DEPLOY_URL=', deployUrl || '');
      }
    })
    .catch((err) => {
      console.warn('fetch-netlify-deploy-for-sha (non-fatal):', err.message || err);
      process.exit(0);
    });
}

main();
