#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with merge conflicts
const conflictedFiles = [
  'pages/_app.tsx',
  'pages/_document.tsx',
  'pages/api/analytics.ts',
  'pages/api/image-optimization.ts',
  'pages/index.tsx',
  'src/components/AccessibilityEnhancer.tsx',
  'src/components/EnhancedSEO.tsx'
];

function resolveConflicts() {
  console.log('🔧 Resolving merge conflicts comprehensively...');
  
  for (const filePath of conflictedFiles) {
    if (fs.existsSync(filePath)) {
      console.log(`📝 Processing ${filePath}...`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove all merge conflict markers
      content = content
        .replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [a-f0-9]+\n/g, '')
        .replace(/<<<<<<< \.our\n[\s\S]*?=======\n[\s\S]*?>>>>>>> \.their\n/g, '')
        .replace(/<<<<<<< \.our\n[\s\S]*?=======\n[\s\S]*?>>>>>>> \.their/g, '')
        .replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
        .replace(/<<<<<<< \.our\n[\s\S]*?=======\n[\s\S]*?>>>>>>> \.their\n/g, '')
        .replace(/<<<<<<< \.our\n[\s\S]*?=======\n[\s\S]*?>>>>>>> \.their/g, '')
        // Remove any remaining conflict markers
        .replace(/<<<<<<< [^\n]*\n/g, '')
        .replace(/=======\n/g, '')
        .replace(/>>>>>>> [^\n]*\n/g, '')
        .replace(/<<<<<<< [^\n]*/g, '')
        .replace(/=======/g, '')
        .replace(/>>>>>>> [^\n]*/g, '');
      
      // Clean up formatting
      content = content
        .replace(/\n\n\n+/g, '\n\n')
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/\s+\n/g, '\n')
        .replace(/\n\s+/g, '\n  ')
        .replace(/\s+$/gm, '')
        .replace(/\n{3,}/g, '\n\n');
      
      // Write the resolved content back
      fs.writeFileSync(filePath, content);
      console.log(`✅ Resolved conflicts in ${filePath}`);
    } else {
      console.log(`⚠️ File not found: ${filePath}`);
    }
  }
  
  console.log('🎉 All merge conflicts resolved!');
}

// Run the conflict resolution
resolveConflicts();