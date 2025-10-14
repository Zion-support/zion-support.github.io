#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "" 2>/dev/null', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

filesWithConflicts.forEach(filePath => {
  try {
    console.log(`Fixing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    // Pattern: ... 
    content = content.replace(/[\s\S]*?
      // Extract only the HEAD part (before )
      const headPart = match.split('')[0].replace(/\s*/, '');
      return headPart;
    });
    
    // Remove any remaining conflict markers
    content = content.replace(/\s*/g, '');
    content = content.replace(/
    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    fixedCount++;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);
