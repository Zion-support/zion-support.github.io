const fs = require('fs');
const path = require('path');

// Common patterns to fix
const fixes = [
  // Fix missing React import
  {
    pattern: /^import { Helmet } from 'react-helmet-async';$/m,
    replacement: `import React from 'react';
import { Helmet } from 'react-helmet-async';`
  },
  // Fix malformed JSX fragments
  {
    pattern: /<>([^<]*?)<\/>/g,
    replacement: '<div>$1</div>'
  },
  // Fix missing closing tags for common elements
  {
    pattern: /<div([^>]*)>([^<]*?)(?!<\/div>)$/gm,
    replacement: '<div$1>$2</div>'
  },
  // Fix missing semicolons in imports
  {
    pattern: /import ([^;]+)$/gm,
    replacement: 'import $1;'
  },
  // Fix malformed function declarations
  {
    pattern: /const (\w+): React\.FC = \(\) => \{,\s*return\(/g,
    replacement: 'const $1: React.FC = () => {\n  return ('
  },
  // Fix missing closing braces
  {
    pattern: /return \(\s*<div[^>]*>([^<]*?)(?!<\/div>)$/gm,
    replacement: 'return (\n    <div>$1</div>\n  );'
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
    // Fix missing closing tags
    if (content.includes('<div') && !content.includes('</div>')) {
      content = content.replace(/(<div[^>]*>[^<]*?)(?!<\/div>)$/gm, '$1</div>');
      modified = true;
    }
    
    // Fix missing closing braces
    if (content.includes('return (') && !content.includes(');')) {
      content = content.replace(/(return \([^)]*?)(?!\);)$/gm, '$1);');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Start fixing
console.log('Starting to fix common TypeScript/JSX errors...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);