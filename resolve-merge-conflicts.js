#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting merge conflict resolution...');

try {
  // First, try to merge with strategy to prefer main branch
  console.log('Attempting merge with strategy...');
  execSync('git merge main -X theirs', { stdio: 'inherit' });
  console.log('Merge successful with strategy!');
} catch (error) {
  console.log('Strategy merge failed, trying manual resolution...');
  
  // Get list of conflicted files
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);

  console.log(`Found ${conflictedFiles.length} conflicted files`);

  // For each conflicted file, try to resolve automatically
  for (const file of conflictedFiles) {
    try {
      console.log(`Processing ${file}...`);
      
      // Check if file exists
      if (!fs.existsSync(file)) {
        console.log(`File ${file} does not exist, skipping...`);
        continue;
      }

      const content = fs.readFileSync(file, 'utf8');
      
      // Check if it's a modify/delete conflict
      if (content.includes('deleted in main and modified in HEAD')) {
        console.log(`File ${file} has modify/delete conflict - keeping HEAD version`);
        execSync(`git add "${file}"`, { stdio: 'inherit' });
        continue;
      }

      // For content conflicts, try to resolve by accepting main branch version
      if (content.includes('<<<<<<< HEAD')) {
        console.log(`File ${file} has content conflict - resolving by accepting main version`);
        
        // Use git checkout to get the main branch version
        try {
          execSync(`git checkout --theirs "${file}"`, { stdio: 'inherit' });
          execSync(`git add "${file}"`, { stdio: 'inherit' });
          console.log(`Resolved ${file} by accepting main version`);
        } catch (checkoutError) {
          console.log(`Could not checkout main version for ${file}, trying manual resolution...`);
          
          // Manual resolution: remove conflict markers and keep main version
          let resolvedContent = content
            .replace(/<<<<<<< HEAD[\s\S]*?=======/g, '')
            .replace(/>>>>>>> [^\n]+/g, '')
            .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
          
          // Clean up any remaining conflict markers
          resolvedContent = resolvedContent
            .replace(/<<<<<<< [^\n]+/g, '')
            .replace(/=======/g, '')
            .replace(/>>>>>>> [^\n]+/g, '');
          
          fs.writeFileSync(file, resolvedContent);
          execSync(`git add "${file}"`, { stdio: 'inherit' });
          console.log(`Manually resolved ${file}`);
        }
      }
    } catch (fileError) {
      console.log(`Error processing ${file}:`, fileError.message);
      // Continue with other files
    }
  }

  // Check if there are still conflicts
  const remainingConflicts = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);

  if (remainingConflicts.length === 0) {
    console.log('All conflicts resolved!');
    execSync('git commit -m "Resolve merge conflicts by accepting main branch changes"', { stdio: 'inherit' });
  } else {
    console.log(`Still have ${remainingConflicts.length} unresolved conflicts:`, remainingConflicts);
  }
}

console.log('Merge conflict resolution complete!');