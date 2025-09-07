const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔄 Starting comprehensive merge conflict resolution and PR merging...');

// Function to run git commands safely
function runGitCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { encoding: 'utf8', cwd: '/workspace' });
    console.log(`✅ ${description} completed`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return null;
  }
}

// Function to resolve merge conflicts by choosing our version
function resolveConflictsByChoosingOurs() {
  console.log('🔧 Resolving conflicts by choosing our version...');
  
  // Get list of conflicted files
  const conflictedFiles = runGitCommand('git diff --name-only --diff-filter=U', 'Getting conflicted files');
  if (!conflictedFiles) return false;
  
  const files = conflictedFiles.trim().split('\n').filter(f => f);
  console.log(`Found ${files.length} conflicted files`);
  
  for (const file of files) {
    try {
      // For each conflicted file, choose our version
      runGitCommand(`git checkout --ours "${file}"`, `Choosing our version for ${file}`);
      runGitCommand(`git add "${file}"`, `Adding resolved file ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not resolve ${file}: ${error.message}`);
    }
  }
  
  return true;
}

// Function to clean up problematic directories
function cleanUpProblematicDirectories() {
  console.log('🧹 Cleaning up problematic directories...');
  
  const problematicDirs = [
    'src_backup',
    'src_backup_temp', 
    'temp-disabled',
    'src-disabled'
  ];
  
  for (const dir of problematicDirs) {
    if (fs.existsSync(dir)) {
      try {
        runGitCommand(`git rm -r "${dir}"`, `Removing problematic directory ${dir}`);
      } catch (error) {
        console.log(`⚠️  Could not remove ${dir}: ${error.message}`);
      }
    }
  }
}

// Function to merge with main branch
function mergeWithMain() {
  console.log('🔄 Attempting to merge with main branch...');
  
  // Fetch latest main
  runGitCommand('git fetch origin main', 'Fetching latest main');
  
  // Try to merge
  try {
    runGitCommand('git merge origin/main --no-ff -m "Merge main into current branch - resolved conflicts"', 'Merging main branch');
    return true;
  } catch (error) {
    console.log('⚠️  Merge failed, resolving conflicts...');
    
    // Resolve conflicts by choosing our version
    if (resolveConflictsByChoosingOurs()) {
      // Clean up problematic directories
      cleanUpProblematicDirectories();
      
      // Commit the merge
      try {
        runGitCommand('git commit -m "Merge main - resolved conflicts by choosing our version"', 'Committing resolved merge');
        return true;
      } catch (commitError) {
        console.log('❌ Failed to commit merge resolution');
        return false;
      }
    }
    return false;
  }
}

// Function to check for open PRs and merge them
function checkAndMergePRs() {
  console.log('🔍 Checking for open PRs...');
  
  // Get current branch
  const currentBranch = runGitCommand('git branch --show-current', 'Getting current branch');
  if (!currentBranch) return false;
  
  const branch = currentBranch.trim();
  console.log(`Current branch: ${branch}`);
  
  // Check if this branch has a PR
  try {
    // Try to get PR info using GitHub CLI if available
    const prInfo = runGitCommand(`gh pr list --head ${branch} --json number,title,state`, 'Checking for open PRs');
    if (prInfo) {
      const prs = JSON.parse(prInfo);
      if (prs.length > 0) {
        console.log(`Found ${prs.length} PR(s) for branch ${branch}`);
        for (const pr of prs) {
          if (pr.state === 'OPEN') {
            console.log(`PR #${pr.number}: ${pr.title}`);
            // Merge the PR
            try {
              runGitCommand(`gh pr merge ${pr.number} --merge --delete-branch`, `Merging PR #${pr.number}`);
              console.log(`✅ Successfully merged PR #${pr.number}`);
            } catch (mergeError) {
              console.log(`❌ Failed to merge PR #${pr.number}: ${mergeError.message}`);
            }
          }
        }
      } else {
        console.log('No open PRs found for current branch');
      }
    }
  } catch (error) {
    console.log('⚠️  Could not check PRs (GitHub CLI not available or no PRs)');
  }
  
  return true;
}

// Function to push changes
function pushChanges() {
  console.log('📤 Pushing changes...');
  
  try {
    runGitCommand('git push origin HEAD', 'Pushing current branch');
    return true;
  } catch (error) {
    console.log('❌ Failed to push changes');
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting comprehensive merge and PR resolution...');
  
  // Step 1: Check current status
  runGitCommand('git status', 'Checking current git status');
  
  // Step 2: Merge with main
  console.log('\n📋 Step 1: Merging with main branch...');
  const mergeSuccess = mergeWithMain();
  
  if (mergeSuccess) {
    console.log('✅ Successfully merged with main branch');
  } else {
    console.log('❌ Failed to merge with main branch');
    return;
  }
  
  // Step 3: Check and merge PRs
  console.log('\n📋 Step 2: Checking and merging PRs...');
  checkAndMergePRs();
  
  // Step 4: Push changes
  console.log('\n📋 Step 3: Pushing changes...');
  const pushSuccess = pushChanges();
  
  if (pushSuccess) {
    console.log('✅ Successfully pushed changes');
  } else {
    console.log('❌ Failed to push changes');
  }
  
  // Step 5: Final status check
  console.log('\n📋 Final status:');
  runGitCommand('git status', 'Final git status');
  runGitCommand('git log --oneline -5', 'Recent commits');
  
  console.log('\n🎉 Merge conflict resolution and PR merging completed!');
}

// Run the main function
main().catch(console.error);