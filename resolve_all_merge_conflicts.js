#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Configuration
const MAX_BRANCHES = 100;
const BATCH_SIZE = 10;
const DELAY_BETWEEN_BATCHES = 5000; // 5 seconds
const DELAY_BETWEEN_BRANCHES = 1000; // 1 second

// Results tracking
const results = {
  summary: {
    totalBranches: 0,
    successfullyMerged: 0,
    failedBranches: 0,
    conflictsResolved: 0,
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

function resolveMergeConflicts(branchName) {
  console.log(`🔧 Resolving merge conflicts for branch: ${branchName}`);
  
  try {
    // Configure git to use merge strategy
    execCommand('git config pull.rebase false');
    
    // Checkout the branch
    const checkoutResult = execCommand(`git checkout ${branchName}`);
    if (!checkoutResult.success) {
      console.log(`❌ Failed to checkout branch ${branchName}: ${checkoutResult.error}`);
      return false;
    }
    
    // Pull latest changes from main with merge strategy
    const pullResult = execCommand('git pull origin main --no-rebase');
    if (!pullResult.success) {
      console.log(`⚠️  Pull failed for ${branchName}, attempting to resolve conflicts...`);
      
      // Try to resolve conflicts automatically
      const statusResult = execCommand('git status --porcelain');
      if (statusResult.success) {
        const conflictedFiles = statusResult.output
          .split('\n')
          .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
          .map(line => line.split(' ').pop());
        
        console.log(`📝 Found ${conflictedFiles.length} conflicted files in ${branchName}`);
        
        // Resolve conflicts by keeping HEAD changes (our branch changes)
        for (const file of conflictedFiles) {
          if (fs.existsSync(file)) {
            console.log(`🔧 Resolving conflicts in ${file}`);
            
            // Read the file content
            let content = fs.readFileSync(file, 'utf8');
            
            // Remove conflict markers and keep HEAD changes
            content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
            
            // Write the resolved content back
            fs.writeFileSync(file, content);
            
            // Add the resolved file
            execCommand(`git add ${file}`);
          }
        }
        
        // Try to commit the resolved conflicts
        const commitResult = execCommand('git commit -m "Resolve merge conflicts with main branch"');
        if (!commitResult.success) {
          console.log(`❌ Failed to commit resolved conflicts for ${branchName}`);
          return false;
        }
      }
    }
    
    // Merge the branch into main
    execCommand('git checkout main');
    const mergeResult = execCommand(`git merge ${branchName} --no-ff -m "Merge ${branchName} into main"`);
    
    if (mergeResult.success) {
      console.log(`✅ Successfully merged ${branchName} into main`);
      return true;
    } else {
      console.log(`❌ Failed to merge ${branchName} into main: ${mergeResult.error}`);
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
  
  // Process branches in batches
  for (let i = 0; i < allBranches.length; i += BATCH_SIZE) {
    const batch = allBranches.slice(i, i + BATCH_SIZE);
    console.log(`\n🔄 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(allBranches.length / BATCH_SIZE)}`);
    console.log(`📦 Branches: ${batch.join(', ')}`);
    
    for (const branch of batch) {
      results.processedBranches.push(branch);
      
      console.log(`\n🌿 Processing branch: ${branch}`);
      
      const success = resolveMergeConflicts(branch);
      
      if (success) {
        results.mergedBranches.push(branch);
        results.summary.successfullyMerged++;
        console.log(`✅ Successfully processed ${branch}`);
      } else {
        results.failedBranches.push({
          branch: branch,
          error: 'Failed to resolve merge conflicts or merge into main'
        });
        results.summary.failedBranches++;
        console.log(`❌ Failed to process ${branch}`);
      }
      
      // Small delay between branches
      await sleep(DELAY_BETWEEN_BRANCHES);
    }
    
    // Delay between batches
    if (i + BATCH_SIZE < allBranches.length) {
      console.log(`⏳ Waiting ${DELAY_BETWEEN_BATCHES / 1000} seconds before next batch...`);
      await sleep(DELAY_BETWEEN_BATCHES);
    }
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
    
    const reportPath = 'comprehensive-merge-resolution-report.json';
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