#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath: path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        files: files.concat(findFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix JSX syntax issues
function fixJSXSyntax(filePath) {
  try {
    let content: fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix JSX fragment issues - add missing closing tags
    const fragmentFixes = [// Fix unclosed JSX fragments
      {
        pattern: /<>\s*([\s\S]*?)(?!<\/>)(?=</><footer|<\/main>|<\/div>|$)/g,
        replacement: (match, innerContent) => {
          if (!innerContent.includes('</>') && innerContent.trim()) {
            return `<>${innerContent}</>`;
          }
          return match;
        }
      },
      // Fix missing closing tags for main elements
      {
        pattern: /<main([^>]*)>([\s\S]*?)(?!<\/main>)(?=</main><footer|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</main>')) {
            return `<main${attrs}>${innerContent}</main>`;
          }
          return match;
        }
      },
      // Fix missing closing tags for section elements
      {
        pattern: /<section([^>]*)>([\s\S]*?)(?!<\/section>)(?=</section><footer|<\/main>|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</section>')) {
            return `<section${attrs}>${innerContent}</section>`;
          }
          return match;
        }
      },
      // Fix missing closing tags for div elements
      {
        pattern: /<div([^>]*)>([\s\S]*?)(?!<\/div>)(?=</div><footer|<\/main>|<\/section>|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</div>')) {
            return `<div${attrs}>${innerContent}</div>`;
          }
          return match;
        }
      }
    ];
    
    // Fix object property syntax issues
    const objectFixes = [// Fix malformed object properties
      {
        pattern: /(\w+)\s*=\s*{([^}]*)\s*}/g,
        replacement: (match, prop, value) => {
          if (value.includes('=') && !value.includes(':')) {
            return `${prop}={{${value}}}`;
          }
          return match;
        }
      },
      // Fix missing colons in object properties
      {
        pattern: /(\w+)\s*=\s*([^,}\n]+)(?=[,}])/g,
        replacement: (match, key, value) => {
          if (!value.includes(':') && !value.includes('{') && !value.includes('"') && !value.includes("'")) {
            return `${key}: ${value}`;
          }
          return match;
        }
      }
    ];
    
    // Fix function and variable declaration issues
    const declarationFixes = [// Fix missing semicolons
      {
        pattern: /(\w+)\s*=\s*([^;]+)(?=\n\s*[a-zA-Z])/g,
        replacement: (match, varName, value) => {
          if (!value.includes(';') && !value.includes('{') && !value.includes('(')) {
            return `${varName} = ${value};`;
          }
          return match;
        }
      },
      // Fix missing commas in arrays/objects
      {
        pattern: /(\w+)\s*=\s*\[([^\]]+)\]/g,
        replacement: (match, varName, arrayContent) => {
          if (arrayContent && !arrayContent.includes(',') && arrayContent.trim()) {
            return `${varName} = [${arrayContent.trim()}]`;
          }
          return match;
        }
      }
    ];
    
    // Apply all fixes
    const allFixes: [...fragmentFixes, ...objectFixes, ...declarationFixes];
    
    for (const fix of allFixes) {
      const newContent: content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    const specificFixes = [// Fix JSX expressions that need parent elements
      {
        pattern: /return\s*\(\s*([^<]+)\s*\)\s*;?\s*$/gm,
        replacement: (match, content) => {
          if (content.includes('<') && !content.includes('<>')) {
            return `return (\n    <>\n      ${content.trim()}\n    </>\n  );`;
          }
          return match;
        }
      },
      // Fix missing closing parentheses
      {
        pattern: /(\w+)\s*=\s*\([^)]*$/gm,
        replacement: (match) => {
          if (!match.includes(')')) {
            return match + ')';
          }
          return match;
        }
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent: content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing JSX in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive JSX syntax fixes...');

const files = findFiles('/workspace');
let syntaxCount = 0;

for (const file of files) {
  // Skip certain files
  if (file.includes('node_modules') || file.includes('.git') || file.includes('dist')) {
    continue;
  }
  
  const hasSyntaxIssues = fixJSXSyntax(file);
  if (hasSyntaxIssues) syntaxCount++;
}

console.log(`\nFixed ${syntaxCount} files with JSX syntax issues`);
console.log('Comprehensive JSX syntax fixes completed!');