#!/usr/bin/env node

import https from 'https';
import { execSync } from 'child_process';

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

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
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = responseData ? JSON.parse(responseData) : {};
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
    const response = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    return response.data;
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

async function getPRDetails(prNumber) {
  try {
    const response = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching PR #${prNumber}:`, error.message);
    return null;
  }
}

async function mergePR(prNumber, title) {
  try {
    console.log(`\nMerging PR #${prNumber}: ${title}`);
    
    // Get PR details first
    const prDetails = await getPRDetails(prNumber);
    if (!prDetails) {
      console.log(`  ❌ Failed to get PR details`);
      return false;
    }

    // Check if PR is mergeable
    if (prDetails.mergeable === false) {
      console.log(`  ⚠️  PR has conflicts, skipping`);
      return false;
    }

    if (prDetails.mergeable_state === 'dirty') {
      console.log(`  ⚠️  PR is dirty, skipping`);
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
      console.log(`  ✅ Successfully merged PR #${prNumber}`);
      return true;
    } else {
      console.log(`  ❌ Failed to merge PR #${prNumber}: ${response.data.message || 'Unknown error'}`);
      return false;
    }

  } catch (error) {
    console.error(`  ❌ Error merging PR #${prNumber}:`, error.message);
    return false;
  }
}

async function mergeAllPRs() {
  try {
    console.log('Fetching open pull requests...');
    const prs = await getOpenPRs();
    
    if (prs.length === 0) {
      console.log('No open pull requests found.');
      return;
    }

    console.log(`Found ${prs.length} open pull requests`);
    console.log('=====================================');

    // Filter PRs that target main branch and don't have conflicts
    const mainPRs = prs.filter(pr => 
      pr.base.ref === 'main' && 
      pr.mergeable !== false && 
      pr.mergeable_state !== 'dirty'
    );

    console.log(`\nFound ${mainPRs.length} PRs targeting main branch without conflicts`);
    
    if (mainPRs.length === 0) {
      console.log('No mergeable PRs found.');
      return;
    }

    let successCount = 0;
    let failCount = 0;

    // Merge PRs one by one
    for (const pr of mainPRs) {
      const success = await mergePR(pr.number, pr.title);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Add a small delay between merges
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(`\n=====================================`);
    console.log(`Merge Summary:`);
    console.log(`  ✅ Successfully merged: ${successCount}`);
    console.log(`  ❌ Failed to merge: ${failCount}`);
    console.log(`  📊 Total processed: ${mainPRs.length}`);

  } catch (error) {
    console.error('Error in merge process:', error.message);
  }
}

// Run the merge process
mergeAllPRs().then(() => {
  console.log('\nMerge process completed.');
  process.exit(0);
}).catch(error => {
  console.error('Failed to merge PRs:', error);
  process.exit(1);
});