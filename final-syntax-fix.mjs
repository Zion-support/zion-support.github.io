#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

console.log('🚀 Starting final syntax fix...');

const finalFixes = [
  // Fix missing commas before percentage
  {
    pattern: /(\w+)\s*percentage:/g,
    replacement: '$1, percentage:'
  },
  // Fix missing commas in object arrays
  {
    pattern: /(\w+)\s*}\s*{\s*name:/g,
    replacement: '$1}, { name:'
  },
  // Fix missing commas in object arrays with type
  {
    pattern: /(\w+)\s*}\s*{\s*type:/g,
    replacement: '$1}, { type:'
  },
  // Fix missing commas after arrays
  {
    pattern: /(\]\s*)([a-zA-Z_][a-zA-Z0-9_]*\s*:\s*\[)/g,
    replacement: '$1,$2'
  },
  // Fix comma-separated words in quotes
  {
    pattern: /'([^']*),\s*([^']*),\s*([^']*)'/g,
    replacement: (match, p1, p2, p3) => {
      const joined = p1 + p2 + p3;
      return `'${joined}'`;
    }
  },
  // Fix specific patterns
  {
    pattern: /Dire,\s*c,\s*t/g,
    replacement: 'Direct'
  },
  {
    pattern: /Goog,\s*l,\s*e/g,
    replacement: 'Google'
  },
  {
    pattern: /Soci,\s*a,\s*l\s*Med,\s*i,\s*a/g,
    replacement: 'Social Media'
  },
  {
    pattern: /Ema,\s*i,\s*l/g,
    replacement: 'Email'
  },
  {
    pattern: /Referr,\s*a,\s*l/g,
    replacement: 'Referral'
  },
  {
    pattern: /Deskt,\s*o,\s*p/g,
    replacement: 'Desktop'
  },
  {
    pattern: /Mobi,\s*l,\s*e/g,
    replacement: 'Mobile'
  },
  {
    pattern: /Tabl,\s*e,\s*t/g,
    replacement: 'Tablet'
  },
  {
    pattern: /baseMultiplier\)percentage:/g,
    replacement: 'baseMultiplier), percentage:'
  }
];

async function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let changes = 0;

    for (const fix of finalFixes) {
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
    const files = await glob('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
    
    let fixedCount = 0;
    for (const file of files) {
      const wasFixed = await fixFile(file);
      if (wasFixed) {
        fixedCount++;
      }
    }

    console.log(`✅ Fixed ${fixedCount} files`);
    console.log('📊 Final syntax fix completed!');
  } catch (error) {
    console.error('❌ Error during final syntax fix:', error);
    process.exit(1);
  }
}

main();