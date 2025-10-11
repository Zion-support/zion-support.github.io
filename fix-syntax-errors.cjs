#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix unterminated string literals
  {
    pattern: /description:\s*'([^']*)\n\s*([^']*),/g,
    replacement: "description: '$1 $2',"
  },
  // Fix double semicolons
  {
    pattern: /;;/g,
    replacement: ';'
  },
  // Fix malformed imports
  {
    pattern: /import\s+{\s*Helmet;\s*}\s+from\s+'react-helmet-async';/g,
    replacement: "import { Helmet } from 'react-helmet-async';"
  },
  // Fix malformed JSX fragments
  {
    pattern: /return\s*\(\s*<>\s*<Helmet>\s*<\/Helmet>\s*<Navigation\s*\/>\s*<div/g,
    replacement: 'return (\n    <>\n      <Helmet>\n        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>\n        <meta name="description" content="Advanced AI agricultural intelligence solutions" />\n      </Helmet>\n      <Navigation />\n      <div'
  },
  // Fix missing closing tags
  {
    pattern: /<div\s+className="[^"]*">\s*<h1[^>]*>\s*<\/h1>\s*<\/p>/g,
    replacement: '<div className="text-center">\n              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                AI Agricultural Intelligence Pro\n              </h1>\n              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Advanced AI-powered agricultural intelligence solutions for modern farming\n              </p>'
  },
  // Fix malformed button elements
  {
    pattern: /<button[^>]*>;\s*([^<]*)\s*<\/button>/g,
    replacement: '<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">\n                  $1\n                  <ArrowRight className="ml-2 h-5 w-5" />\n                </button>'
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

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });
let fixedCount = 0;

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);