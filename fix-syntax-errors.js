#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common patterns that cause parsing errors
    const fixes = [
      // Fix unclosed JSX tags - add missing closing tags
      {
        pattern: /<h1([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
        replacement: (match, attrs, text) => {
          if (!text.includes('</h1>')) {
            return `<h1${attrs}>${text}</h1>`;
          }
          return match;
        }
      },
      {
        pattern: /<h2([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
        replacement: (match, attrs, text) => {
          if (!text.includes('</h2>')) {
            return `<h2${attrs}>${text}</h2>`;
          }
          return match;
        }
      },
      {
        pattern: /<p([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
        replacement: (match, attrs, text) => {
          if (!text.includes('</p>')) {
            return `<p${attrs}>${text}</p>`;
          }
          return match;
        }
      },
      {
        pattern: /<button([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
        replacement: (match, attrs, text) => {
          if (!text.includes('</button>')) {
            return `<button${attrs}>${text}</button>`;
          }
          return match;
        }
      },
      {
        pattern: /<span([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
        replacement: (match, attrs, text) => {
          if (!text.includes('</span>')) {
            return `<span${attrs}>${text}</span>`;
          }
          return match;
        }
      },
      // Fix malformed JSX expressions
      {
        pattern: /(\w+)\s*;\s*<\/\w+>/g,
        replacement: '$1</$1>'
      },
      // Fix broken JSX syntax
      {
        pattern: /(\w+)\s*;\s*$/gm,
        replacement: '$1'
      },
      // Fix malformed closing tags
      {
        pattern: /<\/\s*$/gm,
        replacement: ''
      },
      // Fix broken JSX expressions
      {
        pattern: /(\w+)\s*;\s*(\w+)\s*;\s*$/gm,
        replacement: '$1 $2'
      },
      // Fix incomplete JSX tags
      {
        pattern: /<(\w+)([^>]*?)\s*$/gm,
        replacement: (match, tag, attrs) => {
          if (!match.includes('>')) {
            return `<${tag}${attrs}>`;
          }
          return match;
        }
      }
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix Footer.tsx specific issues
      {
        pattern: /<p className="text-gray-400 text-sm">\s*© \{currentYear\} Zion Tech Group\. All rights reserved\.\s*<\/div>/g,
        replacement: '<p className="text-gray-400 text-sm">\n                © {currentYear} Zion Tech Group. All rights reserved.\n              </p>'
      },
      {
        pattern: /Privacy Policy;\s*<\/\s*<a href="\/terms"/g,
        replacement: 'Privacy Policy\n                </a>\n                <a href="/terms"'
      },
      {
        pattern: /Terms of Service;\s*<\/\s*$/g,
        replacement: 'Terms of Service\n                </a>'
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        continue;
      }
      fixedCount += processDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
      if (fixSyntaxErrors(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files with syntax errors.`);

// Also fix test files
const testFixedCount = processDirectory('./__tests__');
console.log(`Fixed ${testFixedCount} test files with syntax errors.`);

console.log('Syntax error fixes completed!');