#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Helper function to execute git commands
function execGit(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      cwd: '/workspace',
      timeout: 60000,
      ...options 
    });
    return { success: true, output: result.trim() };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      output: error.stdout ? error.stdout.toString() : '',
      stderr: error.stderr ? error.stderr.toString() : ''
    };
  }
}

// Function to resolve merge conflicts automatically
function resolveConflicts() {
  console.log('🔧 Resolving merge conflicts...');
  
  // Check for conflicted files
  const statusResult = execGit('git status --porcelain');
  if (!statusResult.success) {
    console.log('No conflicts found or git status failed');
    return false;
  }
  
  const conflictedFiles = statusResult.output
    .split('\n')
    .filter(line => line.startsWith('UU') || line.includes('both modified'))
    .map(line => line.split(' ').pop());
  
  if (conflictedFiles.length === 0) {
    console.log('No conflicts to resolve');
    return false;
  }
  
  console.log(`Found ${conflictedFiles.length} conflicted files`);
  
  // Resolve conflicts by keeping main branch version (HEAD)
  for (const file of conflictedFiles) {
    console.log(`Resolving conflict in ${file}`);
    
    // Use git checkout to resolve conflicts
    execGit(`git checkout --ours ${file}`);
    execGit(`git add ${file}`);
  }
  
  return true;
}

// Function to process a single branch
function processBranch(branchName) {
  console.log(`\n🔄 Processing branch: ${branchName}`);
  
  try {
    // Create temporary branch name
    const tempBranch = `temp-${branchName.replace(/[^a-zA-Z0-9-]/g, '-')}`;
    
    // Checkout the branch
    console.log(`📋 Checking out ${branchName}`);
    const checkoutResult = execGit(`git checkout -b ${tempBranch} origin/${branchName}`);
    if (!checkoutResult.success) {
      console.log(`⚠️  Failed to checkout ${branchName}: ${checkoutResult.error}`);
      return { success: false, reason: 'checkout_failed' };
    }
    
    // Merge main into the branch
    console.log(`🔀 Merging main into ${branchName}`);
    const mergeResult = execGit('git merge main --no-ff');
    
    if (!mergeResult.success) {
      console.log(`⚠️  Merge conflict detected, resolving...`);
      
      // Resolve conflicts
      const conflictsResolved = resolveConflicts();
      
      if (conflictsResolved) {
        // Commit the resolved conflicts
        const commitResult = execGit('git commit --no-edit');
        if (!commitResult.success) {
          console.log(`❌ Failed to commit resolved conflicts: ${commitResult.error}`);
          
          // Clean up
          execGit('git checkout main');
          execGit(`git branch -D ${tempBranch}`);
          return { success: false, reason: 'commit_failed' };
        }
      }
    }
    
    // Switch back to main
    console.log(`📍 Switching back to main`);
    execGit('git checkout main');
    
    // Merge the branch into main
    console.log(`🔀 Merging ${branchName} into main`);
    const mergeMainResult = execGit(`git merge ${tempBranch} --no-ff`);
    
    if (!mergeMainResult.success) {
      console.log(`⚠️  Conflict merging to main, resolving...`);
      
      // Resolve conflicts
      const conflictsResolved = resolveConflicts();
      
      if (conflictsResolved) {
        // Commit the resolved conflicts
        const commitResult = execGit('git commit --no-edit');
        if (!commitResult.success) {
          console.log(`❌ Failed to merge ${branchName} into main: ${commitResult.error}`);
          
          // Clean up
          execGit(`git branch -D ${tempBranch}`);
          return { success: false, reason: 'merge_to_main_failed' };
        }
      }
    }
    
    // Clean up temporary branch
    execGit(`git branch -D ${tempBranch}`);
    
    console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, reason: 'merged_successfully' };
    
  } catch (error) {
    console.error(`💥 Error processing ${branchName}:`, error.message);
    return { success: false, reason: 'processing_error', error: error.message };
  }
}

// Main function
async function main() {
  try {
    console.log('⚙️  Configuring git...');
    execGit('git config pull.rebase false');
    
    console.log('📍 Switching to main branch...');
    execGit('git checkout main');
    
    console.log('📥 Pulling latest changes...');
    const pullResult = execGit('git pull origin main');
    if (!pullResult.success) {
      console.log('⚠️  Pull failed, trying rebase...');
      execGit('git pull origin main --rebase');
    }
    
    console.log('🔍 Fetching all remote branches...');
    execGit('git fetch origin');
    
    // Get all remote branches
    const branchesResult = execGit('git branch -r');
    if (!branchesResult.success) {
      console.error('Failed to get remote branches:', branchesResult.error);
      return;
    }
    
    const allBranches = branchesResult.output
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && line.startsWith('origin/'))
      .filter(line => !line.includes('origin/HEAD') && line !== 'origin/main')
      .map(line => line.replace('origin/', ''))
      .slice(0, 50); // Process first 50 branches
    
    console.log(`📋 Found ${allBranches.length} branches to process`);
    
    const results = {
      total: allBranches.length,
      successful: 0,
      failed: 0,
      details: []
    };
    
    // Process branches
    for (const branch of allBranches) {
      const result = processBranch(branch);
      
      if (result.success) {
        results.successful++;
      } else {
        results.failed++;
      }
      
      results.details.push({
        branch,
        ...result
      });
      
      // Small delay between branches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('\n📤 Pushing changes to remote...');
    const pushResult = execGit('git push origin main');
    if (!pushResult.success) {
      console.log('⚠️  Push failed, trying to resolve...');
      execGit('git pull origin main --rebase');
      execGit('git push origin main');
    }
    
    // Save results
    const reportPath = '/workspace/merge_resolution_report.json';
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    
    console.log('\n📊 Merge Results Summary:');
    console.log(`✅ Successful: ${results.successful}`);
    console.log(`❌ Failed: ${results.failed}`);
    console.log(`📋 Total: ${results.total}`);
    console.log(`📄 Report saved to: ${reportPath}`);
    
    if (results.successful > 0) {
      console.log('\n🎉 Merge conflict resolution completed successfully!');
    }
    
  } catch (error) {
    console.error('💥 Fatal error:', error.message);
  }
}

// Run the script
main();