const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixRemainingErrors() {
  try {
    // Find all TypeScript and JavaScript files
    const files = await glob('**/*.{ts,tsx,js,jsx}', { 
      cwd: __dirname,
      ignore: ['node_modules/**', 'dist/**', '.next/**']
    });
    
    console.log(`Found ${files.length} files to check`);

    for (const filePath of files) {
      try {
        const fullPath = path.join(__dirname, filePath);
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        // Skip if no issues found
        if (!content.includes('f7f852c0f7415181a1b362c4aa5a784585ad5828') && 
            !content.includes('Expected an assignment or function call') &&
            !content.includes('Parsing error')) {
          continue;
        }
        
        // Remove stray hash strings
        if (content.includes('f7f852c0f7415181a1b362c4aa5a784585ad5828')) {
          content = content.replace(/f7f852c0f7415181a1b362c4aa5a784585ad5828/g, '');
          modified = true;
        }
        
        // Fix common parsing errors
        content = content.replace(/;\s*$/gm, ''); // Remove trailing semicolons
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
        content = content.replace(/\s+$/gm, ''); // Remove trailing whitespace
        
        // Fix specific patterns
        content = content.replace(/\}\s*;\s*$/gm, '}'); // Remove semicolons after closing braces
        content = content.replace(/\}\s*f7f852c0f7415181a1b362c4aa5a784585ad5828/g, '}'); // Remove hash after braces
        
        // Fix numeric literal issues (like "5g-solutions")
        content = content.replace(/(\d+)([a-zA-Z])/g, '$1-$2'); // Add hyphen between number and letter
        
        // Fix JSX parsing errors
        content = content.replace(/<div[^>]*>\s*$/gm, '<div>'); // Simplify div tags
        content = content.replace(/<\/div>\s*$/gm, '</div>'); // Clean up closing div tags
        
        // Remove unused imports (basic cleanup)
        if (filePath.includes('contexts/AnalyticsContext.tsx')) {
          content = content.replace(/import React, { useContext, ReactNode } from 'react';/, 'import React from "react";');
        }
        
        if (filePath.includes('main.tsx')) {
          content = content.replace(/import { createRoot } from 'react-dom\/client';/, 'import React from "react";');
        }
        
        if (modified) {
          fs.writeFileSync(fullPath, content);
          console.log(`Fixed ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
      }
    }

    console.log('Remaining errors fix completed');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fixRemainingErrors();