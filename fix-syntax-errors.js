#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unclosed JSX tags
    const jsxTags = ['div', 'section', 'main', 'footer', 'header', 'article', 'aside', 'nav', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'button', 'form', 'input', 'textarea', 'select', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'tfoot'];
    
    for (const tag of jsxTags) {
      // Find unclosed opening tags
      const openTagRegex = new RegExp(`<${tag}([^>]*)>(?![\s\S]*?</${tag}>)`, 'g');
      const matches = content.match(openTagRegex);
      
      if (matches) {
        for (const match of matches) {
          // Check if this tag is actually unclosed by looking for the closing tag
          const tagName = match.match(/<(\w+)/)[1];
          const afterMatch = content.substring(content.indexOf(match) + match.length);
          
          // If no closing tag found, add one
          if (!afterMatch.includes(`</${tagName}>`)) {
            content = content.replace(match, match + `\n  </${tagName}>`);
            modified = true;
          }
        }
      }
    }
    
    // Fix JSX fragments
    content = content.replace(/<>([^<]*?)(?![\s\S]*?<\/>)/g, (match, inner) => {
      if (!inner.trim()) return match;
      return match + '\n  </>';
    });
    
    // Fix missing closing braces in object literals
    content = content.replace(/\{([^}]*?)(?=\s*[;,])/g, (match, inner) => {
      if (inner.includes('{') && !inner.includes('}')) {
        return match + '}';
      }
      return match;
    });
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\s*\n\s*([a-zA-Z_$])/g, '$1;\n$2');
    
    // Fix missing commas in object literals
    content = content.replace(/([^,}])\s*\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n$2');
    
    // Fix malformed JSX attributes
    content = content.replace(/(\w+)\s*=\s*\{([^}]*?)\s*([^}]*?)\s*\}/g, (match, attr, value1, value2) => {
      if (value2 && !value2.includes('}')) {
        return `${attr}={${value1}${value2}}`;
      }
      return match;
    });
    
    // Fix broken function declarations
    content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*$/gm, (match) => {
      if (!match.includes('}')) {
        return match + '\n}';
      }
      return match;
    });
    
    // Fix broken arrow functions
    content = content.replace(/=>\s*\{[^}]*$/gm, (match) => {
      if (!match.includes('}')) {
        return match + '\n}';
      }
      return match;
    });
    
    // Fix missing closing parentheses
    content = content.replace(/\(([^)]*?)(?=\s*[;,}\n])/g, (match, inner) => {
      if (inner.includes('(') && !inner.includes(')')) {
        return match + ')';
      }
      return match;
    });
    
    // Fix broken imports
    content = content.replace(/import\s+([^;]*?)(?=\s*[;,}\n])/g, (match) => {
      if (!match.endsWith(';') && !match.endsWith('}')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix broken return statements
    content = content.replace(/return\s+([^;]*?)(?=\s*[;,}\n])/g, (match, value) => {
      if (!match.endsWith(';') && !match.endsWith('}')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix broken variable declarations
    content = content.replace(/(const|let|var)\s+(\w+)\s*=\s*([^;]*?)(?=\s*[;,}\n])/g, (match, keyword, name, value) => {
      if (!match.endsWith(';') && !match.endsWith('}')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix broken object destructuring
    content = content.replace(/\{([^}]*?)(?=\s*[;,}\n])/g, (match, inner) => {
      if (inner.includes('{') && !inner.includes('}')) {
        return match + '}';
      }
      return match;
    });
    
    // Fix broken array destructuring
    content = content.replace(/\[([^\]]*?)(?=\s*[;,}\n])/g, (match, inner) => {
      if (inner.includes('[') && !inner.includes(']')) {
        return match + ']';
      }
      return match;
    });
    
    // Fix broken template literals
    content = content.replace(/`([^`]*?)(?=\s*[;,}\n])/g, (match, inner) => {
      if (inner.includes('`') && !inner.includes('`')) {
        return match + '`';
      }
      return match;
    });
    
    // Fix broken string literals
    content = content.replace(/"([^"]*?)(?=\s*[;,}\n])/g, (match, inner) => {
      if (inner.includes('"') && !inner.includes('"')) {
        return match + '"';
      }
      return match;
    });
    
    // Fix broken single quotes
    content = content.replace(/'([^']*?)(?=\s*[;,}\n])/g, (match, inner) => {
      if (inner.includes("'") && !inner.includes("'")) {
        return match + "'";
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findCodeFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for common file extensions
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const workspaceDir = process.cwd();
const codeFiles = findCodeFiles(workspaceDir);

console.log(`Found ${codeFiles.length} code files to check`);

let fixedCount = 0;
for (const file of codeFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);
console.log('Syntax error fixes completed!');