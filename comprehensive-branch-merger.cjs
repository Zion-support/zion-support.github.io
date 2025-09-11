#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Comprehensive Branch Merger for Zion App');
console.log('==========================================');

// Function to execute shell commands safely
function exec(cmd, options = {}) {
  try {
    return execSync(cmd, { 
      cwd: '/workspace', 
      encoding: 'utf8', 
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options 
    });
  } catch (error) {
    if (!options.ignoreErrors) {
      console.log(`⚠️  Command failed: ${cmd}`);
      console.log(`Error: ${error.message}`);
    }
    return null;
  }
}

// Function to auto-resolve merge conflicts
function autoResolveConflicts() {
  console.log('🔧 Auto-resolving merge conflicts...');
  
  const conflictedFiles = exec('git diff --name-only --diff-filter=U', { silent: true });
  if (!conflictedFiles || !conflictedFiles.trim()) {
    return true;
  }
  
  const files = conflictedFiles.trim().split('\n').filter(Boolean);
  console.log(`Found ${files.length} conflicted files`);
  
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove merge conflict markers and prefer incoming changes
      content = content
        .replace(/^<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+$/gm, '$1')
        .replace(/^<<<<<<< [^\n]+[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+$/gm, '$1')
        .replace(/^<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '')
        .replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
      
      fs.writeFileSync(file, content);
      exec(`git add "${file}"`, { silent: true });
      console.log(`✅ Resolved conflicts in ${file}`);
    } catch (error) {
      console.log(`❌ Failed to resolve conflicts in ${file}: ${error.message}`);
    }
  }
  
  return true;
}

// Function to safely merge a branch
function mergeBranch(branchName) {
  try {
    console.log(`🔄 Attempting to merge ${branchName}...`);
    
    // Fetch the branch
    exec(`git fetch origin ${branchName}`, { silent: true, ignoreErrors: true });
    
    // Try to merge
    const mergeResult = exec(`git merge --no-ff --no-edit origin/${branchName}`, { 
      silent: true, 
      ignoreErrors: true 
    });
    
    if (mergeResult !== null) {
      console.log(`✅ Successfully merged ${branchName}`);
      return true;
    } else {
      // Handle conflicts
      console.log(`⚠️  Conflicts detected in ${branchName}, attempting auto-resolution...`);
      
      if (autoResolveConflicts()) {
        // Try to commit the resolved conflicts
        const commitResult = exec('git commit -m "Auto-resolve merge conflicts"', { 
          silent: true, 
          ignoreErrors: true 
        });
        
        if (commitResult !== null) {
          console.log(`✅ Successfully resolved and merged ${branchName}`);
          return true;
        } else {
          // Abort the merge if we can't resolve
          exec('git merge --abort', { silent: true, ignoreErrors: true });
          console.log(`❌ Failed to resolve conflicts in ${branchName}, aborted merge`);
          return false;
        }
      } else {
        exec('git merge --abort', { silent: true, ignoreErrors: true });
        console.log(`❌ Failed to auto-resolve conflicts in ${branchName}`);
        return false;
      }
    }
  } catch (error) {
    console.log(`❌ Error merging ${branchName}: ${error.message}`);
    exec('git merge --abort', { silent: true, ignoreErrors: true });
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('📋 Starting comprehensive branch merging process...');
    
    // Ensure we're on main branch
    exec('git checkout main');
    exec('git pull origin main');
    
    // Get all remote cursor branches
    console.log('🔍 Fetching all remote branches...');
    exec('git fetch origin');
    
    const branchesOutput = exec('git branch -r | grep "origin/cursor/"', { silent: true });
    if (!branchesOutput) {
      console.log('❌ No cursor branches found');
      return;
    }
    
    const branches = branchesOutput.trim().split('\n')
      .map(b => b.trim().replace('origin/', ''))
      .filter(b => b && b.startsWith('cursor/'));
    
    console.log(`📊 Found ${branches.length} cursor branches to merge`);
    
    let successCount = 0;
    let failureCount = 0;
    const batchSize = 50; // Process in batches to avoid overwhelming the system
    
    for (let i = 0; i < branches.length; i += batchSize) {
      const batch = branches.slice(i, i + batchSize);
      console.log(`\n🔄 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)} (${batch.length} branches)`);
      
      for (const branch of batch) {
        if (mergeBranch(branch)) {
          successCount++;
        } else {
          failureCount++;
        }
        
        // Small delay to prevent overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Push changes after each batch
      console.log('📤 Pushing changes after batch...');
      exec('git push origin main', { ignoreErrors: true });
    }
    
    console.log('\n📊 Final Results:');
    console.log(`✅ Successfully merged: ${successCount} branches`);
    console.log(`❌ Failed to merge: ${failureCount} branches`);
    console.log(`📈 Success rate: ${((successCount / (successCount + failureCount)) * 100).toFixed(2)}%`);
    
    // Final push
    console.log('\n🚀 Final push to main branch...');
    exec('git push origin main');
    
    console.log('\n🎉 Comprehensive branch merging completed!');
    
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();