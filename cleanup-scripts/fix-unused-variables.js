#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix unused variables in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove all unused Page variable declarations
    const patterns = [
      // Function declarations
      /function Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g,
      /function \w+Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g,
      // Const declarations
      /const Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g,
      /const \w+Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g,
      // Let declarations
      /let Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g,
      /let \w+Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g,
      // Var declarations
      /var Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g,
      /var \w+Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g
    ];

    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        modified = true;
      }
    });

    // Clean up any empty lines and ensure proper structure
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^;\s*\n/gm, '');
    content = content.replace(/\n\s*$/g, '\n');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting unused variables fixes...');

  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  let fixedCount = 0;
  const totalCount = pageFiles.length;

  console.log(`Found ${totalCount} page files to process...`);

  pageFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed ${fixedCount} out of ${totalCount} files.`);
  console.log('Unused variables fixes completed!');
}

main().catch(console.error);