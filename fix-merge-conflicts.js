#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesToFix = [
  'src/about/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-ml-platform/page.tsx',
  'src/ai-project-manager/page.tsx',
  'src/ai-services/page.tsx',
  'src/ai-writing-assistant/page.tsx',
  'src/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  'src/it-services/page.tsx',
  'src/offline/page.tsx',
  'src/page-optimized.tsx',
  'src/service-template.tsx',
  'src/setupTests.tsx',
  'src/sitemap/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> origin\/cursor\/fix-errors-and-merge-to-main-[a-f0-9]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> origin\/cursor\/fix-errors-and-merge-to-main-[a-f0-9]+/g, '');
    
    // Clean up any extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixMergeConflicts);

console.log('Merge conflict fixing completed!');