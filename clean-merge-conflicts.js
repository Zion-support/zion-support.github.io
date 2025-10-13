#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all files with merge conflicts
const filesWithConflicts = execSync('grep -r "<<<<<<< HEAD" /workspace/app/ --include="*.tsx" --include="*.ts" -l', { encoding: 'utf8' }).trim().split('\n').filter(f => f);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

filesWithConflicts.forEach(filePath => {
  console.log(`Cleaning ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep the HEAD version
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
  
  // Remove any remaining merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+\n/g, '');
  content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+\n/g, '');
  
  fs.writeFileSync(filePath, content);
});

console.log('All merge conflicts cleaned up');