import fs from 'fs';
import { glob } from 'glob';

// Find all TypeScript/JavaScript files
const files = glob.sync('**/*.{ts,tsx}', { 
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', 'build/**']
});

let fixedFiles = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove duplicate React imports
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    let inImportBlock = true;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import')) {
        if (inImportBlock) {
          // Check if this is a duplicate React import
          if (line.includes('import React') && seenImports.has('React')) {
            modified = true;
            continue; // Skip this duplicate line
          }
        }
        
        // Track React imports
        if (line.includes('import React')) {
          seenImports.add('React');
        }
        
        newLines.push(line);
      } else if (line.trim() === '') {
        // Empty line might end import block
        newLines.push(line);
      } else {
        // Non-import line ends import block
        inImportBlock = false;
        newLines.push(line);
      }
    }

    // Fix malformed JSX in specific files
    if (filePath.includes('5g-deployment') || filePath.includes('5g-integration') || 
        filePath.includes('5g-maintenance') || filePath.includes('5g-migration')) {
      let newContent = newLines.join('\n');
      
      // Fix common syntax errors
      newContent = newContent.replace(/import React, { Suspense } from 'react';\s*import React, { Suspense } from 'react';/g, 'import React, { Suspense } from \'react\';');
      newContent = newContent.replace(/import React, { Suspense } from 'react';\s*export default/g, 'export default');
      newContent = newContent.replace(/import React, { Suspense } from 'react';\s*const/g, 'const');
      newContent = newContent.replace(/import React, { Suspense } from 'react';\s*return/g, 'return');
      
      if (newContent !== content) {
        modified = true;
        fs.writeFileSync(filePath, newContent);
      }
    }

    if (modified) {
      console.log(`Fixed issues in: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedFiles} files`);