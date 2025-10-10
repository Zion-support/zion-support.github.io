#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  // Fix malformed JSX fragments - ensure proper opening and closing
  content = content.replace(/<>(\s*<[^>]+>)/g, '<>$1');
  content = content.replace(/(<\/[^>]+>)\s*<>/g, '$1</>');
  
  // Fix missing closing tags for common elements
  const commonTags = ['div', 'section', 'article', 'header', 'footer', 'main', 'aside', 'nav'];
  
  commonTags.forEach(tag => {
    // Fix unclosed tags by adding closing tags at the end of the component
    const openTagRegex = new RegExp(`<${tag}([^>]*)>`, 'g');
    const closeTagRegex = new RegExp(`</${tag}>`, 'g');
    
    const openMatches = [...content.matchAll(openTagRegex)];
    const closeMatches = [...content.matchAll(closeTagRegex)];
    
    if (openMatches.length > closeMatches.length) {
      // Add missing closing tags
      const missing = openMatches.length - closeMatches.length;
      for (let i = 0; i < missing; i++) {
        content += `</${tag}>`;
      }
    }
  });
  
  // Fix JSX expressions with multiple parent elements
  // This is a complex issue that needs careful handling
  content = content.replace(/<>\s*<([^>]+)>\s*<([^>]+)>/g, '<><$1><$2>');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*\{([^}]+)\}\s*([^>]*>)/g, 'className={$1} $2');
  
  // Fix missing commas in JSX
  content = content.replace(/,(\s*[<>])/g, '$1');
  
  // Fix malformed function calls in JSX
  content = content.replace(/\{([^}]+)\}\s*\(/g, '{$1}(');
  
  return content;
}

// Function to fix specific parsing errors
function fixParsingErrors(content) {
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, 'const $1: React.FC = () => {');
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{,/g, 'const $1 = () => {');
  
  // Fix malformed object properties
  content = content.replace(/(\w+):\s*([^,}]+),/g, '$1: $2,');
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\s*$/gm, '$1;');
  
  return content;
}

// Function to fix merge conflict remnants
function fixMergeConflicts(content) {
  // Remove any remaining merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixParsingErrors(content);
    content = fixJSXSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts'
];

let totalFixed = 0;

(async () => {
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal JSX files fixed: ${totalFixed}`);
})();