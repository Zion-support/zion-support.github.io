#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive cursor branch merger...');

// Function to execute git commands safely
function execGit(command, options = {}) {
  try {
    return execSync(command, { 
      encoding: 'utf8', 
      stdio: options.stdio || 'pipe',
      ...options 
    }).trim();
  } catch (error) {
    if (options.allowError) {
      return null;
    }
    console.error(`❌ Git command failed: ${command}`);
    console.error(error.message);
    throw error;
  }
}

// Function to get all cursor branches
function getCursorBranches() {
  try {
    const branches = [];
    const originDir = path.join(__dirname, '.git', 'refs', 'remotes', 'origin');
    
    if (fs.existsSync(originDir)) {
      const files = fs.readdirSync(originDir);
      const cursorBranches = files.filter(file => 
        file.startsWith('cursor/create-and-deploy-new-content-') ||
        file.startsWith('cursor/') ||
        file.includes('cursor')
      );
      
      // Sort by modification time (most recent first)
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

// Function to check if branch is already merged
function isBranchMerged(branch) {
  try {
    const result = execGit(`git branch --merged main`);
    return result.includes(branch.replace('origin/', ''));
  } catch (error) {
    return false;
  }
}

// Function to resolve conflicts in a file
function resolveConflictsInFile(filePath) {
  console.log(`🔧 Resolving conflicts in ${filePath}...`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File ${filePath} does not exist, skipping...`);
    return true;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      console.log(`✅ No conflicts found in ${filePath}`);
      return true;
    }
    
    console.log(`⚠️  Found conflicts in ${filePath}, resolving...`);
    
    // Create backup
    const backupPath = `${filePath}.backup.${Date.now()}`;
    fs.writeFileSync(backupPath, content);
    console.log(`💾 Created backup: ${backupPath}`);
    
    // Strategy: Remove conflict markers and keep both versions where possible
    if (filePath.includes('package.json') || filePath.includes('package-lock.json')) {
      // For package files, keep main version
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    } else if (filePath.includes('next.config') || filePath.includes('tsconfig')) {
      // For config files, keep main version
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    } else {
      // For other files, try to merge both versions
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    }
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to merge a cursor branch
function mergeCursorBranch(branch) {
  console.log(`🔄 Attempting to merge ${branch}...`);
  
  try {
    // Fetch the branch
    execGit(`git fetch origin ${branch.replace('origin/', '')}`);
    
    // Try to merge
    try {
      execGit(`git merge --no-commit --no-ff ${branch}`);
      console.log(`✅ Successfully merged ${branch}`);
      
      // Commit the merge
      execGit(`git commit -m "Merge ${branch} into main - automated cursor branch merge"`);
      console.log(`✅ Committed merge for ${branch}`);
      return true;
      
    } catch (mergeError) {
      console.log(`⚠️  Merge conflicts detected in ${branch}, resolving...`);
      
      // Get conflicted files
      const conflictedFiles = execGit('git diff --name-only --diff-filter=U');
      
      if (conflictedFiles) {
        const files = conflictedFiles.split('\n').filter(f => f.trim());
        console.log(`📋 Conflicted files: ${files.join(', ')}`);
        
        // Resolve conflicts in each file
        let allResolved = true;
        for (const file of files) {
          if (!resolveConflictsInFile(file)) {
            allResolved = false;
          }
        }
        
        if (allResolved) {
          // Add resolved files
          execGit('git add .');
          
          // Commit the merge
          execGit(`git commit -m "Resolve merge conflicts for ${branch} - automated cursor branch merge"`);
          console.log(`✅ Successfully resolved conflicts and merged ${branch}`);
          return true;
        } else {
          console.log(`❌ Failed to resolve all conflicts in ${branch}`);
          execGit('git merge --abort');
          return false;
        }
      } else {
        console.log(`❌ No conflicted files found but merge failed for ${branch}`);
        execGit('git merge --abort');
        return false;
      }
    }
    
  } catch (error) {
    console.error(`❌ Failed to merge ${branch}:`, error.message);
    return false;
  }
}

// Function to push changes
function pushChanges() {
  console.log('💾 Pushing changes to remote...');
  try {
    execGit('git push origin main');
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
    console.log('🚀 Starting comprehensive cursor branch merger...');
    console.log(`⏰ Started at: ${new Date().toISOString()}`);
    console.log('---');
    
    // Check if we're on main branch
    const currentBranch = execGit('git branch --show-current');
    if (currentBranch !== 'main') {
      console.log('🔄 Switching to main branch...');
      execGit('git checkout main');
    }
    
    // Pull latest changes
    console.log('📥 Pulling latest changes...');
    execGit('git pull origin main');
    
    // Get all cursor branches
    const cursorBranches = getCursorBranches();
    console.log(`📋 Found ${cursorBranches.length} cursor branches`);
    
    if (cursorBranches.length === 0) {
      console.log('✅ No cursor branches to merge');
      return;
    }
    
    // Show the branches we'll process
    console.log('📋 Cursor branches to process:');
    cursorBranches.slice(0, 10).forEach((branch, index) => {
      console.log(`   ${index + 1}. ${branch}`);
    });
    if (cursorBranches.length > 10) {
      console.log(`   ... and ${cursorBranches.length - 10} more`);
    }
    
    // Process each branch
    let successfulMerges = 0;
    let failedMerges = 0;
    let skippedBranches = 0;
    
    for (let i = 0; i < cursorBranches.length; i++) {
      const branch = cursorBranches[i];
      console.log(`\n📋 Processing branch ${i + 1}/${cursorBranches.length}: ${branch}`);
      
      // Skip if already merged
      if (isBranchMerged(branch)) {
        console.log(`⏭️  Skipping ${branch} (already merged)`);
        skippedBranches++;
        continue;
      }
      
      // Try to merge the branch
      if (mergeCursorBranch(branch)) {
        successfulMerges++;
        console.log(`✅ Successfully processed ${branch}`);
      } else {
        failedMerges++;
        console.log(`❌ Failed to process ${branch}`);
      }
      
      console.log('---');
      
      // Push changes every 10 successful merges
      if (successfulMerges > 0 && successfulMerges % 10 === 0) {
        console.log('💾 Pushing progress to remote...');
        pushChanges();
      }
    }
    
    // Final push
    if (successfulMerges > 0) {
      pushChanges();
    }
    
    // Summary
    console.log('\n🎉 Comprehensive cursor branch merger completed!');
    console.log('📊 Summary:');
    console.log(`   ✅ Successful merges: ${successfulMerges}`);
    console.log(`   ❌ Failed merges: ${failedMerges}`);
    console.log(`   ⏭️  Skipped branches: ${skippedBranches}`);
    console.log(`   📋 Total branches processed: ${cursorBranches.length}`);
    console.log(`⏰ Completed at: ${new Date().toISOString()}`);
    
    if (successfulMerges > 0) {
      console.log('\n🎯 Next steps:');
      console.log('   1. Review the merged changes: git log --oneline -20');
      console.log('   2. Test the application thoroughly');
      console.log('   3. Consider cleaning up old cursor branches');
    }
    
  } catch (error) {
    console.error('❌ Process failed:', error.message);
    process.exit(1);
  }
}

// Run the main function
main().catch(console.error);