#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all files with merge conflicts
const findConflictedFiles = () => {
  try {
    const result = execSync('find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null', { encoding: 'utf8' });
    return result.trim().split('\n').filter(f => f && !f.includes('node_modules'));
  } catch (error) {
    return [];
  }
};

// Resolve merge conflicts by keeping the newer version (after =======)
const resolveMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and keep the newer version
    const parts = content.split(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g);
    const conflictSections = content.match(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g) || [];
    
    let resolvedContent = '';
    let partIndex = 0;
    
    for (let i = 0; i < conflictSections.length; i++) {
      // Add content before conflict
      resolvedContent += parts[partIndex];
      
      // Extract the newer version (after =======)
      const conflictSection = conflictSections[i];
      const afterEquals = conflictSection.split('=======')[1];
      if (afterEquals) {
        const newerVersion = afterEquals.split('>>>>>>>')[0];
        resolvedContent += newerVersion;
      }
      
      partIndex++;
    }
    
    // Add remaining content
    if (partIndex < parts.length) {
      resolvedContent += parts[partIndex];
    }
    
    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, resolvedContent);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  const conflictedFiles = findConflictedFiles();
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const filePath of conflictedFiles) {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    }
  }
  
  console.log(`Resolved merge conflicts in ${resolvedCount} files`);
};

main();