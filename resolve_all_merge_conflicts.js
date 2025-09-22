#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Configuration
const config = {
  maxRetries: 3,
  batchSize: 5,
  delayBetweenBatches: 3000,
  delayBetweenOperations: 1000,
  maxBranches: 50
};

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

// Helper functions
function execCommand(command, options = {}) {
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function resolveMergeConflict(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }
    
    console.log(`🔧 Resolving conflicts in ${filePath}`);
    
    let resolvedContent = content;
    
    // Handle different types of files
    if (filePath.endsWith('.json')) {
      // For JSON files, prefer main branch version (HEAD)
      resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> .*\n/g, '$1');
    } else if (filePath.endsWith('.md')) {
      // For markdown, merge both versions
      resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> .*\n/g, '$1\n\n$2');
    } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      // For code files, prefer main branch version
      resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> .*\n/g, '$1');
    } else {
      // Default: keep main branch version
      resolvedContent = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> .*\n/g, '$1');
    }
    
    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< .*\n/g, '');
    resolvedContent = resolvedContent.replace(/=======\n/g, '');
    resolvedContent = resolvedContent.replace(/>>>>>>> .*\n/g, '');
    
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

function getAllConflictedFiles() {
  const result = execCommand('git status --porcelain');
  if (!result.success) {
    console.error('Failed to get git status:', result.error);
    return [];
  }
  
  const conflictedFiles = [];
  const lines = result.output.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('UU') || line.includes('both modified')) {
      const filePath = line.split(' ').pop();
      conflictedFiles.push(filePath);
    }
  }
  
  return conflictedFiles;
}

async function resolveAllConflicts() {
  console.log('🔍 Checking for merge conflicts...');
  
  let conflictedFiles = getAllConflictedFiles();
  let resolvedCount = 0;
  
  while (conflictedFiles.length > 0) {
    console.log(`📋 Found ${conflictedFiles.length} files with conflicts`);
    
    for (const file of conflictedFiles) {
      if (resolveMergeConflict(file)) {
        resolvedCount++;
        await sleep(config.delayBetweenOperations);
      }
    }
    
    // Stage resolved files
    if (conflictedFiles.length > 0) {
      execCommand('git add .');
    }
    
    // Check for remaining conflicts
    conflictedFiles = getAllConflictedFiles();
    
    if (conflictedFiles.length > 0) {
      console.log(`⚠️  Still ${conflictedFiles.length} files with conflicts, retrying...`);
      await sleep(config.delayBetweenOperations * 2);
    }
  }
  
  console.log(`✅ Resolved ${resolvedCount} conflicted files`);
  return resolvedCount > 0;
}

async function mergeAllOpenPRs() {
  console.log('🔄 Starting merge process for all open PRs...');
  
  // First, ensure we're on main branch and it's up to date
  console.log('📍 Switching to main branch...');
  execCommand('git checkout main');
  
  console.log('📥 Pulling latest changes...');
  const pullResult = execCommand('git pull origin main --no-rebase');
  if (!pullResult.success) {
    console.log('⚠️  Pull failed, trying with rebase...');
    execCommand('git pull origin main --rebase');
  }
  
  // Get all remote branches
  console.log('🔍 Fetching all remote branches...');
  execCommand('git fetch origin');
  
  // Get list of all remote branches
  const branchesResult = execCommand('git branch -r');
  if (!branchesResult.success) {
    console.error('Failed to get remote branches:', branchesResult.error);
    return;
  }
  
  const allBranches = branchesResult.output
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.includes('origin/HEAD') && line !== 'origin/main')
    .filter(line => line.startsWith('origin/'))
    .slice(0, config.maxBranches); // Limit to prevent overwhelming
  
  console.log(`📋 Found ${allBranches.length} remote branches to process`);
  
  const results = {
    total: allBranches.length,
    successful: 0,
    failed: 0,
    skipped: 0,
    details: []
  };
  
  // Process branches in batches
  for (let i = 0; i < allBranches.length; i += config.batchSize) {
    const batch = allBranches.slice(i, i + config.batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i / config.batchSize) + 1}/${Math.ceil(allBranches.length / config.batchSize)}`);
    
    for (const branch of batch) {
      const branchName = branch.replace('origin/', '');
      console.log(`\n🔄 Processing branch: ${branchName}`);
      
      try {
        // Checkout the branch
        const checkoutResult = execCommand(`git checkout -b temp-${branchName} ${branch}`);
        if (!checkoutResult.success) {
          console.log(`⚠️  Failed to checkout ${branchName}: ${checkoutResult.error}`);
          results.failed++;
          results.details.push({
            branch: branchName,
            status: 'failed',
            reason: 'checkout_failed',
            error: checkoutResult.error
          });
          continue;
        }
        
        // Try to merge main into this branch
        console.log(`🔀 Merging main into ${branchName}...`);
        const mergeResult = execCommand('git merge main --no-ff');
        
        if (!mergeResult.success) {
          console.log(`⚠️  Merge conflict in ${branchName}, resolving...`);
          
          // Resolve conflicts
          const conflictsResolved = await resolveAllConflicts();
          
          if (conflictsResolved) {
            // Commit the resolved conflicts
            const commitResult = execCommand('git commit --no-edit');
            if (!commitResult.success) {
              console.log(`❌ Failed to commit resolved conflicts in ${branchName}`);
              results.failed++;
              results.details.push({
                branch: branchName,
                status: 'failed',
                reason: 'commit_failed',
                error: commitResult.error
              });
              
              // Clean up
              execCommand('git checkout main');
              execCommand(`git branch -D temp-${branchName}`);
              continue;
            }
          }
        }
        
        // Switch back to main
        execCommand('git checkout main');
        
        // Merge the branch into main
        console.log(`🔀 Merging ${branchName} into main...`);
        const mergeMainResult = execCommand(`git merge temp-${branchName} --no-ff`);
        
        if (!mergeMainResult.success) {
          console.log(`⚠️  Conflict merging ${branchName} into main, resolving...`);
          
          // Resolve conflicts
          await resolveAllConflicts();
          
          // Commit the resolved conflicts
          const commitResult = execCommand('git commit --no-edit');
          if (!commitResult.success) {
            console.log(`❌ Failed to merge ${branchName} into main`);
            results.failed++;
            results.details.push({
              branch: branchName,
              status: 'failed',
              reason: 'merge_to_main_failed',
              error: commitResult.error
            });
            
            // Clean up
            execCommand(`git branch -D temp-${branchName}`);
            continue;
          }
        }
        
        // Clean up
        execCommand(`git branch -D temp-${branchName}`);
        
        console.log(`✅ Successfully merged ${branchName}`);
        results.successful++;
        results.details.push({
          branch: branchName,
          status: 'success',
          reason: 'merged_successfully'
        });
        
        await sleep(config.delayBetweenOperations);
        
      } catch (error) {
        console.error(`❌ Error processing ${branchName}:`, error.message);
        results.failed++;
        results.details.push({
          branch: branchName,
          status: 'failed',
          reason: 'processing_error',
          error: error.message
        });
        
        // Clean up on error
        execCommand('git checkout main');
        execCommand(`git branch -D temp-${branchName}`);
      }
    }
    
    // Push changes after each batch
    console.log('📤 Pushing changes...');
    const pushResult = execCommand('git push origin main');
    if (!pushResult.success) {
      console.log('⚠️  Push failed, pulling latest and retrying...');
      execCommand('git pull origin main --rebase');
      execCommand('git push origin main');
    }
    
    // Delay between batches
    if (i + config.batchSize < allBranches.length) {
      console.log(`⏳ Waiting ${config.delayBetweenBatches}ms before next batch...`);
      await sleep(config.delayBetweenBatches);
    }
  }
  
  // Save results
  const reportPath = '/workspace/merge_conflicts_resolution_report.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  
  console.log('\n📊 Merge Results Summary:');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`⏭️  Skipped: ${results.skipped}`);
  console.log(`📋 Total: ${results.total}`);
  console.log(`📄 Detailed report saved to: ${reportPath}`);
  
  return results;
}

// Main execution
async function main() {
  try {
    console.log('🎯 Starting comprehensive merge conflict resolution...');
    
    // Configure git for merge strategy
    console.log('⚙️  Configuring git merge strategy...');
    execCommand('git config pull.rebase false');
    execCommand('git config merge.tool vimdiff');
    
    // Resolve any existing conflicts
    await resolveAllConflicts();
    
    // Merge all open PRs
    const results = await mergeAllOpenPRs();
    
    console.log('\n🎉 Merge conflict resolution completed!');
    
    if (results.successful > 0) {
      console.log(`✅ Successfully merged ${results.successful} branches`);
    }
    
    if (results.failed > 0) {
      console.log(`❌ ${results.failed} branches failed to merge`);
      console.log('Check the detailed report for specific error reasons');
    }
    
  } catch (error) {
    console.error('💥 Fatal error during merge process:', error.message);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);