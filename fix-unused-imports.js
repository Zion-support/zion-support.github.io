#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all .tsx files in the app directory
const findTsxFiles = () => {
  try {
    const result = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding .tsx files:', error.message);
    return [];
  }
};

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Common unused imports to remove
    const unusedImports = [
      "import React from 'react';",
      "import React from 'react'",
      "import Link from 'next/link';",
      "import Link from 'next/link'",
      "import { ArrowRight } from 'lucide-react';",
      "import { Search } from 'lucide-react';",
    ];
    
    let modified = false;
    const newLines = lines.filter(line => {
      const trimmedLine = line.trim();
      if (unusedImports.includes(trimmedLine)) {
        modified = true;
        return false;
      }
      return true;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Finding .tsx files...');
  const tsxFiles = findTsxFiles();
  console.log(`Found ${tsxFiles.length} .tsx files`);
  
  let processedCount = 0;
  let fixedCount = 0;
  
  for (const filePath of tsxFiles) {
    if (removeUnusedImports(filePath)) {
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
    processedCount++;
    
    if (processedCount % 100 === 0) {
      console.log(`Processed ${processedCount}/${tsxFiles.length} files...`);
    }
  }
  
  console.log(`\nCompleted!`);
  console.log(`Processed: ${processedCount} files`);
  console.log(`Fixed: ${fixedCount} files`);
};

main();