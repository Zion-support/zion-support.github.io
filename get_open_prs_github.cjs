#!/usr/bin/env node
/**
 * Get open PRs from GitHub API
 */

const { execSync } = require('child_process');
const https = require('https');

function getGitHubToken() {
  try {
    // Try to extract from git remote
    const remote = execSync('git remote get-url origin', { encoding: 'utf-8' }).trim();
    const match = remote.match(/x-access-token:([^@]+)@/);
    if (match) {
      return match[1];
    }
  } catch (e) {}
  return process.env.GITHUB_TOKEN || null;
}

function getOpenPRs() {
  return new Promise((resolve, reject) => {
    const token = getGitHubToken();
    if (!token) {
      console.log('No GitHub token found, returning empty array');
      resolve([]);
      return;
    }

    const options = {
      hostname: 'api.github.com',
      path: '/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100',
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const prs = JSON.parse(data);
            resolve(prs);
          } catch (e) {
            reject(e);
          }
        } else {
          console.log(`GitHub API returned status ${res.statusCode}: ${data}`);
          resolve([]);
        }
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
}

async function main() {
  console.log('🔍 Fetching open PRs from GitHub API...');
  try {
    const prs = await getOpenPRs();
    console.log(`Found ${prs.length} open PR(s)`);
    
    if (prs.length > 0) {
      const fs = require('fs');
      const prData = prs.map(pr => ({
        number: pr.number,
        title: pr.title,
        headRefName: pr.head.ref,
        headRepositoryOwner: {
          login: pr.head.repo.owner.login
        },
        state: pr.state,
        mergeable: pr.mergeable
      }));
      
      fs.writeFileSync('/workspace/current_open_prs_fresh.json', JSON.stringify(prData, null, 2));
      console.log('✅ Saved to current_open_prs_fresh.json');
      
      // Show first few
      console.log('\nFirst 5 PRs:');
      prData.slice(0, 5).forEach(pr => {
        console.log(`  - PR #${pr.number}: ${pr.title} (${pr.headRefName})`);
      });
    } else {
      console.log('✅ No open PRs found - all PRs may have been merged or closed');
    }
  } catch (error) {
    console.error('❌ Error fetching PRs:', error.message);
    process.exit(1);
  }
}

main();
