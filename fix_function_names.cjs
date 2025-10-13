#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to convert a string to a valid JavaScript function name
function toValidFunctionName(str) {
  // Replace hyphens with spaces, then convert to camelCase
  let name = str.replace(/-/g, ' ');
  
  // Handle special cases for numbers at the beginning
  if (/^\d/.test(name)) {
    name = 'Page' + name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  // Convert to camelCase
  name = name.replace(/\s+(.)/g, (match, letter) => letter.toUpperCase());
  
  // Ensure it starts with a letter
  if (!/^[a-zA-Z]/.test(name)) {
    name = 'Page' + name;
  }
  
  return name;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the directory name to create a proper function name
    const dirName = path.basename(path.dirname(filePath));
    const functionName = toValidFunctionName(dirName);
    
    // Replace the function declaration
    const fixedContent = content.replace(
      /export default function [^(]+\(\)/,
      `export default function ${functionName}()`
    );
    
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`✅ Fixed function name in: ${path.relative(process.cwd(), filePath)}`);
    
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && item === 'page.tsx' && currentDir.includes('/app/')) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('🔍 Scanning for page files to fix function names...');
  
  const workspaceDir = process.cwd();
  const pageFiles = findPageFiles(workspaceDir);
  
  console.log(`📊 Found ${pageFiles.length} page files to fix`);
  
  if (pageFiles.length === 0) {
    console.log('✅ No page files found!');
    return;
  }
  
  let fixedCount = 0;
  let errorCount = 0;
  
  console.log('\n🔧 Fixing function names...');
  
  for (const filePath of pageFiles) {
    try {
      const fixed = fixFile(filePath);
      if (fixed) {
        fixedCount++;
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ Error: ${path.relative(workspaceDir, filePath)} - ${error.message}`);
    }
  }
  
  console.log(`\n📈 Summary:`);
  console.log(`   ✅ Successfully fixed: ${fixedCount} files`);
  console.log(`   ❌ Errors: ${errorCount} files`);
  console.log(`   📊 Total processed: ${pageFiles.length} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findPageFiles, toValidFunctionName };