#!/usr/bin/env node

const fs = require('fs');

const filesToFix = [
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/pages/AdminPage.tsx',
  'app/pages/ContactPage.tsx'
];

filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if React is used but not imported
      if (content.includes('React.') && !content.includes("import React")) {
        const lines = content.split('\n');
        const newLines = [];
        
        // Add React import at the top
        newLines.push("import React from 'react';");
        newLines.push('');
        
        // Add the rest of the content
        newLines.push(...lines);
        
        const newContent = newLines.join('\n');
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Added React import to: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Fixed remaining React import issues.');
