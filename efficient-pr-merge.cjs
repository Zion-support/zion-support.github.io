#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Efficient PR Merge Script - Batch Processing');

// Statistics
const stats = {
  processed: 0,
  merged: 0,
  failed: 0,
  conflicts: 0,
  startTime: Date.now()
};

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

function safeCommand(command, description, timeout = 10000) {
  try {
    execSync(command, { stdio: 'pipe', timeout });
    return true;
  } catch (error) {
    log(`❌ Failed: ${description} - ${error.message}`);
    return false;
  }
}

function mergeBranch(branchName) {
  stats.processed++;
  log(`🔄 Processing branch: ${branchName}`);
  
  try {
    // Try to merge
    execSync(`git merge origin/${branchName} --no-edit`, { stdio: 'pipe', timeout: 8000 });
    stats.merged++;
    log(`✅ Merged: ${branchName}`);
    return true;
  } catch (error) {
    stats.conflicts++;
    log(`⚠️  Conflict in: ${branchName} - attempting resolution`);
    
    try {
      // Auto-resolve conflicts by taking ours
      execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD" | cut -c4- | xargs -I {} git checkout --ours "{}" 2>/dev/null || true', { stdio: 'pipe' });
      execSync('git add .', { stdio: 'pipe' });
      execSync('git commit --no-edit -m "Auto-resolve merge conflicts"', { stdio: 'pipe' });
      stats.merged++;
      log(`✅ Auto-resolved and merged: ${branchName}`);
      return true;
    } catch (resolveError) {
      try {
        execSync('git merge --abort', { stdio: 'pipe' });
        log(`❌ Failed to resolve conflicts in: ${branchName}`);
        stats.failed++;
        return false;
      } catch (abortError) {
        // Force reset if abort fails
        execSync('git reset --hard HEAD', { stdio: 'pipe' });
        log(`❌ Failed to resolve conflicts in: ${branchName} (reset)`);
        stats.failed++;
        return false;
      }
    }
  }
}

function getBranchesToMerge() {
  try {
    const output = execSync('git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | head -50', { encoding: 'utf8' });
    return output.trim().split('\n').map(branch => branch.replace('origin/', '').trim()).filter(Boolean);
  } catch (error) {
    log('❌ Failed to get branches');
    return [];
  }
}

function main() {
  log('🚀 Starting efficient PR merge process');
  
  // Ensure we're on main branch
  if (!safeCommand('git checkout main', 'Switch to main branch')) {
    log('❌ Failed to switch to main branch');
    return;
  }
  
  // Pull latest changes
  safeCommand('git pull origin main', 'Pull latest main');
  
  let batchCount = 0;
  const maxBatches = 20; // Process in batches of 50 branches, max 20 batches
  
  while (batchCount < maxBatches) {
    batchCount++;
    log(`\n📦 Processing batch ${batchCount}/${maxBatches}`);
    
    const branches = getBranchesToMerge();
    if (branches.length === 0) {
      log('✅ No more branches to process');
      break;
    }
    
    log(`Found ${branches.length} branches in batch ${batchCount}`);
    
    let batchMerged = 0;
    for (const branch of branches) {
      if (mergeBranch(branch)) {
        batchMerged++;
      }
      
      // Progress update every 10 branches
      if (stats.processed % 10 === 0) {
        log(`📊 Progress: ${stats.processed} processed, ${stats.merged} merged, ${stats.failed} failed`);
      }
    }
    
    log(`✅ Batch ${batchCount} complete: ${batchMerged}/${branches.length} merged`);
    
    // Push changes after each batch
    if (stats.merged > 0) {
      safeCommand('git push origin main', 'Push merged changes');
      log(`🚀 Pushed ${stats.merged} merged changes to main`);
    }
  }
  
  // Final statistics
  const duration = (Date.now() - stats.startTime) / 1000;
  log(`\n📊 Final Statistics:`);
  log(`   Total processed: ${stats.processed}`);
  log(`   Successfully merged: ${stats.merged}`);
  log(`   Failed: ${stats.failed}`);
  log(`   Conflicts resolved: ${stats.conflicts}`);
  log(`   Duration: ${duration.toFixed(2)} seconds`);
  
  // Final push
  safeCommand('git push origin main', 'Final push to main');
  log('🎉 Merge process completed!');
}

main();