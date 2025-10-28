const fs = require('fs');
const path = require('path');

// Specific files that still have issues
const filesToFix = [
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx'
];

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all 'use client' directives completely
    content = content.replace(/'use client';\s*/g, '');
    content = content.replace(/'use client'\s*/g, '');
    
    // Clean up extra semicolons and empty lines
    content = content.replace(/;\s*;\s*/g, ';\n');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Fix the specific files
filesToFix.forEach(fixFile);

console.log('Remaining use client issues fixed!');