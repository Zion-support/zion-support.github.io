#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFilesWithConflicts(filePath, fileList);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx'))) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('') || content.includes('  
  // Remove any remaining conflict markers
  content = content.replace(/\n?/g, '');
  content = content.replace(/  
  // Clean up any double newlines
  content = content.replace(/\n\n\n+/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
}

// Main execution
try {
  console.log('Searching for files with merge conflicts...');
  const conflictedFiles = findFilesWithConflicts('.');
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  if (conflictedFiles.length === 0) {
    console.log('No merge conflicts found!');
    process.exit(0);
  }
  
  console.log('\nFixing merge conflicts...');
  conflictedFiles.forEach(fixMergeConflicts);
  
  console.log('\nAll merge conflicts have been resolved!');
  
  // Run linting to check for any remaining issues
  console.log('\nRunning linting to check for remaining issues...');
  try {
    execSync('pnpm run lint', { stdio: 'inherit' });
    console.log('Linting passed!');
  } catch (error) {
    console.log('Linting found some issues, but merge conflicts are resolved.');
  }
  
} catch (error) {
  console.error('Error fixing merge conflicts:', error.message);
  process.exit(1);
}