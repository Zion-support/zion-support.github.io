#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Configuration
const CONFIG = {
  // Directories to clean
  directories: [
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  // Exclude patterns
  exclude: [
    '**/node_modules/**',
    '**/build/**',
    '**/dist/**',
    '**/.next/**',
    '**/scripts/**',
    '**/automation/**',
    '**/*.test.*',
    '**/*.spec.*',
  ],
  // Console patterns to remove in production
  consolePatterns: [
    /console\.log\([^)]*\);?/g,
    /console\.debug\([^)]*\);?/g,
    /console\.info\([^)]*\);?/g,
  ],
  // Console patterns to keep (errors and warnings)
  keepPatterns: [
    /console\.error\(/g,
    /console\.warn\(/g,
  ],
};

function shouldKeepConsoleStatement(line) {
  return CONFIG.keepPatterns.some(pattern => pattern.test(line));
}

function cleanConsoleLogs(content) {
  let cleaned = content;
  let removedCount = 0;

  CONFIG.consolePatterns.forEach(pattern => {
    const matches = cleaned.match(pattern);
    if (matches) {
      matches.forEach(match => {
        // Check if this console statement should be kept
        if (!shouldKeepConsoleStatement(match)) {
          cleaned = cleaned.replace(match, '');
          removedCount++;
        }
      });
    }
  });

  return { cleaned, removedCount };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { cleaned, removedCount } = cleanConsoleLogs(content);

    if (removedCount > 0) {
      fs.writeFileSync(filePath, cleaned, 'utf8');
      console.log(`✅ Cleaned ${removedCount} console statements from ${filePath}`);
      return removedCount;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
  return 0;
}

async function main() {
  console.log('🧹 Starting console log cleanup...\n');

  let totalFiles = 0;
  let totalRemoved = 0;

  for (const pattern of CONFIG.directories) {
    const files = await glob(pattern, {
      ignore: CONFIG.exclude,
    });

    for (const file of files) {
      totalFiles++;
      const removed = processFile(file);
      totalRemoved += removed;
    }
  }

  console.log(`\n📊 Cleanup Summary:`);
  console.log(`   Files processed: ${totalFiles}`);
  console.log(`   Console statements removed: ${totalRemoved}`);
  console.log(`   Console errors/warnings preserved: ✅`);
  
  if (totalRemoved > 0) {
    console.log('\n✨ Console log cleanup completed successfully!');
  } else {
    console.log('\n✨ No console logs found to clean.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { cleanConsoleLogs, processFile };