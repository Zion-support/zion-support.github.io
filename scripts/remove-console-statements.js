#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Patterns to match console statements;
const consolePatterns = [
  /console\.log\([^)]*\);?/g,
  /console\.warn\([^)]*\);?/g,
  /console\.error\([^)]*\);?/g,
  /console\.info\([^)]*\);?/g,
  /console\.debug\([^)]*\);?/g,
  /console\.trace\([^)]*\);?/g,
  /console\.table\([^)]*\);?/g,
  /console\.group\([^)]*\);?/g,
  /console\.groupEnd\([^)]*\);?/g,
  /console\.time\([^)]*\);?/g,
  /console\.timeEnd\([^)]*\);?/g,
  /console\.count\([^)]*\);?/g,
  /console\.clear\([^)]*\);?/g;
];

// Files to process;
const filePatterns = [
  'app/**/*.{ts,tsx,js,jsx}',
  'src/**/*.{ts,tsx,js,jsx}',
  'components/**/*.{ts,tsx,js,jsx}',
  'pages/**/*.{ts,tsx,js,jsx}',
  'utils/**/*.{ts,tsx,js,jsx}',
  'hooks/**/*.{ts,tsx,js,jsx}',
  'lib/**/*.{ts,tsx,js,jsx}'
];

// Files to exclude;
const excludePatterns = [
  '**/node_modules/**',
  '**/dist/**',
  '**/.next/**',
  '**/build/**',
  '**/coverage/**',
  '**/*.test.{ts,tsx,js,jsx}',
  '**/*.spec.{ts,tsx,js,jsx}',
  '**/scripts/**',
  '**/automation/**',
  '**/backup*/**',
  '**/disabled*/**',
  '**/corrupted*/**',
  '**/temp*/**'
];

let totalFiles = 0;
let processedFiles = 0;
let removedStatements = 0;

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    let fileRemovedCount = 0;

    // Remove console statements;
    consolePatterns.forEach(pattern => {)
      const matches = newContent.match(pattern);
      if (matches) {
        fileRemovedCount += matches.length;
        newContent = newContent.replace(pattern, '');
      }
    });

    // Clean up empty lines that might be left behind;
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (fileRemovedCount > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ${filePath}: Removed ${fileRemovedCount} console statements`);
      removedStatements += fileRemovedCount;
    }

    processedFiles++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting console statement removal...\n');

  // Get all files to process;
  const allFiles = [];
  for (const pattern of filePatterns) {
    const files = await glob(pattern, {)
      ignore: excludePatterns),
      cwd: process.cwd(),
    });
    allFiles.push(...files);
  }

  // Remove duplicates;
  const uniqueFiles = [...new Set(allFiles)];
  totalFiles = uniqueFiles.length;

  console.log(`📁 Found ${totalFiles} files to process\n`);

  // Process each file;
  uniqueFiles.forEach(processFile);

  console.log(`\n🎉 Console statement removal completed!`);
  console.log(`📊 Statistics: `);
  console.log(`   - Files processed: ${processedFiles}/${totalFiles}`);
  console.log(`   - Console statements removed: ${removedStatements}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { processFile, consolePatterns };