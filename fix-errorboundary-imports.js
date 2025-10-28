#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixErrorBoundaryImports() {
  // Find all page files that use ErrorBoundary
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  let fixedCount = 0;
  let errorCount = 0;

  console.log(`Found ${pageFiles.length} page files to check...`);

  for (const filePath of pageFiles) {
    try {
      const fullPath = path.join(process.cwd(), filePath);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if file uses ErrorBoundary but doesn't import it
      if (content.includes('<ErrorBoundary>') && !content.includes('import.*ErrorBoundary')) {
        console.log(`Fixing imports in: ${filePath}`);
        
        // Add the import statement at the top
        const importStatement = `import ErrorBoundary from '../components/ErrorBoundary';\n`;
        
        // Find the first import statement or add at the beginning
        const lines = content.split('\n');
        let insertIndex = 0;
        
        // Find where to insert the import
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('import ') || lines[i].startsWith('"use client"') || lines[i].startsWith("'use client'")) {
            insertIndex = i + 1;
          } else if (lines[i].trim() === '' && insertIndex > 0) {
            // Skip empty lines after imports
            continue;
          } else if (insertIndex > 0) {
            break;
          }
        }
        
        // Insert the import
        lines.splice(insertIndex, 0, importStatement);
        const newContent = lines.join('\n');
        
        fs.writeFileSync(fullPath, newContent, 'utf8');
        fixedCount++;
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

fixErrorBoundaryImports().catch(console.error);