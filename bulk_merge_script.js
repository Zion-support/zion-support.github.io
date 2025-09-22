#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting bulk merge of cursor branches...');

// Configuration
const config = {
  maxRetries: 3,
  delayBetweenOperations: 500,
  batchSize: 50
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

// Get all cursor branches in batches
function getCursorBranchesBatch(offset = 0, limit = 50) {
  const result = execCommand(`git branch -r | grep "origin/cursor" | grep -v backup | tail -n +${offset + 1} | head -${limit}`);
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

// Process a single branch
async function processBranch(branch) {
  const branchName = branch.replace('origin/', '');
  console.log(`\n🔄 Processing branch: ${branchName}`);

  try {
    // Fetch the branch first
    const fetchResult = execCommand(`git fetch origin ${branchName}`);
    if (!fetchResult.success) {
      console.log(`⚠️  Failed to fetch ${branchName}`);
      return { success: false, reason: 'fetch_failed' };
    }

    // Try to merge the branch into main directly
    console.log(`🔀 Merging ${branchName} into main...`);
    const mergeResult = execCommand(`git merge origin/${branchName} --no-ff`);

    if (!mergeResult.success) {
      console.log(`⚠️  Merge conflict in ${branchName}, resolving...`);

      // Resolve conflicts
      const conflictsResolved = await resolveAllConflicts();

      if (conflictsResolved) {
        // Commit the resolved conflicts
        const commitResult = execCommand('git commit --no-edit');
        if (!commitResult.success) {
          console.log(`❌ Failed to commit resolved conflicts in ${branchName}`);
          // Reset the merge
          execCommand('git merge --abort');
          return { success: false, reason: 'commit_failed' };
        }
      }
    }

    console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, reason: 'merged_successfully' };

  } catch (error) {
    console.error(`❌ Error processing ${branchName}:`, error.message);
    // Try to abort any ongoing merge
    execCommand('git merge --abort');
    return { success: false, reason: 'processing_error', error: error.message };
  }
}

// Main bulk merge function
async function bulkMergeBranches() {
  console.log('🔄 Starting bulk merge process for cursor branches...');

  // Ensure we're on main branch and it's up to date
  console.log('📍 Switching to main branch...');
  execCommand('git checkout main');

  console.log('📥 Pulling latest changes...');
  execCommand('git pull origin main');

  const results = {
    total: 0,
    successful: 0,
    failed: 0,
    details: []
  };

  let offset = 0;
  let hasMoreBranches = true;

  while (hasMoreBranches) {
    console.log(`\n📋 Processing batch starting at offset ${offset}...`);

    // Get next batch of branches
    const cursorBranches = getCursorBranchesBatch(offset, config.batchSize);

    if (cursorBranches.length === 0) {
      hasMoreBranches = false;
      break;
    }

    console.log(`📋 Found ${cursorBranches.length} branches in this batch`);

    for (const branch of cursorBranches) {
      results.total++;

      const result = await processBranch(branch);

      if (result.success) {
        results.successful++;
        results.details.push({
          branch: branch.replace('origin/', ''),
          status: 'success',
          reason: result.reason
        });
      } else {
        results.failed++;
        results.details.push({
          branch: branch.replace('origin/', ''),
          status: 'failed',
          reason: result.reason,
          error: result.error
        });
      }

      await sleep(config.delayBetweenOperations);

      // Push changes every 10 successful merges
      if (results.successful % 10 === 0 && results.successful > 0) {
        console.log('📤 Pushing intermediate changes...');
        const pushResult = execCommand('git push origin main');
        if (!pushResult.success) {
          console.log('⚠️  Push failed, pulling latest and retrying...');
          execCommand('git pull origin main --rebase');
          execCommand('git push origin main');
        }
      }
    }

    offset += config.batchSize;

    // Break if we got fewer branches than requested (end of list)
    if (cursorBranches.length < config.batchSize) {
      hasMoreBranches = false;
    }

    console.log(`\n📊 Batch completed. Total so far: ${results.successful} successful, ${results.failed} failed`);
  }

  // Final push
  console.log('📤 Pushing final changes...');
  const pushResult = execCommand('git push origin main');
  if (!pushResult.success) {
    console.log('⚠️  Push failed, pulling latest and retrying...');
    execCommand('git pull origin main --rebase');
    execCommand('git push origin main');
  }

  // Save results
  const reportPath = '/workspace/bulk_merge_results.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  console.log('\n📊 Bulk Merge Results Summary:');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📋 Total: ${results.total}`);
  console.log(`📄 Detailed report saved to: ${reportPath}`);

  return results;
}

// Main execution
async function main() {
  try {
    console.log('🎯 Starting bulk merge of cursor branches...');

    // Configure git for merge strategy
    console.log('⚙️  Configuring git merge strategy...');
    execCommand('git config pull.rebase false');

    // Merge all branches
    const results = await bulkMergeBranches();

    console.log('\n🎉 Bulk merge process completed!');

    if (results.successful > 0) {
      console.log(`✅ Successfully merged ${results.successful} branches`);
    }

    if (results.failed > 0) {
      console.log(`❌ ${results.failed} branches failed to merge`);
      console.log('Check the detailed report for specific error reasons');
    }

  } catch (error) {
    console.error('💥 Fatal error during bulk merge process:', error.message);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);