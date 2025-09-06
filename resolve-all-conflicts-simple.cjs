#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function resolveConflicts(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove all merge conflict markers and keep HEAD version
  content = content.replace(/
  content = content.replace(/

  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  // Remove any remaining conflict markers
  content = content.replace(/

  fs.writeFileSync(filePath, content);
  console.log(`Resolved conflicts in ${filePath}`);
}

// Get all files with conflicts
const { execSync } = require('child_process');

try {
  const conflictedFiles = execSync('find pages -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l ""', { encoding: 'utf8' }).trim().split('\n').filter(f => f);

  console.log(`Found ${conflictedFiles.length} files with conflicts`);

  conflictedFiles.forEach(resolveConflicts);

  console.log('All conflicts resolved!');
} catch (error) {
  console.log('No conflicts found or error occurred:', error.message);
}