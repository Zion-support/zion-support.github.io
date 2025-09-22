#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting efficient merge of cursor branches...');

// Configuration
const config = {
  batchSize: 100,
  delayBetweenOperations: 200,
  maxConcurrentMerges: 5
};

// Helper function to execute commands
function execCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      cwd: '/workspace',
      timeout: 15000,
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

// Get cursor branches in batches
function getCursorBranchesBatch(offset = 0, limit = 100) {
  const result = execCommand(`git branch -r | grep "origin/cursor" | grep -v backup | tail -n +${offset + 1} | head -${limit}`);
  if (!result.success) {
    return [];
  }

  return result.output
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && line.startsWith('origin/cursor'))
    .filter(line => !line.includes('backup'));
}

// Simple conflict resolution - prefer main branch
function resolveConflicts() {
  const result = execCommand('git status --porcelain');
  if (!result.success) return false;

  const conflictedFiles = result.output
    .split('\n')
    .filter(line => line.startsWith('UU') || line.includes('both modified'))
    .map(line => line.split(' ').pop());

  if (conflictedFiles.length === 0) return false;

  console.log(`🔧 Resolving conflicts in ${conflictedFiles.length} files`);

  // For each conflicted file, prefer HEAD (main branch)
  for (const file of conflictedFiles) {
    if (fs.existsSync(file)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let resolvedContent = content;

        // Remove conflict markers and keep HEAD version
        resolvedContent = resolvedContent.replace(/\n([\s\S]*?)\n
        resolvedContent = resolvedContent.replace(/resolvedContent = resolvedContent.replace(/

        fs.writeFileSync(file, resolvedContent);
        execCommand(`git add ${file}`);
      } catch (error) {
        console.error(`❌ Error resolving ${file}:`, error.message);
      }
    }
  }

  return true;
}

// Process a single branch merge
async function mergeBranch(branch) {
  const branchName = branch.replace('origin/', '');

  try {
    // Try to merge the branch
    const mergeResult = execCommand(`git merge origin/${branchName} --no-ff`);

    if (!mergeResult.success) {
      // Handle conflicts
      const hasConflicts = resolveConflicts();

      if (hasConflicts) {
        // Commit the resolved conflicts
        const commitResult = execCommand('git commit --no-edit');
        if (!commitResult.success) {
          // Abort the merge if commit fails
          execCommand('git merge --abort');
          return { success: false, reason: 'commit_failed' };
        }
      } else {
        // No conflicts but merge failed - abort
        execCommand('git merge --abort');
        return { success: false, reason: 'merge_failed' };
      }
    }

    return { success: true, reason: 'merged_successfully' };

  } catch (error) {
    execCommand('git merge --abort');
    return { success: false, reason: 'processing_error', error: error.message };
  }
}

// Main merge function
async function efficientMerge() {
  console.log('🔄 Starting efficient merge process...');

  // Ensure we're on main and up to date
  execCommand('git checkout main');
  execCommand('git pull origin main');

  const results = {
    total: 0,
    successful: 0,
    failed: 0,
    details: []
  };

  let offset = 0;
  let hasMoreBranches = true;
  let consecutiveFailures = 0;

  while (hasMoreBranches && consecutiveFailures < 50) {
    console.log(`\n📋 Processing batch at offset ${offset}...`);

    const branches = getCursorBranchesBatch(offset, config.batchSize);

    if (branches.length === 0) {
      hasMoreBranches = false;
      break;
    }

    console.log(`📋 Found ${branches.length} branches in this batch`);

    let batchSuccesses = 0;
    let batchFailures = 0;

    for (const branch of branches) {
      results.total++;

      const result = await mergeBranch(branch);

      if (result.success) {
        results.successful++;
        batchSuccesses++;
        results.details.push({
          branch: branch.replace('origin/', ''),
          status: 'success',
          reason: result.reason
        });
        consecutiveFailures = 0; // Reset failure counter on success
      } else {
        results.failed++;
        batchFailures++;
        consecutiveFailures++;
        results.details.push({
          branch: branch.replace('origin/', ''),
          status: 'failed',
          reason: result.reason,
          error: result.error
        });
      }

      await sleep(config.delayBetweenOperations);

      // Push every 20 successful merges
      if (results.successful % 20 === 0 && results.successful > 0) {
        console.log('📤 Pushing intermediate changes...');
        const pushResult = execCommand('git push origin main');
        if (!pushResult.success) {
          console.log('⚠️  Push failed, pulling latest and retrying...');
          execCommand('git pull origin main --rebase');
          execCommand('git push origin main');
        }
      }
    }

    console.log(`📊 Batch completed: ${batchSuccesses} successful, ${batchFailures} failed`);

    offset += config.batchSize;

    // Break if we got fewer branches than requested (end of list)
    if (branches.length < config.batchSize) {
      hasMoreBranches = false;
    }

    // Break if too many consecutive failures
    if (consecutiveFailures >= 50) {
      console.log('⚠️  Too many consecutive failures, stopping...');
      break;
    }
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
  const reportPath = '/workspace/efficient_merge_results.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  console.log('\n📊 Efficient Merge Results Summary:');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📋 Total: ${results.total}`);
  console.log(`📄 Detailed report saved to: ${reportPath}`);

  return results;
}

// Main execution
async function main() {
  try {
    console.log('🎯 Starting efficient merge of cursor branches...');

    // Configure git
    execCommand('git config pull.rebase false');

    const results = await efficientMerge();

    console.log('\n🎉 Efficient merge process completed!');

    if (results.successful > 0) {
      console.log(`✅ Successfully merged ${results.successful} branches`);
    }

    if (results.failed > 0) {
      console.log(`❌ ${results.failed} branches failed to merge`);
    }

  } catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);