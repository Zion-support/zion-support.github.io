#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixLucideImports() {
  // Find all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix lucide-react imports - convert from named imports to default imports
      const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
      
      content = content.replace(lucideImportRegex, (match, imports) => {
        const iconNames = imports.split(',').map(name => name.trim());
        const importStatements = iconNames.map(name => 
          `import ${name} from 'lucide-react';`
        ).join('\n');
        modified = true;
        return importStatements;
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