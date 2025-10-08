#!/usr/bin/env node

import https from 'https';
import { execSync } from 'child_process';

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

async function getOpenPRs() {
  try {
    const prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    return prs;
  } catch (error) {
    console.error('Error fetching PRs:', error.message);
    return [];
  }
}

async function getPRDetails(prNumber) {
  try {
    const prDetails = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`);
    return prDetails;
  } catch (error) {
    console.error(`Error fetching PR #${prNumber}:`, error.message);
    return null;
  }
}

function runGitCommand(command) {
  try {
    const result = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return { success: true, output: result };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      output: error.stdout ? error.stdout.toString() : '',
      stderr: error.stderr ? error.stderr.toString() : ''
    };
  }
}

async function mergePRWithGit(pr) {
  try {
    console.log(`\nProcessing PR #${pr.number}: ${pr.title}`);
    console.log(`  Branch: ${pr.head.ref} -> ${pr.base.ref}`);
    
    // Get detailed PR info
    const prDetails = await getPRDetails(pr.number);
    if (!prDetails) {
      console.log(`  ❌ Failed to get PR details`);
      return false;
    }

    // Check if PR is mergeable
    if (prDetails.mergeable === false) {
      console.log(`  ⚠️  PR has conflicts, will try to resolve`);
    }

    // Fetch the PR branch
    console.log(`  📥 Fetching branch ${pr.head.ref}...`);
    const fetchResult = runGitCommand(`git fetch origin ${pr.head.ref}`);
    if (!fetchResult.success) {
      console.log(`  ❌ Failed to fetch branch: ${fetchResult.error}`);
      return false;
    }

    // Try to merge the branch
    console.log(`  🔀 Attempting to merge...`);
    const mergeResult = runGitCommand(`git merge origin/${pr.head.ref} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`);
    
    if (mergeResult.success) {
      console.log(`  ✅ Successfully merged PR #${pr.number}`);
      return true;
    } else {
      // If merge failed due to conflicts, try to resolve them
      console.log(`  ⚠️  Merge failed, attempting to resolve conflicts...`);
      
      // Check if there are merge conflicts
      const statusResult = runGitCommand(`git status --porcelain`);
      if (statusResult.success && statusResult.output.includes('UU')) {
        console.log(`  🔧 Resolving merge conflicts...`);
        
        // Use our conflict resolution script
        const conflictResult = runGitCommand(`python3 fix_merge_conflicts.py`);
        if (conflictResult.success) {
          // Add resolved files
          runGitCommand(`git add .`);
          
          // Commit the merge
          const commitResult = runGitCommand(`git commit -m "Merge PR #${pr.number}: ${pr.title} (conflicts resolved)"`);
          if (commitResult.success) {
            console.log(`  ✅ Successfully merged PR #${pr.number} with conflicts resolved`);
            return true;
          } else {
            console.log(`  ❌ Failed to commit resolved conflicts: ${commitResult.error}`);
            return false;
          }
        } else {
          console.log(`  ❌ Failed to resolve conflicts: ${conflictResult.error}`);
          return false;
        }
      } else {
        console.log(`  ❌ Merge failed: ${mergeResult.error}`);
        return false;
      }
    }

  } catch (error) {
    console.error(`  ❌ Error processing PR #${pr.number}:`, error.message);
    return false;
  }
}

async function mergeAllPRsWithGit() {
  try {
    console.log('Fetching open pull requests...');
    const prs = await getOpenPRs();
    
    if (prs.length === 0) {
      console.log('No open pull requests found.');
      return;
    }

    console.log(`Found ${prs.length} open pull requests`);
    console.log('=====================================');

    // Filter PRs that target main branch
    const mainPRs = prs.filter(pr => pr.base.ref === 'main');
    console.log(`\nFound ${mainPRs.length} PRs targeting main branch`);

    if (mainPRs.length === 0) {
      console.log('No PRs targeting main branch found.');
      return;
    }

    let successCount = 0;
    let failCount = 0;

    // Process PRs one by one
    for (const pr of mainPRs) {
      const success = await mergePRWithGit(pr);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Add a small delay between merges
      await new Promise(resolve => setTimeout(resolve, 2000));
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
mergeAllPRsWithGit().then(() => {
  console.log('\nMerge process completed.');
  process.exit(0);
}).catch(error => {
  console.error('Failed to merge PRs:', error);
  process.exit(1);
});