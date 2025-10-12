#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common fixes for parsing errors
const fixes = [
  // Fix malformed className attributes
  {
    pattern: /className="([^"]*?)([a-z])([A-Z])/g,
    replacement: 'className="$1$2 $3'
  },
  // Fix missing spaces in className
  {
    pattern: /className="([^"]*?)([a-z])([0-9])/g,
    replacement: 'className="$1$2 $3'
  },
  // Fix malformed JSX closing tags
  {
    pattern: /(\s*)<(\w+)\s+className="([^"]*?)"\s*\/\s*>\s*<\/\2>/g,
    replacement: '$1<$2 className="$3" />'
  },
  // Fix malformed meta tags
  {
    pattern: /<meta\s+name="([^"]*?)"\s+content="([^"]*?)"\s*\/\s*\/\s*>/g,
    replacement: '<meta name="$1" content="$2" />'
  },
  // Fix malformed closing tags
  {
    pattern: /(\s*)<(\w+)\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/\2>/g,
    replacement: '$1<$2 className="$3">$4</$2>'
  },
  // Fix malformed ArrowRight components
  {
    pattern: /<ArrowRight\s+className="([^"]*?)"\s*\/\s*>/g,
    replacement: '<ArrowRight className="$1" />'
  },
  // Fix malformed h1 tags
  {
    pattern: /<h1\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/h1>/g,
    replacement: '<h1 className="$1">$2</h1>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes
    // Fix malformed className with missing spaces
    content = content.replace(/className="([^"]*?)([a-z])([A-Z])/g, 'className="$1$2 $3');
    content = content.replace(/className="([^"]*?)([a-z])([0-9])/g, 'className="$1$2 $3');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>/g, '<></>');
    
    // Fix malformed closing tags
    content = content.replace(/(\s*)<(\w+)\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/\2>/g, '$1<$2 className="$3">$4</$2>');
    
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

// Find all AI pages
const aiPages = glob.sync('app/ai-*/page.tsx');
let fixedCount = 0;

console.log('Fixing parsing errors in AI pages...');

aiPages.forEach(page => {
  if (fixFile(page)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);