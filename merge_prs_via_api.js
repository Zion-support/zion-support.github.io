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

// Function to merge a PR via GitHub API
async function mergePRViaAPI(pr) {
  try {
    console.log(`🔄 Attempting to merge PR #${pr.number} via GitHub API...`);
    
    // Check if PR is mergeable
    if (pr.mergeable === false) {
      console.log(`  ⚠️  PR #${pr.number} is not mergeable, skipping...`);
      return false;
    }
    
    // Try to merge the PR
    const mergeResult = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}/merge`, 'PUT', {
      commit_title: `Merge PR #${pr.number}: ${pr.title}`,
      commit_message: `Automated merge of PR #${pr.number}`,
      merge_method: 'merge'
    });
    
    if (mergeResult.merged) {
      console.log(`  ✅ Successfully merged PR #${pr.number}`);
      return true;
    } else {
      console.log(`  ❌ Failed to merge PR #${pr.number}: ${mergeResult.message}`);
      return false;
    }
    
  } catch (error) {
    console.log(`  ❌ Error merging PR #${pr.number}: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('🚀 Starting PR merge process via GitHub API...');
    
    // Get all open PRs
    console.log('📋 Fetching open PRs...');
    const prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }
    
    console.log(`📊 Found ${prs.length} open PR(s)`);
    
    // Filter PRs that target main branch and are mergeable
    const mergeablePRs = prs.filter(pr => 
      pr.base.ref === 'main' && 
      pr.mergeable === true &&
      pr.title.includes('Fix errors and merge to main')
    );
    
    console.log(`🎯 ${mergeablePRs.length} mergeable PR(s) targeting main branch`);
    
    if (mergeablePRs.length === 0) {
      console.log('⚠️  No mergeable PRs found');
      return;
    }
    
    // Sort PRs by number (oldest first)
    mergeablePRs.sort((a, b) => a.number - b.number);
    
    let successCount = 0;
    let failCount = 0;
    
    // Process each PR (limit to first 5 to avoid overwhelming the system)
    const prsToProcess = mergeablePRs.slice(0, 5);
    
    for (const pr of prsToProcess) {
      console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`  Branch: ${pr.head.ref} -> ${pr.base.ref}`);
      console.log(`  Mergeable: ${pr.mergeable}`);
      
      const success = await mergePRViaAPI(pr);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Small delay between PRs
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log(`\n📊 Merge Summary:`);
    console.log(`  ✅ Successfully merged: ${successCount}`);
    console.log(`  ❌ Failed to merge: ${failCount}`);
    console.log(`  📋 Total processed: ${prsToProcess.length}`);
    
  } catch (error) {
    console.error('❌ Error in main process:', error.message);
  }
}

main().catch(console.error);