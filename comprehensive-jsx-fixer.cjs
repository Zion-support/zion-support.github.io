#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix unclosed JSX tags and malformed syntax
    const fixes = [
      // Fix unclosed CheckCircle components
      {
        pattern: /<CheckCircle className="([^"]*?)"([^>]*?)(?!\s*\/>)/g,
        replacement: '<CheckCircle className="$1"$2 />'
      },
      // Fix malformed span tags
      {
        pattern: /<span >([^<]*?)</g,
        replacement: '<span>$1</span>'
      },
      // Fix unclosed li tags
      {
        pattern: /<li className="([^"]*?)"([^>]*?)(?!\s*\/>)(?=\s*<)/g,
        replacement: '<li className="$1"$2>'
      },
      // Fix malformed div tags
      {
        pattern: /<div className= "([^"]*?)"/g,
        replacement: '<div className="$1"'
      },
      // Fix malformed h3 tags
      {
        pattern: /<h3 className= "([^"]*?)"/g,
        replacement: '<h3 className="$1"'
      },
      // Fix malformed ul tags
      {
        pattern: /<ul className= "([^"]*?)"/g,
        replacement: '<ul className="$1"'
      },
      // Fix malformed section tags
      {
        pattern: /<section className= "([^"]*?)"/g,
        replacement: '<section className="$1"'
      },
      // Fix malformed Link components
      {
        pattern: /<Link to: "([^"]*?)"/g,
        replacement: '<Link to="$1"'
      },
      // Fix unclosed tags with quotes
      {
        pattern: /<\/li>"/g,
        replacement: '</li>'
      },
      {
        pattern: /<\/h3>"/g,
        replacement: '</h3>'
      },
      {
        pattern: /<\/div>"/g,
        replacement: '</div>'
      },
      // Fix malformed quotes in attributes
      {
        pattern: /className="([^"]*?)"([^>]*?)(?=\s*\/>)/g,
        replacement: 'className="$1"$2 />'
      },
      // Fix unclosed JSX elements
      {
        pattern: /<([a-zA-Z][a-zA-Z0-9]*)\s+className="([^"]*?)"([^>]*?)(?=\s*<[^\/])/g,
        replacement: '<$1 className="$2"$3>'
      },
      // Fix malformed string literals
      {
        pattern: /<span >([^<]*?)</g,
        replacement: '<span>$1</span>'
      },
      // Fix unclosed tags in general
      {
        pattern: /<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*?)(?=\s*<[^\/])/g,
        replacement: '<$1 $2>'
      }
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    // Fix specific malformed patterns
    content = content.replace(/<span >([^<]*?)</g, '<span>$1</span>');
    content = content.replace(/<CheckCircle className="([^"]*?)"([^>]*?)(?!\s*\/>)/g, '<CheckCircle className="$1"$2 />');
    content = content.replace(/<li className="([^"]*?)"([^>]*?)(?!\s*\/>)(?=\s*<)/g, '<li className="$1"$2>');
    
    // Fix malformed className attributes
    content = content.replace(/className= "([^"]*?)"/g, 'className="$1"');
    
    // Fix unclosed tags
    content = content.replace(/<\/li>"/g, '</li>');
    content = content.replace(/<\/h3>"/g, '</h3>');
    content = content.replace(/<\/div>"/g, '</div>');
    
    // Fix malformed Link components
    content = content.replace(/<Link to: "([^"]*?)"/g, '<Link to="$1"');
    
    // Fix unterminated string literals
    content = content.replace(/<span >([^<]*?)</g, '<span>$1</span>');
    
    // Fix unclosed JSX elements that don't have proper closing
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s+className="([^"]*?)"([^>]*?)(?=\s*<[^\/])/g, '<$1 className="$2"$3>');
    
    // Fix specific malformed patterns in healthcare file
    if (filePath.includes('healthcare-ai-transformation-2025.tsx')) {
      // Fix specific issues in healthcare file
      content = content.replace(/<span >([^<]*?)</g, '<span>$1</span>');
      content = content.replace(/<CheckCircle className="([^"]*?)"([^>]*?)(?!\s*\/>)/g, '<CheckCircle className="$1"$2 />');
      content = content.replace(/<li className="([^"]*?)"([^>]*?)(?!\s*\/>)(?=\s*<)/g, '<li className="$1"$2>');
    }
    
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
console.log('Starting comprehensive JSX fixes...');
const fixedCount = walkDirectory('./src');
console.log(`Fixed ${fixedCount} files`);