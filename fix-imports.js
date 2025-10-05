#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Common icon mappings for lucide-react
const iconMappings = {
  'Log': 'FileText',
  'BarChart3': 'BarChart3',
  'Cog': 'Settings',
  'Globe': 'Globe',
  'BookOpen': 'BookOpen',
  'Share2': 'Share2',
  'Bookmark': 'Bookmark',
  'Bot': 'Bot',
  'Gauge': 'Gauge',
  'ShieldCheck': 'ShieldCheck',
  'ListChecks': 'CheckSquare',
  'FileWarning': 'AlertTriangle',
  'Calculator': 'Calculator',
  'Factory': 'Factory',
  'Cogs': 'Settings',
  'Sparkles': 'Sparkles',
  'ShoppingBag': 'ShoppingBag',
  'Lock': 'Lock',
  'Atom': 'Atom',
  'Satellite': 'Satellite',
  'Calendar': 'Calendar',
  'Clock': 'Clock',
  'User': 'User',
  'Brain': 'Brain',
  'Zap': 'Zap',
  'Shield': 'Shield',
  'TrendingUp': 'TrendingUp',
  'CheckCircle': 'CheckCircle',
  'ArrowLeft': 'ArrowLeft',
  'ArrowRight': 'ArrowRight',
  'Users': 'Users',
  'DollarSign': 'DollarSign',
  'Award': 'Award',
  'Target': 'Target'
};

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix console.Log to console.log
    if (content.includes('console.Log')) {
      content = content.replace(/console\.Log/g, 'console.log');
      modified = true;
    }

    // Fix lucide-react imports
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const fixedImports = imports.map(imp => {
        const cleanImp = imp.trim();
        if (iconMappings[cleanImp]) {
          return iconMappings[cleanImp];
        }
        return cleanImp;
      });
      
      if (JSON.stringify(imports) !== JSON.stringify(fixedImports)) {
        const newImport = `import { ${fixedImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImport);
        modified = true;
      }
    }

    // Fix duplicate Link imports
    const linkImports = content.match(/import\s+Link\s+from\s+['"][^'"]+['"];?\s*\n.*import\s+Link\s+from\s+['"][^'"]+['"];?/g);
    if (linkImports) {
      content = content.replace(/import\s+Link\s+from\s+['"][^'"]+['"];?\s*\n.*import\s+Link\s+from\s+['"][^'"]+['"];?/g, (match) => {
        const lines = match.split('\n');
        return lines[0]; // Keep only the first import
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find and fix all TypeScript files
const appDir = path.join(process.cwd(), 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixImportsInFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);