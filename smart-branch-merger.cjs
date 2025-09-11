#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Smart Branch Merger - Prioritized Approach');
console.log('============================================');

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
    }
    return null;
  }
}

// Function to get recent branches (last 30 days)
function getRecentBranches() {
  console.log('🔍 Finding recent branches...');
  
  const branchesOutput = exec('git for-each-ref --format="%(refname:short) %(committerdate:iso8601)" refs/remotes/origin/cursor/ | sort -k2 -r', { silent: true });
  
  if (!branchesOutput) return [];
  
  const branches = branchesOutput.trim().split('\n')
    .map(line => {
      const parts = line.trim().split(' ');
      return {
        name: parts[0].replace('origin/', ''),
        date: parts.slice(1).join(' ')
      };
    })
    .filter(b => b.name && b.name.startsWith('cursor/'))
    .slice(0, 100); // Take only the 100 most recent branches
  
  console.log(`📊 Found ${branches.length} recent branches to process`);
  return branches;
}

// Function to auto-resolve simple conflicts
function autoResolveConflicts() {
  const conflictedFiles = exec('git diff --name-only --diff-filter=U', { silent: true });
  if (!conflictedFiles || !conflictedFiles.trim()) {
    return true;
  }
  
  const files = conflictedFiles.trim().split('\n').filter(Boolean);
  console.log(`🔧 Auto-resolving conflicts in ${files.length} files...`);
  
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Simple conflict resolution - prefer incoming changes
      content = content
        .replace(/^<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+$/gm, '$1')
        .replace(/^<<<<<<< [^\n]+[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+$/gm, '$1');
      
      fs.writeFileSync(file, content);
      exec(`git add "${file}"`, { silent: true });
    } catch (error) {
      console.log(`❌ Failed to resolve conflicts in ${file}`);
      return false;
    }
  }
  
  return true;
}

// Function to safely merge a branch
function mergeBranch(branchName) {
  try {
    console.log(`🔄 Merging ${branchName}...`);
    
    // Fetch the branch
    exec(`git fetch origin ${branchName}`, { silent: true, ignoreErrors: true });
    
    // Try to merge
    const mergeResult = exec(`git merge --no-ff --no-edit origin/${branchName}`, { 
      silent: true, 
      ignoreErrors: true 
    });
    
    if (mergeResult !== null) {
      return true;
    } else {
      // Handle conflicts
      if (autoResolveConflicts()) {
        const commitResult = exec('git commit -m "Auto-resolve merge conflicts"', { 
          silent: true, 
          ignoreErrors: true 
        });
        
        if (commitResult !== null) {
          return true;
        }
      }
      
      // Abort if we can't resolve
      exec('git merge --abort', { silent: true, ignoreErrors: true });
      return false;
    }
  } catch (error) {
    exec('git merge --abort', { silent: true, ignoreErrors: true });
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('📋 Starting smart branch merging...');
    
    // Ensure we're on main branch
    exec('git checkout main');
    exec('git pull origin main');
    
    // Get recent branches
    const branches = getRecentBranches();
    
    if (branches.length === 0) {
      console.log('❌ No recent branches found');
      return;
    }
    
    let successCount = 0;
    let failureCount = 0;
    
    for (const branch of branches) {
      console.log(`\n📅 Processing ${branch.name} (${branch.date})`);
      
      if (mergeBranch(branch.name)) {
        successCount++;
        console.log(`✅ Successfully merged ${branch.name}`);
      } else {
        failureCount++;
        console.log(`❌ Failed to merge ${branch.name}`);
      }
      
      // Push every 10 successful merges
      if (successCount % 10 === 0 && successCount > 0) {
        console.log('📤 Pushing changes...');
        exec('git push origin main', { ignoreErrors: true });
      }
      
      // Small delay
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    console.log('\n📊 Results:');
    console.log(`✅ Successfully merged: ${successCount} branches`);
    console.log(`❌ Failed to merge: ${failureCount} branches`);
    
    // Final push
    console.log('\n🚀 Final push to main branch...');
    exec('git push origin main');
    
    console.log('\n🎉 Smart branch merging completed!');
    
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();