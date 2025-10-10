#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix final syntax issues
function fixFinalSyntax(content) {
  // Fix missing quotes in import statements
  content = content.replace(/import\s+.*\s+from\s+['"]([^'"]*);$/gm, (match, p1) => {
    return match.replace(/;$/, "';");
  });
  
  // Fix unterminated string literals
  content = content.replace(/['"]([^'"]*);$/gm, (match, p1) => {
    if (match.includes('import') || match.includes('from')) {
      return match.replace(/;$/, "';");
    }
    return match;
  });
  
  // Fix malformed JSX elements
  content = content.replace(/<(\w+)\s+([^>]*?)\s*>\s*<\/\1>\s*<\/\1>/g, '<$1 $2></$1>');
  
  // Fix missing closing parentheses
  content = content.replace(/\(\s*$/gm, '(\n');
  
  // Clean up extra newlines
  content = content.replace(/\n\n\n+/g, '\n\n');
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixFinalSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final syntax in: ${filePath}`);
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
  console.log('Fixing final syntax issues...');
  
  const filesToFix = [
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
  
  console.log(`Fixed final syntax in ${fixedCount} files`);
}

main();