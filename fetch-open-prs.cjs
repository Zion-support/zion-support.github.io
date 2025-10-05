#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

// GitHub API configuration
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'ghs_RuW2r4kB3crTSeQY2drdJ50hCJoFNO3V5KOe';

async function fetchOpenPRs() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`,
      method: 'GET',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Zion-App-Merger',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (Array.isArray(response)) {
            resolve(response);
          } else {
            console.log('API Response:', response);
            resolve([]);
          }
        } catch (error) {
          console.log('Raw data:', data);
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function main() {
  try {
    console.log('🔍 Fetching open PRs from GitHub...');
    const openPRs = await fetchOpenPRs();
    
    console.log(`📊 Found ${openPRs.length} open PRs`);
    
    if (openPRs.length === 0) {
      console.log('✅ No open PRs found. Repository is up to date.');
      return;
    }
    
    // Save PRs to file for processing
    const prData = {
      total: openPRs.length,
      timestamp: new Date().toISOString(),
      prs: openPRs.map(pr => ({
        number: pr.number,
        title: pr.title,
        head: {
          ref: pr.head.ref,
          sha: pr.head.sha
        },
        base: {
          ref: pr.base.ref,
          sha: pr.base.sha
        },
        mergeable: pr.mergeable,
        mergeable_state: pr.mergeable_state,
        draft: pr.draft,
        state: pr.state,
        created_at: pr.created_at,
        updated_at: pr.updated_at,
        html_url: pr.html_url
      }))
    };
    
    fs.writeFileSync('/workspace/open-prs.json', JSON.stringify(prData, null, 2));
    
    console.log('\n📋 Open PRs Summary:');
    console.log('===================');
    
    openPRs.forEach(pr => {
      console.log(`PR #${pr.number}: ${pr.title}`);
      console.log(`  Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      console.log(`  Status: ${pr.mergeable_state} (Draft: ${pr.draft})`);
      console.log(`  Created: ${pr.created_at}`);
      console.log(`  URL: ${pr.html_url}`);
      console.log('');
    });
    
    console.log('💾 PR data saved to /workspace/open-prs.json');
    
  } catch (error) {
    console.error('❌ Error fetching PRs:', error.message);
    process.exit(1);
  }
}

main();