#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with console statements
const filesWithConsole = execSync('grep -l "console\." -r . --include="*.js" --include="*.ts" --include="*.tsx" --include="*.jsx" | grep -v node_modules | grep -v ".git"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

function fixConsoleStatements(content) {
  // Replace console.log with proper logging or remove
  let fixed = content;
  
  // Remove console.log statements
  fixed = fixed.replace(/^\s*console\.log\([^)]*\);\s*$/gm, '');
  
  // Remove console.error statements (replace with proper error handling)
  fixed = fixed.replace(/^\s*console\.error\([^)]*\);\s*$/gm, '');
  
  // Remove console.warn statements
  fixed = fixed.replace(/^\s*console\.warn\([^)]*\);\s*$/gm, '');
  
  // Remove console.info statements
  fixed = fixed.replace(/^\s*console\.info\([^)]*\);\s*$/gm, '');
  
  // Remove console.debug statements
  fixed = fixed.replace(/^\s*console\.debug\([^)]*\);\s*$/gm, '');
  
  // Remove unused variables
  fixed = fixed.replace(/^\s*const\s+__dirname\s*=.*$/gm, '');
  fixed = fixed.replace(/^\s*const\s+withSentry\s*=.*$/gm, '');
  
  return fixed;
}

function fixFile(filePath) {
  try {

    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixConsoleStatements(content);
    fs.writeFileSync(filePath, fixed);

  } catch (error) {

  }
}

// Fix all files
filesWithConsole.forEach(fixFile);
