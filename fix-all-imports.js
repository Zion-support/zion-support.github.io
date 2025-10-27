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

    // Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n/, '');
      modified = true;
    }

    // Remove unused Link imports
    if (content.includes("import Link from 'next/link';") && !content.includes('<Link')) {
      content = content.replace(/import Link from 'next\/link';\n/, '');
      modified = true;
    }

    // Remove unused ArrowRight imports
    if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('ArrowRight')) {
      content = content.replace(/import { ArrowRight } from 'lucide-react';\n/, '');
      modified = true;
    }

    // Fix large icon imports - find all icon imports and check which ones are actually used
    const iconImportPattern = /import { ([^}]+) } from 'lucide-react';\n/g;
    let match;
    const matches = [];
    
    // Find all icon import matches
    while ((match = iconImportPattern.exec(content)) !== null) {
      matches.push({
        fullMatch: match[0],
        icons: match[1].split(',').map(icon => icon.trim()),
        start: match.index,
        end: match.index + match[0].length
      });
    }

    // Process matches in reverse order to avoid index issues
    for (let i = matches.length - 1; i >= 0; i--) {
      const match = matches[i];
      const usedIcons = match.icons.filter(icon => {
        // Check if icon is used in JSX or as a component
        return content.includes(icon) && (
          content.includes(`<${icon}`) || 
          content.includes(`{${icon}`) ||
          content.includes(`icon: ${icon}`) ||
          content.includes(`icon={${icon}`)
        );
      });
      
      if (usedIcons.length === 0) {
        // Remove the entire import line
        content = content.substring(0, match.start) + content.substring(match.end);
        modified = true;
      } else if (usedIcons.length < match.icons.length) {
        // Keep only used icons
        const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
        content = content.substring(0, match.start) + newImport + content.substring(match.end);
        modified = true;
      }
    }

    // Fix component export issues
    if (content.includes('export default function') && !content.includes('export default')) {
      // This is already handled by the function declaration
    }

    // Remove unused interface declarations
    const interfacePattern = /interface (\w+Props)[\s\S]*?\n\}/g;
    let interfaceMatch;
    while ((interfaceMatch = interfacePattern.exec(content)) !== null) {
      const interfaceName = interfaceMatch[1];
      if (!content.includes(interfaceName)) {
        content = content.replace(interfaceMatch[0], '');
        modified = true;
      }
    }

    // Fix missing type declarations - remove unused type imports
    if (content.includes("import { ") && content.includes(" } from '../types/")) {
      const typeImportPattern = /import { ([^}]+) } from '\.\.\/types\/[^']+';\n/g;
      let typeMatch;
      while ((typeMatch = typeImportPattern.exec(content)) !== null) {
        const types = typeMatch[1].split(',').map(type => type.trim());
        const usedTypes = types.filter(type => content.includes(type));
        
        if (usedTypes.length === 0) {
          content = content.replace(typeMatch[0], '');
          modified = true;
        } else if (usedTypes.length < types.length) {
          const newImport = `import { ${usedTypes.join(', ')} } from '${typeMatch[0].match(/from '[^']+'/)[0].slice(6, -2)}';\n`;
          content = content.replace(typeMatch[0], newImport);
          modified = true;
        }
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

// Function to recursively find all .tsx and .ts files
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

// Main execution
console.log('Starting to fix all unused imports...');

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