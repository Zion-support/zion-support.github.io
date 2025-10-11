#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    const fixes = [
      // Fix unclosed JSX tags by adding closing tags
      {
        pattern: /<section([^>]*)>([\s\S]*?)(?=<section|<div|<main|<footer|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</section>')) {
            return `<section${attrs}>${innerContent}</section>`;
          }
          return match;
        }
      },
      {
        pattern: /<div([^>]*)>([\s\S]*?)(?=<section|<div|<main|<footer|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</div>') && !innerContent.includes('<div')) {
            return `<div${attrs}>${innerContent}</div>`;
          }
          return match;
        }
      },
      {
        pattern: /<main([^>]*)>([\s\S]*?)(?=<section|<div|<main|<footer|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</main>')) {
            return `<main${attrs}>${innerContent}</main>`;
          }
          return match;
        }
      },
      {
        pattern: /<button([^>]*)>([\s\S]*?)(?=<button|<section|<div|<main|<footer|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</button>')) {
            return `<button${attrs}>${innerContent}</button>`;
          }
          return match;
        }
      },
      // Fix JSX fragments
      {
        pattern: /<>([\s\S]*?)(?=<[^/]|$)/g,
        replacement: (match, innerContent) => {
          if (!innerContent.includes('</>')) {
            return `<>${innerContent}</>`;
          }
          return match;
        }
      },
      // Remove stray characters and fix syntax
      {
        pattern: /}\s*\)\s*}/g,
        replacement: '})'
      },
      {
        pattern: /}\s*\)\s*\)/g,
        replacement: '})'
      },
      {
        pattern: /}\s*\)\s*\)\s*}/g,
        replacement: '})'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*$/gm,
        replacement: (match, content) => {
          if (content && !content.endsWith(';') && !content.endsWith('}') && !content.endsWith(')') && !content.endsWith('>')) {
            return content + ';';
          }
          return match;
        }
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    content = content.replace(/}\s*\)\s*}\s*$/gm, '})');
    content = content.replace(/}\s*\)\s*\)\s*$/gm, '})');
    content = content.replace(/}\s*\)\s*\)\s*}\s*$/gm, '})');
    
    // Fix missing closing tags at the end of files
    if (content.includes('<section') && !content.includes('</section>')) {
      content += '\n</section>';
      modified = true;
    }
    if (content.includes('<div') && !content.includes('</div>')) {
      content += '\n</div>';
      modified = true;
    }
    if (content.includes('<main') && !content.includes('</main>')) {
      content += '\n</main>';
      modified = true;
    }
    if (content.includes('<button') && !content.includes('</button>')) {
      content += '\n</button>';
      modified = true;
    }
    if (content.includes('<>') && !content.includes('</>')) {
      content += '\n</>';
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const files = findFilesWithSyntaxErrors('.');
console.log(`Checking ${files.length} React files for syntax errors`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);