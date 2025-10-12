#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix meta tag issues in a file
function fixMetaTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed meta tags
    const patterns = [
      // Fix missing space in meta description
      {
        regex: /<meta name="description"content=/g,
        replacement: '<meta name="description" content='
      },
      // Fix missing quotes in meta content
      {
        regex: /content= ([^"]*?)" \/>/g,
        replacement: 'content="$1" />'
      },
      // Fix malformed meta tags with missing quotes
      {
        regex: /<meta name="([^"]*?)"content="([^"]*?)" \/>/g,
        replacement: '<meta name="$1" content="$2" />'
      }
    ];

    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

let fixedCount = 0;
files.forEach(file => {
  if (fixMetaTags(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);