#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting critical merge conflict resolution...');

// List of critical files to resolve conflicts in
const criticalFiles = [
  '/workspace/App.tsx',
  '/workspace/src/App.tsx',
  '/workspace/src/index.tsx',
  '/workspace/src/main.tsx',
  '/workspace/vite.config.js',
  '/workspace/package.json',
  '/workspace/package-lock.json',
  '/workspace/netlify.toml',
  '/workspace/tailwind.config.js',
  '/workspace/postcss.config.js',
  '/workspace/tsconfig.json',
  '/workspace/eslint.config.js'
];

function resolveConflictsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the latest version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining markers
    content = content.replace(/<<<<<<< [^\n]+/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Remove duplicate lines that might have been created
    const lines = content.split('\n');
    const uniqueLines = [];
    const seen = new Set();
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !seen.has(trimmed)) {
        seen.add(trimmed);
        uniqueLines.push(line);
      } else if (!trimmed) {
        uniqueLines.push(line);
      }
    }
    
    content = uniqueLines.join('\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process critical files
let resolvedCount = 0;
for (const file of criticalFiles) {
  if (resolveConflictsInFile(file)) {
    resolvedCount++;
  }
}

console.log(`\n📈 Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`📁 Total processed: ${criticalFiles.length} files`);

console.log('\n🎉 Critical merge conflict resolution completed!');