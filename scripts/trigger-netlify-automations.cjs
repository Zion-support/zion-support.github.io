#!/usr/bin/env node
/*
 Minimal Netlify build trigger. It tries, in order:
 1) NETLIFY_BUILD_HOOK_URL (direct webhook)
 2) NETLIFY_SITE_ID + NETLIFY_AUTH_TOKEN via Netlify API
 If nothing is configured, it exits gracefully with code 0 and message.
*/

const https = require('https');

function postJson(urlString, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlString);
    const data = JSON.stringify(body || {});
    const options = {
      method: 'POST',
      hostname: url.hostname,
      path: url.pathname + (url.search || ''),
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        ...headers,
      },
    };
    const req = https.request(options, (res) => {
      let raw = '';
      res.on('data', (chunk) => (raw += chunk));
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ statusCode: res.statusCode, body: raw });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${raw}`));
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  const buildHook = process.env.NETLIFY_BUILD_HOOK_URL;
  const siteId = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_AUTH_TOKEN;

  if (buildHook) {
    try {
      const res = await postJson(buildHook, { trigger: 'manual' });
      console.log('Netlify build hook triggered successfully');
      return;
    } catch (err) {
      console.warn('Build hook trigger failed, will try API if possible:', err.message);
    }
  }

  if (siteId && token) {
    try {
      const url = `https://api.netlify.com/api/v1/sites/${siteId}/builds`;
      const res = await postJson(url, {}, { Authorization: `Bearer ${token}` });
      console.log('Netlify API build triggered successfully');
      return;
    } catch (err) {
      console.error('Netlify API trigger failed:', err.message);
      process.exitCode = 1;
      return;
    }
  }

  console.log('No Netlify build configuration found. Set NETLIFY_BUILD_HOOK_URL or NETLIFY_SITE_ID + NETLIFY_AUTH_TOKEN.');
}

main();

