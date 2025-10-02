#!/usr/bin/env node

import https from 'https';

/**
 * Check for open pull requests using GitHub API
 */

const repoOwner = 'Zion-Holdings';
const repoName = 'zion.app';

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js',
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
          const jsonData = JSON.parse(data);
          resolve(jsonData);
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

async function getOpenPRs() {
  try {
    console.log(`Checking for open PRs in ${repoOwner}/${repoName}...`);
    
    const path = `/repos/${repoOwner}/${repoName}/pulls?state=open`;
    const prs = await makeRequest(path);
    
    console.log(`Found ${prs.length} open pull requests:`);
    console.log('=====================================');
    
    if (prs.length === 0) {
      console.log('No open pull requests found.');
      return [];
    }
    
    for (const pr of prs) {
      console.log(`PR #${pr.number}: ${pr.title}`);
      console.log(`  Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      console.log(`  Author: ${pr.user.login}`);
      console.log(`  Created: ${pr.created_at}`);
      console.log(`  Updated: ${pr.updated_at}`);
      console.log(`  State: ${pr.state}`);
      console.log(`  Mergeable: ${pr.mergeable}`);
      console.log(`  URL: ${pr.html_url}`);
      console.log('---');
    }
    
    return prs;
  } catch (error) {
    console.error('Error fetching open PRs:', error.message);
    return [];
  }
}

// Main execution
getOpenPRs().then(prs => {
  console.log(`\nTotal open PRs: ${prs.length}`);
}).catch(error => {
  console.error('Failed to check open PRs:', error);
});