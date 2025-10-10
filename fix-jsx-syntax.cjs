#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common JSX syntax fixes
const fixes = [
  // Fix h1 tags with nested p tags
  {
    pattern: /<h1([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>\s*<\/p>/g,
    replacement: '<h1$1>$2</h1>\n            <p$3>$4</p>'
  },
  // Fix h2 tags with nested p tags
  {
    pattern: /<h2([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>\s*<\/p>/g,
    replacement: '<h2$1>$2</h2>\n            <p$3>$4</p>'
  },
  // Fix h3 tags with nested p tags
  {
    pattern: /<h3([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>\s*<\/p>/g,
    replacement: '<h3$1>$2</h3>\n                  <p$3>$4</p>'
  },
  // Fix p tags with nested p tags
  {
    pattern: /<p([^>]*)>([^<]+)<p([^>]*)>([^<]+)<\/p>\s*<\/p>/g,
    replacement: '<p$1>$2</p>\n                <p$3>$4</p>'
  },
  // Fix span tags with nested span tags
  {
    pattern: /<span([^>]*)>([^<]+)<span([^>]*)>([^<]+)<\/span>\s*<\/span>/g,
    replacement: '<span$1>$2</span>\n                  <span$3>$4</span>'
  },
  // Fix div tags with nested div tags
  {
    pattern: /<div([^>]*)>([^<]+)<div([^>]*)>([^<]+)<\/div>\s*<\/div>/g,
    replacement: '<div$1>$2</div>\n                <div$3>$4</div>'
  },
  // Fix Helmet tags without closing
  {
    pattern: /<Helmet([^>]*)>([^<]+)<\/Helmet>/g,
    replacement: '<Helmet$1>$2</Helmet>'
  },
  // Fix unclosed Helmet tags
  {
    pattern: /<Helmet([^>]*)>([^<]+)(?!<\/Helmet>)/g,
    replacement: '<Helmet$1>$2</Helmet>'
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