#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX fixes
const fixes = [
  // Fix unclosed div tags
  {
    pattern: /<div([^>]*)><\/div>\s*<([^>]+)>/g,
    replacement: '<div$1><$2>'
  },
  // Fix unclosed section tags
  {
    pattern: /<section([^>]*)><\/section>\s*<([^>]+)>/g,
    replacement: '<section$1><$2>'
  },
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<\/>\s*<([^>]+)>/g,
    replacement: '<$1>'
  },
  // Fix unclosed container divs
  {
    pattern: /<div className="container mx-auto"><\/div>\s*<div/g,
    replacement: '<div className="container mx-auto"><div'
  },
  // Fix unclosed text-center divs
  {
    pattern: /<div className="text-center mb-16"><\/div>\s*<h2/g,
    replacement: '<div className="text-center mb-16"><h2'
  },
  // Fix unclosed grid divs
  {
    pattern: /<div className="grid[^"]*"><\/div>\s*{/g,
    replacement: '<div className="grid[^"]*">{'
  },
  // Fix unclosed space-y divs
  {
    pattern: /<div className="space-y-[^"]*"><\/div>\s*{/g,
    replacement: '<div className="space-y-[^"]*">{'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes
    // Fix common malformed JSX patterns
    content = content.replace(/<div([^>]*)><\/div>\s*<div([^>]*)>/g, '<div$1><div$2>');
    content = content.replace(/<section([^>]*)><\/section>\s*<div([^>]*)>/g, '<section$1><div$2>');
    content = content.replace(/<div className="max-w-[^"]*"><\/div>\s*<div/g, '<div className="max-w-[^"]*"><div');
    content = content.replace(/<div className="relative[^"]*"><\/div>\s*<h1/g, '<div className="relative[^"]*"><h1');
    
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

// Main function
async function main() {
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx');

  console.log(`Found ${files.length} TSX files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);