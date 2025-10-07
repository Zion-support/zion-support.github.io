#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix lucide-react imports in a file
function fixLucideImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern to match individual imports from lucide-react
    const importPattern = /import\s+(\w+)\s+from\s*['"]lucide-react['"];?\s*/g;
    
    // Collect all individual imports
    const iconNames = new Set();
    content = content.replace(importPattern, (match, iconName) => {
      iconNames.add(iconName);
      modified = true;
      return ''; // Remove the individual import
    });

    // Add a single destructured import if we found any icons
    if (iconNames.size > 0) {
      const importStatement = `import { ${Array.from(iconNames).join(', ')} } from 'lucide-react';\n`;
      // Find the first import and add our import after it
      const firstImportMatch = content.match(/^import\s+.*?from\s+['"][^'"]+['"];?\s*$/m);
      if (firstImportMatch) {
        const insertIndex = firstImportMatch.index + firstImportMatch[0].length;
        content = content.slice(0, insertIndex) + '\n' + importStatement + content.slice(insertIndex);
      } else {
        content = importStatement + content;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Main function
async function main() {
  console.log('Starting lucide-react import fixes...');
  
  // Get all TypeScript/JavaScript files that might have lucide-react imports
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'src/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'blog/**/*.{ts,tsx,js,jsx}'
  ];

  let totalFixed = 0;
  let totalProcessed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      cwd: process.cwd(),
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/coverage/**',
        '**/backup*/**',
        '**/corrupted*/**',
        '**/disabled*/**',
        '**/.*/**'
      ]
    });

    files.forEach(file => {
      totalProcessed++;
      if (fixLucideImports(file)) {
        totalFixed++;
      }
    });
  }

  console.log(`\nCompleted! Fixed ${totalFixed} files out of ${totalProcessed} processed.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixLucideImports };