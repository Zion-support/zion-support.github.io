#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix empty interfaces by replacing them with proper types
function fixEmptyInterfaces(content) {
  // Replace empty interfaces with object type
  return content.replace(
    /interface\s+(\w+)\s*{\s*\/\/ Add props as needed\s*}/g,
    'type $1 = Record<string, unknown>;'
  );
}

// Function to fix test files by removing unused imports and variables
function fixTestFiles(content, filePath) {
  if (filePath.includes('__tests__') || filePath.includes('.test.')) {
    // Remove unused imports
    content = content.replace(
      /\/\/ import\s*{\s*RouterProvider,\s*createMemoryRouter\s*}\s*from\s*['"][^'"]+['"];?/g,
      ''
    );
    
    // Comment out all unused variables
    content = content.replace(
      /const\s+(_\w+)\s*=/g,
      '// const $1 ='
    );
    
    // Fix any types
    content = content.replace(/:\s*any\b/g, ': unknown');
    
    return content;
  }
  
  return content;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/components/*.tsx',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      const filePath = path.join(process.cwd(), file);
      
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Apply fixes
        content = fixEmptyInterfaces(content);
        content = fixTestFiles(content, file);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          fixedFiles++;
          console.log(`Fixed: ${file}`);
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

// Run the fix
processFiles().catch(console.error);