#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Common JSX syntax fixes
const fixes = [
  // Fix unclosed h1 tags
  {
    pattern: /<h1([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<h1$1>$2</h1>',
    description: 'Fix unclosed h1 tags'
  },
  // Fix unclosed h2 tags
  {
    pattern: /<h2([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<h2$1>$2</h2>',
    description: 'Fix unclosed h2 tags'
  },
  // Fix unclosed h3 tags
  {
    pattern: /<h3([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<h3$1>$2</h3>',
    description: 'Fix unclosed h3 tags'
  },
  // Fix unclosed p tags
  {
    pattern: /<p([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<p$1>$2</p>',
    description: 'Fix unclosed p tags'
  },
  // Fix unclosed div tags
  {
    pattern: /<div([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<div$1>$2</div>',
    description: 'Fix unclosed div tags'
  },
  // Fix unclosed span tags
  {
    pattern: /<span([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g,
    replacement: '<span$1>$2</span>',
    description: 'Fix unclosed span tags'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`Applied ${fix.description} to ${filePath}`);
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
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

// Main execution
console.log('🔧 Starting JSX syntax fixes...');

const tsxFiles = findTsxFiles('/workspace');
let fixedCount = 0;

tsxFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`✅ Fixed ${fixedCount} files`);
console.log('🎉 JSX syntax fixes completed!');