#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all TypeScript files that might have lucide-react import issues
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

function fixLucideImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has lucide-react import issues
    if (!content.includes('lucide-react')) {
      return;
    }
    
    // Pattern to match incorrect lucide-react imports
    const incorrectImportPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];/g;
    
    let hasChanges = false;
    content = content.replace(incorrectImportPattern, (match, imports) => {
      hasChanges = true;
      // Extract individual imports
      const importList = imports.split(',').map(imp => imp.trim()).filter(imp => imp);
      
      // Create individual import statements
      const individualImports = importList.map(imp => `import ${imp} from 'lucide-react';`).join('\n');
      
      return individualImports;
    });
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed lucide-react imports in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all TypeScript files
const tsxFiles = findTsxFiles(path.join(__dirname, 'app'));
tsxFiles.forEach(fixLucideImports);

console.log('Lucide-react import fixing completed!');