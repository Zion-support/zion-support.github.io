import fs from 'fs';
import { glob } from 'glob';

// Find all component files that still have unused React imports
const files = await glob('app/components/*.tsx', {
  ignore: [
    'node_modules/**',
    '.next/**'
  ]
});

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file has unused React import
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      const newContent = content.replace("import React from 'react';\n", '');
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files with unused React imports.`);