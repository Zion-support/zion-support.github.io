#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get list of files with conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus
  .split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.substring(3).trim())
  .filter(file => file);

console.log(`Found ${conflictFiles.length} files with conflicts`);

// Function to resolve conflicts in a file
function resolveConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }

    console.log(`🔧 Resolving conflicts in ${filePath}...`);
    // Split by conflict markers and keep the incoming version (after =======)
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepLines = false;

    for (const line of lines) {
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = false;
        continue;
      } else if (line.includes('=======')) {
        keepLines = true;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }

      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Resolve conflicts in all files
let resolvedCount = 0;
for (const file of conflictFiles) {
  if (file.trim()) {
    if (resolveConflicts(file.trim())) {
      resolvedCount++;
    }
  }
}

console.log(`\n📊 Summary:`);
console.log(`- Files with conflicts: ${conflictFiles.length}`);
console.log(`- Successfully resolved: ${resolvedCount}`);
console.log(`- Failed to resolve: ${conflictFiles.length - resolvedCount}`);

if (resolvedCount > 0) {
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('📝 Added resolved files to git staging');
  } catch (error) {
    console.error('❌ Error adding files to git staging:', error.message);
  }
}