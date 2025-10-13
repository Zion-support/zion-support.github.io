#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Configuration
const isProduction = process.env.NODE_ENV === 'production';

// Console log patterns to replace
const consolePatterns = [
  {
    pattern: /console\.log\([^)]*\);?/g,
    replacement: isProduction ? '' : 'console.log($1);'
  },
  {
    pattern: /console\.error\([^)]*\);?/g,
    replacement: 'console.error($1);' // Keep errors in production
  },
  {
    pattern: /console\.warn\([^)]*\);?/g,
    replacement: 'console.warn($1);' // Keep warnings in production
  },
  {
    pattern: /console\.info\([^)]*\);?/g,
    replacement: isProduction ? '' : 'console.info($1);'
  },
  {
    pattern: /console\.debug\([^)]*\);?/g,
    replacement: isProduction ? '' : 'console.debug($1);'
  }
];

// Files to process
const filePatterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'utils/**/*.ts',
  'utils/**/*.tsx'
];

async function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply console log replacements
    consolePatterns.forEach(({ pattern, replacement }) => {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Processed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🧹 Removing console logs from production code...');
  
  for (const pattern of filePatterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      await processFile(file);
    }
  }

  console.log('✨ Console log cleanup completed!');
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { processFile, consolePatterns };