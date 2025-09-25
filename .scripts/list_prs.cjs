#!/usr/bin/env node
// List open PRs with essential metadata (CommonJS)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const https = require('node:https');

function requestJson(url, token) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'cursor-automation'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${e.message}. Body: ${data}`));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  const originUrl = process.argv[2];
  if (!originUrl) {
    console.error('Usage: list_prs.js <origin_url_with_token>');
    process.exit(2);
  }
  const m = originUrl.match(/https:\/\/x-access-token:([^@]+)@github.com\/([^/]+)\/([^/]+)(?:\.git)?/);
  if (!m) {
    console.error('Unable to parse origin URL');
    process.exit(2);
  }
  const token = m[1];
  const owner = m[2];
  const repo = m[3];

  const prs = await requestJson(`https://api.github.com/repos/${owner}/${repo}/pulls?state=open&per_page=100`, token);
  if (!Array.isArray(prs)) {
    console.log('API_RESPONSE');
    console.log(JSON.stringify(prs, null, 2));
    return;
  }
  for (const p of prs) {
    console.log([
      p.number,
      p.title.replace(/\n/g, ' '),
      p.draft ? 'draft' : 'ready',
      `base:${p.base && p.base.ref}`,
      `head:${p.head && p.head.ref}`,
      `headSha:${p.head && p.head.sha}`
    ].join(' | '));
  }
}

main().catch(err => {
  console.error(err.stack || err.message);
  process.exit(1);
});

