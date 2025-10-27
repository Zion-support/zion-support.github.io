#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove unused React imports (line 2)
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n/, '');
      modified = true;
    }

    // Remove unused Link imports (line 4)
    if (content.includes("import Link from 'next/link';") && !content.includes('<Link')) {
      content = content.replace(/import Link from 'next\/link';\n/, '');
      modified = true;
    }

    // Remove unused ArrowRight imports (line 5)
    if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('ArrowRight')) {
      content = content.replace(/import { ArrowRight } from 'lucide-react';\n/, '');
      modified = true;
    }

    // Remove unused icon imports from lucide-react
    const iconPattern = /import { ([^}]+) } from 'lucide-react';\n/g;
    let match;
    while ((match = iconPattern.exec(content)) !== null) {
      const icons = match[1].split(',').map(icon => icon.trim());
      const usedIcons = icons.filter(icon => content.includes(icon));
      
      if (usedIcons.length === 0) {
        content = content.replace(match[0], '');
        modified = true;
      } else if (usedIcons.length < icons.length) {
        const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
        content = content.replace(match[0], newImport);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting to fix unused imports...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files.`);

// Run type check to verify fixes
console.log('Running type check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('Type check passed!');
} catch (error) {
  console.log('Type check still has errors, but we fixed many unused imports.');
}