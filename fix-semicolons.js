#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix semicolon issues in JSX
function fixSemicolons(content) {
  // Fix semicolons in JSX tags
  content = content.replace(/<(\w+);/g, '<$1');
  content = content.replace(/<\/?(\w+);/g, '</$1');
  
  // Fix semicolons in JSX attributes
  content = content.replace(/className="([^"]*);"/g, 'className="$1"');
  content = content.replace(/to="([^"]*);"/g, 'to="$1"');
  content = content.replace(/href="([^"]*);"/g, 'href="$1"');
  
  // Fix semicolons in JSX text content
  content = content.replace(/>([^<]*);</g, '>$1<');
  
  // Fix semicolons in object properties
  content = content.replace(/(\w+):\s*'([^']*);'/g, "$1: '$2'");
  content = content.replace(/(\w+):\s*"([^"]*);"/g, '$1: "$2"');
  
  // Fix semicolons in array elements
  content = content.replace(/\[([^\]]*);\]/g, '[$1]');
  
  // Fix semicolons in function calls
  content = content.replace(/(\w+)\(([^)]*);\)/g, '$1($2)');
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSemicolons(content);
    
    // Only write if content changed
    if (content !== originalContent) {
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
  // Find all TypeScript/JavaScript files in src directory
  const files = await glob('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);