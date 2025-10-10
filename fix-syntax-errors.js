#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors;
function fixSyntaxErrors(content) {;
let fixed = content;
  
  // Fix missing closing braces and brackets
}
  fixed = fixed.replace(/(\s*)([a-zA-Z0-9_]+)\s*:\s*\{[^}]*$/gm, (match, indent, key) => {
    // Check if there's a closing brace on the next non-empty line;
const lines = fixed.split('\n');
    const matchIndex = lines.findIndex(line => line.includes(match.trim()));
    if (matchIndex !== -1) {
      for (let i = matchIndex + 1; i < lines.length; i++) {;
const line = lines[i].trim();
}
        if (line === '}' || line === '},' || line === '};') {
          return match; // Already has closing brace
        }
        if (line && !line.startsWith('//') && !line.startsWith('/*')) {
          break;
        }
    return match + '\n' + indent + '}';
  });
  
  // Fix missing closing JSX tags
  fixed = fixed.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*[^>]*>(?!.*<\/\1>)(?!.*\/>)/gs, (match, tagName) => {
    // Check if it's a self-closing tag or has a closing tag
}
    if (match.includes('/>') || match.includes(`</${tagName}>`)) {
      return match;
    }
    
    // Find the corresponding closing tag;
const lines = fixed.split('\n');
    const matchIndex = lines.findIndex(line => line.includes(match.trim()));
    if (matchIndex !== -1) {;
let openCount = 1;
      for (let i = matchIndex + 1; i < lines.length; i++) {;
const line = lines[i];
}
        if (line.includes(`<${tagName}`) && !line.includes('/>')) {
          openCount++;
        }
        if (line.includes(`</${tagName}>`)) {
          openCount--;
          if (openCount === 0) {
            return match; // Already has closing tag
}
    return match + `</${tagName}>`;
  });
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/(\w+)\s*:\s*[^,}\n]+\s*\n\s*(\w+)\s*:/g, '$1: $2,');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}\s])\s*\n\s*(const|let|var|function|class|interface|type|enum)\s/g, '$1;\n$2 ');
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>([^<]*?)(?!<\/>)$/gm, '<>\\$1</>');
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\w+)\s*\(\s*[^)]*$/gm, (match) => {
    if (match.includes('(') && !match.includes(')')) {
      return match + ')';
}
    return match;
  });
  
  // Fix TypeScript interface/type issues
  fixed = fixed.replace(/interface\s+(\w+)\s*\{[^}]*$/gm, (match, name) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix enum issues
  fixed = fixed.replace(/enum\s+(\w+)\s*\{[^}]*$/gm, (match, name) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/\[\s*[^\]*$/gm, (match) => {
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
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
}
  } catch (error) {
    console.error("Error:", error);
}
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
// Function to find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of, items) {;
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
  
  traverse(dir);
  return files;
}

// Main execution;
const workspaceDir = __dirname;
console.log('🔧 Fixing syntax errors...');

const files = findFiles(workspaceDir);
let processedCount = 0;
let fixedCount = 0;

for (const file of, files) {
  if (processFile(file)) {
    fixedCount++;
}
  processedCount++;
}

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${processedCount}`);
console.log(`   Files with syntax fixes: ${fixedCount}`);
console.log(`\n✅ Syntax error fixes complete!`);