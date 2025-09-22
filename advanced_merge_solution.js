#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting advanced merge solution for remaining branches...');

// Configuration
const MAX_BRANCHES = 50; // Process more branches this time
const DELAY_BETWEEN_BRANCHES = 2000; // 2 seconds between branches
const BATCH_SIZE = 10; // Process in batches

// Results tracking
const results = {
  summary: {
    totalBranches: 0,
    successfullyMerged: 0,
    failedBranches: 0,
    skippedBranches: 0,
    startTime: new Date().toISOString(),
    endTime: null,
    duration: null
  },
  processedBranches: [],
  mergedBranches: [],
  failedBranches: [],
  skippedBranches: []
};

// Utility functions
function execCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      timeout: 30000, // 30 second timeout
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
    // Step 1: Ensure main is up to date
    execCommand('git checkout main');
    execCommand('git pull origin main');
    
    // Step 2: Try direct merge with conflict resolution
    const mergeResult = execCommand(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main" --strategy=recursive -X ours`);
    
    if (mergeResult.success) {
      console.log(`✅ Successfully merged ${branchName}`);
      return { success: true, method: 'direct' };
    } else {
      console.log(`⚠️  Direct merge failed for ${branchName}, trying alternative approach...`);
      
      // Step 3: Alternative approach - checkout branch and merge main into it
      const checkoutResult = execCommand(`git checkout -b temp-${branchName.replace(/[^a-zA-Z0-9]/g, '-')}`);
      if (!checkoutResult.success) {
        execCommand(`git checkout temp-${branchName.replace(/[^a-zA-Z0-9]/g, '-')}`);
      }
      
      // Reset to origin version
      execCommand(`git reset --hard origin/${branchName}`);
      
      // Merge main into branch with conflict resolution
      const pullResult = execCommand('git pull origin main --no-rebase --strategy=recursive -X ours');
      
      if (pullResult.success) {
        // Switch back to main and merge
        execCommand('git checkout main');
        const finalMergeResult = execCommand(`git merge temp-${branchName.replace(/[^a-zA-Z0-9]/g, '-')} --no-ff -m "Merge ${branchName} into main"`);
        
        // Clean up temp branch
        execCommand(`git branch -D temp-${branchName.replace(/[^a-zA-Z0-9]/g, '-')}`);
        
        if (finalMergeResult.success) {
          console.log(`✅ Successfully merged ${branchName} using alternative approach`);
          return { success: true, method: 'alternative' };
        }
      }
      
      // Clean up temp branch if it exists
      execCommand(`git branch -D temp-${branchName.replace(/[^a-zA-Z0-9]/g, '-')}`);
      
      console.log(`❌ All approaches failed for ${branchName}`);
      return { success: false, error: 'All merge strategies failed' };
    }
    
  } catch (error) {
    console.log(`❌ Error processing branch ${branchName}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  try {
    console.log('🔧 Initial setup...');
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
        branch.startsWith('origin/') &&
        !branch.includes('cursor/fix-netlify-build-and-merge-to-main') // Skip our own branches
      )
      .map(branch => branch.replace('origin/', ''))
      .slice(0, MAX_BRANCHES);
    
    console.log(`📊 Found ${allBranches.length} branches to process`);
    results.summary.totalBranches = allBranches.length;
    
    // Process branches in batches
    for (let i = 0; i < allBranches.length; i += BATCH_SIZE) {
      const batch = allBranches.slice(i, i + BATCH_SIZE);
      console.log(`\n🔄 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(allBranches.length / BATCH_SIZE)}`);
      console.log(`📦 Branches: ${batch.join(', ')}`);
      
      for (const branch of batch) {
        results.processedBranches.push(branch);
        
        console.log(`\n🌿 Processing branch: ${branch}`);
        
        const result = await processBranch(branch);
        
        if (result.success) {
          results.mergedBranches.push(branch);
          results.summary.successfullyMerged++;
          console.log(`✅ Successfully processed ${branch} (${result.method})`);
        } else {
          results.failedBranches.push({
            branch: branch,
            error: result.error || 'Unknown error'
          });
          results.summary.failedBranches++;
          console.log(`❌ Failed to process ${branch}`);
        }
        
        // Delay between branches
        await sleep(DELAY_BETWEEN_BRANCHES);
      }
      
      // Delay between batches
      if (i + BATCH_SIZE < allBranches.length) {
        console.log(`⏳ Waiting 5 seconds before next batch...`);
        await sleep(5000);
      }
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
    
    const reportPath = 'advanced-merge-solution-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    
    console.log('\n📊 Final Results:');
    console.log(`✅ Successfully merged: ${results.summary.successfullyMerged}`);
    console.log(`❌ Failed branches: ${results.summary.failedBranches}`);
    console.log(`⏱️  Total duration: ${results.summary.duration}`);
    console.log(`📄 Report saved to: ${reportPath}`);
    
    if (results.summary.successfullyMerged > 0) {
      console.log('\n🎉 Merge operation completed successfully!');
      console.log(`📈 Success rate: ${Math.round((results.summary.successfullyMerged / results.summary.totalBranches) * 100)}%`);
    }
  }
}

// Run the script
main().catch(console.error);