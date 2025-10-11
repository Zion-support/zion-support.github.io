#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common JSX syntax issues
function fixJSXSyntax(content) {
  // Fix unclosed JSX tags by adding proper closing tags
  // This is a simplified approach - in practice, you'd want more sophisticated parsing
  
  // Fix common patterns where JSX is broken
  content = content.replace(/\}\s*\)\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*\)\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*\)\s*\)\s*$/gm, '}');
  
  // Fix broken JSX expressions
  content = content.replace(/\{\s*([^}]+)\s*\}\s*\)\s*$/gm, '{$1}');
  
  // Fix missing closing tags for common elements
  const openTags = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav', 'aside'];
  for (const tag of openTags) {
    // This is a very basic fix - in practice you'd want proper JSX parsing
    const openTagRegex = new RegExp(`<${tag}[^>]*>(?!.*</${tag}>)`, 'g');
    // This is a placeholder - proper implementation would require a full JSX parser
  }
  
  return content;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixJSXSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTSXFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting JSX syntax fixes...');

const files = findTSXFiles('/workspace/app');
console.log(`Found ${files.length} TypeScript/JSX files in app directory`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax in ${fixedCount} files`);
console.log('JSX syntax fixes completed!');