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

      // Fix malformed import statements first
      const malformedImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
      
      content = content.replace(malformedImportRegex, (match, imports) => {
        // Check if this is a malformed import with multiple "as" clauses
        if (imports.includes(' as ') && imports.split(' as ').length > 2) {
          // Extract the original icon name (the last part after the last "as")
          const parts = imports.split(' as ');
          const originalName = parts[parts.length - 1].trim();
          
          // Icons that don't have Icon versions
          const noIconVersion = [
            'TrendingUp', 'AlertTriangle', 'RefreshCw', 'Home', 'Mail', 'Shield', 'Cloud', 'Bot', 'Users', 'Award', 'Target', 'DollarSign', 'Building', 'Star', 'CheckCircle', 'BookOpen', 'Zap', 'Brain', 'Globe', 'Rocket', 'Sparkles', 'ArrowRight', 'Infinity', 'Atom'
          ];
          
          if (noIconVersion.includes(originalName)) {
            modified = true;
            return `import { ${originalName} } from 'lucide-react';`;
          } else {
            // Use Icon version
            const iconName = `${originalName}Icon`;
            modified = true;
            return `import { ${iconName} as ${originalName} } from 'lucide-react';`;
          }
        }
        return match; // Return unchanged if not malformed
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