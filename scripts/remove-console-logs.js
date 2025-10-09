#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Files to exclude from console.log removal
const excludePatterns = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/.next/**',
  '**/coverage/**',
  '**/__tests__/**',
  '**/*.test.*',
  '**/*.spec.*',
  '**/scripts/**',
  '**/backup*/**',
  '**/disabled*/**',
  '**/api-disabled/**',
  '**/api.disabled/**'
];

// Get all TypeScript and JavaScript files
const files = await glob('**/*.{ts,tsx,js,jsx}', {
  ignore: excludePatterns,
  cwd: process.cwd()
});

let totalRemoved = 0;
let filesProcessed = 0;

console.log('🧹 Removing console.log statements from production code...\n');

for (const file of files) {
  try {
    const filePath = path.resolve(file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log, console.warn, console.error statements
    // But keep console.error in development mode checks
    const originalContent = content;
    
    let newContent = content
      // Remove standalone console.log statements
      .replace(/^\s*console\.log\([^)]*\);\s*$/gm, '')
      // Remove console.warn statements
      .replace(/^\s*console\.warn\([^)]*\);\s*$/gm, '')
      // Remove console.info statements
      .replace(/^\s*console\.info\([^)]*\);\s*$/gm, '')
      // Remove console.debug statements
      .replace(/^\s*console\.debug\([^)]*\);\s*$/gm, '')
      // Remove console.log in catch blocks (but keep error handling)
      .replace(/console\.log\([^)]*\);\s*$/gm, '')
      // Remove console.log in then/catch chains
      .replace(/\.then\([^)]*console\.log[^)]*\)/g, '.then(() => {})')
      .replace(/\.catch\([^)]*console\.log[^)]*\)/g, '.catch(() => {})')
      // Clean up empty lines
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Remove empty catch blocks
      .replace(/catch\s*\(\s*[^)]*\s*\)\s*{\s*}\s*/g, 'catch () {}');

    // Count removed statements
    const removedCount = (originalContent.match(/console\.(log|warn|info|debug)\(/g) || []).length;
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern, '');
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      // console.log(`✅ Cleaned console logs from: ${filePath}`);
      return true;
    }
    
    filesProcessed++;
  } catch (error) {
    // console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript and JavaScript files
async function processFiles() {
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'src/**/*.{ts,tsx,js,jsx}',
  ];
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/*.d.ts',
        '**/__tests__/**',
        '**/test/**',
        '**/*.test.*',
        '**/*.spec.*',
      ]
    });
    
    for (const file of files) {
      totalFiles++;
      if (removeConsoleLogs(file)) {
        modifiedFiles++;
      }
    }
  }
  
  // console.log(`\n📊 Summary:`);
  // console.log(`   Total files processed: ${totalFiles}`);
  // console.log(`   Files modified: ${modifiedFiles}`);
  // console.log(`   Files unchanged: ${totalFiles - modifiedFiles}`);
  
  if (modifiedFiles > 0) {
    // console.log(`\n✨ Console logs removed successfully!`);
  } else {
    // console.log(`\n✨ No console logs found to remove.`);
  }
}

// Run the script
// console.log('🧹 Removing console logs for production...\n');
processFiles().catch(console.error);

export { removeConsoleLogs, processFiles };
