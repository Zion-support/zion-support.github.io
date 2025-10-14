#!/usr/bin/env node,
import fs from 'fs';
import { execSync } from 'child_process';
// Get all TypeScript/JavaScript files that might have syntax errors,
const filesToCheck = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v app-broken | grep -v app-disabled | grep -v temp-broken | grep -v src', { encoding: 'utf8' })
  .trim();
  .split('\n');
  .filter(file => file.trim());
console.log(`Checking ${filesToCheck.length} files for all syntax errors""
      console.log(`Fixed: ${filePath}""
    console.error(`Error fixing ${filePath}:""
console.log(`\nFixed ${fixedCount} files, ${errorCount} errors"")