#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common JSX syntax fixes
const fixes = [
  // Fix unclosed JSX tags
  {
    pattern: /className="([^"]*?)"([^>]*?)(?=\s*\/>)/g,
    replacement: 'className="$1"$2 />'
  },
  // Fix missing closing quotes
  {
    pattern: /className="([^"]*?)"([^>]*?)(?=\s*\/>)/g,
    replacement: 'className="$1"$2 />'
  },
  // Fix unterminated strings in JSX
  {
    pattern: /<span >([^<]*?)</g,
    replacement: '<span>$1</span>'
  },
  // Fix malformed JSX attributes
  {
    pattern: /className= "([^"]*?)"/g,
    replacement: 'className="$1"'
  },
  // Fix unclosed tags
  {
    pattern: /<li className="([^"]*?)"([^>]*?)(?!\s*\/>)(?=\s*<)/g,
    replacement: '<li className="$1"$2>'
  },
  // Fix missing closing tags for divs
  {
    pattern: /<div className="([^"]*?)"([^>]*?)>(?=\s*<[^\/])/g,
    replacement: '<div className="$1"$2>'
  },
  // Fix malformed Link components
  {
    pattern: /<Link to: "([^"]*?)"/g,
    replacement: '<Link to="$1"'
  },
  // Fix unclosed h3 tags
  {
    pattern: /<h3 className="([^"]*?)"([^>]*?)>(?=\s*<[^\/])/g,
    replacement: '<h3 className="$1"$2>'
  },
  // Fix unclosed ul tags
  {
    pattern: /<ul className="([^"]*?)"([^>]*?)>(?=\s*<[^\/])/g,
    replacement: '<ul className="$1"$2>'
  },
  // Fix unclosed section tags
  {
    pattern: /<section className="([^"]*?)"([^>]*?)>(?=\s*<[^\/])/g,
    replacement: '<section className="$1"$2>'
  },
  // Fix malformed quotes in strings
  {
    pattern: /"([^"]*?)"/g,
    replacement: '"$1"'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    // Fix unclosed CheckCircle components
    content = content.replace(/<CheckCircle className="([^"]*?)"([^>]*?)(?=\s*\/>)/g, '<CheckCircle className="$1"$2 />');
    
    // Fix malformed closing tags
    content = content.replace(/<\/li>"/g, '</li>');
    content = content.replace(/<\/h3>"/g, '</h3>');
    content = content.replace(/<\/div>"/g, '</div>');
    
    // Fix unterminated string literals
    content = content.replace(/<span >([^<]*?)</g, '<span>$1</span>');
    
    // Fix malformed Link components with to: syntax
    content = content.replace(/<Link to: "([^"]*?)"/g, '<Link to="$1"');
    
    // Fix unclosed JSX elements
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s+className="([^"]*?)"([^>]*?)(?=\s*<[^\/])/g, '<$1 className="$2"$3>');
    
    if (content !== originalContent) {
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('Starting JSX syntax fixes...');
const fixedCount = walkDirectory('./src');
console.log(`Fixed ${fixedCount} files`);