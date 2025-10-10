#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common JSX and TypeScript errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    const originalContent = content;
    
    // Remove any remaining merge conflict markers
    content = content.replace(/^<<<<<<<.*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>>.*$/gm, '');
    
    // Fix incomplete JSX fragments
    content = content.replace(/<>$/gm, '<>');
    content = content.replace(/^<\/>$/gm, '</>');
    
    // Fix incomplete JSX tags
    content = content.replace(/<(\w+)([^>]*?)(?<!\/)>$/gm, '<$1$2></$1>');
    
    // Fix missing closing tags for common elements
    const commonTags = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav', 'aside'];
    for (const tag of commonTags) {
      // Find unclosed opening tags
      const openTagRegex = new RegExp(`<${tag}([^>]*?)(?<!\/)>`, 'g');
      const closeTagRegex = new RegExp(`<\/${tag}>`, 'g');
      
      const openMatches = content.match(openTagRegex) || [];
      const closeMatches = content.match(closeTagRegex) || [];
      
      if (openMatches.length > closeMatches.length) {
        // Add missing closing tags at the end
        const missing = openMatches.length - closeMatches.length;
        for (let i = 0; i < missing; i++) {
          content += `\n</${tag}>`;
        }
      }
    }
    
    // Fix JSX expressions that need parent elements
    content = content.replace(/(\s*)(\w+)\s*=\s*{([^}]+)}/g, (match, indent, prop, value) => {
      if (value.includes('&&') && !value.includes('return')) {
        return `${indent}${prop}={${value}}`;
      }
      return match;
    });
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, (match) => {
      if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('<') && !match.includes('>')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix object property syntax
    content = content.replace(/(\w+)\s*:\s*([^,}]+)(?=[,}])/g, (match, key, value) => {
      if (value.includes('{') && value.includes('}')) {
        return `${key}: ${value}`;
      }
      return match;
    });
    
    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all problematic files
function findProblematicFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Fixing JSX and TypeScript errors...');

const appDir = path.join(__dirname, 'app');
const files = findProblematicFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Run type check to see remaining errors
console.log('\nRunning type check...');
const { execSync } = require('child_process');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('Type check completed with errors');
}