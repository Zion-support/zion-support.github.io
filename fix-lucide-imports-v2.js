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
      
      // Remove all existing lucide-react imports
      const lucideImportRegex = /import\s+[^;]+from\s*['"]lucide-react['"];?\s*/g;
      content = content.replace(lucideImportRegex, '');
      
      // Find all used lucide icons in the file
      const usedIcons = new Set();
      lucideIcons.forEach(icon => {
        const iconRegex = new RegExp(`<${icon}\\b`, 'g');
        if (content.match(iconRegex)) {
          usedIcons.add(icon);
        }
      });
      
      // Add proper imports for used icons
      if (usedIcons.size > 0) {
        const imports = Array.from(usedIcons)
          .map(icon => `import ${icon} from 'lucide-react';`)
          .join('\n');
        
        // Find the position to insert imports (after other imports)
        const lastImportMatch = content.match(/import\s+[^;]+from\s*['"][^'"]+['"];?\s*$/m);
        if (lastImportMatch) {
          const insertPos = lastImportMatch.index + lastImportMatch[0].length;
          content = content.slice(0, insertPos) + '\n' + imports + '\n' + content.slice(insertPos);
        } else {
          content = imports + '\n\n' + content;
        }
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${file}`);
    }
  }
  
  console.log('Import fixing completed!');
}

fixImports().catch(console.error);