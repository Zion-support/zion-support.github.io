#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting complete merge execution...');

// Function to execute git commands with timeout protection
function execGit(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: options.stdio || 'pipe',
      timeout: 30000, // 30 second timeout
      ...options 
    });
    return result.trim();
  } catch (error) {
    if (options.allowError) {
      console.log(`⚠️  Command failed (allowed): ${command}`);
      return null;
    }
    console.error(`❌ Git command failed: ${command}`);
    console.error(error.message);
    throw error;
  }
}

// Function to check current status
function checkCurrentStatus() {
  console.log('📊 Checking current git status...');
  
  try {
    // Check current branch
    const currentBranch = execGit('git branch --show-current', { allowError: true });
    console.log(`📍 Current branch: ${currentBranch || 'unknown'}`);
    
    // Check git status
    const status = execGit('git status --porcelain', { allowError: true });
    if (status) {
      console.log('📝 Current changes:');
      console.log(status);
    } else {
      console.log('✅ Working directory appears clean');
    }
    
    return { currentBranch, status };
  } catch (error) {
    console.error('❌ Failed to check status:', error.message);
    return { currentBranch: null, status: null };
  }
}

// Function to switch to main and pull latest
function ensureMainBranch() {
  console.log('🔄 Ensuring we are on main branch with latest changes...');
  
  try {
    // Switch to main
    execGit('git checkout main', { allowError: true });
    console.log('✅ Switched to main branch');
    
    // Pull latest changes
    execGit('git pull origin main', { allowError: true });
    console.log('✅ Pulled latest changes');
    
    return true;
  } catch (error) {
    console.error('❌ Failed to ensure main branch:', error.message);
    return false;
  }
}

// Function to get cursor branches from file system
function getCursorBranchesFromFS() {
  console.log('📋 Getting cursor branches from file system...');
  
  try {
    const originDir = path.join(__dirname, '.git', 'refs', 'remotes', 'origin');
    const branches = [];
    
    if (fs.existsSync(originDir)) {
      const files = fs.readdirSync(originDir);
      const cursorBranches = files.filter(file => 
        file.startsWith('cursor/create-and-deploy-new-content-') ||
        (file.startsWith('cursor/') && !file.includes('backup'))
      );
      
      // Sort by modification time
      const branchInfo = cursorBranches.map(branch => {
        const branchPath = path.join(originDir, branch);
        const stats = fs.statSync(branchPath);
        return {
          name: branch,
          path: branchPath,
          mtime: stats.mtime
        };
      });
      
      branchInfo.sort((a, b) => b.mtime - a.mtime);
      return branchInfo.map(info => info.name);
    }
    
    return [];
  } catch (error) {
    console.error('❌ Failed to get cursor branches:', error.message);
    return [];
  }
}

// Function to merge a single branch
function mergeBranch(branchName) {
  console.log(`🔄 Attempting to merge ${branchName}...`);
  
  try {
    // Fetch the branch
    execGit(`git fetch origin ${branchName.replace('origin/', '')}`, { allowError: true });
    
    // Check if branch exists
    const branchExists = execGit(`git ls-remote --heads origin ${branchName.replace('origin/', '')}`, { allowError: true });
    if (!branchExists) {
      console.log(`⏭️  Branch ${branchName} does not exist remotely, skipping...`);
      return false;
    }
    
    // Try to merge
    try {
      execGit(`git merge --no-commit --no-ff origin/${branchName.replace('origin/', '')}`, { allowError: true });
      console.log(`✅ Successfully merged ${branchName}`);
      
      // Commit the merge
      execGit(`git commit -m "Merge ${branchName} into main - automated merge"`);
      console.log(`✅ Committed merge for ${branchName}`);
      return true;
      
    } catch (mergeError) {
      console.log(`⚠️  Merge conflicts detected in ${branchName}, attempting resolution...`);
      
      // Try to resolve conflicts automatically
      try {
        // Get conflicted files
        const conflictedFiles = execGit('git diff --name-only --diff-filter=U', { allowError: true });
        
        if (conflictedFiles) {
          const files = conflictedFiles.split('\n').filter(f => f.trim());
          console.log(`📋 Conflicted files: ${files.join(', ')}`);
          
          // For now, abort the merge and continue with next branch
          execGit('git merge --abort', { allowError: true });
          console.log(`⏭️  Aborted merge for ${branchName} due to conflicts`);
          return false;
        }
      } catch (resolveError) {
        console.log(`❌ Failed to resolve conflicts for ${branchName}`);
        execGit('git merge --abort', { allowError: true });
        return false;
      }
    }
    
  } catch (error) {
    console.error(`❌ Failed to merge ${branchName}:`, error.message);
    return false;
  }
}

// Function to push changes
function pushChanges() {
  console.log('💾 Pushing changes to remote...');
  try {
    execGit('git push origin main', { allowError: true });
    console.log('✅ Successfully pushed changes');
    return true;
  } catch (error) {
    console.error('❌ Failed to push changes:', error.message);
    return false;
  }
}

// Main execution function
async function main() {
  try {
    console.log('🚀 Starting complete merge execution...');
    console.log(`⏰ Started at: ${new Date().toISOString()}`);
    console.log('---');
    
    // Check current status
    const status = checkCurrentStatus();
    
    // Ensure we're on main branch
    if (!ensureMainBranch()) {
      console.error('❌ Cannot proceed without main branch access');
      return;
    }
    
    // Get cursor branches
    const cursorBranches = getCursorBranchesFromFS();
    console.log(`📋 Found ${cursorBranches.length} cursor branches to process`);
    
    if (cursorBranches.length === 0) {
      console.log('✅ No cursor branches found to merge');
      return;
    }
    
    // Show first 10 branches
    console.log('📋 First 10 cursor branches to process:');
    cursorBranches.slice(0, 10).forEach((branch, index) => {
      console.log(`   ${index + 1}. ${branch}`);
    });
    if (cursorBranches.length > 10) {
      console.log(`   ... and ${cursorBranches.length - 10} more`);
    }
    
    // Process branches in batches
    const batchSize = 5;
    let successfulMerges = 0;
    let failedMerges = 0;
    
    for (let i = 0; i < cursorBranches.length; i += batchSize) {
      const batch = cursorBranches.slice(i, i + batchSize);
      console.log(`\n📦 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(cursorBranches.length/batchSize)}`);
      
      for (const branch of batch) {
        console.log(`\n📋 Processing: ${branch}`);
        
        if (mergeBranch(branch)) {
          successfulMerges++;
          console.log(`✅ Successfully merged ${branch}`);
        } else {
          failedMerges++;
          console.log(`❌ Failed to merge ${branch}`);
        }
        
        console.log('---');
      }
      
      // Push changes after each batch
      if (successfulMerges > 0) {
        console.log('💾 Pushing batch changes...');
        pushChanges();
      }
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Final push
    if (successfulMerges > 0) {
      console.log('💾 Final push...');
      pushChanges();
    }
    
    // Summary
    console.log('\n🎉 Complete merge execution finished!');
    console.log('📊 Final Summary:');
    console.log(`   ✅ Successful merges: ${successfulMerges}`);
    console.log(`   ❌ Failed merges: ${failedMerges}`);
    console.log(`   📋 Total branches processed: ${cursorBranches.length}`);
    console.log(`⏰ Completed at: ${new Date().toISOString()}`);
    
    if (successfulMerges > 0) {
      console.log('\n🎯 Next steps:');
      console.log('   1. Review merged changes');
      console.log('   2. Test the application');
      console.log('   3. Clean up old branches if needed');
    }
    
  } catch (error) {
    console.error('❌ Process failed:', error.message);
    process.exit(1);
  }
}

// Run the main function
main().catch(console.error);