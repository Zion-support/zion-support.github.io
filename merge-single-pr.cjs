#!/usr/bin/env node

const { execSync } = require('child_process');

// Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    console.log(`Executing: ${description}`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ Success: ${description}`);
    return { success: true, result };
  } catch (error) {
    console.log(`❌ Error: ${description} - ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Function to merge a single PR
function mergeSinglePR(branchName, prNumber, prTitle) {
  console.log(`\n🔄 Processing PR #${prNumber}: ${prTitle}`);
  console.log(`   Branch: ${branchName}`);
  
  // Check if branch exists
  try {
    execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, { stdio: 'pipe' });
  } catch {
    console.log(`   ⚠️  Branch ${branchName} does not exist locally`);
    return { success: false, reason: 'Branch not found' };
  }
  
  // Fetch the latest changes
  const fetchResult = safeGitCommand(`git fetch origin ${branchName}`, `Fetching ${branchName}`);
  if (!fetchResult.success) {
    return { success: false, reason: 'Failed to fetch branch' };
  }
  
  // Try to merge
  try {
    console.log(`   🔀 Attempting to merge ${branchName}...`);
    execSync(`git merge --no-ff origin/${branchName} -m "Merge PR #${prNumber}: ${prTitle}"`, { 
      stdio: 'inherit' 
    });
    console.log(`   ✅ Successfully merged PR #${prNumber}`);
    return { success: true };
  } catch (mergeError) {
    console.log(`   ⚠️  Merge conflict detected for PR #${prNumber}`);
    
    // Try to resolve conflicts automatically
    try {
      console.log(`   🔧 Attempting automatic conflict resolution...`);
      
      // Use our strategy to resolve conflicts - keep our changes (main branch)
      execSync('git checkout --ours .', { stdio: 'pipe' });
      execSync('git add .', { stdio: 'pipe' });
      execSync(`git commit -m "Merge PR #${prNumber}: ${prTitle} (conflicts resolved - kept main branch changes)"`, { stdio: 'pipe' });
      
      console.log(`   ✅ Successfully resolved conflicts for PR #${prNumber}`);
      return { success: true };
    } catch (resolveError) {
      console.log(`   ❌ Failed to resolve conflicts for PR #${prNumber}`);
      execSync('git merge --abort', { stdio: 'pipe' });
      return { success: false, reason: 'Merge conflicts could not be resolved' };
    }
  }
}

// Main function
function main() {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.log('Usage: node merge-single-pr.cjs <branch-name> <pr-number> <pr-title>');
    process.exit(1);
  }
  
  const [branchName, prNumber, prTitle] = args;
  
  // Ensure we're on main and up to date
  console.log('📋 Preparing main branch...');
  safeGitCommand('git checkout main', 'Switching to main branch');
  safeGitCommand('git reset --hard HEAD', 'Resetting main branch');
  safeGitCommand('git pull origin main', 'Pulling latest changes from origin');
  
  // Merge the PR
  const result = mergeSinglePR(branchName, prNumber, prTitle);
  
  if (result.success) {
    console.log(`\n🎉 Successfully merged PR #${prNumber}!`);
    
    // Push changes
    console.log('\n📤 Pushing changes to origin...');
    const pushResult = safeGitCommand('git push origin main', 'Pushing merged changes');
    
    if (pushResult.success) {
      console.log('✅ Changes pushed successfully!');
    } else {
      console.log('❌ Failed to push changes');
    }
  } else {
    console.log(`\n❌ Failed to merge PR #${prNumber}: ${result.reason}`);
  }
}

// Run the script
main();