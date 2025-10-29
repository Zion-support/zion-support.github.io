#!/usr/bin/env node
import https from 'https';

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'Zion-Holdings';
const REPO_NAME = 'zion.app';

// Function to make GitHub API requests
const makeGitHubRequest = (path, method = 'GET', data = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: path,
      method: method,
      headers: {
        'User-Agent': 'Zion-App-Automation',
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : ''
      }
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
    }

    const req = https.request(options, res => {
      let responseData = '';
      res.on('data', chunk => {
        responseData += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(responseData);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${responseData}`));
        }
      });
    });

    req.on('error', error => reject(error));

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
};

// Function to check if a branch exists
async function checkBranchExists(branchName) {
  try {
    await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/branches/${branchName}`);
    return true;
  } catch (error) {
    return false;
  }
}

// Function to close a PR
async function closePR(pr) {
  try {
    await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}`, 'PATCH', {
      state: 'closed'
    });
    console.log(`  ✅ Closed PR #${pr.number} (${pr.title})`);
    return true;
  } catch (error) {
    console.log(`  ❌ Failed to close PR #${pr.number}: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('🔍 Checking for stale PRs...');
    
    // Get all open PRs
    const prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }
    
    console.log(`📊 Found ${prs.length} open PR(s)`);
    
    // Filter PRs that target main branch
    const mainPRs = prs.filter(pr => pr.base.ref === 'main');
    console.log(`🎯 ${mainPRs.length} PR(s) targeting main branch`);
    
    let closedCount = 0;
    let skippedCount = 0;
    
    // Process each PR
    for (const pr of mainPRs) {
      console.log(`\n🔍 Checking PR #${pr.number}: ${pr.title}`);
      console.log(`  Branch: ${pr.head.ref}`);
      
      // Check if the branch still exists
      const branchExists = await checkBranchExists(pr.head.ref);
      
      if (!branchExists) {
        console.log(`  ⚠️  Branch ${pr.head.ref} no longer exists, closing PR...`);
        const closed = await closePR(pr);
        if (closed) {
          closedCount++;
        }
      } else {
        console.log(`  ✅ Branch ${pr.head.ref} still exists, keeping PR open`);
        skippedCount++;
      }
      
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log(`\n📊 Close Summary:`);
    console.log(`  🔒 Closed stale PRs: ${closedCount}`);
    console.log(`  ⏭️  Skipped active PRs: ${skippedCount}`);
    console.log(`  📋 Total processed: ${mainPRs.length}`);
    
  } catch (error) {
    console.error('❌ Error in main process:', error.message);
  }
}

main().catch(console.error);