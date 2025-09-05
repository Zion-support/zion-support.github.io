const fs = require('fs');
const path = require('path');

// Function to fix TypeScript test files
function fixTypeScriptTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Add missing imports
    if (content.includes('beforeEach(') && !content.includes('beforeEach')) {
      // Add jest imports if missing
      if (!content.includes("import { jest }")) {
        content = content.replace(
          /(import.*from.*['"]@testing-library\/.*['"];)/,
          "$1\nimport { jest, beforeEach, afterEach } from '@jest/globals';"
        );
        modified = true;
      }
    }
    
    // Fix syntax errors
    if (content.includes('import { test, expect } from \'@playwright/test"')) {
      content = content.replace(/import { test, expect } from '@playwright\/test"/g, "import { test, expect } from '@playwright/test';");
      modified = true;
    }
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix common parsing errors
    content = content.replace(/,(\s*})/g, '$1');
    content = content.replace(/,(\s*])/g, '$1');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed TypeScript test: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing TypeScript test ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific files with known issues
function fixSpecificFiles() {
  const specificFixes = [
    {
      file: '/workspace/__tests__/api/admin/generate-pitch-deck.test.ts',
      fixes: [
        { from: /import.*@testing-library.*\n/, to: "import { jest, beforeEach, afterEach } from '@jest/globals';\nimport { test, expect } from '@testing-library/jest-dom';\n" }
      ]
    },
    {
      file: '/workspace/__tests__/api/products.test.ts',
      fixes: [
        { from: /,\s*}/g, to: '}' },
        { from: /,\s*]/g, to: ']' }
      ]
    }
  ];
  
  specificFixes.forEach(({ file, fixes }) => {
    try {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        fixes.forEach(({ from, to }) => {
          if (from.test(content)) {
            content = content.replace(from, to);
            modified = true;
          }
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          console.log(`Fixed specific file: ${file}`);
        }
      }
    } catch (error) {
      console.error(`Error fixing specific file ${file}:`, error.message);
    }
  });
}

// Process all TypeScript test files
function processTypeScriptTests() {
  const testDir = path.join(__dirname, '__tests__');
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.test.ts') || file.endsWith('.test.tsx')) {
        fixTypeScriptTestFile(filePath);
      }
    });
  }
  
  processDirectory(testDir);
}

// Run fixes
processTypeScriptTests();
fixSpecificFiles();

console.log('Finished fixing TypeScript test files');