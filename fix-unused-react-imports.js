#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all .tsx files in the app directory
const findTsxFiles = () => {
  try {
    const result = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
        return [];
  }
};

// Check if a file has unused React import
const hasUnusedReactImport = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Check if first line is unused React import
    if (lines[0] === "import React from 'react';") {
      // Check if React is actually used in the file
      const reactUsage = content.includes('React.') || content.includes('<React') || content.includes('React,');
      return !reactUsage;
    }
    return false;
  } catch (error) {
        return false;
  }
};

// Remove unused React import from file
const removeUnusedReactImport = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    if (lines[0] === "import React from 'react';") {
      // Remove the first line and any empty line that follows
      const newLines = lines.slice(1);
      if (newLines[0] === '') {
        newLines.shift();
      }
      
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
        return false;
  }
};

// Main execution
const main = () => {
    const tsxFiles = findTsxFiles();
    
  let processedCount = 0;
  let fixedCount = 0;
  
  for (const filePath of tsxFiles) {
    if (hasUnusedReactImport(filePath)) {
            if (removeUnusedReactImport(filePath)) {
        fixedCount++;
      }
    }
    processedCount++;
    
    if (processedCount % 100 === 0) {
    // Empty block
  }
  }
  
      };

main();