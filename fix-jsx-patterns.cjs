#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix specific JSX patterns
function fixJsxPatterns(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix 1: Fix malformed JSX elements with semicolons and incomplete tags
    content = content.replace(/;\s*<\/\s*$/gm, '</span>');
    content = content.replace(/;\s*<\/\s*$/gm, '</div>');
    content = content.replace(/;\s*<\/\s*$/gm, '</section>');
    
    // Fix 2: Fix incomplete JSX tags
    content = content.replace(/<\s*$/gm, '');
    content = content.replace(/\/\s*$/gm, '');
    
    // Fix 3: Fix malformed closing tags
    content = content.replace(/<\/\s*$/gm, '');
    
    // Fix 4: Fix specific patterns like "Solutions;" followed by incomplete tags
    content = content.replace(/Solutions;\s*<\s*$/gm, 'Solutions</span>');
    content = content.replace(/Page\s*$/gm, 'AI API Management');
    
    // Fix 5: Fix incomplete className attributes
    content = content.replace(/className=\s*$/gm, 'className=""');
    
    // Fix 6: Fix malformed JSX expressions
    content = content.replace(/(\w+);\s*$/gm, '$1');
    
    // Fix 7: Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed JSX patterns in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with JSX errors
function findFilesWithJsxErrors() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('🔧 Starting JSX pattern fixes...\n');

const filesToFix = findFilesWithJsxErrors();
console.log(`Found ${filesToFix.length} JSX files to check:\n`);

let fixedCount = 0;
let totalFiles = filesToFix.length;

// Process files in batches to avoid overwhelming the system
const batchSize = 50;
for (let i = 0; i < filesToFix.length; i += batchSize) {
  const batch = filesToFix.slice(i, i + batchSize);
  
  batch.forEach((filePath, index) => {
    const globalIndex = i + index + 1;
    console.log(`[${globalIndex}/${totalFiles}] Processing ${filePath}`);
    
    if (fixJsxPatterns(filePath)) {
      fixedCount++;
    }
  });
  
  // Small delay between batches
  if (i + batchSize < filesToFix.length) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

console.log(`\n✅ JSX pattern fixes complete!`);
console.log(`📊 Fixed patterns in ${fixedCount} out of ${totalFiles} files`);