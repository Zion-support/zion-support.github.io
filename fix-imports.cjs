#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix import issues
function fixImports(content) {
  // Fix React.lazy import statements with missing quotes and extra semicolons
  content = content.replace(/React\.lazy\(\(\)\s*=>\s*import\(['"]([^'"]*)\)\);;/g, (match, p1) => {
    return `React.lazy(() => import('${p1}'))`;
  });
  
  // Fix other import statements with missing quotes
  content = content.replace(/import\(['"]([^'"]*)\)\);;/g, (match, p1) => {
    return `import('${p1}'))`;
  });
  
  // Fix double semicolons
  content = content.replace(/;;+/g, ';');
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixImports(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
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
  console.log('Fixing import issues...');
  
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
  
  console.log(`Fixed imports in ${fixedCount} files`);
}

main();