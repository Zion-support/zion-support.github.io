#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix unused imports
function fixUnusedImports(content) {
  // Remove unused Mail and Phone imports
  content = content.replace(
    /import { [^}]*Mail[^}]*Phone[^}]* } from "lucide-react";/g,
    'import { ArrowRight, CheckCircle, Star, Globe } from "lucide-react";'
  );
  
  content = content.replace(
    /import { [^}]*Mail[^}]* } from "lucide-react";/g,
    'import { ArrowRight, CheckCircle, Star, Globe } from "lucide-react";'
  );
  
  content = content.replace(
    /import { [^}]*Phone[^}]* } from "lucide-react";/g,
    'import { ArrowRight, CheckCircle, Star, Globe } from "lucide-react";'
  );
  
  return content;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixUnusedImports(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused imports: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript files
function findFiles(dir, extensions = ['.tsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
function main() {
  console.log('Starting unused imports fix...');
  
  const appDir = path.join(__dirname, 'app');
  const files = findFiles(appDir);
  
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findFiles, fixUnusedImports };