import fs from 'fs';
import { glob } from 'glob';

async function fixPageReactImports() {
  try {
    // Find all page.tsx files in the app directory
    const files = await glob('app/**/page.tsx');
    
    console.log(`Found ${files.length} page files to process`);
    
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file has unused React import
        if (content.includes("import React from 'react';") && !content.includes('React.')) {
          // Remove the React import line
          const updatedContent = content.replace(/import React from 'react';\n?/, '');
          
          fs.writeFileSync(file, updatedContent);
          console.log(`Fixed: ${file}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`\nFixed ${fixedCount} files with unused React imports`);
  } catch (error) {
    console.error('Error:', error);
  }
}

fixPageReactImports();