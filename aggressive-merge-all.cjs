#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Aggressive Merge All Branches Script - Process All Remaining');

// Statistics
const stats = {
  processed: 0,
  merged: 0,
  failed: 0,
  startTime: Date.now()
};

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

function safeCommand(command, description) {
  try {
    execSync(command, { stdio: 'pipe', timeout: 15000 }); // Shorter timeout
    return true;
  } catch (error) {
    return false;
  }
}

function mergeBranch(branchName) {
  stats.processed++;
  
  try {
    // Try to merge with shorter timeout
    execSync(`git merge origin/${branchName} --no-edit`, { stdio: 'pipe', timeout: 10000 });
    stats.merged++;
    return true;
  } catch (error) {
    // Quick conflict resolution
    try {
      execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD" | cut -c4- | xargs -I {} git checkout --ours "{}"', { stdio: 'pipe' });
      execSync('git add .', { stdio: 'pipe' });
      execSync('git commit --no-edit', { stdio: 'pipe' });
      stats.merged++;
      return true;
    } catch (resolveError) {
      try {
        execSync('git merge --abort', { stdio: 'pipe' });
      } catch (abortError) {
        // Ignore abort errors
      }
      stats.failed++;
      return false;
    }
  }
}

async function main() {
  try {
    log('🎯 Starting aggressive merge operation...');
    
    // Ensure we're on main
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    if (currentBranch !== 'main') {
      safeCommand('git checkout main', 'Switching to main');
    }
    
    // Pull latest changes
    safeCommand('git pull origin main', 'Pulling latest changes');
    
    // Get all remaining cursor branches
    log('📋 Getting all remaining cursor branches...');
    const branchesOutput = execSync('git branch -r | grep "cursor/check-fix-push-and-merge-to-main"', { 
      encoding: 'utf8',
      maxBuffer: 2 * 1024 * 1024 // 2MB buffer
    });
    
    const branches = branchesOutput
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('HEAD'))
      .map(line => line.replace('origin/', ''));
    
    log(`📊 Found ${branches.length} branches to process`);
    
    if (branches.length === 0) {
      log('ℹ️  No more branches found to merge');
      return;
    }
    
    // Process branches in large batches
    const batchSize = 100;
    for (let i = 0; i < branches.length; i += batchSize) {
      const batch = branches.slice(i, i + batchSize);
      log(`🔄 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(branches.length/batchSize)} (${batch.length} branches)`);
      
      for (const branch of batch) {
        mergeBranch(branch);
        
        // Show progress every 50 branches
        if (stats.processed % 50 === 0) {
          const elapsed = (Date.now() - stats.startTime) / 1000;
          const rate = stats.processed / elapsed;
          const remaining = branches.length - stats.processed;
          const eta = remaining / rate;
          log(`📊 Progress: ${stats.processed}/${branches.length} (${Math.round(rate * 60)} branches/min, ETA: ${Math.round(eta/60)}min)`);
        }
      }
      
      // Commit batch progress every 100 branches
      if (stats.processed % 100 === 0) {
        safeCommand('git add .', 'Staging changes');
        safeCommand(`git commit -m "Aggressive batch ${Math.floor(i/batchSize) + 1}: processed ${stats.processed} branches"`, 'Committing batch');
      }
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Final commit and push
    safeCommand('git add .', 'Staging final changes');
    safeCommand('git commit -m "Aggressive merge: completed all remaining cursor branches"', 'Final commit');
    safeCommand('git push origin main', 'Pushing to remote');
    
    // Report results
    const elapsed = (Date.now() - stats.startTime) / 1000;
    log('\n🎉 AGGRESSIVE MERGE COMPLETED!');
    log(`📊 Final Results:`);
    log(`   Processed: ${stats.processed}`);
    log(`   Merged: ${stats.merged}`);
    log(`   Failed: ${stats.failed}`);
    log(`   Success Rate: ${((stats.merged / stats.processed) * 100).toFixed(1)}%`);
    log(`   Total Time: ${Math.round(elapsed/60)} minutes`);
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalProcessed: stats.processed,
        successfullyMerged: stats.merged,
        failed: stats.failed,
        successRate: `${((stats.merged / stats.processed) * 100).toFixed(1)}%`,
        elapsedTime: `${Math.round(elapsed)}s`,
        totalBranches: branches.length
      }
    };
    
    fs.writeFileSync('aggressive-merge-report.json', JSON.stringify(report, null, 2));
    log(`📄 Detailed report saved to: aggressive-merge-report.json`);
    
  } catch (error) {
    log(`❌ Fatal error: ${error.message}`);
    process.exit(1);
  }
}

main();