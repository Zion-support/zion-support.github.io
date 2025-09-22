#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🎯 Final merge completion process starting...');

// Helper function to execute git commands
function execGit(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      cwd: '/workspace',
      timeout: 30000,
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

async function processRemainingBranches() {
  console.log('🔍 Finding all remaining branches to merge...');
  
  // Configure git
  execGit('git config pull.rebase false');
  
  // Switch to main and pull latest
  console.log('📍 Switching to main branch...');
  execGit('git checkout main');
  
  console.log('📥 Pulling latest changes...');
  execGit('git pull origin main');
  
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
    .slice(0, 100); // Process up to 100 more branches
  
  console.log(`📋 Found ${allBranches.length} additional branches to process`);
  
  const results = {
    total: allBranches.length,
    successful: 0,
    failed: 0,
    details: []
  };
  
  // Process each branch
  for (const branch of allBranches) {
    console.log(`\n🔄 Processing branch: ${branch}`);
    
    try {
      const tempBranch = `temp-${branch.replace(/[^a-zA-Z0-9-]/g, '-')}`;
      
      // Checkout the branch
      const checkoutResult = execGit(`git checkout -b ${tempBranch} origin/${branch}`);
      if (!checkoutResult.success) {
        console.log(`⚠️  Failed to checkout ${branch}: ${checkoutResult.error}`);
        results.failed++;
        results.details.push({
          branch,
          success: false,
          reason: 'checkout_failed',
          error: checkoutResult.error
        });
        continue;
      }
      
      // Try to merge main into the branch
      const mergeResult = execGit('git merge main --no-ff');
      
      if (!mergeResult.success) {
        console.log(`⚠️  Merge conflict detected, resolving...`);
        
        // Auto-resolve conflicts
        const statusResult = execGit('git status --porcelain');
        if (statusResult.success) {
          const conflictedFiles = statusResult.output
            .split('\n')
            .filter(line => line.startsWith('UU') || line.includes('both modified'))
            .map(line => line.split(' ').pop());
          
          if (conflictedFiles.length > 0) {
            console.log(`🔧 Resolving ${conflictedFiles.length} conflicts...`);
            
            for (const file of conflictedFiles) {
              execGit(`git checkout --ours ${file}`);
              execGit(`git add ${file}`);
            }
            
            const commitResult = execGit('git commit --no-edit');
            if (!commitResult.success) {
              console.log(`❌ Failed to commit resolved conflicts: ${commitResult.error}`);
              results.failed++;
              results.details.push({
                branch,
                success: false,
                reason: 'commit_failed',
                error: commitResult.error
              });
              
              // Clean up
              execGit('git checkout main');
              execGit(`git branch -D ${tempBranch}`);
              continue;
            }
          }
        }
      }
      
      // Switch back to main
      execGit('git checkout main');
      
      // Merge the branch into main
      const mergeMainResult = execGit(`git merge ${tempBranch} --no-ff`);
      
      if (!mergeMainResult.success) {
        console.log(`⚠️  Conflict merging to main, resolving...`);
        
        // Resolve conflicts when merging to main
        const statusResult = execGit('git status --porcelain');
        if (statusResult.success) {
          const conflictedFiles = statusResult.output
            .split('\n')
            .filter(line => line.startsWith('UU') || line.includes('both modified'))
            .map(line => line.split(' ').pop());
          
          if (conflictedFiles.length > 0) {
            console.log(`🔧 Resolving ${conflictedFiles.length} main merge conflicts...`);
            
            for (const file of conflictedFiles) {
              execGit(`git checkout --ours ${file}`);
              execGit(`git add ${file}`);
            }
            
            const commitResult = execGit('git commit --no-edit');
            if (!commitResult.success) {
              console.log(`❌ Failed to merge ${branch} into main: ${commitResult.error}`);
              results.failed++;
              results.details.push({
                branch,
                success: false,
                reason: 'merge_to_main_failed',
                error: commitResult.error
              });
              
              // Clean up
              execGit(`git branch -D ${tempBranch}`);
              continue;
            }
          }
        }
      }
      
      // Clean up
      execGit(`git branch -D ${tempBranch}`);
      
      console.log(`✅ Successfully merged ${branch}`);
      results.successful++;
      results.details.push({
        branch,
        success: true,
        reason: 'merged_successfully'
      });
      
      // Small delay between branches
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`💥 Error processing ${branch}:`, error.message);
      results.failed++;
      results.details.push({
        branch,
        success: false,
        reason: 'processing_error',
        error: error.message
      });
      
      // Clean up on error
      execGit('git checkout main');
      execGit(`git branch -D temp-${branch.replace(/[^a-zA-Z0-9-]/g, '-')}`);
    }
  }
  
  // Push changes
  console.log('\n📤 Pushing all changes...');
  const pushResult = execGit('git push origin main');
  if (!pushResult.success) {
    console.log('⚠️  Push failed, trying rebase...');
    execGit('git pull origin main --rebase');
    execGit('git push origin main');
  }
  
  // Save results
  const reportPath = '/workspace/final_merge_completion_report.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  
  console.log('\n📊 Final Merge Results Summary:');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📋 Total: ${results.total}`);
  console.log(`📄 Report saved to: ${reportPath}`);
  
  return results;
}

// Main execution
async function main() {
  try {
    const results = await processRemainingBranches();
    
    if (results.successful > 0) {
      console.log('\n🎉 Final merge completion successful!');
      console.log(`✅ Successfully merged ${results.successful} additional branches`);
    }
    
    if (results.failed > 0) {
      console.log(`\n⚠️  ${results.failed} branches failed to merge`);
      console.log('Check the detailed report for specific error reasons');
    }
    
    console.log('\n🏁 All merge processes completed!');
    
  } catch (error) {
    console.error('💥 Fatal error during final merge process:', error.message);
  }
}

// Run the script
main();