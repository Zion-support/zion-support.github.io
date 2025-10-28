#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix duplicate imports and exports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    const seenExports = new Set();
    let inImportBlock = false;
    let inExportBlock = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Check if we're starting an import block
      if (trimmedLine.startsWith('import ')) {
        inImportBlock = true;
        inExportBlock = false;
        
        // Check for duplicate imports
        if (seenImports.has(trimmedLine)) {
          modified = true;
          continue; // Skip duplicate import
        }
        seenImports.add(trimmedLine);
        newLines.push(line);
      }
      // Check if we're starting an export block
      else if (trimmedLine.startsWith('export ')) {
        inImportBlock = false;
        inExportBlock = true;
        
        // Check for duplicate exports
        if (seenExports.has(trimmedLine)) {
          modified = true;
          continue; // Skip duplicate export
        }
        seenExports.add(trimmedLine);
        newLines.push(line);
      }
      // Check if we're ending import/export blocks
      else if (trimmedLine === '' || (!trimmedLine.startsWith('import ') && !trimmedLine.startsWith('export '))) {
        inImportBlock = false;
        inExportBlock = false;
        newLines.push(line);
      }
      else {
        newLines.push(line);
      }
    }

    // Additional cleanup: remove duplicate default exports
    const finalContent = newLines.join('\n');
    const exportDefaultRegex = /export default [^;]+;?\s*\n\s*export default [^;]+;?/g;
    const cleanedContent = finalContent.replace(exportDefaultRegex, (match) => {
      const exports = match.split('\n').filter(line => line.trim().startsWith('export default'));
      return exports[0] + '\n'; // Keep only the first export default
    });

    if (modified || cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent);
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