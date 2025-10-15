#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to resolve merge conflicts by keeping the newer timestamp
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace merge conflict markers with the newer timestamp (after =======)
    content = content.replace(
      /<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> [a-f0-9]+/gs,
      '$1'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
  }
}

// Resolve conflicts in the specific files
const filesToFix = [
  '/workspace/performance-report.json',
  '/workspace/public/sitemap.xml'
];

console.log('🔧 Resolving merge conflicts...');

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    resolveConflicts(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('✅ Merge conflicts resolved!');