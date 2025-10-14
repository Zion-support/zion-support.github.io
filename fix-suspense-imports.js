import fs from 'fs';
import { glob } from 'glob';

// Find all page.tsx files
const files = glob.sync('app/**/page.tsx', { cwd: process.cwd() });

console.log(`Found ${files.length} page files to fix`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if file has unused Suspense import
    if (content.includes("import React, { Suspense } from 'react';") && !content.includes('<Suspense')) {
      content = content.replace("import React, { Suspense } from 'react';", "import React from 'react';");
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Done fixing Suspense imports');
