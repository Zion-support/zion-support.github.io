#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> origin\/main\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> .*\n?/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get list of files with merge conflicts
const { execSync } = require('child_process');

try {
  const files = execSync('find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(f => f && !f.includes('node_modules'));

  console.log(`Found ${files.length} files with merge conflicts`);
  
  let fixed = 0;
  for (const file of files) {
    if (fixMergeConflicts(file)) {
      fixed++;
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixed} files`);
} catch (error) {
  console.error('Error:', error.message);
}