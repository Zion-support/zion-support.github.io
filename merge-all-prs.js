#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const REPO_OWNER = 'ziontechgroup'; // Update this with the actual repo owner
const REPO_NAME = 'ziontechgroup'; // Update this with the actual repo name
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

if (!GITHUB_TOKEN) {
  console.error('❌ GitHub token not found. Please set GITHUB_TOKEN or GH_TOKEN environment variable.');
  process.exit(1);
}

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';
const HEADERS = {
  'Authorization': `token ${GITHUB_TOKEN}`,
  'Accept': 'application/vnd.github.v3+json',
  'User-Agent': 'PR-Merger-Script'
};

// Utility functions
async function makeRequest(url, options = {}) {
  const fetch = (await import('node-fetch')).default;
  const response = await fetch(url, {
    ...options,
    headers: { ...HEADERS, ...options.headers }
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`HTTP ${response.status}: ${error}`);
  }
  
  return response.json();
}

async function getOpenPRs() {
  console.log('🔍 Fetching open pull requests...');
  const url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100`;
  return makeRequest(url);
}

async function getPRDetails(prNumber) {
  const url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}`;
  return makeRequest(url);
}

async function getPRMergeStatus(prNumber) {
  const url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`;
  try {
    await makeRequest(url, { method: 'GET' });
    return true; // Can be merged
  } catch (error) {
    if (error.message.includes('404')) {
      return false; // Cannot be merged
    }
    throw error;
  }
}

async function mergePR(prNumber, mergeMethod = 'merge') {
  const url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/merge`;
  const body = {
    commit_title: `Merge PR #${prNumber}`,
    commit_message: `Automated merge of PR #${prNumber}`,
    merge_method: mergeMethod
  };
  
  return makeRequest(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

async function updatePRBranch(prNumber) {
  const url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${prNumber}/update-branch`;
  return makeRequest(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  });
}

// Git operations
function runGitCommand(command) {
  try {
    return execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe'
    });
  } catch (error) {
    console.error(`Git command failed: ${command}`);
    console.error(error.message);
    throw error;
  }
}

function checkoutBranch(branchName) {
  console.log(`📋 Checking out branch: ${branchName}`);
  runGitCommand(`git checkout ${branchName}`);
}

function pullLatest() {
  console.log('⬇️ Pulling latest changes...');
  runGitCommand('git pull origin main');
}

function mergeBranch(sourceBranch, targetBranch = 'main') {
  console.log(`🔄 Merging ${sourceBranch} into ${targetBranch}...`);
  try {
    runGitCommand(`git merge origin/${sourceBranch} --no-ff -m "Merge ${sourceBranch} into ${targetBranch}"`);
    return true;
  } catch (error) {
    console.error(`❌ Merge conflict in ${sourceBranch}:`, error.message);
    return false;
  }
}

function pushChanges() {
  console.log('⬆️ Pushing changes...');
  runGitCommand('git push origin main');
}

// Conflict resolution
function resolveConflicts() {
  console.log('🔧 Attempting to resolve conflicts...');
  
  // Try to resolve common conflicts automatically
  const conflictFiles = runGitCommand('git diff --name-only --diff-filter=U').trim();
  
  if (conflictFiles) {
    console.log(`Found conflicts in: ${conflictFiles}`);
    
    // For each conflicted file, try to resolve
    conflictFiles.split('\n').forEach(file => {
      if (file.trim()) {
        console.log(`Resolving conflicts in: ${file}`);
        try {
          // Try to resolve using git's merge strategy
          runGitCommand(`git checkout --theirs "${file}"`);
          runGitCommand(`git add "${file}"`);
        } catch (error) {
          console.error(`Could not auto-resolve ${file}:`, error.message);
        }
      }
    });
    
    // Try to complete the merge
    try {
      runGitCommand('git commit --no-edit');
      console.log('✅ Conflicts resolved automatically');
      return true;
    } catch (error) {
      console.error('❌ Could not resolve conflicts automatically');
      return false;
    }
  }
  
  return true;
}

// Main execution
async function main() {
  try {
    console.log('🚀 Starting PR merge process...');
    
    // Ensure we're on main branch
    checkoutBranch('main');
    pullLatest();
    
    // Get all open PRs
    const openPRs = await getOpenPRs();
    console.log(`📊 Found ${openPRs.length} open pull requests`);
    
    if (openPRs.length === 0) {
      console.log('✅ No open PRs to merge');
      return;
    }
    
    const results = {
      merged: [],
      failed: [],
      conflicts: []
    };
    
    // Process each PR
    for (const pr of openPRs) {
      console.log(`\n📝 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`   Branch: ${pr.head.ref}`);
      console.log(`   Author: ${pr.user.login}`);
      
      try {
        // Check if PR can be merged
        const canMerge = await getPRMergeStatus(pr.number);
        
        if (!canMerge) {
          console.log(`⚠️ PR #${pr.number} cannot be merged via API, trying local merge...`);
          
          // Try local merge
          try {
            const mergeSuccess = mergeBranch(pr.head.ref);
            
            if (mergeSuccess) {
              results.merged.push(pr.number);
              console.log(`✅ Successfully merged PR #${pr.number} locally`);
            } else {
              // Try to resolve conflicts
              const conflictResolved = resolveConflicts();
              
              if (conflictResolved) {
                results.merged.push(pr.number);
                console.log(`✅ Successfully merged PR #${pr.number} after resolving conflicts`);
              } else {
                results.conflicts.push(pr.number);
                console.log(`❌ Could not resolve conflicts for PR #${pr.number}`);
              }
            }
          } catch (error) {
            results.failed.push(pr.number);
            console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
          }
        } else {
          // Merge via API
          try {
            await mergePR(pr.number);
            results.merged.push(pr.number);
            console.log(`✅ Successfully merged PR #${pr.number} via API`);
          } catch (error) {
            console.log(`⚠️ API merge failed for PR #${pr.number}, trying local merge...`);
            
            try {
              const mergeSuccess = mergeBranch(pr.head.ref);
              
              if (mergeSuccess) {
                results.merged.push(pr.number);
                console.log(`✅ Successfully merged PR #${pr.number} locally`);
              } else {
                results.conflicts.push(pr.number);
                console.log(`❌ Could not merge PR #${pr.number} locally`);
              }
            } catch (localError) {
              results.failed.push(pr.number);
              console.log(`❌ Failed to merge PR #${pr.number}: ${localError.message}`);
            }
          }
        }
      } catch (error) {
        results.failed.push(pr.number);
        console.log(`❌ Error processing PR #${pr.number}: ${error.message}`);
      }
    }
    
    // Push all changes
    if (results.merged.length > 0) {
      console.log('\n⬆️ Pushing merged changes...');
      pushChanges();
    }
    
    // Summary
    console.log('\n📊 Merge Summary:');
    console.log(`✅ Successfully merged: ${results.merged.length} PRs`);
    console.log(`❌ Failed to merge: ${results.failed.length} PRs`);
    console.log(`⚠️ Had conflicts: ${results.conflicts.length} PRs`);
    
    if (results.merged.length > 0) {
      console.log(`\nMerged PRs: ${results.merged.join(', ')}`);
    }
    
    if (results.failed.length > 0) {
      console.log(`\nFailed PRs: ${results.failed.join(', ')}`);
    }
    
    if (results.conflicts.length > 0) {
      console.log(`\nConflicted PRs: ${results.conflicts.join(', ')}`);
    }
    
    console.log('\n🎉 PR merge process completed!');
    
  } catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, getOpenPRs, mergePR, resolveConflicts };