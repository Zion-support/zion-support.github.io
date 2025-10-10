#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix missing quotes
function fixMissingQuotes(content) {
  // Fix 'use client; -> 'use client';
  content = content.replace(/'use client;/g, "'use client';");
  
  // Fix import statements missing quotes
  content = content.replace(/import\s+.*\s+from\s+['"]([^'"]*);$/gm, (match, p1) => {
    return match.replace(/;$/, "';");
  });
  
  // Fix other common missing quotes
  content = content.replace(/from\s+['"]([^'"]*);$/gm, (match, p1) => {
    return match.replace(/;$/, "';");
  });
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixMissingQuotes(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed missing quotes in: ${filePath}`);
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
  console.log('Fixing missing quotes...');
  
  const filesToFix = [
    'App.tsx',
    'App_minimal.tsx', 
    'App_test.tsx',
    'EnhancedFooter.tsx',
    'EnhancedHeader.tsx',
    'SidebarNavigation.tsx'
  ];
  
  let fixedCount = 0;
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed missing quotes in ${fixedCount} files`);
}

main();