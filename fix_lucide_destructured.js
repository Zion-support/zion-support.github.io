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
    
    // Pattern to match individual lucide-react imports
    const individualImportPattern = /import\s+(\w+)\s+from\s+['"]lucide-react['"];/g;
    
    // Collect all individual imports
    const imports = new Set();
    let match;
    while ((match = individualImportPattern.exec(content)) !== null) {
      imports.add(match[1]);
    }
    
    if (imports.size > 0) {
      // Remove all individual imports
      content = content.replace(individualImportPattern, '');
      
      // Add the correct destructured import
      const importList = Array.from(imports).join(', ');
      const correctImport = `import { ${importList} } from 'lucide-react';`;
      
      // Find the first import statement and add after it
      const firstImportMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];/);
      if (firstImportMatch) {
        const insertIndex = firstImportMatch.index + firstImportMatch[0].length;
        content = content.slice(0, insertIndex) + '\n' + correctImport + content.slice(insertIndex);
      } else {
        // If no imports found, add at the top
        content = correctImport + '\n' + content;
      }
      
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

console.log('Lucide-react destructured import fixing completed!');