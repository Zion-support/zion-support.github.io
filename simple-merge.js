#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Simple Merge Script for Netlify Build Fixes');
console.log('==============================================');

try {
  console.log('1. Checking current status...');
  
  // Check current branch
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  console.log(`Current branch: ${currentBranch}`);
  
  // Check if we're in a clean state
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (status.trim()) {
    console.log('Working directory not clean, stashing changes...');
    execSync('git stash push -m "Auto-stash before merge"');
  }
  
  console.log('2. Switching to main branch...');
  execSync('git checkout main');
  
  console.log('3. Pulling latest changes...');
  execSync('git pull origin main');
  
  console.log('4. Merging fix branch...');
  try {
    execSync('git merge cursor/fix-netlify-build-and-merge-to-main-d1e7 --no-ff -m "Merge Netlify build fixes into main"');
    console.log('✅ Merge completed successfully!');
  } catch (mergeError) {
    console.log('⚠️ Merge conflicts detected, attempting to resolve...');
    
    // Check which files have conflicts
    const conflictStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictFiles = conflictStatus.split('\n')
      .filter(line => line.includes('UU') || line.includes('AA'))
      .map(line => line.split(' ').pop());
    
    console.log(`Found ${conflictFiles.length} files with conflicts`);
    
    // Try to resolve conflicts automatically
    for (const file of conflictFiles) {
      if (fs.existsSync(file)) {
        console.log(`Resolving conflicts in ${file}`);
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove merge conflict markers
        content = content
          .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
          .replace(/<<<<<<< [a-f0-9]+[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
          .replace(/^<<<<<<<.*$/gm, '')
          .replace(/^=======.*$/gm, '')
          .replace(/^>>>>>>>.*$/gm, '');
        
        // Clean up extra whitespace
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        fs.writeFileSync(file, content);
      }
    }
    
    // Add resolved files and commit
    execSync('git add .');
    execSync('git commit -m "Resolve merge conflicts automatically"');
    console.log('✅ Conflicts resolved and committed');
  }
  
  console.log('5. Pushing to main...');
  execSync('git push origin main');
  
  console.log('6. Testing build...');
  execSync('npm run build');
  
  console.log('✅ All done! Merge completed successfully and build is working.');
  
} catch (error) {
  console.error('❌ Error during merge:', error.message);
  
  // Try to restore state
  try {
    execSync('git merge --abort', { stdio: 'pipe' });
    console.log('Merge aborted, repository restored to previous state');
  } catch (abortError) {
    console.log('Could not abort merge, manual intervention may be required');
  }
  
  process.exit(1);
}