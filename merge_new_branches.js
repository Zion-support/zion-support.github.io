#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting merge of new cursor branches...');

// Configuration
const config = {
  maxRetries: 3,
  delayBetweenOperations: 1000
};

// Helper function to execute commands
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

// Get all cursor branches
function getCursorBranches() {
  const result = execCommand('git branch -r | grep "origin/cursor" | grep -v backup | head -100');
  if (!result.success) {
    console.error('Failed to get cursor branches:', result.error);
    return [];
  }

  return result.output
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && line.startsWith('origin/cursor'))
    .filter(line => !line.includes('backup'));
}

// Resolve merge conflicts in a file
function resolveMergeConflict(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file has conflict markers
      return false; // No conflicts
    }

    console.log(`🔧 Resolving conflicts in ${filePath}`);

    let resolvedContent = content;

    // For all files, prefer main branch version (HEAD)
    resolvedContent = resolvedContent.replace(/\n([\s\S]*?)\n

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/resolvedContent = resolvedContent.replace(/

    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Get all conflicted files
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

// Resolve all conflicts
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

// Main merge function
async function mergeNewBranches() {
  console.log('🔄 Starting merge process for new cursor branches...');

  // Ensure we're on main branch and it's up to date
  console.log('📍 Switching to main branch...');
  execCommand('git checkout main');

  console.log('📥 Pulling latest changes...');
  execCommand('git pull origin main');

  // Get all cursor branches
  const cursorBranches = getCursorBranches();
  console.log(`📋 Found ${cursorBranches.length} cursor branches to process`);

  const results = {
    total: cursorBranches.length,
    successful: 0,
    failed: 0,
    details: []
  };

  for (const branch of cursorBranches) {
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

  // Push changes
  console.log('📤 Pushing changes...');
  const pushResult = execCommand('git push origin main');
  if (!pushResult.success) {
    console.log('⚠️  Push failed, pulling latest and retrying...');
    execCommand('git pull origin main --rebase');
    execCommand('git push origin main');
  }

  // Save results
  const reportPath = '/workspace/new_merge_results.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  console.log('\n📊 Merge Results Summary:');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📋 Total: ${results.total}`);
  console.log(`📄 Detailed report saved to: ${reportPath}`);

  return results;
}

// Main execution
async function main() {
  try {
    console.log('🎯 Starting merge of new cursor branches...');

    // Configure git for merge strategy
    console.log('⚙️  Configuring git merge strategy...');
    execCommand('git config pull.rebase false');

    // Merge all new branches
    const results = await mergeNewBranches();

    console.log('\n🎉 Merge process completed!');

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