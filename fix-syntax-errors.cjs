#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix missing closing brackets on main tags
  {
    pattern: /<main className="[^"]*"[^>]*>\s*{\/\* Hero Section \*\/}/g,
    replacement: '<main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        {/* Hero Section */}'
  },
  
  // Fix malformed meta tags
  {
    pattern: /<meta name="description" content="[^"]*"[^>]*>/g,
    replacement: (match) => {
      if (!match.includes('/>')) {
        return match.replace('>', ' />');
      }
      return match;
    }
  },
  
  // Fix malformed className attributes
  {
    pattern: /className="[^"]*m,\s*d:[^"]*"/g,
    replacement: (match) => {
      return match.replace(/m,\s*d:/g, 'md:');
    }
  },
  
  // Fix malformed div tags
  {
    pattern: /<div className="[^"]*"[^>]*>\s*<div className="[^"]*"[^>]*>\s*<div className="[^"]*"[^>]*>\s*<h2 className="[^"]*"[^>]*>\s*<p className="[^"]*"[^>]*>\s*[^<]*$/gm,
    replacement: (match) => {
      return match.replace(/(<div[^>]*>)\s*(<div[^>]*>)\s*(<div[^>]*>)\s*(<h2[^>]*>)\s*(<p[^>]*>)\s*([^<]*)$/gm, '$1\n            $2\n              $3\n                $4\n                $5\n                  $6')
    }
  },
  
  // Fix missing closing brackets on div tags
  {
    pattern: /<div className="[^"]*"[^>]*>\s*<div className="[^"]*"[^>]*>\s*<h2 className="[^"]*"[^>]*>\s*<p className="[^"]*"[^>]*>\s*[^<]*$/gm,
    replacement: (match) => {
      return match.replace(/(<div[^>]*>)\s*(<div[^>]*>)\s*(<h2[^>]*>)\s*(<p[^>]*>)\s*([^<]*)$/gm, '$1\n            $2\n              $3\n                $4\n                  $5')
    }
  }
];

// Find all TSX files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} TSX files to process...`);

let fixedFiles = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Apply fixes
  fixes.forEach(fix => {
    if (typeof fix.replacement === 'function') {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    } else {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
  });
  
  // Write back if modified
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedFiles++;
  }
});

console.log(`\nFixed ${fixedFiles} files out of ${files.length} total files.`);