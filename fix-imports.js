#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common Lucide React icons used in the project
const commonIcons = [
  'ArrowRight', 'Brain', 'Zap', 'Shield', 'Globe', 'CheckCircle', 'Star',
  'Phone', 'Mail', 'Clock', 'Target', 'BarChart3', 'TrendingUp', 'Settings',
  'Users', 'DollarSign', 'Mail', 'Brain', 'Shield', 'BarChart3', 'Star'
];

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file uses any of the common icons
    const usedIcons = commonIcons.filter(icon => 
      content.includes(`<${icon}`) || content.includes(`<${icon} `)
    );

    if (usedIcons.length > 0) {
      // Check if lucide-react is already imported
      if (!content.includes("from 'lucide-react'")) {
        // Find the first import statement
        const importMatch = content.match(/^import.*from ['"][^'"]+['"];?\s*$/m);
        if (importMatch) {
          const importIndex = importMatch.index + importMatch[0].length;
          const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
          content = content.slice(0, importIndex) + newImport + content.slice(importIndex);
          modified = true;
        }
      } else {
        // Update existing lucide-react import
        const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
        if (lucideImportMatch) {
          const existingIcons = lucideImportMatch[1].split(',').map(icon => icon.trim());
          const allIcons = [...new Set([...existingIcons, ...usedIcons])].sort();
          const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
          content = content.replace(lucideImportMatch[0], newImport);
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixImportsInFile(filePath);
    }
  }
}

// Start from the app directory
const appDir = path.join(__dirname, 'app');
if (fs.existsSync(appDir)) {
  walkDirectory(appDir);
  console.log('Import fixing completed!');
} else {
  console.error('App directory not found!');
}