#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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

// Fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated strings with triple quotes
  fixed = fixed.replace(/"""/g, '"');
  fixed = fixed.replace(/''''/g, "'");
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)""/g, 'className="$1"');
  fixed = fixed.replace(/content="([^"]*?)""/g, 'content="$1"');
  
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
  
  return fixed;
}

// Remove unused imports
function removeUnusedImports(content) {
  const lines = content.split('\n');
  const usedImports = new Set();
  
  // Find all used imports by scanning the content
  const importMatches = content.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"]/g);
  
  for (const match of importMatches) {
    const imports = match[1].split(',').map(imp => imp.trim());
    for (const imp of imports) {
      const cleanImport = imp.replace(/\s*as\s+\w+/, '').trim();
      if (content.includes(cleanImport) && !cleanImport.includes('Icon')) {
        usedImports.add(cleanImport);
      }
    }
  }
  
  // Remove unused icon imports
  const iconImports = ['CheckCircleIcon', 'CloudIcon', 'GlobeAltIcon', 'ChartBarIcon', 'Circle'];
  let fixed = content;
  
  for (const icon of iconImports) {
    if (!content.includes(`<${icon}`) && !content.includes(`${icon}Icon`)) {
      // Remove from import statements
      fixed = fixed.replace(new RegExp(`,\\s*${icon}`, 'g'), '');
      fixed = fixed.replace(new RegExp(`${icon},\\s*`, 'g'), '');
      fixed = fixed.replace(new RegExp(`{\\s*${icon}\\s*}`, 'g'), '{}');
    }
  }
  
  // Clean up empty import statements
  fixed = fixed.replace(/import\s*\{\s*\}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
  
  return fixed;
}

// Fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix missing closing div tags
  const openDivs = (fixed.match(/<div/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const missingDivs = openDivs - closeDivs;
    for (let i = 0; i < missingDivs; i++) {
      fixed += '\n    </div>';
    }
  }
  
  // Fix malformed JSX
  fixed = fixed.replace(/<div[^>]*>""\s*<div[^>]*>;""/g, '<div className="container mx-auto px-4">');
  
  return fixed;
}

// Main fix function
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSyntaxErrors(content);
    content = removeUnusedImports(content);
    content = fixJSXStructure(content);
    
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
console.log('Starting error fixes...');

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

// Also fix root level files
const rootFiles = ['App.tsx', 'main.tsx', 'App_minimal.tsx', 'App-minimal.tsx'];
for (const file of rootFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  }
}

console.log(`Total files fixed: ${fixedCount}`);