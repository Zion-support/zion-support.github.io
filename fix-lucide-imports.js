#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/JavaScript files in the app directory
const files = await glob('app/**/*.{ts,tsx,js,jsx}');

// Lucide React icons that need to be fixed
const lucideIcons = [
  'ArrowRight', 'ArrowLeft', 'TrendingUp', 'Brain', 'Zap', 'Target', 'Users', 
  'DollarSign', 'Award', 'Clock', 'Calendar', 'User', 'CheckCircle', 'Rocket', 
  'Satellite', 'Globe', 'Share2', 'Bookmark', 'FileText'
];

async function fixImports() {
  for (const file of files) {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has lucide-react imports
    if (content.includes("from 'lucide-react'") || content.includes('from "lucide-react"')) {
      console.log(`Processing: ${file}`);
      
      // Replace named imports with default imports
      lucideIcons.forEach(icon => {
        const namedImportRegex = new RegExp(`import\\s*{\\s*${icon}\\s*}\\s*from\\s*['"]lucide-react['"]`, 'g');
        const defaultImportRegex = new RegExp(`import\\s+${icon}\\s+from\\s*['"]lucide-react['"]`, 'g');
        
        if (content.match(namedImportRegex)) {
          content = content.replace(namedImportRegex, `import ${icon} from 'lucide-react'`);
          modified = true;
        }
      });

      // Fix complex named imports
      const complexImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g;
      const matches = content.match(complexImportRegex);
      
      if (matches) {
        matches.forEach(match => {
          const icons = match.match(/\w+/g).slice(1, -2); // Extract icon names
          if (icons && icons.length > 0) {
            // Replace with individual default imports
            const newImports = icons.map(icon => `import ${icon} from 'lucide-react'`).join('\n');
            content = content.replace(match, newImports);
            modified = true;
          }
        });
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed imports in: ${file}`);
      }
    }
  }
  
  console.log('Import fixing completed!');
}

fixImports().catch(console.error);