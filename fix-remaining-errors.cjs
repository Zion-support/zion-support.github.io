#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed className attributes with missing spaces
    const classNameFixes = [
      { pattern: /className="([^"]*?)([a-z])([A-Z])/g, replacement: 'className="$1$2 $3' },
      { pattern: /className="([^"]*?)([a-z])([0-9])/g, replacement: 'className="$1$2 $3' },
      { pattern: /className="([^"]*?)([0-9])([a-zA-Z])/g, replacement: 'className="$1$2 $3' },
      { pattern: /className="([^"]*?)([a-z])([a-z])([A-Z])/g, replacement: 'className="$1$2$3 $4' },
      { pattern: /className="([^"]*?)([a-z])([a-z])([0-9])/g, replacement: 'className="$1$2$3 $4' }
    ];
    
    for (const fix of classNameFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix malformed JSX elements
    const jsxFixes = [
      // Fix malformed h1 tags
      { pattern: /<h1\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/h1>/g, replacement: '<h1 className="$1">$2</h1>' },
      // Fix malformed h2 tags
      { pattern: /<h2\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/h2>/g, replacement: '<h2 className="$1">$2</h2>' },
      // Fix malformed p tags
      { pattern: /<p\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/p>/g, replacement: '<p className="$1">$2</p>' },
      // Fix malformed div tags
      { pattern: /<div\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/div>/g, replacement: '<div className="$1">$2</div>' },
      // Fix malformed ArrowRight components
      { pattern: /<ArrowRight\s+className="([^"]*?)"\s*\/\s*>/g, replacement: '<ArrowRight className="$1" />' },
      // Fix malformed Link components
      { pattern: /<Link\s+to="([^"]*?)"\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/Link>/g, replacement: '<Link to="$1" className="$2">$3</Link>' }
    ];
    
    for (const fix of jsxFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix specific malformed patterns
    const specificFixes = [
      // Fix malformed meta tags
      { pattern: /<meta\s+name="([^"]*?)"\s+content="([^"]*?)"\s*\/\s*\/\s*>/g, replacement: '<meta name="$1" content="$2" />' },
      // Fix malformed closing tags
      { pattern: /(\s*)<(\w+)\s+className="([^"]*?)"\s*>\s*([^<]*?)\s*<\/\2>/g, replacement: '$1<$2 className="$3">$4</$2>' },
      // Fix malformed JSX fragments
      { pattern: /<>\s*<\/>/g, replacement: '<></>' },
      // Fix malformed className with missing spaces in specific patterns
      { pattern: /className="([^"]*?)([a-z])([A-Z])/g, replacement: 'className="$1$2 $3' },
      { pattern: /className="([^"]*?)([a-z])([0-9])/g, replacement: 'className="$1$2 $3' },
      { pattern: /className="([^"]*?)([0-9])([a-zA-Z])/g, replacement: 'className="$1$2 $3' }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix malformed className attributes more comprehensively
    content = content.replace(/className="([^"]*?)([a-z])([A-Z])/g, 'className="$1$2 $3');
    content = content.replace(/className="([^"]*?)([a-z])([0-9])/g, 'className="$1$2 $3');
    content = content.replace(/className="([^"]*?)([0-9])([a-zA-Z])/g, 'className="$1$2 $3');
    
    // Fix malformed JSX elements
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

// Find all AI pages with parsing errors
const aiPages = glob.sync('app/ai-*/page.tsx');
let fixedCount = 0;

console.log('Fixing remaining parsing errors in AI pages...');

aiPages.forEach(page => {
  if (fixFile(page)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);