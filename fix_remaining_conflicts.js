#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// List of files that still have conflicts
const filesToFix = [
  'app/zion-ai-database-optimizer/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/about/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-data-analytics/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the HEAD version
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g;
    
    content = content.replace(conflictRegex, (match, headContent, otherContent) => {
      modified = true;
      return headContent;
    });
    
    // Also handle cases where there might be incomplete conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  let totalFixed = 0;

  for (const file of filesToFix) {
    if (fixMergeConflicts(file)) {
      totalFixed++;
    }
  }

  console.log(`\nTotal files fixed: ${totalFixed}`);

  // Check for any remaining conflict markers
  const allFiles = await glob('**/*.{ts,tsx,js,jsx}', { 
    cwd: process.cwd(),
    ignore: ['node_modules/**', '.next/**', 'dist/**', '*.js']
  });

  let remainingConflicts = 0;

  for (const file of allFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`Warning: ${file} still contains conflict markers`);
        remainingConflicts++;
      }
    } catch (error) {
      // Ignore read errors
    }
  }

  if (remainingConflicts === 0) {
    console.log('✅ All merge conflicts have been resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts} files still contain conflict markers`);
  }
}

main().catch(console.error);