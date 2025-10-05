#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixClassNameErrors() {
  // Find all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix className props on lucide-react icons
      // Replace <IconName className="..." /> with <IconName size={24} className="..." />
      const classNameRegex = /<(\w+)\s+className="([^"]+)"/g;
      
      content = content.replace(classNameRegex, (match, iconName, className) => {
        // Check if this looks like a lucide-react icon (common icon names)
        const lucideIcons = [
          'ArrowRight', 'DollarSign', 'TrendingDown', 'Zap', 'Brain', 'Target', 'Users', 'Award', 'Clock', 'Globe', 'Rocket', 'Sparkles', 'TrendingUp', 'Shield', 'Cloud', 'Bot', 'Building', 'Star', 'CheckCircle', 'BookOpen', 'Infinity', 'Atom', 'Mail', 'Home', 'AlertTriangle', 'RefreshCw'
        ];
        
        if (lucideIcons.includes(iconName)) {
          modified = true;
          return `<${iconName} size={24} className="${className}"`;
        }
        return match;
      });

      // Remove unused imports
      const lines = content.split('\n');
      const newLines = [];
      const usedImports = new Set();
      
      // Find all used imports in the file
      for (const line of lines) {
        // Check for JSX usage
        const jsxMatch = line.match(/<(\w+)/g);
        if (jsxMatch) {
          jsxMatch.forEach(match => {
            const componentName = match.slice(1);
            usedImports.add(componentName);
          });
        }
        
        // Check for direct usage
        const directMatch = line.match(/\b(\w+)\s*[\(\[\{]/g);
        if (directMatch) {
          directMatch.forEach(match => {
            const componentName = match.replace(/[\(\[\{].*$/, '');
            usedImports.add(componentName);
          });
        }
      }
      
      // Filter out unused imports
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this is an import line
        if (line.trim().startsWith('import ')) {
          const importMatch = line.match(/import\s+(\w+)\s+from/);
          if (importMatch) {
            const importName = importMatch[1];
            if (!usedImports.has(importName) && !importName.includes('React') && !importName.includes('Link')) {
              // Skip this import line
              continue;
            }
          }
        }
        
        newLines.push(line);
      }
      
      if (newLines.length !== lines.length) {
        modified = true;
        content = newLines.join('\n');
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed errors in: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log('Error fixing completed!');
}

fixClassNameErrors().catch(console.error);