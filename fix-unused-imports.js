#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused ErrorBoundary imports
    if (content.includes("import { ErrorBoundary }") && !content.includes('<ErrorBoundary')) {
      content = content.replace(/import\s*{\s*ErrorBoundary\s*}\s*from\s*['"][^'"]*['"];\s*\n?/g, '');
      modified = true;
    }
    
    // Remove unused Navigation imports
    if (content.includes("import Navigation") && !content.includes('<Navigation')) {
      content = content.replace(/import\s*{\s*Navigation\s*}\s*from\s*['"][^'"]*['"];\s*\n?/g, '');
      modified = true;
    }
    
    // Remove unused Footer imports
    if (content.includes("import Footer") && !content.includes('<Footer')) {
      content = content.replace(/import\s*{\s*Footer\s*}\s*from\s*['"][^'"]*['"];\s*\n?/g, '');
      modified = true;
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixUnusedImports(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed unused imports in ${fixedCount} files.`);
}

main().catch(console.error);