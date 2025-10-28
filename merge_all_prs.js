#!/usr/bin/env node

import { execSync } from 'child_process';

async function mergeAllPRs() {
  try {
    console.log('🔄 Starting comprehensive PR merge process...');
    
    // Get all open PRs
    const prsOutput = execSync('gh pr list --state open --json number,title,mergeable,headRefName,state', { encoding: 'utf8' });
    const prs = JSON.parse(prsOutput);
    
    console.log(`📋 Found ${prs.length} open PRs`);
    
    // Process each PR
    for (const pr of prs) {
      console.log(`\n🔍 Processing PR #${pr.number}: ${pr.title}`);
      console.log(`   Branch: ${pr.headRefName}`);
      console.log(`   State: ${pr.state}`);
      console.log(`   Mergeable: ${pr.mergeable}`);
      
      try {
        // Checkout the PR
        console.log(`   📥 Checking out PR #${pr.number}...`);
        execSync(`gh pr checkout ${pr.number}`, { stdio: 'inherit' });
        
        // Fetch latest main
        console.log(`   📥 Fetching latest main...`);
        execSync('git fetch origin main', { stdio: 'inherit' });
        
        // Try to merge with main
        console.log(`   🔄 Attempting to merge with main...`);
        try {
          execSync('git merge origin/main', { stdio: 'inherit' });
          console.log(`   ✅ Successfully merged with main`);
          
          // Push the changes
          console.log(`   📤 Pushing changes...`);
          execSync(`git push origin ${pr.headRefName}`, { stdio: 'inherit' });
          
          // Mark as ready if it's a draft
          if (pr.state === 'DRAFT') {
            console.log(`   📝 Marking as ready for review...`);
            execSync(`gh pr ready ${pr.number}`, { stdio: 'inherit' });
          }
          
          // Try to merge the PR
          console.log(`   🔀 Attempting to merge PR...`);
          try {
            execSync(`gh pr merge ${pr.number} --merge --delete-branch`, { stdio: 'inherit' });
            console.log(`   ✅ Successfully merged PR #${pr.number}`);
          } catch (mergeError) {
            console.log(`   ⚠️  Could not merge PR #${pr.number}: ${mergeError.message}`);
            // Try with auto flag
            try {
              execSync(`gh pr merge ${pr.number} --merge --delete-branch --auto`, { stdio: 'inherit' });
              console.log(`   ✅ Successfully merged PR #${pr.number} with auto flag`);
            } catch (autoMergeError) {
              console.log(`   ❌ Failed to merge PR #${pr.number} even with auto flag: ${autoMergeError.message}`);
            }
          }
          
        } catch (mergeError) {
          console.log(`   ⚠️  Merge conflict in PR #${pr.number}: ${mergeError.message}`);
          console.log(`   🔧 Attempting to resolve conflicts...`);
          
          // Try to resolve conflicts automatically
          try {
            // Check for conflict markers
            const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
            if (statusOutput.includes('UU') || statusOutput.includes('AA') || statusOutput.includes('DD')) {
              console.log(`   🔧 Resolving conflicts automatically...`);
              
              // Use git checkout to resolve conflicts (take main version)
              execSync('git checkout --theirs .', { stdio: 'inherit' });
              execSync('git add .', { stdio: 'inherit' });
              execSync('git commit -m "Resolve merge conflicts by taking main version"', { stdio: 'inherit' });
              
              // Push the resolved changes
              execSync(`git push origin ${pr.headRefName}`, { stdio: 'inherit' });
              
              // Mark as ready if it's a draft
              if (pr.state === 'DRAFT') {
                execSync(`gh pr ready ${pr.number}`, { stdio: 'inherit' });
              }
              
              // Try to merge again
              try {
                execSync(`gh pr merge ${pr.number} --merge --delete-branch`, { stdio: 'inherit' });
                console.log(`   ✅ Successfully merged PR #${pr.number} after conflict resolution`);
              } catch (finalMergeError) {
                console.log(`   ❌ Still could not merge PR #${pr.number}: ${finalMergeError.message}`);
              }
            }
          } catch (resolveError) {
            console.log(`   ❌ Failed to resolve conflicts for PR #${pr.number}: ${resolveError.message}`);
          }
        }
        
        // Switch back to main
        console.log(`   🔄 Switching back to main...`);
        execSync('git checkout main', { stdio: 'inherit' });
        execSync('git pull origin main', { stdio: 'inherit' });
        
      } catch (error) {
        console.log(`   ❌ Error processing PR #${pr.number}: ${error.message}`);
        // Switch back to main on error
        try {
          execSync('git checkout main', { stdio: 'inherit' });
        } catch (checkoutError) {
          console.log(`   ⚠️  Could not switch back to main: ${checkoutError.message}`);
        }
      }
    }
    
    console.log('\n🎉 PR merge process completed!');
    
  } catch (error) {
    console.error('❌ Error in merge process:', error.message);
    process.exit(1);
  }
}

mergeAllPRs();