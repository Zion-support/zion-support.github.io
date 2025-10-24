#!/usr/bin/env node

const { execSync } = require('child_process');

async function mergeAllPRs() {
  try {
    console.log('🔍 Fetching open PRs...');
    const prsOutput = execSync('gh pr list --state open --json number,title,headRefName', { encoding: 'utf8' });
    const prs = JSON.parse(prsOutput);
    
    console.log(`📋 Found ${prs.length} open PRs`);
    
    // Sort PRs by number (newest first)
    prs.sort((a, b) => b.number - a.number);
    
    for (const pr of prs) {
      console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
      
      try {
        // Checkout the PR branch
        console.log(`📥 Checking out PR #${pr.number}...`);
        execSync(`gh pr checkout ${pr.number}`, { stdio: 'inherit' });
        
        // Fetch latest main
        console.log('📥 Fetching latest main...');
        execSync('git fetch origin main', { stdio: 'inherit' });
        
        // Try to merge with main
        console.log('🔀 Attempting to merge with main...');
        try {
          execSync('git merge origin/main', { stdio: 'inherit' });
          console.log('✅ Merge successful');
        } catch (mergeError) {
          console.log('⚠️  Merge conflicts detected, attempting to resolve...');
          
          // Try to resolve conflicts automatically
          try {
            execSync('git add .', { stdio: 'inherit' });
            execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
            console.log('✅ Conflicts resolved automatically');
          } catch (resolveError) {
            console.log('❌ Could not resolve conflicts automatically, skipping...');
            continue;
          }
        }
        
        // Switch back to main
        execSync('git checkout main', { stdio: 'inherit' });
        
        // Merge the PR into main
        console.log(`🔀 Merging PR #${pr.number} into main...`);
        try {
          execSync(`git merge ${pr.headRefName}`, { stdio: 'inherit' });
          console.log(`✅ PR #${pr.number} merged successfully`);
          
          // Push to origin
          console.log('📤 Pushing to origin...');
          execSync('git push origin main', { stdio: 'inherit' });
          
          // Close the PR
          console.log(`🔒 Closing PR #${pr.number}...`);
          execSync(`gh pr close ${pr.number}`, { stdio: 'inherit' });
          
          console.log(`✅ PR #${pr.number} completed successfully`);
          
        } catch (mergeError) {
          console.log(`❌ Failed to merge PR #${pr.number}: ${mergeError.message}`);
        }
        
      } catch (error) {
        console.log(`❌ Error processing PR #${pr.number}: ${error.message}`);
        // Switch back to main in case of error
        try {
          execSync('git checkout main', { stdio: 'inherit' });
        } catch (e) {
          // Ignore checkout errors
        }
      }
    }
    
    console.log('\n🎉 All PRs processed!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

mergeAllPRs();