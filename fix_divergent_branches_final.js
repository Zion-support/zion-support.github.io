#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting divergent branches fix...');

// Configuration
const MAX_BRANCHES = 50; // Process fewer branches at a time
const DELAY_BETWEEN_BRANCHES = 2000; // 2 seconds between branches

// Results tracking
const results = {
  summary: {
    totalBranches: 0,
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
      timeout: 60000, // Increased timeout
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

async function fixDivergentBranch(branchName) {
  console.log(`🔧 Fixing divergent branch: ${branchName}`);
  
  try {
    // Configure git to use merge strategy
    execCommand('git config pull.rebase false');
    
    // Checkout the branch
    const checkoutResult = execCommand(`git checkout ${branchName}`);
    if (!checkoutResult.success) {
      console.log(`❌ Failed to checkout branch ${branchName}: ${checkoutResult.error}`);
      return false;
    }
    
    // Reset the branch to match origin
    execCommand(`git reset --hard origin/${branchName}`);
    
    // Pull with merge strategy
    const pullResult = execCommand('git pull origin main --no-rebase --strategy=recursive -X ours');
    
    if (pullResult.success) {
      console.log(`✅ Successfully updated ${branchName} with main`);
      
      // Push the updated branch
      const pushResult = execCommand(`git push origin ${branchName}`);
      if (pushResult.success) {
        console.log(`✅ Successfully pushed updated ${branchName}`);
        
        // Now try to merge into main
        execCommand('git checkout main');
        const mergeResult = execCommand(`git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`);
        
        if (mergeResult.success) {
          console.log(`✅ Successfully merged ${branchName} into main`);
          return true;
        } else {
          console.log(`❌ Failed to merge ${branchName} into main: ${mergeResult.error}`);
          return false;
        }
      } else {
        console.log(`❌ Failed to push ${branchName}: ${pushResult.error}`);
        return false;
      }
    } else {
      console.log(`❌ Failed to pull main into ${branchName}: ${pullResult.error}`);
      return false;
    }
    
  } catch (error) {
    console.log(`❌ Error processing branch ${branchName}: ${error.message}`);
    return false;
  }
}

async function processBranches() {
  console.log('📋 Getting list of branches to process...');
  
  // Get all remote branches
  const branchResult = execCommand('git branch -r --format="%(refname:short)"');
  if (!branchResult.success) {
    console.log('❌ Failed to get branch list');
    return;
  }
  
  const allBranches = branchResult.output
    .split('\n')
    .filter(branch => 
      branch && 
      !branch.includes('origin/main') && 
      !branch.includes('origin/HEAD') &&
      branch.startsWith('origin/')
    )
    .map(branch => branch.replace('origin/', ''))
    .slice(0, MAX_BRANCHES);
  
  console.log(`📊 Found ${allBranches.length} branches to process`);
  results.summary.totalBranches = allBranches.length;
  
  // Process branches one by one
  for (const branch of allBranches) {
    results.processedBranches.push(branch);
    
    console.log(`\n🌿 Processing branch: ${branch}`);
    
    const success = await fixDivergentBranch(branch);
    
    if (success) {
      results.mergedBranches.push(branch);
      results.summary.successfullyMerged++;
      console.log(`✅ Successfully processed ${branch}`);
    } else {
      results.failedBranches.push({
        branch: branch,
        error: 'Failed to fix divergent branch or merge into main'
      });
      results.summary.failedBranches++;
      console.log(`❌ Failed to process ${branch}`);
    }
    
    // Delay between branches
    await sleep(DELAY_BETWEEN_BRANCHES);
  }
}

async function main() {
  try {
    console.log('🔧 Configuring Git for merge strategy...');
    execCommand('git config pull.rebase false');
    execCommand('git config merge.tool vimdiff');
    execCommand('git config merge.conflictstyle diff3');
    
    console.log('📥 Fetching latest changes...');
    execCommand('git fetch origin');
    
    console.log('🔄 Switching to main branch...');
    execCommand('git checkout main');
    execCommand('git pull origin main');
    
    await processBranches();
    
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
    
    const reportPath = 'divergent-branches-fix-final-report.json';
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