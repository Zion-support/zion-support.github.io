#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax issues
function fixRemainingSyntax(content) {
  // Remove stray semicolons and quotes
  content = content.replace(/^';$/gm, '');
  content = content.replace(/^;$/gm, '');
  
  // Fix unterminated string literals
  content = content.replace(/['"]([^'"]*);$/gm, (match, p1) => {
    if (match.includes('import') || match.includes('from')) {
      return match.replace(/;$/, "';");
    }
    return match;
  });
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*$/gm, 'const $1 = () => {\n  return (\n');
  
  // Fix missing closing braces
  content = content.replace(/\{\s*return\s*\(\s*$/gm, '{\n  return (\n');
  
  // Fix duplicate return statements
  content = content.replace(/return\s*\(\s*\n\s*return\s*\(/g, 'return (');
  
  // Clean up extra newlines
  content = content.replace(/\n\n\n+/g, '\n\n');
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixRemainingSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining syntax in: ${filePath}`);
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
  console.log('Fixing remaining syntax issues...');
  
  const filesToFix = [
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
  
  console.log(`Fixed remaining syntax in ${fixedCount} files`);
}

main();