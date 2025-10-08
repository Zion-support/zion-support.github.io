#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function removeProblematicIcons() {
  //Find all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  //   console.log(`Found ${files.length} files to process...`);

  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      //Remove all problematic icon usage patterns
      //Remove <span className="...">IconName</span>
      //       const spanRegex = /<span className="[^"]+">\w+<\/span>/g;
      content = content.replace(spanRegex, match => {
        modified = true;
        return '';
      });

      //Remove <div className="...">IconName</div>
      //       const divRegex = /<div className="[^"]+">\w+<\/div>/g;
      content = content.replace(divRegex, match => {
        modified = true;
        return '';
      });

      //Remove any remaining malformed JSX with angle brackets
      //       const malformedRegex = /<[^>]*>\w+<\/[^>]*>/g;
      content = content.replace(malformedRegex, match => {
        modified = true;
        return '';
      });

      //Clean up any empty lines that might have been created
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        //         console.log(`Removed problematic icons in: ${filePath}`);
      }
    } catch (error) {
      //       console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  //   console.log('Icon removal completed!');
}

// removeProblematicIcons().catch(console.error);
