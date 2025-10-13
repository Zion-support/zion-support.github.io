#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const parts = content.split(/\n?/);
    let resolved = parts[0]; // Content before first conflict
    
    for (let i = 1; i < parts.length; i++) {
      const conflictPart = parts[i];
      const separatorIndex = conflictPart.indexOf(');
      
      if (separatorIndex === -1 || endIndex === -1) {
        // Malformed conflict, keep original
        resolved += conflictPart;
        continue;
      }
      
      const headContent = conflictPart.substring(0, separatorIndex);
      const afterSeparator = conflictPart.substring(separatorIndex + 7);
      const endMarkerIndex = afterSeparator.indexOf('>>>>>>>');
      
      if (endMarkerIndex === -1) {
        // Malformed conflict, keep original
        resolved += conflictPart;
        continue;
      }
      
      const theirsContent = afterSeparator.substring(0, endMarkerIndex);
      const afterConflict = afterSeparator.substring(endMarkerIndex + 8);
      
      // Choose the longer/more complete version, or prefer the one with more content
      let chosenContent;
      if (headContent.trim().length > theirsContent.trim().length) {
        chosenContent = headContent;
        console.log(`  - Chose HEAD version (${headContent.trim().length} chars vs ${theirsContent.trim().length})`);
      } else {
        chosenContent = theirsContent;
        console.log(`  - Chose THEIRS version (${theirsContent.trim().length} chars vs ${headContent.trim().length})`);
      }
      
      resolved += chosenContent + afterConflict;
    }
    
    // Clean up any remaining malformed markers
    resolved = resolved.replace(/\n?/g, '');
    resolved = resolved.replace(/[^\n]+\n?/g, '');
    
    // Write the resolved content
    fs.writeFileSync(filePath, resolved);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(entry.name)) {
          searchDirectory(fullPath);
        }
      } else if (entry.isFile()) {
        // Check if it's a source file
        if (/\.(tsx?|jsx?|ts|js)$/.test(entry.name)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
      }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('🔍 Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts(process.cwd());

if (conflictedFiles.length === 0) {
  console.log('✅ No files with merge conflicts found!');
  process.exit(0);
}

console.log(`📝 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Resolving merge conflicts...');
let resolvedCount = 0;

for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
console.log(`\n✅ Resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);

// Verify no more conflicts
console.log('\n🔍 Verifying no remaining conflicts...');
const remainingConflicts = findFilesWithConflicts(process.cwd());
if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts resolved successfully!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
