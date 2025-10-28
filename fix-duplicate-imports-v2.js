#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to normalize import statements for comparison
function normalizeImport(importLine) {
  return importLine
    .replace(/['"]/g, '"') // Normalize quotes
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

// Function to fix duplicate imports and exports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    const seenExports = new Set();
    let inImportBlock = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Check if we're starting an import block
      if (trimmedLine.startsWith('import ')) {
        inImportBlock = true;
        
        // Normalize the import for comparison
        const normalizedImport = normalizeImport(trimmedLine);
        
        // Check for duplicate imports
        if (seenImports.has(normalizedImport)) {
          console.log(`Skipping duplicate import: ${trimmedLine}`);
          continue; // Skip duplicate import
        }
        seenImports.add(normalizedImport);
        newLines.push(line);
      }
      // Check if we're starting an export block
      else if (trimmedLine.startsWith('export ')) {
        inImportBlock = false;
        
        // Check for duplicate exports
        if (seenExports.has(trimmedLine)) {
          console.log(`Skipping duplicate export: ${trimmedLine}`);
          continue; // Skip duplicate export
        }
        seenExports.add(trimmedLine);
        newLines.push(line);
      }
      // Check if we're ending import/export blocks
      else if (trimmedLine === '' || (!trimmedLine.startsWith('import ') && !trimmedLine.startsWith('export '))) {
        inImportBlock = false;
        newLines.push(line);
      }
      else {
        newLines.push(line);
      }
    }

    const newContent = newLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
async function main() {
  // Find all TypeScript/JavaScript files in the app directory
  const pattern = 'app/**/*.{ts,tsx,js,jsx}';
  const files = await glob(pattern, { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);