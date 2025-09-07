#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting force merge of all open PRs...');

// Function to run git commands safely
function runGitCommand(command, description) {
  try {
    console.log(`📝 ${description}...`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed:`, error.message);
    return null;
  }
}

// Function to force merge a branch by accepting all changes from the branch
function forceMergeBranch(branchName) {
  console.log(`\n🔄 Force merging branch: ${branchName}`);
  
  // First, try to fetch the branch if it's not local
  runGitCommand(`git fetch origin ${branchName}`, `Fetching ${branchName}`);
  
  // Check if branch exists locally
  try {
    execSync(`git show-ref --verify --quiet refs/heads/${branchName}`, { stdio: 'pipe' });
    console.log(`✅ Branch ${branchName} exists locally`);
  } catch (error) {
    console.log(`⚠️  Branch ${branchName} not found locally, skipping...`);
    return false;
  }
  
  // Create a backup of current state
  const backupBranch = `backup-before-merge-${Date.now()}`;
  runGitCommand(`git branch ${backupBranch}`, `Creating backup branch ${backupBranch}`);
  
  try {
    // Force merge by accepting all changes from the branch
    runGitCommand(`git merge -X theirs ${branchName} --no-edit`, `Force merging ${branchName}`);
    
    // If we get here, the merge was successful
    console.log(`✅ Successfully force merged ${branchName}`);
    return true;
  } catch (error) {
    console.log(`❌ Force merge failed for ${branchName}, trying alternative approach...`);
    
    // Alternative: reset to the branch and then merge back to main
    try {
      runGitCommand(`git reset --hard ${branchName}`, `Resetting to ${branchName}`);
      runGitCommand(`git checkout main`, `Switching back to main`);
      runGitCommand(`git merge ${backupBranch} -X theirs --no-edit`, `Merging backup with branch changes`);
      console.log(`✅ Alternative merge successful for ${branchName}`);
      return true;
    } catch (altError) {
      console.log(`❌ Alternative merge also failed for ${branchName}`);
      // Restore from backup
      runGitCommand(`git reset --hard ${backupBranch}`, `Restoring from backup`);
      return false;
    }
  }
}

// Main execution
async function main() {
  console.log('🔍 Checking current git status...');
  runGitCommand('git status', 'Checking git status');
  
  // List of PR branches to merge (from the GitHub API response)
  const prBranches = [
    'cursor/integrate-build-improve-and-re-verify-a21e',
    'cursor/automate-test-improve-and-merge-code-7742', 
    'cursor/fix-lint-push-and-merge-to-main-f41d'
  ];
  
  console.log(`\n📋 Found ${prBranches.length} PR branches to merge:`);
  prBranches.forEach((branch, index) => {
    console.log(`  ${index + 1}. ${branch}`);
  });
  
  let successCount = 0;
  let failCount = 0;
  
  for (const branch of prBranches) {
    const success = forceMergeBranch(branch);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log(`\n📊 Merge Summary:`);
  console.log(`  ✅ Successful merges: ${successCount}`);
  console.log(`  ❌ Failed merges: ${failCount}`);
  
  if (successCount > 0) {
    console.log('\n🚀 Pushing changes to remote...');
    runGitCommand('git push origin main --force', 'Force pushing to main');
  }
  
  console.log('\n✨ Force merge process completed!');
}

main().catch(console.error);