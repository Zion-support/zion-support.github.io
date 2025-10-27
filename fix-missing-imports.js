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

// Check if file uses Link but doesn't import it
const needsLinkImport = (content) => {
  return content.includes('<Link') && !content.includes("import Link from 'next/link'");
};

// Check if file uses ArrowRight but doesn't import it
const needsArrowRightImport = (content) => {
  return content.includes('<ArrowRight') && !content.includes("import { ArrowRight } from 'lucide-react'");
};

// Add missing imports to a file
const addMissingImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    let modified = false;
    const newLines = [...lines];
    
    // Find the first import line
    let firstImportIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        firstImportIndex = i;
        break;
      }
    }
    
    if (firstImportIndex === -1) {
      // No imports found, add after 'use client'
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("'use client'")) {
          firstImportIndex = i + 1;
          break;
        }
      }
    }
    
    if (needsLinkImport(content)) {
      newLines.splice(firstImportIndex, 0, "import Link from 'next/link';");
      modified = true;
      firstImportIndex++; // Adjust for the added line
    }
    
    if (needsArrowRightImport(content)) {
      // Find existing lucide-react import or add new one
      let lucideImportIndex = -1;
      for (let i = 0; i < newLines.length; i++) {
        if (newLines[i].includes("from 'lucide-react'")) {
          lucideImportIndex = i;
          break;
        }
      }
      
      if (lucideImportIndex !== -1) {
        // Add ArrowRight to existing import
        newLines[lucideImportIndex] = newLines[lucideImportIndex].replace(
          /import \{ ([^}]+) \} from 'lucide-react';/,
          (match, imports) => {
            if (!imports.includes('ArrowRight')) {
              return `import { ${imports}, ArrowRight } from 'lucide-react';`;
            }
            return match;
          }
        );
      } else {
        // Add new lucide-react import
        newLines.splice(firstImportIndex, 0, "import { ArrowRight } from 'lucide-react';");
      }
      modified = true;
    }
    
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
    if (addMissingImports(filePath)) {
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