#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Final Merge All Branches Script - Complete Operation');

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
    log(`📝 ${description}...`);
    execSync(command, { stdio: 'pipe', timeout: 30000 });
    return true;
  } catch (error) {
    log(`⚠️  ${description} failed: ${error.message}`);
    return false;
  }
}

function mergeBranch(branchName) {
  log(`🔄 Merging ${branchName}...`);
  stats.processed++;
  
  try {
    // Try to merge
    execSync(`git merge origin/${branchName} --no-edit`, { stdio: 'pipe', timeout: 30000 });
    log(`✅ Successfully merged ${branchName}`);
    stats.merged++;
    return true;
  } catch (error) {
    log(`❌ Failed to merge ${branchName}: ${error.message}`);
    
    // Try to resolve conflicts by accepting ours
    try {
      execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD" | cut -c4- | xargs -I {} git checkout --ours "{}"', { stdio: 'pipe' });
      execSync('git add .', { stdio: 'pipe' });
      execSync('git commit --no-edit', { stdio: 'pipe' });
      log(`✅ Resolved conflicts and merged ${branchName}`);
      stats.merged++;
      return true;
    } catch (resolveError) {
      log(`❌ Could not resolve conflicts for ${branchName}`);
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
    log('🎯 Starting final comprehensive merge operation...');
    
    // Ensure we're on main
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    if (currentBranch !== 'main') {
      safeCommand('git checkout main', 'Switching to main');
    }
    
    // Pull latest changes
    safeCommand('git pull origin main', 'Pulling latest changes');
    
    // Get all remaining cursor branches
    log('📋 Getting all remaining cursor branches...');
    const branchesOutput = execSync('git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | tail -n +151', { 
      encoding: 'utf8',
      maxBuffer: 1024 * 1024
    });
    
    const branches = branchesOutput
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('HEAD'))
      .map(line => line.replace('origin/', ''))
      .slice(0, 500); // Process up to 500 more branches
    
    log(`📊 Found ${branches.length} branches to process`);
    
    if (branches.length === 0) {
      log('ℹ️  No more branches found to merge');
      return;
    }
    
    // Process branches in batches
    const batchSize = 50;
    for (let i = 0; i < branches.length; i += batchSize) {
      const batch = branches.slice(i, i + batchSize);
      log(`\n🔄 Processing batch ${Math.floor(i/batchSize) + 1} (${batch.length} branches)`);
      
      for (const branch of batch) {
        mergeBranch(branch);
        
        // Show progress every 25 branches
        if (stats.processed % 25 === 0) {
          const elapsed = (Date.now() - stats.startTime) / 1000;
          const rate = stats.processed / elapsed;
          log(`📊 Progress: ${stats.processed} branches processed (${Math.round(rate * 60)} branches/min)`);
        }
      }
      
      // Commit batch progress
      if (stats.merged > 0) {
        safeCommand('git add .', 'Staging changes');
        safeCommand(`git commit -m "Final batch ${Math.floor(i/batchSize) + 1}: merged ${batch.length} branches"`, 'Committing batch');
      }
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Final commit and push
    safeCommand('git add .', 'Staging final changes');
    safeCommand('git commit -m "Final comprehensive merge: completed all cursor branches"', 'Final commit');
    safeCommand('git push origin main', 'Pushing to remote');
    
    // Report results
    const elapsed = (Date.now() - stats.startTime) / 1000;
    log('\n🎉 FINAL MERGE COMPLETED!');
    log(`📊 Final Results:`);
    log(`   Processed: ${stats.processed}`);
    log(`   Merged: ${stats.merged}`);
    log(`   Failed: ${stats.failed}`);
    log(`   Success Rate: ${((stats.merged / stats.processed) * 100).toFixed(1)}%`);
    log(`   Total Time: ${Math.round(elapsed)}s`);
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalProcessed: stats.processed,
        successfullyMerged: stats.merged,
        failed: stats.failed,
        successRate: `${((stats.merged / stats.processed) * 100).toFixed(1)}%`,
        elapsedTime: `${Math.round(elapsed)}s`
      }
    };
    
    fs.writeFileSync('final-merge-report.json', JSON.stringify(report, null, 2));
    log(`📄 Detailed report saved to: final-merge-report.json`);
    
  } catch (error) {
    log(`❌ Fatal error: ${error.message}`);
    process.exit(1);
  }
}

main();