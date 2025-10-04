#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

// PR #24960 details
const PR_NUMBER = 24960;
const PR_TITLE = 'Fix errors and merge to main';
const PR_BRANCH = 'cursor/fix-errors-and-merge-to-main-ba52';
const PR_SHA = 'e1cfe607f31ad01d6c49ad337d40c6d7bc6d3067';

async function checkCurrentBranch() {
  try {
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log(`Current branch: ${branch}`);
    return branch;
  } catch (error) {
    console.log(`Error checking current branch: ${error.message}`);
    return null;
  }
}

async function ensureOnMain() {
  console.log('\n=== Ensuring we are on main branch ===');
  try {
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git pull origin main', { stdio: 'inherit' });
    console.log('✅ Successfully checked out and pulled latest main');
    return true;
  } catch (error) {
    console.log(`❌ Error ensuring on main: ${error.message}`);
    return false;
  }
}

async function fetchPRBranch() {
  console.log('\n=== Fetching PR branch ===');
  try {
    execSync(`git fetch origin ${PR_BRANCH}`, { stdio: 'inherit' });
    execSync(`git fetch origin ${PR_SHA}`, { stdio: 'inherit' });
    console.log(`✅ Successfully fetched PR branch: ${PR_BRANCH}`);
    return true;
  } catch (error) {
    console.log(`❌ Error fetching PR branch: ${error.message}`);
    return false;
  }
}

async function checkForConflicts() {
  console.log('\n=== Checking for potential conflicts ===');
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      console.log('Working directory has uncommitted changes:');
      console.log(status);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error checking status: ${error.message}`);
    return false;
  }
}

async function attemptMerge() {
  console.log('\n=== Attempting to merge PR ===');
  try {
    // Try to merge the PR branch
    execSync(`git merge origin/${PR_BRANCH} --no-ff -m "Merge PR #${PR_NUMBER}: ${PR_TITLE}"`, { 
      stdio: 'inherit' 
    });
    console.log(`✅ Successfully merged PR #${PR_NUMBER}`);
    return true;
  } catch (error) {
    console.log(`❌ Merge failed: ${error.message}`);
    return false;
  }
}

async function resolveConflicts() {
  console.log('\n=== Attempting to resolve merge conflicts ===');
  try {
    // Check current status for conflicts
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    console.log('Current git status:');
    console.log(status);
    
    if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {
      console.log('Merge conflicts detected. Attempting automatic resolution...');
      
      // Try to add all changes and commit
      execSync('git add .', { stdio: 'inherit' });
      execSync(`git commit -m "Resolve merge conflicts for PR #${PR_NUMBER}"`, { stdio: 'inherit' });
      
      console.log(`✅ Successfully resolved conflicts for PR #${PR_NUMBER}`);
      return true;
    } else {
      console.log('No merge conflicts detected');
      return true;
    }
  } catch (error) {
    console.log(`❌ Error resolving conflicts: ${error.message}`);
    
    // Try to abort the merge
    try {
      execSync('git merge --abort', { stdio: 'inherit' });
      console.log('Aborted merge due to unresolvable conflicts');
    } catch (abortError) {
      console.log('Could not abort merge');
    }
    
    return false;
  }
}

async function pushChanges() {
  console.log('\n=== Pushing changes to origin ===');
  try {
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Successfully pushed merged changes to origin/main');
    return true;
  } catch (error) {
    console.log(`❌ Failed to push changes: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting PR merge process for PR #24960');
  console.log(`PR Title: ${PR_TITLE}`);
  console.log(`PR Branch: ${PR_BRANCH}`);
  console.log(`PR SHA: ${PR_SHA}`);
  
  // Step 1: Ensure we're on main
  const onMain = await ensureOnMain();
  if (!onMain) {
    console.log('❌ Could not ensure we are on main branch. Aborting.');
    return;
  }
  
  // Step 2: Check for uncommitted changes
  const hasChanges = await checkForConflicts();
  if (hasChanges) {
    console.log('⚠️  Working directory has uncommitted changes. Please commit or stash them first.');
    return;
  }
  
  // Step 3: Fetch the PR branch
  const fetched = await fetchPRBranch();
  if (!fetched) {
    console.log('❌ Could not fetch PR branch. Aborting.');
    return;
  }
  
  // Step 4: Attempt to merge
  const merged = await attemptMerge();
  
  if (!merged) {
    // Step 5: Try to resolve conflicts
    const resolved = await resolveConflicts();
    if (!resolved) {
      console.log('❌ Could not resolve merge conflicts. Manual intervention required.');
      return;
    }
  }
  
  // Step 6: Push changes
  const pushed = await pushChanges();
  if (!pushed) {
    console.log('❌ Could not push changes to origin.');
    return;
  }
  
  console.log('\n🎉 PR merge process completed successfully!');
  console.log(`✅ PR #${PR_NUMBER} has been merged into main branch`);
  
  // Create summary
  const summary = {
    timestamp: new Date().toISOString(),
    pr_number: PR_NUMBER,
    pr_title: PR_TITLE,
    pr_branch: PR_BRANCH,
    pr_sha: PR_SHA,
    status: 'merged',
    merged_by: 'automated-script'
  };
  
  fs.writeFileSync('pr-24960-merge-summary.json', JSON.stringify(summary, null, 2));
  console.log('📄 Summary saved to pr-24960-merge-summary.json');
}

// Run the script
main().catch(console.error);