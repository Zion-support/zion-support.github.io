const fs = require('fs');
const path = require('path');

// Common syntax fixes
const fixes = [
  // Fix missing 'use client' directive
  {
    pattern: /^import\s+.*from\s+['"][^'"]+['"];?\s*$/m,
    replacement: (match, filePath) => {
      if (filePath.includes('.tsx') && !match.includes('use client')) {
        return `'use client';\n\n${match}`;
      }
      return match;
    }
  },
  
  // Fix unterminated string literals
  {
    pattern: /(['"`])([^'"`]*?)(['"`])/g,
    replacement: (match, quote1, content, quote2) => {
      if (quote1 !== quote2) {
        return `${quote1}${content}${quote1}`;
      }
      return match;
    }
  },
  
  // Fix missing semicolons
  {
    pattern: /(\w+)\s*$/gm,
    replacement: (match, content) => {
      if (content && !content.endsWith(';') && !content.endsWith('{') && !content.endsWith('}')) {
        return `${content};`;
      }
      return match;
    }
  },
  
  // Fix JSX syntax errors
  {
    pattern: /<(\w+)([^>]*?)>/g,
    replacement: (match, tag, attrs) => {
      if (attrs && attrs.includes('=') && !attrs.includes('>')) {
        return `<${tag}${attrs}>`;
      }
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, (match, ...args) => fix.replacement(match, filePath, ...args));
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes
    content = content
      // Fix common React/Next.js issues
      .replace(/export\s+default\s+function\s+(\w+)\s*\(/g, 'export default function $1(')
      .replace(/import\s+React\s+from\s+['"]react['"];?\s*$/m, "'use client';\n\nimport React from 'react';")
      .replace(/import\s+.*from\s+['"]next\/link['"];?\s*$/m, "'use client';\n\nimport Link from 'next/link';")
      .replace(/import\s+.*from\s+['"]next\/image['"];?\s*$/m, "'use client';\n\nimport Image from 'next/image';")
      
      // Fix JSX return statements
      .replace(/return\s*\(\s*<(\w+)/g, 'return (\n    <$1')
      .replace(/<\/\w+>\s*\)\s*;?\s*$/gm, '</$1>\n  );')
      
      // Fix missing closing tags
      .replace(/<(\w+)([^>]*?)>\s*$/gm, (match, tag, attrs) => {
        if (!match.includes('</')) {
          return `${match}\n    </${tag}>`;
        }
        return match;
      });
    
    if (content !== originalContent) {
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files`);