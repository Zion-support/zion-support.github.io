#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Additional JSX syntax fixes
const fixes = [
  // Fix malformed Helmet tags
  {
    pattern: /<\/Helmet><title>([^<]+)<\/title>\s*<meta([^>]+)\/>\s*<meta([^>]+)\/>\s*<\/Helmet>/g,
    replacement: '<title>$1</title>\n        <meta$2/>\n        <meta$3/>\n      </Helmet>'
  },
  // Fix unclosed div tags
  {
    pattern: /<div([^>]*)>([^<]+)(?!<\/div>)/g,
    replacement: '<div$1>$2</div>'
  },
  // Fix unclosed h1 tags
  {
    pattern: /<h1([^>]*)>([^<]+)(?!<\/h1>)/g,
    replacement: '<h1$1>$2</h1>'
  },
  // Fix unclosed span tags
  {
    pattern: /<span([^>]*)>([^<]+)(?!<\/span>)/g,
    replacement: '<span$1>$2</span>'
  },
  // Fix JSX fragments
  {
    pattern: /<>([^<]+)<\/>/g,
    replacement: '<div>$1</div>'
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

// Find all TSX files
const files = glob.sync('app/**/*.tsx', { cwd: process.cwd() });
let fixedCount = 0;

console.log(`Found ${files.length} TSX files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);