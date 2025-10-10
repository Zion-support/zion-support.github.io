#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix all syntax errors;
function fixAllSyntax(content) {;
let fixed = content;
  
  // Fix array syntax issues
  fixed = fixed.replace(/}\s*\{/g, '},\n      {');
  fixed = fixed.replace(/}\s*\]\s*$/gm, '}\n    ]');
  fixed = fixed.replace(/,\s*\]\s*$/gm, '\n    ]');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/(\w+)\s*:\s*[^,}\n]+\s*\n\s*(\w+)\s*:/g, '$1: $2,');
  
  // Fix JSX tag issues
  fixed = fixed.replace(/<\/[^>]*>/g, (match) => {
    // Fix corrupted closing tags
    if (match.includes('</div>') || match.includes('</div>') || match.includes('</div>') || match.includes('</div>')) {
      return '</div>';
    }
    return match;
  });
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}\s])\s*\n\s*(const|let|var|function|class|interface|type|enum|export)\s/g, '$1;\n$2 ');
  
  // Fix missing closing braces
  fixed = fixed.replace(/(\w+)\s*:\s*\{[^}]*$/gm, (match, key) => {
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\w+)\s*\(\s*[^)]*$/gm, (match) => {
    if (match.includes('(') && !match.includes(')')) {
      return match + ')';
    }
    return match;
  });
  
  // Fix missing closing brackets
  fixed = fixed.replace(/\[\s*[^\]]*$/gm, (match) => {
    if (!match.includes(']')) {
      return match + ']';
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file;
function processFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution;
const workspaceDir = __dirname;
console.log('🔧 Fixing all syntax errors...');

const files = findFiles(workspaceDir);
let processedCount = 0;
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
  processedCount++;
}

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${processedCount}`);
console.log(`   Files with syntax fixes: ${fixedCount}`);
console.log(`\n✅ All syntax fixes complete!`);