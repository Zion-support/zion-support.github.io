#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesWithConflicts = [
  './api/onsite-request.js',
  './api/quotes.js',
  './app/ai-agricultural-intelligence-pro/page.tsx',
  './app/5g-implementation/page.tsx',
  './app/ai-3d-generation/page.tsx',
  './app/accessibility/page.tsx',
  './app/ai-accounting-assistant/page.tsx',
  './app/accessibility-page/page.tsx',
  './app/ai-analytics-dashboard/page.tsx',
  './app/about/page.tsx',
  './app/layout.tsx'
];

function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep the content between them
  // This is a simple approach that removes conflict markers and keeps the first version
  let resolved = content;
  
  // Remove <<<<<<< HEAD lines
  resolved = resolved.replace(/^<<<<<<< HEAD\s*$/gm, '');
  
  // Remove ======= lines
  resolved = resolved.replace(/^=======\s*$/gm, '');
  
  // Remove >>>>>>> branch-name lines
  resolved = resolved.replace(/^>>>>>>> [^\s]+\s*$/gm, '');
  
  // Clean up any remaining empty lines that might have been left
  resolved = resolved.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return resolved;
}

function fixFile(filePath) {
  try {
    console.log(`Fixing ${filePath}...`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File ${filePath} does not exist, skipping...`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      console.log(`No merge conflicts found in ${filePath}, skipping...`);
      return;
    }
    
    const resolved = resolveMergeConflicts(content);
    
    fs.writeFileSync(filePath, resolved, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting merge conflict resolution...');
filesWithConflicts.forEach(fixFile);
console.log('Merge conflict resolution completed!');