#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

conflictedFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`Skipping ${file} - file doesn't exist`);
    return;
  }

  console.log(`Resolving conflicts in ${file}`);
  
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    fs.writeFileSync(file, content);
    console.log(`✓ Resolved ${file}`);
  } catch (error) {
    console.error(`✗ Error resolving ${file}:`, error.message);
  }
});

console.log('All conflicts resolved!');