#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all .tsx files in src/components
const findFiles = () => {
  try {
    const result = execSync('find src/components -name "*.tsx"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
};

// Fix common JSX syntax issues
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed <br tags
    const brRegex = /<br\s+<span/g;
    if (brRegex.test(content)) {
      content = content.replace(brRegex, '<br/> <span');
      modified = true;
    }

    // Fix missing commas in object literals (icon: '>' followed by newline)
    const iconRegex = /icon:\s*'>'\s*\n\s*gradient:/g;
    if (iconRegex.test(content)) {
      content = content.replace(iconRegex, "icon: '>',\n      gradient:");
      modified = true;
    }

    // Fix missing commas in object literals (icon: '>' followed by newline and other properties)
    const iconRegex2 = /icon:\s*'>'\s*\n\s*[a-zA-Z]/g;
    if (iconRegex2.test(content)) {
      content = content.replace(iconRegex2, (match) => {
        return match.replace(/'/g, "',");
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const files = findFiles();
let fixedCount = 0;

console.log(`Found ${files.length} .tsx files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);