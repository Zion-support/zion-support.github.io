#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixErrorBoundaryComprehensive() {
  // Find all page files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  let fixedCount = 0;
  let errorCount = 0;

  console.log(`Found ${pageFiles.length} page files to check...`);

  for (const filePath of pageFiles) {
    try {
      const fullPath = path.join(process.cwd(), filePath);
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      // Check if file uses ErrorBoundary
      if (content.includes('<ErrorBoundary>')) {
        console.log(`Processing: ${filePath}`);
        
        // Calculate the correct relative path to ErrorBoundary
        const pathParts = filePath.split('/');
        const depth = pathParts.length - 2; // -2 for 'app' and 'page.tsx'
        const relativePath = '../'.repeat(depth) + 'components/ErrorBoundary';
        
        // Remove all existing ErrorBoundary imports
        const lines = content.split('\n');
        const filteredLines = lines.filter(line => 
          !line.includes('import') || 
          (!line.includes('ErrorBoundary') && !line.includes('errorBoundary'))
        );
        
        // Add the correct import at the top
        const importStatement = `import ErrorBoundary from '${relativePath}';\n`;
        
        // Find where to insert the import
        let insertIndex = 0;
        for (let i = 0; i < filteredLines.length; i++) {
          if (filteredLines[i].startsWith('import ') || 
              filteredLines[i].startsWith('"use client"') || 
              filteredLines[i].startsWith("'use client'")) {
            insertIndex = i + 1;
          } else if (filteredLines[i].trim() === '' && insertIndex > 0) {
            continue;
          } else if (insertIndex > 0) {
            break;
          }
        }
        
        // Insert the import
        filteredLines.splice(insertIndex, 0, importStatement);
        const newContent = filteredLines.join('\n');
        
        if (newContent !== content) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          fixedCount++;
          modified = true;
        }
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} files`);
  if (errorCount > 0) {
    console.log(`Encountered ${errorCount} errors`);
  }
}

fixErrorBoundaryComprehensive().catch(console.error);