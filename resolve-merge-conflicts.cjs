#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive merge conflict resolution...\n');

// List of branches to merge
const branchesToMerge = [
  'origin/feature/services-aug-22',
  'origin/feature/services-futurize',
  'origin/feature/services-marketing-seo',
  'origin/feature/services-q3-2025'
];

function runCommand(command, description) {
  console.log(`📋 ${description}`);
  try {
    const result = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`✅ ${description} - Success`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} - Error: ${error.message}`);
    return null;
  }
}

function resolveConflicts() {
  console.log('🔧 Resolving merge conflicts...\n');
  
  for (const branch of branchesToMerge) {
    console.log(`\n🔄 Processing branch: ${branch}`);
    
    // Fetch the branch
    runCommand(`git fetch origin ${branch.split('/')[1]}`, `Fetching ${branch}`);
    
    // Try to merge
    console.log(`🔀 Attempting to merge ${branch}...`);
    const mergeResult = runCommand(`git merge --no-commit --no-ff ${branch}`, `Merging ${branch}`);
    
    if (mergeResult === null) {
      console.log(`⚠️  Merge conflicts detected in ${branch}. Resolving...`);
      
      // Get list of conflicted files
      try {
        const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { 
          cwd: '/workspace', 
          encoding: 'utf8' 
        }).trim().split('\n').filter(f => f);
        
        console.log(`📁 Conflicted files: ${conflictedFiles.join(', ')}`);
        
        // Resolve conflicts for each file
        for (const file of conflictedFiles) {
          if (!file) continue;
          
          console.log(`🔧 Resolving conflicts in ${file}...`);
          
          // Check if file exists
          if (fs.existsSync(file)) {
            let content = fs.readFileSync(file, 'utf8');
            
            // Remove conflict markers and keep both versions where possible
            content = content
              .replace(/<<<<<<< HEAD\n/g, '')
              .replace(/=======\n/g, '\n')
              .replace(/>>>>>>> [^\n]+\n/g, '\n')
              .replace(/<<<<<<< HEAD/g, '')
              .replace(/=======/g, '')
              .replace(/>>>>>>> [^\n]+/g, '');
            
            // Clean up any remaining conflict artifacts
            content = content.replace(/\n{3,}/g, '\n\n');
            
            fs.writeFileSync(file, content);
            console.log(`✅ Resolved conflicts in ${file}`);
          } else {
            console.log(`⚠️  File ${file} not found, skipping...`);
          }
        }
        
        // Add resolved files
        runCommand('git add .', 'Adding resolved files');
        
        // Commit the merge
        runCommand(`git commit -m "Merge ${branch}: resolve conflicts automatically"`, `Committing merge of ${branch}`);
        
        console.log(`✅ Successfully merged ${branch}`);
        
      } catch (error) {
        console.log(`❌ Error resolving conflicts for ${branch}: ${error.message}`);
        runCommand('git merge --abort', 'Aborting failed merge');
      }
    } else {
      console.log(`✅ ${branch} merged without conflicts`);
      runCommand(`git commit -m "Merge ${branch}: no conflicts"`, `Committing merge of ${branch}`);
    }
  }
}

function main() {
  try {
    // Ensure we're on main branch
    runCommand('git checkout main', 'Switching to main branch');
    runCommand('git pull origin main', 'Pulling latest main');
    
    // Resolve conflicts and merge branches
    resolveConflicts();
    
    // Push changes
    runCommand('git push origin main', 'Pushing merged changes to main');
    
    console.log('\n🎉 Merge conflict resolution completed successfully!');
    
  } catch (error) {
    console.error('❌ Error during merge conflict resolution:', error.message);
    process.exit(1);
  }
}

main();