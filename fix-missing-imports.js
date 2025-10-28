#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the app directory
const files = await glob('./app/**/*.{ts,tsx}', { ignore: ['**/node_modules/**'] });

const iconImports = [
  'Brain', 'BarChart', 'Target', 'TrendingUp', 'CheckCircle', 'ArrowRight',
  'Search', 'Menu', 'X', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
  'Home', 'User', 'Settings', 'Mail', 'Phone', 'MapPin', 'Calendar',
  'Star', 'Heart', 'Share', 'Download', 'Upload', 'Edit', 'Trash', 'Plus',
  'Minus', 'Eye', 'EyeOff', 'Lock', 'Unlock', 'Shield', 'AlertCircle',
  'Info', 'Check', 'XCircle', 'Clock', 'Refresh', 'Play', 'Pause', 'Stop'
];

function fixMissingImports(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's not a React component file
    if (!content.includes('React') && !content.includes('tsx')) {
      return false;
    }

    // Find all icon names used in the file
    const usedIcons = [];
    iconImports.forEach(icon => {
      const regex = new RegExp(`\\b${icon}\\b`, 'g');
      if (regex.test(content)) {
        usedIcons.push(icon);
      }
    });

    if (usedIcons.length === 0) {
      return false;
    }

    // Check if lucide-react is already imported
    const hasLucideImport = content.includes("from 'lucide-react'");
    
    if (hasLucideImport) {
      // Update existing import
      const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/;
      const match = content.match(importRegex);
      
      if (match) {
        const existingImports = match[1].split(',').map(imp => imp.trim());
        const allImports = [...new Set([...existingImports, ...usedIcons])].sort();
        const newImport = `import { ${allImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importRegex, newImport);
      }
    } else {
      // Add new import
      const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
      
      // Find the best place to insert the import
      if (content.includes("'use client';")) {
        content = content.replace(/'use client';\n/, `'use client';\n${newImport}`);
      } else if (content.includes('import React')) {
        content = content.replace(/import React[^;]+;\n/, `import React[^;]+;\n${newImport}`);
      } else {
        content = newImport + content;
      }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed imports in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let successCount = 0;
let totalCount = files.length;

console.log(`Checking ${totalCount} files for missing icon imports...`);

for (const filePath of files) {
  if (fixMissingImports(filePath)) {
    successCount++;
  }
}

console.log(`\nCompleted: ${successCount} files updated with missing imports`);