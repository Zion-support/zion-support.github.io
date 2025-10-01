#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...');

try {
  // Check current status
  console.log('📊 Current git status:');
  execSync('git status --porcelain', { stdio: 'inherit' });
  
  // Fetch latest changes
  console.log('🔄 Fetching latest changes...');
  execSync('git fetch origin', { stdio: 'inherit' });
  
  // Get current branch
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  console.log(`📍 Current branch: ${currentBranch}`);
  
  // Switch to main and pull latest
  console.log('🔄 Switching to main branch...');
  execSync('git checkout main', { stdio: 'inherit' });
  
  console.log('🔄 Pulling latest main...');
  execSync('git pull origin main', { stdio: 'inherit' });
  
  // Switch back to feature branch
  console.log('🔄 Switching to feature branch...');
  execSync('git checkout cursor/create-and-deploy-new-content-568b', { stdio: 'inherit' });
  
  // Try to merge main into feature branch
  console.log('🔄 Attempting to merge main into feature branch...');
  try {
    execSync('git merge main --no-edit', { stdio: 'inherit' });
    console.log('✅ Merge successful!');
  } catch (error) {
    console.log('⚠️  Merge conflicts detected. Resolving...');
    
    // Get conflicted files
    const conflictedFiles = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD"', { encoding: 'utf8' });
    console.log('📋 Conflicted files:', conflictedFiles);
    
    // Resolve conflicts by accepting our changes
    console.log('🔧 Resolving conflicts by accepting our changes...');
    execSync('git checkout --ours .', { stdio: 'inherit' });
    
    // Add resolved files
    execSync('git add .', { stdio: 'inherit' });
    
    // Complete the merge
    execSync('git commit --no-edit', { stdio: 'inherit' });
    console.log('✅ Conflicts resolved!');
  }
  
  // Switch back to main
  console.log('🔄 Switching back to main...');
  execSync('git checkout main', { stdio: 'inherit' });
  
  // Merge feature branch into main
  console.log('🔄 Merging feature branch into main...');
  execSync('git merge cursor/create-and-deploy-new-content-568b --no-edit', { stdio: 'inherit' });
  
  // Push to main
  console.log('🚀 Pushing to main...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('✅ Merge and deployment completed successfully!');
  console.log('🎉 New AI 2027 breakthrough content is now live on main branch!');
  
  // Check for open PRs
  console.log('📋 Checking for open PRs...');
  try {
    execSync('gh pr list --state open', { stdio: 'inherit' });
  } catch (error) {
    console.log('ℹ️  GitHub CLI not available or no open PRs found');
  }
  
} catch (error) {
  console.error('❌ Error during merge process:', error.message);
  process.exit(1);
}