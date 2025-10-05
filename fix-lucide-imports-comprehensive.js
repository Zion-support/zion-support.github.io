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

      // Fix named imports from lucide-react - convert to correct imports
      const namedImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
      
      content = content.replace(namedImportRegex, (match, imports) => {
        const iconNames = imports.split(',').map(name => name.trim());
        const importStatements = iconNames.map(name => {
          // Icons that don't have Icon versions
          const noIconVersion = [
            'TrendingUp', 'AlertTriangle', 'RefreshCw', 'Home', 'Mail', 'Shield', 'Cloud', 'Bot', 'Users', 'Award', 'Target', 'DollarSign', 'Building', 'Star', 'CheckCircle', 'BookOpen', 'Zap', 'Brain', 'Globe', 'Rocket', 'Sparkles', 'ArrowRight', 'Infinity', 'Atom'
          ];
          
          if (noIconVersion.includes(name)) {
            return `import { ${name} } from 'lucide-react';`;
          } else {
            // Convert to Icon version (e.g., ArrowRight -> ArrowRightIcon)
            const iconName = name.endsWith('Icon') ? name : `${name}Icon`;
            return `import { ${iconName} as ${name} } from 'lucide-react';`;
          }
        }).join('\n');
        modified = true;
        return importStatements;
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