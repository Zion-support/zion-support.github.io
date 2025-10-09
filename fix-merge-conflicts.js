#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    console.log(`Resolving conflicts in: ${filePath}`);
    // Split by conflict markers and keep the HEAD version (first part)
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictDepth = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        conflictDepth++;
        continue; // Skip the conflict marker
      } else if (line.trim().startsWith('=======')) {
        continue; // Skip the separator
      } else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictDepth--;
        continue; // Skip the end marker
      } else if (inConflict && conflictDepth === 1) {
        // We're in the first part (HEAD), keep the line
        resolvedLines.push(line);
      } else if (!inConflict) {
        // Not in conflict, keep the line
        resolvedLines.push(line);
      }
      // Skip lines in the second part (incoming) of the conflict
    }
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a TypeScript/JavaScript file
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  scanDirectory(dir);
  return files;
}
// Main execution
console.log('🔍 Scanning for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts(process.cwd());
if (conflictedFiles.length === 0) {
  console.log('✅ No files with merge conflicts found.');
  process.exit(0);
}
console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));
console.log('\n🔧 Resolving merge conflicts...');
let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}
console.log(`\n✅ Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files.`);
// Verify no more conflicts
console.log('\n🔍 Verifying no remaining conflicts...');
const remainingConflicts = findFilesWithConflicts(process.cwd());
if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts have been resolved!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}