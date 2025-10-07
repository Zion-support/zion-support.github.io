#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Comprehensive Cursor Branch Merge Process...\n');

// Get all cursor branches
const branches = execSync('git branch -r | grep "cursor/" | head -20', { encoding: 'utf8' })
  .split('\n')
  .filter(branch => branch.trim())
  .map(branch => branch.trim().replace('origin/', ''));

console.log(`📋 Found ${branches.length} cursor branches to process:`);
branches.forEach((branch, index) => {
  console.log(`  ${index + 1}. ${branch}`);
});

const results = {
  successful: [],
  failed: [],
  conflicts: [],
  summary: {
    total: branches.length,
    successful: 0,
    failed: 0,
    conflicts: 0,
    methods: {
      direct: 0,
      theirs: 0,
      ours: 0,
      manual: 0
    }
  }
};

console.log('\n🔄 Starting merge process...\n');

for (let i = 0; i < branches.length; i++) {
  const branch = branches[i];
  console.log(`\n📝 Processing ${i + 1}/${branches.length}: ${branch}`);
  
  try {
    // Fetch the branch
    console.log(`  🔄 Fetching branch...`);
    execSync(`git fetch origin ${branch}`, { stdio: 'pipe' });
    
    // Try to merge
    console.log(`  🔀 Attempting merge...`);
    try {
      execSync(`git merge origin/${branch} --no-ff -m "Merge ${branch} into main"`, { stdio: 'pipe' });
      
      results.successful.push({
        branch: branch,
        success: true,
        method: 'direct'
      });
      results.summary.successful++;
      results.summary.methods.direct++;
      console.log(`  ✅ Successfully merged ${branch}`);
      
    } catch (mergeError) {
      console.log(`  ⚠️  Direct merge failed, trying conflict resolution...`);
      
      // Try to resolve conflicts automatically
      try {
        // Reset to main
        execSync('git reset --hard HEAD', { stdio: 'pipe' });
        
        // Try merge with theirs strategy
        execSync(`git merge origin/${branch} --no-ff -X theirs -m "Merge ${branch} into main (theirs strategy)"`, { stdio: 'pipe' });
        
        results.successful.push({
          branch: branch,
          success: true,
          method: 'theirs'
        });
        results.summary.successful++;
        results.summary.methods.theirs++;
        console.log(`  ✅ Successfully merged ${branch} using theirs strategy`);
        
      } catch (theirsError) {
        try {
          // Reset to main
          execSync('git reset --hard HEAD', { stdio: 'pipe' });
          
          // Try merge with ours strategy
          execSync(`git merge origin/${branch} --no-ff -X ours -m "Merge ${branch} into main (ours strategy)"`, { stdio: 'pipe' });
          
          results.successful.push({
            branch: branch,
            success: true,
            method: 'ours'
          });
          results.summary.successful++;
          results.summary.methods.ours++;
          console.log(`  ✅ Successfully merged ${branch} using ours strategy`);
          
        } catch (oursError) {
          // Reset to main
          execSync('git reset --hard HEAD', { stdio: 'pipe' });
          
          results.failed.push({
            branch: branch,
            error: 'All merge strategies failed',
            details: {
              direct: mergeError.message,
              theirs: theirsError.message,
              ours: oursError.message
            }
          });
          results.summary.failed++;
          console.log(`  ❌ Failed to merge ${branch} - all strategies failed`);
        }
      }
    }
    
  } catch (error) {
    results.failed.push({
      branch: branch,
      error: error.message,
      details: error.message
    });
    results.summary.failed++;
    console.log(`  ❌ Error processing ${branch}: ${error.message}`);
  }
  
  // Small delay to prevent overwhelming the system
  setTimeout(() => {}, 100);
}

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
  }
};

// Save report
fs.writeFileSync('comprehensive-cursor-merge-report.json', JSON.stringify(report, null, 2));

console.log('\n📊 COMPREHENSIVE MERGE RESULTS:');
console.log(`✅ Successful: ${results.summary.successful}`);
console.log(`❌ Failed: ${results.summary.failed}`);
console.log(`📈 Success Rate: ${((results.summary.successful / results.summary.total) * 100).toFixed(1)}%`);

console.log('\n🔧 Merge Methods Used:');
console.log(`  Direct: ${results.summary.methods.direct}`);
console.log(`  Theirs: ${results.summary.methods.theirs}`);
console.log(`  Ours: ${results.summary.methods.ours}`);

if (results.failed.length > 0) {
  console.log('\n❌ Failed Branches:');
  results.failed.forEach(failed => {
    console.log(`  - ${failed.branch}: ${failed.error}`);
  });
}

console.log('\n📄 Report saved to: comprehensive-cursor-merge-report.json');
console.log('🎉 Comprehensive cursor branch merge process completed!');

process.exit(results.summary.failed === 0 ? 0 : 1);