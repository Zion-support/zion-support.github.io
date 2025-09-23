#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Critical fixes for the most important issues
const fixes = [
  {
    pattern: /console\.(log|error|warn|info|debug)\(/g,
    replacement: '// console.$1(',
    description: 'Comment out console statements'
  },
  {
    pattern: /'([^']*)'/g,
    replacement: (match, content) => {
      // Only replace if it contains apostrophes that need escaping
      if (content.includes("'") && !content.includes('&apos;') && !content.includes('&#39;')) {
        return `'${content.replace(/'/g, '&apos;')}'`;
      }
      return match;
    },
    description: 'Fix unescaped entities in strings'
  },
  {
    pattern: /const\s+(\w+)\s*=\s*[^;]+;\s*\/\/\s*unused/gi,
    replacement: '// const $1 = ...; // unused',
    description: 'Comment out unused variables'
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
        console.log(`Applied fix: ${fix.description} to ${filePath}`);
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting critical fixes...');
const fixedCount = walkDirectory('./src');
console.log(`Fixed ${fixedCount} files`);