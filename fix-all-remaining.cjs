#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all remaining issues
function fixAllRemaining(content) {
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
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*;/g, 'const $1: React.FC = () => {\n');
  
  // Fix stray semicolons and quotes
  content = content.replace(/^';$/gm, '');
  content = content.replace(/^;$/gm, '');
  
  // Fix malformed variable declarations
  content = content.replace(/const\s+(\w+)\s*=\s*([^;]*);';$/gm, 'const $1 = $2;');
  
  // Fix malformed array declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;';$/gm, 'const $1 = [');
  
  // Clean up extra newlines
  content = content.replace(/\n\n\n+/g, '\n\n');
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixAllRemaining(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed all remaining issues in: ${filePath}`);
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
  console.log('Fixing all remaining issues...');
  
  const filesToFix = [
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
  
  console.log(`Fixed all remaining issues in ${fixedCount} files`);
}

main();