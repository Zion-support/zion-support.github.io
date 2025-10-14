#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in TSX/JSX files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals by adding missing quotes
  fixed = fixed.replace(/(\w+):\s*'([^']*?)(?=\s*[,}])/g, (match, key, value) => {
    if (!value.endsWith("'") && !value.includes("'")) {
      return `${key}: '${value}'`;
    }
    return match;
  });
  
  // Fix unterminated template literals
  fixed = fixed.replace(/`([^`]*?)(?=\s*[,}])/g, (match, value) => {
    if (!value.endsWith("`")) {
      return `\`${value}\``;
    }
    return match;
  });
  
  // Fix JSX expressions that need a parent element
  // Look for patterns like: <div></div> <div></div> and wrap them
  fixed = fixed.replace(/(<div[^>]*><\/div>)\s*(<div[^>]*><\/div>)/g, '<>$1$2</>');
  
  // Fix missing opening tags for self-closing elements
  fixed = fixed.replace(/<(\w+)\s*\/>/g, '<$1 />');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g, (match, key, value) => {
    if (value.includes('"') && !value.startsWith('"')) {
      return `${key}: "${value.replace(/"/g, '')}"`;
    }
    return match;
  });
  
  // Fix missing closing brackets in arrays and objects
  fixed = fixed.replace(/(\[[^\]]*?)(?=\s*;)/g, (match) => {
    const openBrackets = (match.match(/\[/g) || []).length;
    const closeBrackets = (match.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      return match + ']'.repeat(openBrackets - closeBrackets);
    }
    return match;
  });
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\([^)]*?)(?=\s*;)/g, (match) => {
    const openParens = (match.match(/\(/g) || []).length;
    const closeParens = (match.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      return match + ')'.repeat(openParens - closeParens);
    }
    return match;
  });
  
  // Fix malformed JSX return statements
  fixed = fixed.replace(/return\s*\(\s*<([^>]+)>\s*<\/\1>\s*\)\s*;?\s*$/gm, 'return <$1></$1>;');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*$/gm, (match) => {
    if (match.trim() && !match.endsWith(';') && !match.endsWith('}') && !match.endsWith(')')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix import statements with missing quotes
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+([^'"]+);/g, (match, name, path) => {
    if (!path.startsWith("'") && !path.startsWith('"')) {
      return `import ${name} from '${path}';`;
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting syntax error fixes...');

// Find all TSX and JSX files
async function main() {
  const files = await glob('app/**/*.{tsx,jsx}', { cwd: process.cwd() });
  let fixedCount = 0;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);