#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesWithConflicts = [
  '/workspace/vite.config.ts',
  '/workspace/tailwind.config.js',
  '/workspace/main.tsx',
  '/workspace/jest.config.js',
  '/workspace/app/contact/page.tsx',
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/LoadingStates.tsx',
  '/workspace/app/components/OptimizedImage.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/privacy/page.tsx',
  '/workspace/app/demo/page.tsx',
  '/workspace/app/page.tsx',
  '/workspace/app/pricing/page.tsx',
  '/workspace/app/tutorials/page.tsx',
  '/workspace/app/terms/page.tsx',
  '/workspace/app/support/page.tsx',
  '/workspace/app/contexts/AnalyticsContext.tsx',
  '/workspace/app/about/page.tsx',
  '/workspace/app/services/page.tsx',
  '/workspace/app/blog/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      console.log(`No merge conflicts in ${filePath}`);
      return;
    }
    
    console.log(`Fixing merge conflicts in ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log('Merge conflict fixing completed!');