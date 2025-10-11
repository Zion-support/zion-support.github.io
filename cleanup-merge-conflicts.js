#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to clean
    }
    
    console.log(`Cleaning merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and take the main branch content (after =======)
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictType = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'ours';
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        conflictType = 'theirs';
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (!inConflict || conflictType === 'theirs') {
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    // Additional cleanup for common issues
    let finalContent = cleanedContent
      // Remove duplicate imports
      .replace(/(import\s+.*?from\s+['"][^'"]+['"];?\s*\n)+/g, (match) => {
        const imports = match.split('\n').filter(line => line.trim());
        const uniqueImports = [...new Set(imports)];
        return uniqueImports.join('\n') + '\n';
      })
      // Remove duplicate 'use client' directives
      .replace(/(['"]use client['"];?\s*\n)+/g, "'use client'\n")
      // Remove duplicate React imports
      .replace(/(import\s+React[^;]*;?\s*\n)+/g, "import React from 'react';\n")
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Fix common JSX issues
      .replace(/<React\.Fragment>/g, '<>')
      .replace(/<\/React\.Fragment>/g, '</>');
    
    fs.writeFileSync(filePath, finalContent);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and clean all files with merge conflicts
async function cleanAllMergeConflicts() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'utils/**/*.ts',
    'utils/**/*.js'
  ];
  
  let totalCleaned = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (cleanMergeConflicts(file)) {
        totalCleaned++;
      }
    }
  }
  
  console.log(`\nCleaned merge conflicts in ${totalCleaned} files`);
}

// Run the cleanup
cleanAllMergeConflicts().catch(console.error);
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
