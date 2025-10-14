#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflict markers
const files = result.trim().split('\n').filter(f => f && !f.includes('node_modules') && !f.includes('.git'));

console.log(`Found ${files.length} files with merge conflict markers`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove the merge conflict marker line
    content = content.replace(/.*ursor\/fix-errors-and-merge-to-main.*\n?/g, '');
    
    // Clean up any extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(file, content);
    console.log(`Fixed: ${file}`);
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log('Merge conflict markers cleanup completed');