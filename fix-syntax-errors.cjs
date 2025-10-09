#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Pattern to find files with syntax errors
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: [
    'src/components/**',
    'src/pages/**',
    'src/content/**',
    'src/data/**',
    'src/hooks/**',
    'src/types/**',
    'src/utils/**',
    'src/config/**'
  ]
});

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing opening braces in arrays
    // Pattern: }, followed by newline and spaces, then icon: or title: or description:
    content = content.replace(/},\s*\n\s+icon:/g, '},\n    {\n      icon:');
    content = content.replace(/},\s*\n\s+title:/g, '},\n    {\n      title:');
    content = content.replace(/},\s*\n\s+description:/g, '},\n    {\n      description:');
    content = content.replace(/},\s*\n\s+benefits:/g, '},\n    {\n      benefits:');
    
    // Fix missing closing braces in arrays
    // Pattern: benefits: [...] followed by newline and closing bracket
    content = content.replace(/benefits:\s*\[[^\]]*\]\s*\n\s*\]/g, (match) => {
      return match.replace(/\n\s*\]/, '\n    }\n  ]');
    });
    
    // Fix missing closing p tags
    content = content.replace(/<p[^>]*>([^<]*)<div/g, '<p$1</p>\n          <div');
    
    // Fix missing closing div tags
    content = content.replace(/<div[^>]*>([^<]*)<div/g, '<div$1</div>\n          <div');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*'([^']*)'\s*\n\s*(\w+):/g, "$1: '$2',\n      $3:");
    content = content.replace(/(\w+):\s*"([^"]*)"\s*\n\s*(\w+):/g, '$1: "$2",\n      $3:');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);