#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixLucideImports() {
  // Find all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix incorrect lucide-react imports with 'as' syntax
      const incorrectImportRegex = /import\s+(\w+)\s+as\s+(\w+)Icon\s+from\s*['"]lucide-react['"];?/g;
      
      content = content.replace(incorrectImportRegex, (match, iconName, aliasName) => {
        modified = true;
        return `import ${iconName} from 'lucide-react';`;
      });

      // Also fix any remaining individual named imports
      const individualImportRegex = /import\s*{\s*(\w+)\s*}\s*from\s*['"]lucide-react['"];?/g;
      content = content.replace(individualImportRegex, (match, iconName) => {
        modified = true;
        return `import ${iconName} from 'lucide-react';`;
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed imports in: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log('Import fixing completed!');
}

fixLucideImports().catch(console.error);