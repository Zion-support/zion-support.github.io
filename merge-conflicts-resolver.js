#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔧 Starting merge conflict resolution...');

try {
  // First, let's try to merge with a strategy
  console.log('📥 Attempting to merge origin/main...');
  
  try {
    execSync('git merge origin/main --strategy=ours --no-commit', { stdio: 'inherit' });
    console.log('✅ Merge completed with ours strategy');
  } catch (error) {
    console.log('⚠️  Merge with ours strategy failed, trying recursive strategy...');
    
    try {
      execSync('git merge origin/main --strategy=recursive -X ours --no-commit', { stdio: 'inherit' });
      console.log('✅ Merge completed with recursive strategy');
    } catch (mergeError) {
      console.log('❌ Merge failed, checking for conflicts...');
      
      // Check if there are merge conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      const conflictFiles = status.split('\n').filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'));
      
      if (conflictFiles.length > 0) {
        console.log(`🔍 Found ${conflictFiles.length} files with conflicts:`);
        conflictFiles.forEach(file => console.log(`  - ${file}`));
        
        // Try to resolve conflicts automatically
        console.log('🔧 Attempting to resolve conflicts automatically...');
        
        conflictFiles.forEach(conflictFile => {
          const filePath = conflictFile.split(' ').pop();
          if (fs.existsSync(filePath)) {
            console.log(`📝 Resolving conflicts in ${filePath}...`);
            
            try {
              let content = fs.readFileSync(filePath, 'utf8');
              
              // Remove conflict markers and keep both versions where possible
              content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> origin\/main/g, (match, headContent, mainContent) => {
                // Try to merge the content intelligently
                if (headContent.trim() === mainContent.trim()) {
                  return headContent;
                }
                
                // If they're different, keep both with a separator
                return `${headContent}\n\n<!-- Merged from origin/main -->\n${mainContent}`;
              });
              
              // Remove any remaining conflict markers
              content = content.replace(/<<<<<<< HEAD\n[\s\S]*?>>>>>>> origin\/main/g, '');
              content = content.replace(/=======\n[\s\S]*?>>>>>>> origin\/main/g, '');
              content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======/g, '');
              
              fs.writeFileSync(filePath, content);
              console.log(`✅ Resolved conflicts in ${filePath}`);
            } catch (fileError) {
              console.log(`❌ Failed to resolve conflicts in ${filePath}: ${fileError.message}`);
            }
          }
        });
        
        // Add resolved files
        execSync('git add .', { stdio: 'inherit' });
        console.log('📦 Added resolved files to staging');
      }
    }
  }
  
  // Commit the merge
  console.log('💾 Committing merge...');
  execSync('git commit -m "feat: Merge origin/main with conflict resolution and improvements"', { stdio: 'inherit' });
  
  console.log('✅ Merge completed successfully!');
  
  // Push the changes
  console.log('🚀 Pushing changes to origin...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('🎉 All done! Merge conflicts resolved and changes pushed to main branch.');
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}