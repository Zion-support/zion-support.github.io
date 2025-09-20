#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting quick improvements...');

// Function to fix common TypeScript syntax issues
function fixTypeScriptSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix trailing commas in imports
    content = content.replace(/from\s+['"]([^'"]+)['"],\s*$/gm, 'from "$1";');
    
    // Fix trailing commas in exports
    content = content.replace(/export\s+([^;]+),\s*$/gm, 'export $1;');
    
    // Fix trailing commas in type definitions
    content = content.replace(/(\w+):\s*([^,;]+),\s*$/gm, '$1: $2;');
    
    // Fix trailing commas in object properties
    content = content.replace(/(\w+):\s*([^,}]+),\s*}/g, '$1: $2}');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.log(`⚠️  Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to remove console.log statements
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log statements (but keep console.error and console.warn)
    content = content.replace(/^\s*console\.log\([^)]*\);\s*$/gm, '');
    content = content.replace(/^\s*console\.log\([^)]*\)\s*$/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`⚠️  Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to recursively process files
function processDirectory(dirPath, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let filesProcessed = 0;
  let syntaxFixed = 0;
  let consoleLogsRemoved = 0;

  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, dist, build, and other common directories
        if (!['node_modules', 'dist', 'build', '.git', '.next', 'coverage'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        filesProcessed++;
        
        // Fix TypeScript syntax
        if (fixTypeScriptSyntax(fullPath)) {
          syntaxFixed++;
          console.log(`✅ Fixed syntax in: ${fullPath}`);
        }
        
        // Remove console.log statements
        if (removeConsoleLogs(fullPath)) {
          consoleLogsRemoved++;
          console.log(`🧹 Removed console.log from: ${fullPath}`);
        }
      }
    }
  }

  walkDir(dirPath);
  
  return {
    filesProcessed,
    syntaxFixed,
    consoleLogsRemoved
  };
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const results = processDirectory(srcDir);

console.log('\n📊 Quick Improvements Summary:');
console.log(`   📁 Files processed: ${results.filesProcessed}`);
console.log(`   🔧 Syntax fixes: ${results.syntaxFixed}`);
console.log(`   🧹 Console.log removed: ${results.consoleLogsRemoved}`);

console.log('\n✅ Quick improvements completed!');