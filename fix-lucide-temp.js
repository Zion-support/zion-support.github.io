#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixLucideTemp() {
  // Find all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Replace lucide-react icon usage with simple text or remove them
      const iconUsageRegex = /<(\w+)\s+size=\{24\}\s+className="([^"]+)"/g;
      
      content = content.replace(iconUsageRegex, (match, iconName, className) => {
        // Check if this looks like a lucide-react icon
        const lucideIcons = [
          'ArrowRight', 'DollarSign', 'TrendingDown', 'Zap', 'Brain', 'Target', 'Users', 'Award', 'Clock', 'Globe', 'Rocket', 'Sparkles', 'TrendingUp', 'Shield', 'Cloud', 'Bot', 'Building', 'Star', 'CheckCircle', 'BookOpen', 'Infinity', 'Atom', 'Mail', 'Home', 'AlertTriangle', 'RefreshCw'
        ];
        
        if (lucideIcons.includes(iconName)) {
          modified = true;
          // Replace with a simple span with the icon name
          return `<span className="${className}">${iconName}</span>`;
        }
        return match;
      });

      // Also replace simple icon usage without size prop
      const simpleIconRegex = /<(\w+)\s+className="([^"]+)"/g;
      
      content = content.replace(simpleIconRegex, (match, iconName, className) => {
        const lucideIcons = [
          'ArrowRight', 'DollarSign', 'TrendingDown', 'Zap', 'Brain', 'Target', 'Users', 'Award', 'Clock', 'Globe', 'Rocket', 'Sparkles', 'TrendingUp', 'Shield', 'Cloud', 'Bot', 'Building', 'Star', 'CheckCircle', 'BookOpen', 'Infinity', 'Atom', 'Mail', 'Home', 'AlertTriangle', 'RefreshCw'
        ];
        
        if (lucideIcons.includes(iconName)) {
          modified = true;
          return `<span className="${className}">${iconName}</span>`;
        }
        return match;
      });

      // Remove unused lucide-react imports
      const lines = content.split('\n');
      const newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Skip lucide-react import lines
        if (line.trim().startsWith('import ') && line.includes('lucide-react')) {
          continue;
        }
        
        newLines.push(line);
      }
      
      if (newLines.length !== lines.length) {
        modified = true;
        content = newLines.join('\n');
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed lucide issues in: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log('Lucide fixing completed!');
}

fixLucideTemp().catch(console.error);