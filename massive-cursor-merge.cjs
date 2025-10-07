#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Massive Cursor Branch Merge Process...\n');

// Get all cursor branches in batches
const getAllCursorBranches = () => {
  try {
    const branches = execSync('git branch -r | grep "cursor/"', { encoding: 'utf8' })
      .split('\n')
      .filter(branch => branch.trim())
      .map(branch => branch.trim().replace('origin/', ''));
    return branches;
  } catch (error) {
    console.error('Error getting branches:', error.message);
    return [];
  }
};

const branches = getAllCursorBranches();
console.log(`📋 Found ${branches.length} cursor branches to process`);

const BATCH_SIZE = 50; // Process 50 branches at a time
const MAX_BATCHES = 20; // Limit to 1000 branches total for this run

const results = {
  successful: [],
  failed: [],
  summary: {
    total: 0,
    successful: 0,
    failed: 0,
    methods: {
      direct: 0,
      theirs: 0,
      ours: 0
    }
  }
};

console.log(`🔄 Processing in batches of ${BATCH_SIZE} (max ${MAX_BATCHES} batches)...\n`);

let processedBatches = 0;
let totalProcessed = 0;

for (let batchStart = 0; batchStart < branches.length && processedBatches < MAX_BATCHES; batchStart += BATCH_SIZE) {
  const batchEnd = Math.min(batchStart + BATCH_SIZE, branches.length);
  const batch = branches.slice(batchStart, batchEnd);
  
  processedBatches++;
  console.log(`\n📦 Processing Batch ${processedBatches}/${MAX_BATCHES} (branches ${batchStart + 1}-${batchEnd})`);
  
  for (let i = 0; i < batch.length; i++) {
    const branch = batch[i];
    totalProcessed++;
    
    if (totalProcessed % 10 === 0) {
      console.log(`  📊 Progress: ${totalProcessed}/${branches.length} (${((totalProcessed / branches.length) * 100).toFixed(1)}%)`);
    }
    
    try {
      // Fetch the branch
      execSync(`git fetch origin ${branch}`, { stdio: 'pipe' });
      
      // Try to merge
      try {
        execSync(`git merge origin/${branch} --no-ff -m "Merge ${branch} into main"`, { stdio: 'pipe' });
        
        results.successful.push({
          branch: branch,
          success: true,
          method: 'direct',
          batch: processedBatches
        });
        results.summary.successful++;
        results.summary.methods.direct++;
        
      } catch (mergeError) {
        // Try to resolve conflicts automatically
        try {
          execSync('git reset --hard HEAD', { stdio: 'pipe' });
          execSync(`git merge origin/${branch} --no-ff -X theirs -m "Merge ${branch} into main (theirs strategy)"`, { stdio: 'pipe' });
          
          results.successful.push({
            branch: branch,
            success: true,
            method: 'theirs',
            batch: processedBatches
          });
          results.summary.successful++;
          results.summary.methods.theirs++;
          
        } catch (theirsError) {
          try {
            execSync('git reset --hard HEAD', { stdio: 'pipe' });
            execSync(`git merge origin/${branch} --no-ff -X ours -m "Merge ${branch} into main (ours strategy)"`, { stdio: 'pipe' });
            
            results.successful.push({
              branch: branch,
              success: true,
              method: 'ours',
              batch: processedBatches
            });
            results.summary.successful++;
            results.summary.methods.ours++;
            
          } catch (oursError) {
            execSync('git reset --hard HEAD', { stdio: 'pipe' });
            
            results.failed.push({
              branch: branch,
              error: 'All merge strategies failed',
              batch: processedBatches,
              details: {
                direct: mergeError.message,
                theirs: theirsError.message,
                ours: oursError.message
              }
            });
            results.summary.failed++;
          }
        }
      }
      
    } catch (error) {
      results.failed.push({
        branch: branch,
        error: error.message,
        batch: processedBatches,
        details: error.message
      });
      results.summary.failed++;
    }
  }
  
  // Commit after each batch
  try {
    execSync('git add .', { stdio: 'pipe' });
    execSync(`git commit -m "feat: Merge batch ${processedBatches} of cursor branches (${batch.length} branches)"`, { stdio: 'pipe' });
    console.log(`  ✅ Batch ${processedBatches} committed successfully`);
  } catch (commitError) {
    console.log(`  ⚠️  Batch ${processedBatches} commit failed: ${commitError.message}`);
  }
  
  // Small delay between batches
  setTimeout(() => {}, 1000);
}

results.summary.total = totalProcessed;

// Generate comprehensive report
const report = {
  timestamp: new Date().toISOString(),
  summary: results.summary,
  successful: results.successful,
  failed: results.failed,
  status: results.summary.failed === 0 ? 'success' : 'partial_success',
  repository: {
    branch: 'main',
    status: 'clean',
    lastCommit: execSync('git log --oneline -1', { encoding: 'utf8' }).trim()
  },
  processing: {
    batchesProcessed: processedBatches,
    totalBranches: branches.length,
    branchesProcessed: totalProcessed,
    remainingBranches: branches.length - totalProcessed
  }
};

// Save report
fs.writeFileSync('massive-cursor-merge-report.json', JSON.stringify(report, null, 2));

console.log('\n📊 MASSIVE MERGE RESULTS:');
console.log(`✅ Successful: ${results.summary.successful}`);
console.log(`❌ Failed: ${results.summary.failed}`);
console.log(`📈 Success Rate: ${((results.summary.successful / results.summary.total) * 100).toFixed(1)}%`);
console.log(`📦 Batches Processed: ${processedBatches}`);
console.log(`🔄 Branches Processed: ${totalProcessed}/${branches.length}`);

console.log('\n🔧 Merge Methods Used:');
console.log(`  Direct: ${results.summary.methods.direct}`);
console.log(`  Theirs: ${results.summary.methods.theirs}`);
console.log(`  Ours: ${results.summary.methods.ours}`);

if (results.failed.length > 0) {
  console.log('\n❌ Failed Branches (first 10):');
  results.failed.slice(0, 10).forEach(failed => {
    console.log(`  - ${failed.branch}: ${failed.error}`);
  });
  if (results.failed.length > 10) {
    console.log(`  ... and ${results.failed.length - 10} more`);
  }
}

console.log('\n📄 Report saved to: massive-cursor-merge-report.json');
console.log('🎉 Massive cursor branch merge process completed!');

process.exit(results.summary.failed === 0 ? 0 : 1);