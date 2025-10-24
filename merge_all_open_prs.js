#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
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

// Function to run git commands
function runGitCommand(command) {
  try {
    return execSync(command, { cwd: '/workspace', encoding: 'utf8' });
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    return null;
  }
}

// Function to resolve merge conflicts automatically
function resolveConflicts() {
  console.log('🔧 Resolving merge conflicts...');
  
  // Find all files with conflict markers
  const conflictFiles = runGitCommand('git diff --name-only --diff-filter=U');
  if (!conflictFiles) return true;
  
  const files = conflictFiles.trim().split('\n').filter(f => f);
  
  for (const file of files) {
    console.log(`  📝 Resolving conflicts in ${file}`);
    
    try {
      // Read the file
      const content = fs.readFileSync(`/workspace/${file}`, 'utf8');
      
      // Simple conflict resolution - take the incoming changes (after =======)
      let resolved = content
        .replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
        .replace(/<<<<<<< [^\n]+[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
      
      // Write the resolved content back
      fs.writeFileSync(`/workspace/${file}`, resolved);
      
      // Add the resolved file
      runGitCommand(`git add ${file}`);
      
    } catch (error) {
      console.error(`  ❌ Error resolving conflicts in ${file}:`, error.message);
      return false;
    }
  }
  
  return true;
}

// Function to merge a PR
async function mergePR(pr) {
  console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
  
  try {
    // Check if PR is mergeable
    if (pr.mergeable === false) {
      console.log(`  ⚠️  PR #${pr.number} is not mergeable, skipping...`);
      return false;
    }
    
    // Fetch the PR branch
    console.log(`  📥 Fetching branch ${pr.head.ref}...`);
    runGitCommand(`git fetch origin ${pr.head.ref}`);
    
    // Try to merge
    console.log(`  🔀 Attempting to merge ${pr.head.ref} into main...`);
    const mergeResult = runGitCommand(`git merge origin/${pr.head.ref} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`);
    
    if (mergeResult) {
      console.log(`  ✅ Successfully merged PR #${pr.number}`);
      
      // Push the changes
      console.log(`  📤 Pushing changes to main...`);
      runGitCommand('git push origin main');
      
      // Close the PR via API
      try {
        await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}`, 'PATCH', {
          state: 'closed'
        });
        console.log(`  🔒 Closed PR #${pr.number}`);
      } catch (apiError) {
        console.log(`  ⚠️  Could not close PR #${pr.number} via API: ${apiError.message}`);
      }
      
      return true;
    } else {
      console.log(`  ❌ Failed to merge PR #${pr.number}`);
      return false;
    }
    
  } catch (error) {
    console.error(`  ❌ Error processing PR #${pr.number}:`, error.message);
    
    // Try to resolve conflicts
    if (resolveConflicts()) {
      console.log(`  🔧 Conflicts resolved, retrying merge...`);
      const retryResult = runGitCommand(`git commit -m "Resolve conflicts for PR #${pr.number}"`);
      if (retryResult) {
        runGitCommand('git push origin main');
        return true;
      }
    }
    
    // If still failing, abort the merge
    runGitCommand('git merge --abort');
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('🚀 Starting PR merge process...');
    
    // Ensure we're on main branch
    console.log('📍 Switching to main branch...');
    runGitCommand('git checkout main');
    runGitCommand('git pull origin main');
    
    // Get all open PRs
    console.log('📋 Fetching open PRs...');
    const prs = await makeGitHubRequest(`/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`);
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }
    
    console.log(`📊 Found ${prs.length} open PR(s)`);
    
    // Filter PRs that target main branch
    const mainPRs = prs.filter(pr => pr.base.ref === 'main');
    console.log(`🎯 ${mainPRs.length} PR(s) targeting main branch`);
    
    // Sort PRs by number (oldest first)
    mainPRs.sort((a, b) => a.number - b.number);
    
    let successCount = 0;
    let failCount = 0;
    
    // Process each PR
    for (const pr of mainPRs) {
      const success = await mergePR(pr);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Small delay between PRs
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(`\n📊 Merge Summary:`);
    console.log(`  ✅ Successfully merged: ${successCount}`);
    console.log(`  ❌ Failed to merge: ${failCount}`);
    console.log(`  📋 Total processed: ${mainPRs.length}`);
    
  } catch (error) {
    console.error('❌ Error in main process:', error.message);
  }
}

main().catch(console.error);