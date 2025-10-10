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

// Function to fix specific syntax issues
function fixSpecificSyntax(filePath) {
  try {
    let content: fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing tags for main elements
    if (content.includes('<main') && !content.includes('</main>')) {
      // Find the last <main> tag and add closing tag before the last closing tag
      const mainMatch = content.match(/<main[^>]*>([\s\S]*?)(?=<footer|<\/div>|<\/body>|$)/);
      if (mainMatch) {
        const beforeMain: content.substring(0, mainMatch.index);
        const mainContent = mainMatch[1];
        const afterMain = content.substring(mainMatch.index + mainMatch[0].length);
        
        // Add closing main tag
        content = beforeMain + mainMatch[0] + mainContent + '</main>' + afterMain;
        modified = true;
      }
    }
    
    // Fix object property syntax issues
    const objectFixes = [// Fix malformed object properties with colons
      {
        pattern: /(\w+)\s*=\s*{([^}]*)\s*}/g,
        replacement: (match, prop, value) => {
          if (value.includes('=') && !value.includes(':')) {
            // Convert = to : in object properties
            const fixedValue = value.replace(/(\w+)\s*=\s*([^,}]+)/g, '$1: $2');
            return `${prop}={{${fixedValue}}}`;
          }
          return match;
        }
      },
      // Fix missing colons in object properties
      {
        pattern: /(\w+)\s*=\s*([^,}\n]+)(?=[,}])/g,
        replacement: (match, key, value) => {
          if (!value.includes(':') && !value.includes('{') && !value.includes('"') && !value.includes("'") && !value.includes('=')) {
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
          if (!value.includes(';') && !value.includes('{') && !value.includes('(') && !value.includes('=')) {
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
    
    // Fix JSX specific issues
    const jsxFixes = [// Fix missing closing tags for div elements
      {
        pattern: /<div([^>]*)>([\s\S]*?)(?!<\/div>)(?=</div><footer|<\/main>|<\/body>|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</div>')) {
            return `<div${attrs}>${innerContent}</div>`;
          }
          return match;
        }
      },
      // Fix missing closing tags for section elements
      {
        pattern: /<section([^>]*)>([\s\S]*?)(?!<\/section>)(?=</section><footer|<\/main>|<\/div>|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</section>')) {
            return `<section${attrs}>${innerContent}</section>`;
          }
          return match;
        }
      }
    ];
    
    // Apply all fixes
    const allFixes: [...objectFixes, ...declarationFixes, ...jsxFixes];
    
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
      },
      // Fix malformed object syntax
      {
        pattern: /(\w+)\s*=\s*{([^}]*)\s*}/g,
        replacement: (match, prop, value) => {
          if (value.includes('=') && !value.includes(':')) {
            const fixedValue = value.replace(/(\w+)\s*=\s*([^,}]+)/g, '$1: $2');
            return `${prop}={{${fixedValue}}}`;
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
      console.log(`Fixed syntax in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting targeted syntax fixes...');

const files = findFiles('/workspace');
let syntaxCount = 0;

for (const file of files) {
  // Skip certain files
  if (file.includes('node_modules') || file.includes('.git') || file.includes('dist')) {
    continue;
  }
  
  const hasSyntaxIssues = fixSpecificSyntax(file);
  if (hasSyntaxIssues) syntaxCount++;
}

console.log(`\nFixed ${syntaxCount} files with syntax issues`);
console.log('Targeted syntax fixes completed!');