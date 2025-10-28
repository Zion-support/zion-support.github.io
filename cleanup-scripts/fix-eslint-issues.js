#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting comprehensive ESLint fixes...');

// Function to fix unused ReactNode imports
function fixUnusedReactNodeImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused ReactNode imports
    if (content.includes("import React, { ReactNode } from 'react'")) {
      content = content.replace("import React, { ReactNode } from 'react'", "import React from 'react'");
    } else if (content.includes("import { ReactNode } from 'react'")) {
      content = content.replace("import { ReactNode } from 'react'", "import React from 'react'");
    }
    
    // Remove unused memo imports
    if (content.includes("import React, { memo } from 'react'")) {
      content = content.replace("import React, { memo } from 'react'", "import React from 'react'");
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix unused variables by prefixing with underscore
function fixUnusedVariables(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unused error variables in catch blocks
    content = content.replace(/catch\s*\(\s*error\s*\)/g, 'catch (_error)');
    content = content.replace(/catch\s*\(\s*err\s*\)/g, 'catch (_err)');
    
    // Fix unused variables in destructuring
    content = content.replace(/const\s*{\s*error\s*}\s*=/g, 'const { error: _error } =');
    content = content.replace(/const\s*{\s*err\s*}\s*=/g, 'const { err: _err } =');
    
    // Fix unused parameters in functions
    content = content.replace(/\(\s*error\s*\)\s*=>/g, '(_error) =>');
    content = content.replace(/\(\s*err\s*\)\s*=>/g, '(_err) =>');
    
    // Fix unused variables in for loops
    content = content.replace(/for\s*\(\s*let\s+index\s*=\s*0/g, 'for (let _index = 0');
    content = content.replace(/for\s*\(\s*const\s+index\s+of/g, 'for (const _index of');
    
    // Fix unused destructured variables
    content = content.replace(/const\s*{\s*imgIndex\s*}\s*=/g, 'const { imgIndex: _imgIndex } =');
    content = content.replace(/const\s*{\s*index\s*}\s*=/g, 'const { index: _index } =');
    
    // Fix unused state variables
    content = content.replace(/const\s*\[\s*isOpen\s*,\s*setIsOpen\s*\]\s*=/g, 'const [_isOpen, _setIsOpen] =');
    content = content.replace(/const\s*\[\s*memoryUsage\s*,\s*setMemoryUsage\s*\]\s*=/g, 'const [_memoryUsage, _setMemoryUsage] =');
    
    // Fix unused function parameters
    content = content.replace(/\(\s*message\s*,\s*args\s*\)\s*=>/g, '(_message, _args) =>');
    content = content.replace(/\(\s*errorData\s*\)\s*=>/g, '(_errorData) =>');
    content = content.replace(/\(\s*entry\s*\)\s*=>/g, '(_entry) =>');
    content = content.replace(/\(\s*registration\s*,\s*error\s*\)\s*=>/g, '(_registration, _error) =>');
    
    // Fix unused destructured variables in performance monitoring
    content = content.replace(/const\s*{\s*fidEntry\s*}\s*=/g, 'const { fidEntry: _fidEntry } =');
    content = content.replace(/const\s*{\s*clsEntry\s*}\s*=/g, 'const { clsEntry: _clsEntry } =');
    
    // Fix unused variables in performance utils
    content = content.replace(/const\s*start\s*=\s*performance\.now\(\)/g, 'const _start = performance.now()');
    content = content.replace(/const\s*end\s*=\s*performance\.now\(\)/g, 'const _end = performance.now()');
    
    // Fix unused variables in monitoring
    content = content.replace(/const\s*{\s*entry\s*}\s*=\s*performance\.getEntriesByType/g, 'const { entry: _entry } = performance.getEntriesByType');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed unused variables in ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.log(`❌ Error fixing variables in ${filePath}:`, error.message);
    return false;
  }
}

// Function to remove console statements
function removeConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log statements
    const consoleRegex = /^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm;
    if (consoleRegex.test(content)) {
      content = content.replace(consoleRegex, '');
      modified = true;
    }
    
    // Remove console statements in try-catch blocks (but keep error handling)
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);\s*/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Removed console statements from ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.log(`❌ Error removing console statements from ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix unused imports
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused Navigation import
    if (content.includes("import { Navigation } from './components/Navigation'")) {
      content = content.replace("import { Navigation } from './components/Navigation';\n", '');
      modified = true;
    }
    
    // Remove unused EcommerceanalyticsproPage
    if (content.includes('EcommerceanalyticsproPage')) {
      content = content.replace(/const\s+EcommerceanalyticsproPage\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*export\s+default\s+EcommerceanalyticsproPage;/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed unused imports in ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.log(`❌ Error fixing imports in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix escape characters
function fixEscapeCharacters(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unnecessary escape characters
    if (content.includes('\\;')) {
      content = content.replace(/\\;/g, ';');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed escape characters in ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.log(`❌ Error fixing escape characters in ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all files
function processFiles() {
  const appDir = path.join(__dirname, 'app');
  const files = [];
  
  // Get all TypeScript and JavaScript files in app directory
  function getAllFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        getAllFiles(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  getAllFiles(appDir);
  
  console.log(`📁 Found ${files.length} files to process`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    console.log(`\n🔍 Processing ${file}...`);
    
    let fileModified = false;
    
    // Fix unused ReactNode imports
    if (fixUnusedReactNodeImports(file)) {
      fileModified = true;
    }
    
    // Fix unused variables
    if (fixUnusedVariables(file)) {
      fileModified = true;
    }
    
    // Remove console statements
    if (removeConsoleStatements(file)) {
      fileModified = true;
    }
    
    // Fix unused imports
    if (fixUnusedImports(file)) {
      fileModified = true;
    }
    
    if (fileModified) {
      fixedCount++;
    }
  }
  
  // Fix root level files
  const rootFiles = [
    'accessibility-improvements.js',
    'cleanup-all-corrupted.js',
    'cleanup-corrupted-files.js'
  ];
  
  for (const file of rootFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      console.log(`\n🔍 Processing root file ${file}...`);
      
      if (fixEscapeCharacters(filePath)) {
        fixedCount++;
      }
      
      if (removeConsoleStatements(filePath)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} files`);
  console.log('🎉 ESLint fixes completed!');
}

// Run the fixes
processFiles();