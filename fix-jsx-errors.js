#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX/TSX error patterns to fix
const fixes = [
  // Fix missing commas in array elements
  {
    pattern: /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*{)/g,
    replacement: '$1,\n$2,\n$3'
  },
  // Fix missing commas after object properties
  {
    pattern: /(\s+description:\s*'[^']+',)\s*(\n\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*{)/g,
    replacement: '$1\n$2,\n$3,\n$4'
  },
  // Fix extra semicolons and brackets
  {
    pattern: /;\s*;\s*\]\s*;\s*\]\s*;/g,
    replacement: '];'
  },
  {
    pattern: /;\s*\]\s*;\s*\]\s*;/g,
    replacement: '];'
  },
  // Fix missing commas in JSX attributes
  {
    pattern: /(\w+)\s*=\s*\{([^}]+)\}\s*(\w+)\s*=/g,
    replacement: '$1={$2}, $3='
  },
  // Fix unclosed JSX tags - add missing closing tags
  {
    pattern: /<(\w+)([^>]*)>\s*([^<]*)\s*$/gm,
    replacement: (match, tag, attrs, content) => {
      if (content.trim() && !match.includes('</')) {
        return `<${tag}${attrs}>${content}</${tag}>`;
      }
      return match;
    }
  },
  // Fix missing commas in object properties
  {
    pattern: /(\s+title:\s*'[^']+',)\s*(\n\s+description:\s*'[^']+',)\s*(\n\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*{)/g,
    replacement: '$1\n$2\n$3,\n$4,\n$5'
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
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });

  console.log(`Found ${files.length} TSX files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);