#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

filesWithConflicts.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  
  console.log(`Fixing merge conflicts in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep HEAD version
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
  
  // Clean up any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD\n?/g, '');
  content = content.replace(/=======\n?/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('Merge conflicts resolved!');