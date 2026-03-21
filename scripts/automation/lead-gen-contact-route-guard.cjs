#!/usr/bin/env node
/* eslint-disable no-console */
const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { 'User-Agent': 'zion-lead-gen-guard/1.0' } },
      (res) => {
        let body = '';
        res.on('data', (c) => {
          body += c;
        });
        res.on('end', () => resolve({ status: res.statusCode || 0, body }));
      },
    );
    req.on('error', reject);
    req.setTimeout(25000, () => req.destroy(new Error('timeout')));
  });
}

async function main() {
  const base = (process.env.LEAD_GEN_BASE_URL || 'https://ziontechgroup.com').replace(/\/$/, '');
  const contact = `${base}/contact`;
  const expected = (process.env.LEAD_GEN_EXPECTED_EMAIL || 'commercial@ziontechgroup.com').toLowerCase();

  const resp = await get(contact);
  const okStatus = resp.status >= 200 && resp.status < 400;
  const hasEmail = String(resp.body || '').toLowerCase().includes(expected);

  if (!okStatus || !hasEmail) {
    console.error('[lead-gen-guard] failed', { status: resp.status, hasEmail, expected });
    process.exit(1);
  }
  console.log('[lead-gen-guard] ok', { status: resp.status, email: expected });
}

main().catch((e) => {
  console.error('[lead-gen-guard]', e.message || e);
  process.exit(1);
});
