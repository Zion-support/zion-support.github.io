#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix quote issues
function fixQuotes(content) {
  // Fix double single quotes at end of lines
  content = content.replace(/;''\n/g, ";\n");
  content = content.replace(/''\n/g, "\n");
  
  // Fix unterminated string literals
  content = content.replace(/'use client';'/g, "'use client';");
  content = content.replace(/import\s+.*\s+from\s+['"][^'"]+['"];'/g, (match) => {
    return match.replace(/;'$/, ';');
  });
  
  // Fix other common quote issues
  content = content.replace(/const\s+.*\s*=\s*.*;'/g, (match) => {
    return match.replace(/;'$/, ';');
  });
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixQuotes(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed quotes in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Fixing quote issues...');
  
  const filesToFix = [
    'App.tsx',
    'App_minimal.tsx', 
    'App_test.tsx',
    'EnhancedFooter.tsx',
    'EnhancedHeader.tsx',
    'SidebarNavigation.tsx',
    '__tests__/AppMinimal.test.tsx',
    '__tests__/advanced-components.test.tsx',
    '__tests__/components.test.tsx'
  ];
  
  let fixedCount = 0;
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed quotes in ${fixedCount} files`);
}

main();