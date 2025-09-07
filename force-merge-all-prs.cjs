#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Force Merge All PRs...\n');

// Configuration
const GITHUB_REPO = 'Zion-Holdings/zion.app';

// Utility functions
function execCommand(command, options = {}) {
  try {
    console.log(`📝 Executing: ${command}`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
    return result.trim();
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    console.error(`Error: ${error.message}`);
    return null;
  }
}

function logStep(step, message) {
  console.log(`\n🔄 Step ${step}: ${message}`);
  console.log('=' .repeat(50));
}

// Get all open PRs
async function getOpenPRs() {
  logStep(1, 'Fetching open PRs from GitHub');
  
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/pulls?state=open&per_page=100`);
    const prs = await response.json();
    
    console.log(`📊 Found ${prs.length} open PRs`);
    
    return prs.map(pr => ({
      number: pr.number,
      title: pr.title,
      headRef: pr.head.ref,
      headSha: pr.head.sha,
      baseRef: pr.base.ref,
      mergeable: pr.mergeable,
      mergeable_state: pr.mergeable_state,
      url: pr.html_url
    }));
  } catch (error) {
    console.error('❌ Failed to fetch PRs:', error.message);
    return [];
  }
}

// Force merge strategy - accept all changes from PR branches
function forceMergeAllPRs(prs) {
  logStep(2, 'Force merging all PRs by accepting all changes');
  
  try {
    // Switch to main branch
    execCommand('git checkout main');
    
    // Pull latest main
    execCommand('git pull origin main');
    
    let successCount = 0;
    let failureCount = 0;
    
    // Process each PR
    for (const pr of prs) {
      console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
      
      try {
        // Fetch the PR branch
        const fetchResult = execCommand(`git fetch origin ${pr.headRef}`);
        if (!fetchResult) {
          console.error(`❌ Failed to fetch branch ${pr.headRef}`);
          failureCount++;
          continue;
        }
        
        // Use merge strategy to accept all changes from PR
        const mergeResult = execCommand(`git merge origin/${pr.headRef} -X theirs --no-ff -m "Force merge PR #${pr.number}: ${pr.title}"`);
        
        if (mergeResult) {
          console.log(`✅ Successfully force merged PR #${pr.number}`);
          successCount++;
        } else {
          console.error(`❌ Failed to force merge PR #${pr.number}`);
          failureCount++;
        }
        
      } catch (error) {
        console.error(`❌ Error processing PR #${pr.number}:`, error.message);
        failureCount++;
      }
    }
    
    // Push all changes to main
    if (successCount > 0) {
      console.log('\n🚀 Pushing all merged changes to main...');
      const pushResult = execCommand('git push origin main --force');
      if (pushResult) {
        console.log('✅ Successfully pushed all changes to main');
      } else {
        console.error('❌ Failed to push changes to main');
      }
    }
    
    return { successCount, failureCount };
    
  } catch (error) {
    console.error('❌ Fatal error during force merge:', error.message);
    return { successCount: 0, failureCount: prs.length };
  }
}

// Clean up merged branches
function cleanupBranches(prs) {
  logStep(3, 'Cleaning up merged branches');
  
  let cleanedCount = 0;
  
  for (const pr of prs) {
    try {
      // Delete remote branch
      const deleteResult = execCommand(`git push origin --delete ${pr.headRef}`);
      if (deleteResult) {
        console.log(`✅ Cleaned up branch: ${pr.headRef}`);
        cleanedCount++;
      }
    } catch (error) {
      console.error(`❌ Failed to cleanup branch ${pr.headRef}:`, error.message);
    }
  }
  
  return cleanedCount;
}

// Main execution function
async function main() {
  try {
    // Get all open PRs
    const prs = await getOpenPRs();
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }
    
    // Sort PRs by number (oldest first)
    prs.sort((a, b) => a.number - b.number);
    
    console.log(`\n📋 Processing ${prs.length} PRs:`);
    prs.forEach(pr => {
      console.log(`  - PR #${pr.number}: ${pr.title} (${pr.headRef})`);
    });
    
    // Force merge all PRs
    const { successCount, failureCount } = forceMergeAllPRs(prs);
    
    // Clean up branches
    const cleanedCount = cleanupBranches(prs);
    
    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 FORCE MERGE SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully merged: ${successCount} PRs`);
    console.log(`❌ Failed to merge: ${failureCount} PRs`);
    console.log(`🧹 Cleaned up branches: ${cleanedCount} branches`);
    console.log(`📊 Total processed: ${prs.length} PRs`);
    
    if (successCount > 0) {
      console.log('\n🎉 Some PRs were successfully force merged!');
    }
    
    if (failureCount > 0) {
      console.log('\n⚠️  Some PRs failed to merge. Check the logs above for details.');
    }
    
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, getOpenPRs, forceMergeAllPRs, cleanupBranches };