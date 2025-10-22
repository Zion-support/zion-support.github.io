#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix benefits variable in a file
function fixBenefitsVariable(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's not a TypeScript/JavaScript file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js')) {
      return;
    }
    
    // Skip test files
    if (filePath.includes('__tests__') || filePath.includes('.test.')) {
      return;
    }
    
    console.log(`Processing: ${filePath}`);
    
    let modified = false;
    let newContent = content;
    
    // Pattern to match const benefits = ... but not used
    const benefitsPattern = /const\s+benefits\s*=\s*\[[^\]]*\];?\s*\n/g;
    
    // Check if benefits is declared but not used
    if (benefitsPattern.test(content)) {
      // Check if benefits is used anywhere in the file
      const benefitsUsagePattern = /\bbenefits\b/g;
      const matches = content.match(benefitsUsagePattern);
      
      // If benefits appears only once (just the declaration), remove it
      if (matches && matches.length === 1) {
        newContent = newContent.replace(benefitsPattern, '');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✓ Fixed benefits variable in ${filePath}`);
    } else {
      console.log(`- No changes needed for ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findTsFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting benefits variable cleanup...');

const tsFiles = findTsFiles('/workspace');
console.log(`Found ${tsFiles.length} TypeScript/JavaScript files`);

// Process each file
for (const file of tsFiles) {
  fixBenefitsVariable(file);
}

console.log('Benefits variable cleanup completed!');