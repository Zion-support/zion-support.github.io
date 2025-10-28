#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix Page variables in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove function Page() declarations
    const functionPagePattern = /function Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g;
    if (functionPagePattern.test(content)) {
      content = content.replace(functionPagePattern, '');
      modified = true;
    }

    // Remove const Page declarations
    const constPagePattern = /const Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g;
    if (constPagePattern.test(content)) {
      content = content.replace(constPagePattern, '');
      modified = true;
    }

    // Remove other Page variable patterns
    const otherPagePatterns = [
      /function \w+Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g,
      /const \w+Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g,
      /let \w+Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g,
      /var \w+Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g
    ];

    otherPagePatterns.forEach(pattern => {
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
  console.log('Starting Page variables fixes...');

  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  let fixedCount = 0;
  let totalCount = pageFiles.length;

  console.log(`Found ${totalCount} page files to process...`);

  pageFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed ${fixedCount} out of ${totalCount} files.`);
  console.log('Page variables fixes completed!');
}

main().catch(console.error);