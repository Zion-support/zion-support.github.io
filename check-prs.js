#!/usr/bin/env node

// Simple script to check for open PRs using GitHub API
import https from 'https';

async function checkOpenPRs() {
  const owner = 'Zion-Holdings';
  const repo = 'zion.app';
  
  const options = {
    hostname: 'api.github.com',
    path: `/repos/${owner}/${repo}/pulls?state=open`,
    method: 'GET',
    headers: {
      'User-Agent': 'PR-Checker',
      'Accept': 'application/vnd.github.v3+json'
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const prs = JSON.parse(data);
          resolve(prs);
        } catch (error) {
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
    console.log('Checking for open PRs...');
    const prs = await checkOpenPRs();
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
    } else {
      console.log(`📋 Found ${prs.length} open PR(s):`);
      prs.forEach(pr => {
        console.log(`  - PR #${pr.number}: ${pr.title}`);
        console.log(`    State: ${pr.state}`);
        console.log(`    Mergeable: ${pr.mergeable}`);
        console.log(`    Has conflicts: ${pr.mergeable === false}`);
        console.log('');
      });
    }
  } catch (error) {
    console.error('Error checking PRs:', error.message);
  }
}

main();