#!/usr/bin/env node

import https from 'https';

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

function makeGitHubRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: endpoint,
      method: 'GET',
      headers: {
        'User-Agent': 'Zion-App-Automation',
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
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function checkOpenPRs() {
  try {
    console.log('Checking for open pull requests...');
    
    // Get open pull requests
    const prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    
    console.log(`Found ${prs.length} open pull requests:`);
    console.log('=====================================');
    
    if (prs.length === 0) {
      console.log('No open pull requests found.');
      return [];
    }
    
    const prDetails = [];
    
    for (const pr of prs) {
      console.log(`\nPR #${pr.number}: ${pr.title}`);
      console.log(`  Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      console.log(`  Author: ${pr.user.login}`);
      console.log(`  Created: ${pr.created_at}`);
      console.log(`  Updated: ${pr.updated_at}`);
      console.log(`  URL: ${pr.html_url}`);
      
      // Check if PR has merge conflicts
      const prDetail = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}`);
      const hasConflicts = prDetail.mergeable === false;
      console.log(`  Has conflicts: ${hasConflicts ? 'YES' : 'NO'}`);
      
      prDetails.push({
        number: pr.number,
        title: pr.title,
        head: pr.head.ref,
        base: pr.base.ref,
        author: pr.user.login,
        url: pr.html_url,
        hasConflicts,
        mergeable: prDetail.mergeable,
        mergeable_state: prDetail.mergeable_state
      });
    }
    
    return prDetails;
    
  } catch (error) {
    console.error('Error checking PRs:', error.message);
    return [];
  }
}

// Run the check
checkOpenPRs().then(prs => {
  console.log(`\nSummary: Found ${prs.length} open pull requests`);
  process.exit(0);
}).catch(error => {
  console.error('Failed to check PRs:', error);
  process.exit(1);
});