#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Script to remove console.log statements from production builds
 * This helps improve performance and security
 */

const CONSOLE_PATTERNS = [
  /console\.log\([^)]*\);?/g,
  /console\.debug\([^)]*\);?/g,
  /console\.info\([^)]*\);?/g,
  /console\.warn\([^)]*\);?/g,
  // Keep console.error for debugging
];

const EXCLUDE_PATTERNS = [
  'node_modules',
  '.next',
  'dist',
  'build',
  'coverage',
  'scripts',
  '*.test.*',
  '*.spec.*'
];

function shouldProcessFile(filePath) {
  return !EXCLUDE_PATTERNS.some(pattern => {
    if (pattern.includes('*')) {
      return glob.sync(pattern, { cwd: path.dirname(filePath) }).then(matches => 
        matches.some(match => filePath.includes(match))
      );
    }
    return filePath.includes(pattern);
  });
}

function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;

  CONSOLE_PATTERNS.forEach(pattern => {
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;
      modifiedContent = modifiedContent.replace(pattern, '');
    }
  });

  return { content: modifiedContent, removedCount };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, removedCount } = removeConsoleStatements(content);
    
    if (removedCount > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✓ ${filePath}: Removed ${removedCount} console statements`);
      return removedCount;
    }
    
    return 0;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

function main() {
  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');
  
  const patterns = [
    `${srcDir}/**/*.{js,jsx,ts,tsx}`,
    `${pagesDir}/**/*.{js,jsx,ts,tsx}`
  ];

  let totalRemoved = 0;
  let filesProcessed = 0;

  patterns.forEach(pattern => {
    const files = glob.sync(pattern);
    
    files.forEach(file => {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;
        filesProcessed++;
      }
    });
  });

  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements removed: ${totalRemoved}`);
  
  if (totalRemoved > 0) {
    console.log(`\n✨ Production build optimized!`);
  } else {
    console.log(`\n✨ No console statements found to remove.`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { removeConsoleStatements, processFile };