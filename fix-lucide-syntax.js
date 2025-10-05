#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixLucideSyntax() {
  // Find all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix the syntax errors caused by the previous script
      // Replace <span className="...">IconName</span> with proper JSX
      const spanRegex = /<span className="([^"]+)">(\w+)<\/span>/g;
      
      content = content.replace(spanRegex, (match, className, iconName) => {
        modified = true;
        // Replace with a simple div with the icon name as text
        return `<div className="${className}">${iconName}</div>`;
      });

      // Also fix any remaining malformed JSX
      const malformedRegex = /<(\w+)\s+size=\{24\}\s+className="([^"]+)"/g;
      
      content = content.replace(malformedRegex, (match, iconName, className) => {
        modified = true;
        return `<div className="${className}">${iconName}</div>`;
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed syntax in: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log('Syntax fixing completed!');
}

fixLucideSyntax().catch(console.error);