#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files with merge conflict markers
const filesWithConflicts = execSync('grep -l "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

filesWithConflicts.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  
  console.log(`Fixing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = false;
  
  // Remove merge conflict markers and keep HEAD version
  const lines = content.split('\n');
  const newLines = [];
  let inConflict = false;
  let keepLines = true;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<< HEAD')) {
      inConflict = true;
      keepLines = true;
      fixed = true;
      continue;
    }
    
    if (line.startsWith('=======')) {
      keepLines = false;
      continue;
    }
    
    if (line.startsWith('>>>>>>> ')) {
      inConflict = false;
      keepLines = true;
      continue;
    }
    
    if (!inConflict || keepLines) {
      newLines.push(line);
    }
  }
  
  if (fixed) {
    fs.writeFileSync(filePath, newLines.join('\n'));
    console.log(`  ✓ Fixed merge conflicts in ${filePath}`);
  }
});

console.log('Merge conflict fixing completed!');