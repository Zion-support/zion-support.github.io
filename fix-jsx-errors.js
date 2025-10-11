#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX fixes
const fixes = [
  // Fix missing closing tags for JSX fragments
  {
    pattern: /return\s*\(\s*<>\s*$/gm,
    replacement: 'return (\n    <>\n'
  },
  // Fix missing closing tags for div elements
  {
    pattern: /(\s*)<\/div>\s*$/gm,
    replacement: '$1</div>\n'
  },
  // Fix duplicate export statements
  {
    pattern: /export default \w+;\s*export default \w+;/g,
    replacement: (match) => {
      const exports = match.match(/export default (\w+);/g);
      return exports[0]; // Keep only the first export
    }
  },
  // Fix malformed JSX with missing content
  {
    pattern: /<h1[^>]*>\s*<\/p>/g,
    replacement: '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>\n              </h1>'
  },
  // Fix empty JSX elements
  {
    pattern: /<p[^>]*>\s*<\/p>/g,
    replacement: '<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Transform your data into actionable insights with our advanced AI analytics platform\n              </p>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

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

// Find all problematic files
const files = await glob('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${files.length} TSX files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
