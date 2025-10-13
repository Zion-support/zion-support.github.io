#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesWithConflicts = [
  './api/newsletter/subscribe.js',
  './api/onsite-request.js',
  './api/quotes.js',
  './api/shipping-rates.js',
  './api/subscribe.js',
  './api/wallet.js',
  './app/components/AccessibilityEnhancer.tsx',
  './app/zion-ai-voice-assistant-pro/page.tsx',
  './app/zion-smart-expense-categorizer/page.tsx',
  './app/zion-ai-inventory-manager/page.tsx',
  './app/zion-ai-performance-optimizer/page.tsx',
  './app/zion-ai-social-media-manager/page.tsx',
  './app/zion-ai-email-analyzer/page.tsx',
  './app/zion-smart-inventory-optimizer/page.tsx',
  './scripts/generate-sitemap.cjs',
  './performance-report.json',
  './fix-syntax-errors.cjs'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any duplicate lines that might have been created
    const lines = content.split('\n');
    const cleanedLines = [];
    let prevLine = '';
    
    for (const line of lines) {
      if (line.trim() !== prevLine.trim() || line.trim() === '') {
        cleanedLines.push(line);
        prevLine = line;
      }
    }
    
    content = cleanedLines.join('\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting to fix merge conflicts...');

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files.`);