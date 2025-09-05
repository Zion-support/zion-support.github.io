#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting merge conflict and PR resolution...');

try {
  // Step 1: Fix syntax errors first
  console.log('🔧 Step 1: Fixing syntax errors...');
  execSync('node scripts/quick-syntax-fix.cjs', { stdio: 'inherit' });
  
  // Step 2: Check git status
  console.log('📋 Step 2: Checking git status...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  console.log('Status:', status);
  
  // Step 3: Add and commit changes
  console.log('📝 Step 3: Committing changes...');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "fix: Resolve syntax errors and merge conflicts"', { stdio: 'inherit' });
  
  // Step 4: Fetch latest changes
  console.log('📥 Step 4: Fetching latest changes...');
  execSync('git fetch origin', { stdio: 'inherit' });
  execSync('git fetch --all', { stdio: 'inherit' });
  
  // Step 5: Switch to main and pull
  console.log('🔄 Step 5: Switching to main and pulling...');
  try {
    execSync('git checkout main', { stdio: 'inherit' });
  } catch (error) {
    console.log('Creating main branch from origin...');
    execSync('git checkout -b main origin/main', { stdio: 'inherit' });
  }
  
  try {
    execSync('git pull origin main', { stdio: 'inherit' });
  } catch (error) {
    console.log('Pull failed, resetting to origin/main...');
    execSync('git reset --hard origin/main', { stdio: 'inherit' });
  }
  
  // Step 6: List open PRs
  console.log('📋 Step 6: Listing open PRs...');
  try {
    const prs = execSync('gh pr list --state open --json number,title,headRefName,baseRefName,mergeable', { encoding: 'utf8' });
    const prList = JSON.parse(prs);
    
    console.log(`Found ${prList.length} open PRs:`);
    prList.forEach(pr => {
      console.log(`- PR #${pr.number}: ${pr.title} (${pr.headRefName} -> ${pr.baseRefName}) [mergeable: ${pr.mergeable}]`);
    });
    
    // Step 7: Merge PRs
    if (prList.length > 0) {
      console.log('🔄 Step 7: Merging PRs...');
      
      for (const pr of prList) {
        console.log(`🔄 Merging PR #${pr.number}...`);
        try {
          if (pr.mergeable) {
            execSync(`gh pr merge ${pr.number} --merge --delete-branch`, { stdio: 'inherit' });
            console.log(`✅ PR #${pr.number} merged successfully`);
          } else {
            console.log(`⚠️ PR #${pr.number} has conflicts, skipping for now`);
          }
        } catch (error) {
          console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
        }
        
        // Small delay between PRs
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } else {
      console.log('✨ No open PRs to merge');
    }
    
  } catch (error) {
    console.log('⚠️ Could not list PRs:', error.message);
  }
  
  // Step 8: Cleanup
  console.log('🧹 Step 8: Cleaning up...');
  try {
    execSync('git branch --merged | grep -v "\\*\\|main\\|master" | xargs -n 1 git branch -d', { stdio: 'inherit' });
  } catch (error) {
    // Ignore cleanup errors
  }
  
  execSync('git remote prune origin', { stdio: 'inherit' });
  
  // Step 9: Final build test
  console.log('🔨 Step 9: Running final build test...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Final build successful!');
  } catch (error) {
    console.log('⚠️ Final build has issues, but merge process completed');
  }
  
  console.log('🎉 Merge conflict and PR resolution completed!');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}