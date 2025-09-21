#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting final merge solution...');

// Configuration
const MAX_BRANCHES = 20; // Process fewer branches for reliability
const DELAY_BETWEEN_BRANCHES = 3000; // 3 seconds between branches

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
      timeout: 45000, // 45 second timeout
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

async function processBranch(branchName) {
  console.log(`🔧 Processing branch: ${branchName}`);
  
  try {
    // Step 1: Configure git
    execCommand('git config pull.rebase false');
    
    // Step 2: Ensure main is up to date
    execCommand('git checkout main');
    execCommand('git pull origin main');
    
    // Step 3: Try direct merge
    const mergeResult = execCommand(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`);
    
    if (mergeResult.success) {
      console.log(`✅ Successfully merged ${branchName}`);
      return true;
    } else {
      console.log(`⚠️  Direct merge failed for ${branchName}, trying alternative approach...`);
      
      // Step 4: Alternative approach - checkout branch and merge main into it
      const checkoutResult = execCommand(`git checkout ${branchName}`);
      if (!checkoutResult.success) {
        console.log(`❌ Failed to checkout ${branchName}`);
        return false;
      }
      
      // Reset to origin version
      execCommand(`git reset --hard origin/${branchName}`);
      
      // Merge main into branch
      const pullResult = execCommand('git pull origin main --no-rebase --strategy=recursive -X ours');
      
      if (pullResult.success) {
        // Push updated branch
        execCommand(`git push origin ${branchName}`);
        
        // Switch back to main and merge
        execCommand('git checkout main');
        const finalMergeResult = execCommand(`git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`);
        
        if (finalMergeResult.success) {
          console.log(`✅ Successfully merged ${branchName} using alternative approach`);
          return true;
        }
      }
      
      console.log(`❌ All approaches failed for ${branchName}`);
      return false;
    }
    
  } catch (error) {
    console.log(`❌ Error processing branch ${branchName}: ${error.message}`);
    return false;
  }
}

async function main() {
  try {
    console.log('🔧 Initial Git configuration...');
    execCommand('git config pull.rebase false');
    execCommand('git config merge.tool vimdiff');
    execCommand('git config merge.conflictstyle diff3');
    
    console.log('📥 Fetching latest changes...');
    execCommand('git fetch origin');
    
    console.log('🔄 Ensuring main is up to date...');
    execCommand('git checkout main');
    execCommand('git pull origin main');
    
    // Get list of branches to process
    console.log('📋 Getting branch list...');
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
    
    // Process each branch
    for (const branch of allBranches) {
      results.processedBranches.push(branch);
      
      console.log(`\n🌿 Processing branch: ${branch}`);
      
      const success = await processBranch(branch);
      
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
      
      // Delay between branches
      await sleep(DELAY_BETWEEN_BRANCHES);
    }
    
    // Final push
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
    
    const reportPath = 'final-merge-solution-report.json';
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