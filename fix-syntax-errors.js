#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix unterminated string literals and other syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/content="([^"]*?)(?=\s*\/>)/g, (match, content) => {
    if (!content.endsWith('"')) {
      return `content="${content}"`;
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/href="([^"]*?)(?=\s*[>\/])/g, (match, href) => {
    if (!href.endsWith('"')) {
      return `href="${href}"`;
    }
    return match;
  });
  
  // Fix unterminated string literals in general
  fixed = fixed.replace(/rel="([^"]*?)(?=\s*[>\/])/g, (match, rel) => {
    if (!rel.endsWith('"')) {
      return `rel="${rel}"`;
    }
    return match;
  });
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/\);'[\s]*'[\s]*$/gm, ');\n}');
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix malformed interface definitions
  fixed = fixed.replace(/interface\s+(\w+)\s*\{\s*\}\s*$/gm, 'interface $1 {\n  children: React.ReactNode;\n}');
  
  // Fix malformed function parameters
  fixed = fixed.replace(/\(\{\}\s*$/gm, '({ children, className = "" }) => {');
  
  // Fix missing closing braces in function definitions
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{[^}]*\}\s*\)\s*=>\s*\{[\s\S]*?return\s*\([\s\S]*?\);[\s]*$/gm, (match) => {
    if (!match.includes('}')) {
      return match + '\n};';
    }
    return match;
  });
  
  // Fix corrupted JSX structure
  fixed = fixed.replace(/<div>Page content<\/div>[\s\S]*?<\/div>[\s]*<\/div>[\s]*<\/div>[\s]*<\/div>[\s]*<\/div>[\s]*{children}[\s]*<\/div>/gm, 
    '<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>\n      {children}\n    </div>');
  
  // Fix missing closing quotes in string literals
  fixed = fixed.replace(/link\.href = '([^']*?)(?=\s*;)/g, (match, href) => {
    if (!href.endsWith("'")) {
      return `link.href = '${href}';`;
    }
    return match;
  });
  
  // Fix malformed object properties
  fixed = fixed.replace(/children:\s*$/gm, 'children: React.ReactNode;');
  fixed = fixed.replace(/c,lassName\?\s*:\s*string;/gm, 'className?: string;');
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/document\.querySelectorAll\('img'\)[\s]*$/gm, "document.querySelectorAll('img');");
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{'[\s\S]*?document\.querySelectorAll\('img'\)[\s]*$/gm, 
    'const $1 = () => {\n      const images = document.querySelectorAll(\'img\');');
  
  // Fix missing closing braces
  fixed = fixed.replace(/images\.forEach\(\(img\)\s*=>\s*\{[\s\S]*?\}\);[\s]*\};[\s]*$/gm, 
    'images.forEach((img) => {\n        if (!img.hasAttribute(\'loading\')) {\n          img.setAttribute(\'loading\', \'lazy\');\n        }\n      });\n    };');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<div>Page content<\/div>\s*\);[\s]*$/gm, 
    'return (\n    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>\n      {children}\n    </div>\n  );');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
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
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting syntax error fixes...');
  
  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

main().catch(console.error);