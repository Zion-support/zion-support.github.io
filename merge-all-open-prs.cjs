#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Fetching all open PRs from GitHub...');

try {
  // Ensure we're on main and up to date
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git fetch origin main', { stdio: 'inherit' });
  execSync('git reset --hard origin/main', { stdio: 'inherit' });
  
  // Get all open PRs using GitHub API
  const prsResponse = execSync('curl -s -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100', { encoding: 'utf8' });
  const prs = JSON.parse(prsResponse);
  
  console.log(`📋 Found ${prs.length} open PRs`);
  
  if (prs.length === 0) {
    console.log('✅ No open PRs to merge');
    process.exit(0);
  }
  
  let mergedCount = 0;
  let conflictCount = 0;
  
  for (const pr of prs) {
    console.log(`\n🔄 Processing PR #${pr.number}: ${pr.title}`);
    console.log(`   Head: ${pr.head.ref} (${pr.head.sha})`);
    
    try {
      // Fetch the PR branch
      execSync(`git fetch origin ${pr.head.ref}`, { stdio: 'pipe' });
      
      // Try to merge
      execSync(`git merge --no-ff origin/${pr.head.ref} -m "Merge PR #${pr.number}: ${pr.title}"`, { stdio: 'pipe' });
      
      console.log(`✅ Successfully merged PR #${pr.number}`);
      mergedCount++;
      
    } catch (error) {
      console.log(`❌ Conflict merging PR #${pr.number}: ${error.message}`);
      
      try {
        // Try to resolve conflicts automatically
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        
        if (status.includes('<<<<<<<')) {
          console.log(`🔧 Attempting to resolve conflicts for PR #${pr.number}...`);
          
          // Use git checkout --theirs for most files to prefer PR changes
          execSync('git checkout --theirs .', { stdio: 'pipe' });
          execSync('git add .', { stdio: 'pipe' });
          
          try {
            execSync('git commit --no-edit', { stdio: 'pipe' });
            console.log(`✅ Auto-resolved conflicts for PR #${pr.number}`);
            mergedCount++;
          } catch (commitError) {
            console.log(`❌ Could not commit after conflict resolution for PR #${pr.number}`);
            execSync('git merge --abort', { stdio: 'pipe' });
            conflictCount++;
          }
        } else {
          execSync('git merge --abort', { stdio: 'pipe' });
          conflictCount++;
        }
        
      } catch (resolveError) {
        console.log(`❌ Could not resolve conflicts for PR #${pr.number}`);
        try {
          execSync('git merge --abort', { stdio: 'pipe' });
        } catch (abortError) {
          // Ignore abort errors
        }
        conflictCount++;
      }
    }
  }
  
  console.log(`\n📊 Merge Summary:`);
  console.log(`   ✅ Successfully merged: ${mergedCount}`);
  console.log(`   ❌ Conflicts (skipped): ${conflictCount}`);
  
  if (mergedCount > 0) {
    console.log('\n🚀 Pushing merged changes to origin/main...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✅ Pushed to origin/main');
  }
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}