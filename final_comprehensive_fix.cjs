#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting final comprehensive fix...');

// Function to fix merge conflict markers and syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`🔧 Fixing merge conflicts in ${filePath}`);
      content = content.replace(/<<<<<<<.*?=======.*?>>>>>>>.*?\n/gs, '');
      content = content.replace(/<<<<<<<.*?>>>>>>>.*?\n/gs, '');
      content = content.replace(/=======.*?\n/gs, '');
      modified = true;
    }

    // Fix unterminated string literals
    content = content.replace(/'([^']*?)$/gm, "'");
    content = content.replace(/"([^"]*?)$/gm, '"');
    content = content.replace(/`([^`]*?)$/gm, '`');
    
    // Fix common syntax errors
    content = content.replace(/import\s+{\s*([^}]*?)\s*}\s*from\s*['"]([^'"]*?)['"];?\s*$/gm, 'import { $1 } from "$2";');
    content = content.replace(/export\s+default\s+([^;]*?);?\s*$/gm, 'export default $1;');
    
    // Fix JSX syntax
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)>\s*$/gm, '<$1 $2>');
    
    // Fix function declarations
    content = content.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {');
    
    // Fix class declarations
    content = content.replace(/class\s+([A-Z][a-zA-Z0-9]*)\s*{\s*$/gm, 'class $1 {');
    
    // Fix interface declarations
    content = content.replace(/interface\s+([A-Z][a-zA-Z0-9]*)\s*{\s*$/gm, 'interface $1 {');
    
    // Fix type declarations
    content = content.replace(/type\s+([A-Z][a-zA-Z0-9]*)\s*=\s*{\s*$/gm, 'type $1 = {');
    
    // Fix object literals
    content = content.replace(/{\s*$/gm, '{');
    
    // Fix array literals
    content = content.replace(/\[\s*$/gm, '[');
    
    // Fix parentheses
    content = content.replace(/\(\s*$/gm, '(');
    
    // Fix brackets
    content = content.replace(/\[\s*$/gm, '[');
    
    // Fix braces
    content = content.replace(/{\s*$/gm, '{');
    
    // Remove empty lines at the end
    content = content.replace(/\n\s*$/, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        continue;
      }
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
try {
  console.log('🔍 Scanning for files to fix...');
  const fixedCount = fixFilesInDirectory('.');
  console.log(`✅ Fixed ${fixedCount} files`);
  
  console.log('🎉 Final comprehensive fix completed!');
} catch (error) {
  console.error('❌ Error during final fix:', error.message);
  process.exit(1);
}