#!/usr/bin/env node

import https from 'https';

// GitHub API configuration
const _GITHUB_API_BASE = 'https://api.github.com';
const _REPO_OWNER = 'Zion-Holdings';
const _REPO_NAME = 'zion.app';

function makeGitHubRequest(endpoint, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: endpoint,
      method: method,
      headers: {
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    if (data) {
      options.headers['Content-Length'] = Buffer.byteLength(data);
    }

    const req = https.request(options, (res) => {
      let _responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        try {
          const _jsonData = responseData ? JSON.parse(responseData) : {};
          resolve({ status: res.statusCode, data: jsonData });
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(data);
    }

    req.end();
  });
}

async function getOpenPRs() {
  try {
    const _response = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    return response.data;
  } catch (error) {

    return [];
  }
}

async function getPRDetails(prNumber) {
  try {
    const _response = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`);
    return response.data;
  } catch (error) {

    return null;
  }
}

async function mergePR(prNumber, title) {
  try {

    // Get PR details first
    const _prDetails = await getPRDetails(prNumber);
    if (!prDetails) {

      return false;
    }

    // Check if PR is mergeable
    if (prDetails.mergeable === false) {

      return false;
    }

    if (prDetails.mergeable_state === 'dirty') {

      return false;
    }

    // Merge the PR
    const mergeData = JSON.stringify({
      commit_title: `Merge PR #${prNumber}: ${title}`,
      merge_method: 'merge'
    });

    const response = await makeGitHubRequest(
      `/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`,
      'PUT',
      mergeData
    );

    if (response.status === 200) {

      return true;
    } else {

      return false;
    }

  } catch (error) {

    return false;
  }
}

async function mergeAllPRs() {
  try {

    const _prs = await getOpenPRs();
    
    if (prs.length === 0) {

      return;
    }


    // Filter PRs that target main branch and don't have conflicts
    const mainPRs = prs.filter(pr => 
      pr.base.ref === 'main' && 
      pr.mergeable !== false && 
      pr.mergeable_state !== 'dirty'
    );

    if (mainPRs.length === 0) {

      return;
    }

    let _successCount = 0;
    let _failCount = 0;

    // Merge PRs one by one
    for (const pr of mainPRs) {
      const _success = await mergePR(pr.number, pr.title);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Add a small delay between merges
      await new Promise(resolve => setTimeout(resolve, 1000));
    }





  } catch (error) {

  }
}

// Run the merge process
mergeAllPRs().then(() => {

  process.exit(0);
}).catch(error => {

  process.exit(1);
});