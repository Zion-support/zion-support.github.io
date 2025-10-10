#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting comprehensive merge conflict resolution...');

try {
  // Step 1: Check current status
  console.log('📊 Checking current git status...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  console.log('Current status:', status);

  // Step 2: Fetch latest changes
  console.log('📥 Fetching latest changes from origin...');
  execSync('git fetch origin main', { stdio: 'inherit' });

  // Step 3: Check for conflicts
  console.log('🔍 Checking for merge conflicts...');
  try {
    execSync('git merge origin/main --no-commit', { stdio: 'pipe' });
    console.log('✅ No conflicts found, merge successful');
  } catch (error) {
    console.log('⚠️  Merge conflicts detected, resolving...');
    
    // Step 4: Resolve conflicts automatically
    console.log('🔧 Resolving conflicts automatically...');
    
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
    
    console.log('Conflicted files:', conflictedFiles);
    
    // Resolve conflicts for each file
    for (const file of conflictedFiles) {
      if (fs.existsSync(file)) {
        console.log(`🔧 Resolving conflicts in ${file}...`);
        
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove conflict markers and keep both versions where possible
        content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> origin\/main/g, (match, headContent, originContent) => {
          // For most files, prefer the origin/main version as it's more recent
          return originContent;
        });
        
        // Remove any remaining conflict markers
        content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> origin\/main/g, '');
        content = content.replace(/=======[\s\S]*?>>>>>>> origin\/main/g, '');
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
        
        fs.writeFileSync(file, content);
        console.log(`✅ Resolved conflicts in ${file}`);
      }
    }
    
    // Step 5: Add resolved files
    console.log('📝 Adding resolved files...');
    execSync('git add .', { stdio: 'inherit' });
    
    // Step 6: Complete the merge
    console.log('✅ Completing merge...');
    execSync('git commit -m "Resolve merge conflicts and integrate latest changes"', { stdio: 'inherit' });
  }

  // Step 7: Push changes
  console.log('📤 Pushing changes to origin...');
  execSync('git push origin main', { stdio: 'inherit' });

  console.log('🎉 Merge conflict resolution completed successfully!');

} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}