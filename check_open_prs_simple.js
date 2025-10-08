#!/usr/bin/env node

import https from 'https';

const makeGitHubRequest = (path) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Zion-App-Automation',
        Accept: 'application/vnd.github.v3+json',
      },
    };

    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', error => reject(error));
    req.end();
  });
};

async function main() {
  console.log('🔍 Checking for open PRs...');
  const prs = await makeGitHubRequest('/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100');

  if (prs.length === 0) {
    console.log('✅ No open PRs found');
  } else {
    console.log(`📋 Found ${prs.length} open PR(s):`);
    prs.forEach(pr => {
      console.log(`  PR #${pr.number}: ${pr.title}`);
      console.log(`  Branch: ${pr.head.ref} → ${pr.base.ref}`);
      console.log(`  URL: ${pr.html_url}`);
      console.log();
    });
  }
}

main().catch(console.error);
