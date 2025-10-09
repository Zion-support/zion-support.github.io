#!/usr/bin/env node

import https from 'https';

// GitHub API configuration
const _GITHUB_API_BASE = 'https://api.github.com';
const _REPO_OWNER = 'Zion-Holdings';
const _REPO_NAME = 'zion.app';

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
      let _data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const _jsonData = JSON.parse(data);
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

    // Get open pull requests
    const _prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);


    if (prs.length === 0) {

      return [];
    }
    
    const _prDetails = [];
    
    for (const pr of prs) {






      // Check if PR has merge conflicts
      const _prDetail = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}`);
      const _hasConflicts = prDetail.mergeable === false;

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

    return [];
  }
}

// Run the check
checkOpenPRs().then(prs => {

  process.exit(0);
}).catch(error => {

  process.exit(1);
});
