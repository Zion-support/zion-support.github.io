#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix specific syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix malformed object properties like "icon: color: 'from-purple-500 to-pink-500'"
  fixed = fixed.replace(/icon:\s*color:\s*'([^']+)'/g, "icon: RocketLaunchIcon,\n      color: '$1'");
  
  // Fix missing icon property
  fixed = fixed.replace(/{\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*color:\s*'([^']+)'\s*}/g, 
    "{\n      title: '$1',\n      description: '$2',\n      icon: RocketLaunchIcon,\n      color: '$3'\n    }");
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)""/g, 'className="$1"');
  fixed = fixed.replace(/content="([^"]*?)""/g, 'content="$1"');
  
  // Fix unterminated strings
  fixed = fixed.replace(/"""/g, '"');
  fixed = fixed.replace(/''''/g, "'");
  
  // Fix extra semicolons in JSX
  fixed = fixed.replace(/;""/g, '');
  fixed = fixed.replace(/;"/g, '');
  fixed = fixed.replace(/;'/g, '');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>""/g, '</div>');
  fixed = fixed.replace(/<\/p>""/g, '</p>');
  fixed = fixed.replace(/<\/h1>""/g, '</h1>');
  fixed = fixed.replace(/<\/h2>""/g, '</h2>');
  fixed = fixed.replace(/<\/h3>""/g, '</h3>');
  
  // Fix broken JSX structure
  fixed = fixed.replace(/\}\s*"\s*\)\s*;?\s*$/, '}');
  fixed = fixed.replace(/\}\s*"\s*\)\s*;?\s*<\/p><\/div><\/div>"\s*\)\s*;?\s*$/, '}');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>""/g, 'return (\n    <div');
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>;""/g, 'return (\n    <div');
  
  // Fix broken string literals
  fixed = fixed.replace(/bg-gray-90o0/g, 'bg-gray-900');
  fixed = fixed.replace(/text-gray-30o0/g, 'text-gray-300');
  fixed = fixed.replace(/text-gray-60o0/g, 'text-gray-600');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<div[^>]*>""\s*<div[^>]*>;""/g, '<div className="container mx-auto px-4">');
  
  // Fix broken closing braces
  fixed = fixed.replace(/\}\s*"\s*\)\s*;?\s*$/, '}');
  
  // Fix specific pattern: icon: color: '...' should be icon: SomeIcon, color: '...'
  fixed = fixed.replace(/icon:\s*color:\s*'([^']+)'/g, "icon: RocketLaunchIcon,\n      color: '$1'");
  
  return fixed;
}

// Main fix function
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSyntaxErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
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
console.log('Starting remaining error fixes...');

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const appDir = path.join(__dirname, 'app');
const files = getAllTsxFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);