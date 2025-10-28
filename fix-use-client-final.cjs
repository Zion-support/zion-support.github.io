const fs = require('fs');
const path = require('path');

// Specific files that need fixing based on the error
const filesToFix = [
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx'
];

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all 'use client' directives
    content = content.replace(/'use client';\s*/g, '');
    content = content.replace(/'use client'\s*/g, '');
    
    // Clean up extra semicolons and empty lines
    content = content.replace(/;\s*;\s*/g, ';\n');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Add 'use client' at the very beginning
    content = "'use client';\n\n" + content;
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Fix the specific files
filesToFix.forEach(fixFile);

console.log('Use client directive fixed for specific files!');