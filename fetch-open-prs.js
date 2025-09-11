#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

// GitHub API configuration
const GITHUB_OWNER = 'Zion-Holdings';
const GITHUB_REPO = 'zion.app';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.log('❌ GITHUB_TOKEN environment variable not set');
  console.log(
    'Please set your GitHub token: export GITHUB_TOKEN=your_token_here'
  );
  process.exit(1);
}

const options = {
  hostname: 'api.github.com',
  path: `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/pulls?state=open&per_page=100`,
  method: 'GET',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    'User-Agent': 'PR-Merger-Script',
    Accept: 'application/vnd.github.v3+json',
  },
};

console.log('🔍 Fetching open PRs from GitHub...');

const req = https.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const prs = JSON.parse(data);

      if (res.statusCode !== 200) {
        console.error('❌ Error fetching PRs:', data);
        process.exit(1);
      }

      console.log(`\n📋 Found ${prs.length} open PRs:`);
      console.log('='.repeat(80));

      if (prs.length === 0) {
        console.log('✅ No open PRs found!');
        return;
      }

      prs.forEach((pr, index) => {
        console.log(`${index + 1}. PR #${pr.number}: ${pr.title}`);
        console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
        console.log(`   Author: ${pr.user.login}`);
        console.log(
          `   Created: ${new Date(pr.created_at).toLocaleDateString()}`
        );
        console.log(`   URL: ${pr.html_url}`);
        console.log(
          `   Mergeable: ${pr.mergeable === null ? 'Unknown' : pr.mergeable ? 'Yes' : 'No'}`
        );
        console.log(`   Mergeable State: ${pr.mergeable_state || 'Unknown'}`);
        console.log('-'.repeat(80));
      });

      // Save PR data to file for processing
      fs.writeFileSync(
        '/workspace/open-prs.json',
        JSON.stringify(prs, null, 2)
      );
      console.log(`\n💾 Saved PR data to /workspace/open-prs.json`);
    } catch (error) {
      console.error('❌ Error parsing PR data:', error.message);
      console.error('Response:', data);
      process.exit(1);
    }
  });
});

req.on('error', error => {
  console.error('❌ Error fetching PRs:', error.message);
  process.exit(1);
});

req.end();
