#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting quick merge fix for specific branches...');

// List of specific branches that were failing
const failingBranches = [
  '0parff-codex/centralize-api-error-handling-and-add-errorboundary',
  '0smfo8-codex/fix-404-error-for-non-existent-route',
  '0t8m4m-codex/update-project-color-palette',
  '0une71-codex/fix-unsupported-shell-syntax-in-setup.sh',
  '14gqd5-codex/implement-checkout-flow-with-auth-redirect',
  '1dcwqi-codex/implement-global-pricing-with-currency-selection',
  '1fjs4s-codex/implement-instant-messaging-for-negotiations',
  '1m9jcs-codex/fix-client-side-rendering-and-javascript-errors',
  '1nc0kn-codex/fix-blank-screen-on-app-load',
  '1nq1ky-codex/render-talent-profiles-with-error-states',
  '1ry69n-codex/fix-npm-eio-error-during-install',
  '1sqc9r-codex/implement-light/dark-theme-with-persistence',
  '1tg4fy-codex/support-metric--imperial-units',
  '1wzbwr-codex/fix-typescript-errors-in-files',
  '22xuo1-codex/implement-wishlist-functionality',
  '24727i-codex/implement-stripe-checkout-flow',
  '2503nr-codex/fix-ts2614-error-with-suspense-import',
  '26ywwb-codex/fix-client-side-rendering-and-javascript-errors',
  '2enrzx-codex/implement-feature-flags-and-a/b-testing',
  '2k1ucv-codex/integrate-stripe-test-mode-checkout'
];

// Results tracking
const results = {
  summary: {
    totalBranches: failingBranches.length,
    successfullyMerged: 0,
    failedBranches: 0,
    startTime: new Date().toISOString(),
    endTime: null,
    duration: null
  },
  processedBranches: [],
  mergedBranches: [],
  failedBranches: []
};

// Utility functions
function execCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      timeout: 30000,
      ...options 
    });
    return { success: true, output: result };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      output: error.stdout || error.stderr || ''
    };
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function quickMergeBranch(branchName) {
  console.log(`🔧 Quick merging branch: ${branchName}`);
  
  try {
    // Configure git
    execCommand('git config pull.rebase false');
    
    // Switch to main and ensure it's up to date
    execCommand('git checkout main');
    execCommand('git pull origin main');
    
    // Try to merge the branch directly
    const mergeResult = execCommand(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`);
    
    if (mergeResult.success) {
      console.log(`✅ Successfully merged ${branchName} into main`);
      return true;
    } else {
      console.log(`❌ Failed to merge ${branchName}: ${mergeResult.error}`);
      
      // Try to resolve conflicts if any
      const statusResult = execCommand('git status --porcelain');
      if (statusResult.success && statusResult.output.includes('UU')) {
        console.log(`🔧 Attempting to resolve conflicts for ${branchName}`);
        
        // Reset the merge
        execCommand('git merge --abort');
        
        // Try a different approach - checkout the branch and merge main into it
        execCommand(`git checkout ${branchName}`);
        execCommand('git pull origin main --no-rebase');
        execCommand('git push origin ${branchName}');
        
        // Now try to merge again
        execCommand('git checkout main');
        const retryMergeResult = execCommand(`git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`);
        
        if (retryMergeResult.success) {
          console.log(`✅ Successfully merged ${branchName} after conflict resolution`);
          return true;
        }
      }
      
      return false;
    }
    
  } catch (error) {
    console.log(`❌ Error processing branch ${branchName}: ${error.message}`);
    return false;
  }
}

async function main() {
  try {
    console.log('🔧 Configuring Git...');
    execCommand('git config pull.rebase false');
    
    console.log('📥 Fetching latest changes...');
    execCommand('git fetch origin');
    
    console.log('🔄 Switching to main branch...');
    execCommand('git checkout main');
    execCommand('git pull origin main');
    
    // Process each failing branch
    for (const branch of failingBranches) {
      results.processedBranches.push(branch);
      
      console.log(`\n🌿 Processing branch: ${branch}`);
      
      const success = await quickMergeBranch(branch);
      
      if (success) {
        results.mergedBranches.push(branch);
        results.summary.successfullyMerged++;
        console.log(`✅ Successfully processed ${branch}`);
      } else {
        results.failedBranches.push({
          branch: branch,
          error: 'Failed to merge branch into main'
        });
        results.summary.failedBranches++;
        console.log(`❌ Failed to process ${branch}`);
      }
      
      // Small delay between branches
      await sleep(1000);
    }
    
    // Final push to origin
    console.log('\n🚀 Pushing all changes to origin...');
    const pushResult = execCommand('git push origin main');
    if (pushResult.success) {
      console.log('✅ Successfully pushed all changes to origin');
    } else {
      console.log('❌ Failed to push changes to origin:', pushResult.error);
    }
    
  } catch (error) {
    console.log('❌ Fatal error:', error.message);
  } finally {
    // Generate final report
    results.summary.endTime = new Date().toISOString();
    results.summary.duration = new Date(results.summary.endTime) - new Date(results.summary.startTime);
    results.summary.duration = `${Math.round(results.summary.duration / 1000)} seconds`;
    
    const reportPath = 'quick-merge-fix-final-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    
    console.log('\n📊 Final Results:');
    console.log(`✅ Successfully merged: ${results.summary.successfullyMerged}`);
    console.log(`❌ Failed branches: ${results.summary.failedBranches}`);
    console.log(`⏱️  Total duration: ${results.summary.duration}`);
    console.log(`📄 Report saved to: ${reportPath}`);
  }
}

// Run the script
main().catch(console.error);