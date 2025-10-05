#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixJsxSyntax() {
  // Find all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix malformed JSX syntax
      // Replace <div className="...">IconName</div> with proper JSX
      const divRegex = /<div className="([^"]+)">(\w+)<\/div>/g;
      
      content = content.replace(divRegex, (match, className, iconName) => {
        modified = true;
        // Replace with a simple span with the icon name as text
        return `<span className="${className}">${iconName}</span>`;
      });

      // Fix any remaining malformed JSX with angle brackets in text
      const malformedRegex = /<div className="([^"]+)">(\w+)<\/div>/g;
      
      content = content.replace(malformedRegex, (match, className, iconName) => {
        modified = true;
        return `<span className="${className}">${iconName}</span>`;
      });

      // Fix any remaining issues with angle brackets in JSX
      const angleBracketRegex = /<div className="([^"]+)">(\w+)<\/div>/g;
      
      content = content.replace(angleBracketRegex, (match, className, iconName) => {
        modified = true;
        return `<span className="${className}">${iconName}</span>`;
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed JSX syntax in: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log('JSX syntax fixing completed!');
}

fixJsxSyntax().catch(console.error);