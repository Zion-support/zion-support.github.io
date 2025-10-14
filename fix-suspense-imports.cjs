const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files in the app directory
const pageFiles = glob.sync('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to process`);

pageFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has unused Suspense import
    if (content.includes("import React, { Suspense } from 'react';") && !content.includes('<Suspense')) {
      console.log(`Fixing unused Suspense import in ${filePath}`);
      
      // Remove Suspense from the import
      const updatedContent = content.replace(
        "import React, { Suspense } from 'react';",
        "import React from 'react';"
      );
      
      fs.writeFileSync(filePath, updatedContent);
      console.log(`✓ Fixed ${filePath}`);
    } else if (content.includes("import { Suspense } from 'react';") && !content.includes('<Suspense')) {
      console.log(`Fixing unused Suspense import in ${filePath}`);
      
      // Remove the entire Suspense import line
      const updatedContent = content.replace(
        "import { Suspense } from 'react';\n",
        ""
      );
      
      fs.writeFileSync(filePath, updatedContent);
      console.log(`✓ Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Suspense import cleanup completed');