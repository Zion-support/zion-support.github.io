#!/usr/bin/env node

import https from 'https';
import { execSync } from 'child_process';

// GitHub API configuration
const GITHUB_API = 'api.github.com';
const REPO = 'Zion-Holdings/zion.app';

// Function to make GitHub API requests
function makeGitHubRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: GITHUB_API,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

// Function to merge a PR
async function mergePR(prNumber) {
  try {
    console.log(`\n🔄 Processing PR #${prNumber}...`);
    
    // Get PR details
    const pr = await makeGitHubRequest(`/repos/${REPO}/pulls/${prNumber}`);
    const branchName = pr.head.ref;
    
    console.log(`📋 PR #${prNumber}: ${pr.title}`);
    console.log(`🌿 Branch: ${branchName}`);
    
    // Check if branch exists locally
    try {
      execSync(`git checkout ${branchName}`, { stdio: 'pipe' });
      console.log(`✅ Checked out branch: ${branchName}`);
    } catch (e) {
      console.log(`⚠️  Branch ${branchName} not found locally, fetching...`);
      try {
        execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });
        execSync(`git checkout -b ${branchName} origin/${branchName}`, { stdio: 'pipe' });
        console.log(`✅ Created and checked out branch: ${branchName}`);
      } catch (fetchError) {
        console.log(`❌ Could not fetch branch ${branchName}: ${fetchError.message}`);
        return false;
      }
    }
    
    // Switch to main and merge
    execSync('git checkout main', { stdio: 'pipe' });
    
    try {
      // Try to merge
      execSync(`git merge ${branchName} --no-ff -m "Merge PR #${prNumber}: ${pr.title}"`, { stdio: 'pipe' });
      console.log(`✅ Successfully merged PR #${prNumber}`);
      
      // Push to main
      execSync('git push origin main', { stdio: 'pipe' });
      console.log(`🚀 Pushed changes to main`);
      
      return true;
    } catch (mergeError) {
      console.log(`⚠️  Merge conflict in PR #${prNumber}, attempting to resolve...`);
      
      // Check for conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.includes('UU') || status.includes('AA')) {
        console.log(`🔧 Resolving conflicts in PR #${prNumber}...`);
        
        // Use merge strategy to resolve conflicts
        try {
          execSync('git add .', { stdio: 'pipe' });
          execSync(`git commit -m "Resolve merge conflicts for PR #${prNumber}"`, { stdio: 'pipe' });
          execSync('git push origin main', { stdio: 'pipe' });
          console.log(`✅ Resolved conflicts and merged PR #${prNumber}`);
          return true;
        } catch (resolveError) {
          console.log(`❌ Could not resolve conflicts for PR #${prNumber}: ${resolveError.message}`);
          // Abort merge
          execSync('git merge --abort', { stdio: 'pipe' });
          return false;
        }
      }
      
      return false;
    }
    
  } catch (error) {
    console.log(`❌ Error processing PR #${prNumber}: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('🔍 Fetching open PRs...');
    
    // Get all open PRs
    const prs = await makeGitHubRequest(`/repos/${REPO}/pulls?state=open&per_page=100`);
    
    console.log(`📊 Found ${prs.length} open PRs`);
    
    let successCount = 0;
    let failureCount = 0;
    
    // Process each PR
    for (const pr of prs) {
      const success = await mergePR(pr.number);
      if (success) {
        successCount++;
      } else {
        failureCount++;
      }
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(`\n📈 Summary:`);
    console.log(`✅ Successfully merged: ${successCount} PRs`);
    console.log(`❌ Failed to merge: ${failureCount} PRs`);
    console.log(`📊 Total processed: ${prs.length} PRs`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
main();