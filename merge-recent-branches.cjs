#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting merge of recent cursor branches...');

// List of recent branches to merge (based on the fetch output)
const recentBranches = [
  'cursor/fix-errors-and-merge-to-main-0290',
  'cursor/fix-errors-and-merge-to-main-10c9',
  'cursor/fix-errors-and-merge-to-main-2114',
  'cursor/fix-errors-and-merge-to-main-4879',
  'cursor/fix-errors-and-merge-to-main-4daf',
  'cursor/fix-errors-and-merge-to-main-5246',
  'cursor/fix-errors-and-merge-to-main-69cd',
  'cursor/fix-errors-and-merge-to-main-6d9a',
  'cursor/fix-errors-and-merge-to-main-784b',
  'cursor/fix-errors-and-merge-to-main-852d',
  'cursor/fix-errors-and-merge-to-main-9e63',
  'cursor/fix-errors-and-merge-to-main-aca4',
  'cursor/fix-errors-and-merge-to-main-cf2c',
  'cursor/fix-errors-and-merge-to-main-dbe0',
  'cursor/fix-errors-and-merge-to-main-df89',
  'cursor/fix-errors-and-merge-to-main-fad3'
];

let successCount = 0;
let failCount = 0;
const results = [];

function executeCommand(command, options = {}) {
  try {
    console.log(`🔧 Executing: ${command}`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
    return { success: true, output: result };
  } catch (error) {
    console.log(`❌ Command failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

function mergeBranch(branchName) {
  console.log(`\n🔄 Attempting to merge ${branchName}...`);
  
  try {
    // Check if branch exists
    const checkResult = executeCommand(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`);
    if (!checkResult.success) {
      console.log(`❌ Branch ${branchName} does not exist on remote`);
      return false;
    }

    // Fetch the branch
    const fetchResult = executeCommand(`git fetch origin ${branchName}`);
    if (!fetchResult.success) {
      console.log(`❌ Failed to fetch branch ${branchName}`);
      return false;
    }

    // Try to merge
    const mergeResult = executeCommand(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`);
    if (mergeResult.success) {
      console.log(`✅ Successfully merged ${branchName}`);
      successCount++;
      results.push({ branch: branchName, status: 'success' });
      return true;
    } else {
      console.log(`⚠️ Merge conflicts detected in ${branchName}, trying to resolve...`);
      
      // Try to resolve conflicts automatically
      try {
        // Reset to main
        executeCommand('git reset --hard HEAD');
        
        // Try merge with strategy
        const resolveResult = executeCommand(`git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} into main"`);
        if (resolveResult.success) {
          console.log(`✅ Auto-resolved conflicts for ${branchName}`);
          successCount++;
          results.push({ branch: branchName, status: 'success_with_resolution' });
          return true;
        } else {
          console.log(`❌ Could not resolve conflicts for ${branchName}`);
          executeCommand('git reset --hard HEAD');
          failCount++;
          results.push({ branch: branchName, status: 'failed', error: 'conflict_resolution_failed' });
          return false;
        }
      } catch (resolveError) {
        console.log(`❌ Error during conflict resolution for ${branchName}: ${resolveError.message}`);
        executeCommand('git reset --hard HEAD');
        failCount++;
        results.push({ branch: branchName, status: 'failed', error: resolveError.message });
        return false;
      }
    }
  } catch (error) {
    console.log(`❌ Error merging ${branchName}: ${error.message}`);
    failCount++;
    results.push({ branch: branchName, status: 'failed', error: error.message });
    return false;
  }
}

async function main() {
  try {
    // Ensure we're on main branch
    console.log('📍 Ensuring we\'re on main branch...');
    executeCommand('git checkout main');
    
    // Fetch latest changes
    console.log('📥 Fetching latest changes...');
    executeCommand('git fetch --all');
    
    console.log(`📋 Found ${recentBranches.length} recent branches to merge`);
    
    // Merge each branch
    for (const branch of recentBranches) {
      mergeBranch(branch);
      
      // Push changes every 5 successful merges
      if (successCount > 0 && successCount % 5 === 0) {
        console.log('💾 Pushing progress to remote...');
        const pushResult = executeCommand('git push origin main');
        if (pushResult.success) {
          console.log('✅ Successfully pushed changes');
        } else {
          console.log('⚠️ Failed to push changes, continuing...');
        }
      }
      
      // Brief pause
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Final push
    console.log('\n💾 Pushing final changes to remote...');
    const finalPushResult = executeCommand('git push origin main');
    if (finalPushResult.success) {
      console.log('✅ Successfully pushed all changes');
    } else {
      console.log('⚠️ Failed to push final changes');
    }
    
    // Create summary report
    const summary = {
      timestamp: new Date().toISOString(),
      totalBranches: recentBranches.length,
      successfulMerges: successCount,
      failedMerges: failCount,
      results: results
    };
    
    fs.writeFileSync('merge-summary.json', JSON.stringify(summary, null, 2));
    
    console.log('\n📊 MERGE SUMMARY:');
    console.log(`  Total branches processed: ${recentBranches.length}`);
    console.log(`  Successful merges: ${successCount}`);
    console.log(`  Failed merges: ${failCount}`);
    console.log(`  Success rate: ${((successCount / recentBranches.length) * 100).toFixed(1)}%`);
    
    console.log('\n🎉 Merge process completed!');
    console.log('📄 Detailed summary saved to merge-summary.json');
    
  } catch (error) {
    console.error('❌ Fatal error during merge process:', error.message);
    process.exit(1);
  }
}

main();