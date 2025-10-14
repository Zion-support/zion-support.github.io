import fs from 'fs';
import { glob } from 'glob';

// Find all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

let fixedFiles = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove duplicate React imports
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    let inImportBlock = false;

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
        } else {
          inImportBlock = true;
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

    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed duplicate imports in: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedFiles} files with duplicate imports`);