#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all TypeScript files that use Link but don't import it
const findFilesWithMissingLink = () => {
  try {
    const result = execSync('find /workspace/app -name "*.tsx" -type f -exec grep -l "Link" {} \\;', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No files found with Link usage');
    return [];
  }
};

// Fix missing Link imports in a file
const fixLinkImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if Link is used but not imported
    if (content.includes('Link') && !content.includes("import Link from 'next/link'") && !content.includes('import Link from "next/link"')) {
      // Find the first import statement
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      // Add Link import
      lines.splice(insertIndex, 0, "import Link from 'next/link';");
      content = lines.join('\n');
      
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed Link import in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Finding files with missing Link imports...');
  const files = findFilesWithMissingLink();
  
  if (files.length === 0) {
    console.log('No files found with Link usage');
    return;
  }

  console.log(`Found ${files.length} files with Link usage`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixLinkImports(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed Link imports in ${fixedCount} files`);
};

main();