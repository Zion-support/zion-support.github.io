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

      // Fix default imports from lucide-react - convert to named imports
      const defaultImportRegex = /import\s+(\w+)\s+from\s*['"]lucide-react['"];?/g;
      
      content = content.replace(defaultImportRegex, (match, iconName) => {
        modified = true;
        return `import { ${iconName} } from 'lucide-react';`;
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