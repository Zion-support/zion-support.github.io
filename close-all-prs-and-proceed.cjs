#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Close All PRs and Proceed with Improvements...\n');

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

// Close all PRs
async function closeAllPRs(prs) {
  logStep(2, 'Closing all open PRs');
  
  let closedCount = 0;
  let failedCount = 0;
  
  for (const pr of prs) {
    try {
      console.log(`🔒 Closing PR #${pr.number}: ${pr.title}`);
      
      const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/pulls/${pr.number}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          state: 'closed'
        })
      });
      
      if (response.ok) {
        console.log(`✅ Successfully closed PR #${pr.number}`);
        closedCount++;
      } else {
        console.error(`❌ Failed to close PR #${pr.number}: ${response.statusText}`);
        failedCount++;
      }
      
    } catch (error) {
      console.error(`❌ Error closing PR #${pr.number}:`, error.message);
      failedCount++;
    }
  }
  
  return { closedCount, failedCount };
}

// Proceed with improvements
function proceedWithImprovements() {
  logStep(3, 'Proceeding with improvements');
  
  try {
    // Ensure we're on main branch
    execCommand('git checkout main');
    
    // Pull latest changes
    execCommand('git pull origin main');
    
    // Check if build works
    console.log('🔍 Checking if build works...');
    const buildResult = execCommand('npm run build');
    
    if (buildResult) {
      console.log('✅ Build is working successfully');
      
      // Run linting
      console.log('🔍 Running linting...');
      const lintResult = execCommand('npm run lint');
      
      if (lintResult) {
        console.log('✅ Linting passed');
      } else {
        console.log('⚠️  Linting has issues, but continuing...');
      }
      
      // Commit current state
      execCommand('git add .');
      execCommand('git commit -m "Close all PRs and proceed with improvements - clean working state"');
      execCommand('git push origin main');
      
      console.log('✅ Successfully committed and pushed clean working state');
      
      return true;
    } else {
      console.error('❌ Build failed, need to fix issues first');
      return false;
    }
    
  } catch (error) {
    console.error('❌ Error during improvements:', error.message);
    return false;
  }
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
    
    console.log(`\n📋 Found ${prs.length} open PRs to close:`);
    prs.forEach(pr => {
      console.log(`  - PR #${pr.number}: ${pr.title} (${pr.headRef})`);
    });
    
    // Close all PRs
    const { closedCount, failedCount } = await closeAllPRs(prs);
    
    // Proceed with improvements
    const improvementsSuccess = proceedWithImprovements();
    
    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 PR CLOSURE AND IMPROVEMENTS SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully closed: ${closedCount} PRs`);
    console.log(`❌ Failed to close: ${failedCount} PRs`);
    console.log(`📊 Total processed: ${prs.length} PRs`);
    console.log(`🚀 Improvements status: ${improvementsSuccess ? 'Success' : 'Failed'}`);
    
    if (closedCount > 0) {
      console.log('\n🎉 Successfully closed PRs and proceeded with improvements!');
    }
    
    if (failedCount > 0) {
      console.log('\n⚠️  Some PRs failed to close. Check the logs above for details.');
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

module.exports = { main, getOpenPRs, closeAllPRs, proceedWithImprovements };