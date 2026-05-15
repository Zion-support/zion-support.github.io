#!/usr/bin/env node
/* eslint-disable no-console */

async function get(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(new Error('timeout')), 25000);
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'User-Agent': 'zion-lead-gen-guard/1.0' },
      redirect: 'follow',
      signal: controller.signal,
    });
    const body = await res.text();
    return { status: res.status, body, finalUrl: res.url };
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  // Check both the root contact and the basePath contact for compatibility
  const urls = [
    'https://ziontechgroup.com/contact',
    'https://ziontechgroup.com/zion.app/contact',
  ];
  
  const expected = (process.env.LEAD_GEN_EXPECTED_EMAIL || 'commercial@ziontechgroup.com').toLowerCase();
  
  for (const contactUrl of urls) {
    const resp = await get(contactUrl);
    const okStatus = resp.status >= 200 && resp.status < 400;
    const hasEmail = String(resp.body || '').toLowerCase().includes(expected);
    
    if (okStatus && hasEmail) {
      console.log('[lead-gen-guard] ok', { status: resp.status, email: expected, url: contactUrl });
      return;
    }
  }
  
  // If we get here, none worked - report the failures
  for (const contactUrl of urls) {
    const resp = await get(contactUrl);
    const hasEmail = String(resp.body || '').toLowerCase().includes(expected);
    console.error('[lead-gen-guard] failed', {
      url: contactUrl,
      status: resp.status,
      hasEmail,
      expected,
    });
  }
  process.exit(1);
}

main().catch((e) => {
  console.error('[lead-gen-guard]', e.message || e);
  process.exit(1);
});