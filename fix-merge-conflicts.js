#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with merge conflicts
const filesWithConflicts = execSync('grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>" app/**/*.tsx app/**/*.ts src/**/*.tsx src/**/*.ts 2>/dev/null || true', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

filesWithConflicts.forEach(file => {
  if (!file.trim()) return;
  
  console.log(`Processing ${file}...`);
  
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove merge conflict markers and keep the second version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(file, content);
    console.log(`✓ Fixed merge conflicts in ${file}`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
});

console.log('Merge conflict resolution complete!');