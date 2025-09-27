#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

console.log('🚀 Starting final syntax cleanup...');

// Additional patterns to fix remaining syntax issues
const additionalFixes = [
  // Fix Math.floor with comma-separated numbers
  {
    pattern: /Math\.floor\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\s*\*\s*([a-zA-Z_][a-zA-Z0-9_]*)\)/g,
    replacement: (match, p1, p2, p3, p4) => {
      const number = parseInt(p1 + p2 + p3);
      return `Math.floor(${number} * ${p4})`;
    }
  },
  // Fix comma-separated numbers in general
  {
    pattern: /([0-9]+),\s*([0-9]+),\s*([0-9]+)/g,
    replacement: (match, p1, p2, p3) => {
      return p1 + p2 + p3;
    }
  },
  // Fix comma-separated numbers in calculations
  {
    pattern: /([0-9]+),\s*([0-9]+)\s*\+\s*\(/g,
    replacement: (match, p1, p2) => {
      return p1 + p2 + ' + (';
    }
  },
  // Fix Ma, th.random patterns
  {
    pattern: /Ma,\s*th\.random/g,
    replacement: 'Math.random'
  },
  // Fix missing commas in object literals
  {
    pattern: /(\s*}\s*)([a-zA-Z_][a-zA-Z0-9_]*\s*:\s*\{)/g,
    replacement: '$1,$2'
  },
  // Fix missing commas after object properties
  {
    pattern: /(\s*}\s*)([a-zA-Z_][a-zA-Z0-9_]*\s*:\s*\[)/g,
    replacement: '$1,$2'
  },
  // Fix baseMultipli, e, r patterns
  {
    pattern: /baseMultipli,\s*e,\s*r/g,
    replacement: 'baseMultiplier'
  },
  // Fix specific syntax issues
  {
    pattern: /}\s*traffic:\s*\{/g,
    replacement: '},traffic: {'
  }
];

async function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let changes = 0;

    for (const fix of additionalFixes) {
      const originalContent = fixedContent;
      if (typeof fix.replacement === 'function') {
        fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
      } else {
        fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
      }
      if (fixedContent !== originalContent) {
        changes++;
      }
    }

    if (changes > 0) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed ${filePath} (${changes} patterns)`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    // Find all TypeScript and JavaScript files
    const files = await glob('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
    
    let fixedCount = 0;
    for (const file of files) {
      const wasFixed = await fixFile(file);
      if (wasFixed) {
        fixedCount++;
      }
    }

    console.log(`✅ Fixed ${fixedCount} files`);
    console.log('📊 Final syntax cleanup completed!');
  } catch (error) {
    console.error('❌ Error during final syntax cleanup:', error);
    process.exit(1);
  }
}

main();