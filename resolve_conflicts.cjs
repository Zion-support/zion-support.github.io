#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with conflicts
const conflictedFiles = [
  'components/layout/MainLayout.tsx',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/index.tsx',
  'pages/it-services.tsx',
  'pages/micro-saas.tsx',
  'pages/privacy.tsx',
  'scripts/remove-console-logs.cjs'
];

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> origin\/[^\n]*\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> origin\/[^\n]*\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Resolving merge conflicts...\n');

let resolved = 0;
let failed = 0;

conflictedFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (resolveConflicts(file)) {
      resolved++;
    } else {
      failed++;
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

console.log(`\n📊 Summary: ${resolved} resolved, ${failed} failed`);