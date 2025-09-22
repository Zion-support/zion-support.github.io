#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Starting comprehensive JSX fixing...');

// Function to completely fix JSX files
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed HTML tags
    content = content.replace(/<h([^>]*?)>/g, '<h1$1>');
    
    // Fix extra curly braces in JSX
    content = content.replace(/>\s*}\s*$/gm, '>');
    content = content.replace(/>\s*}\s*\n/g, '>\n');
    
    // Fix malformed JSX structure - remove trailing }
    content = content.replace(/className="[^"]*"\s*>\s*}/g, (match) => {
      return match.replace(/\s*}$/, '');
    });
    
    // Fix semicolons in JSX text content
    content = content.replace(/;\s*\n\s*and drive growth/g, ' and drive growth');
    
    // Fix any remaining malformed JSX
    content = content.replace(/>\s*}\s*\n\s*{\/\*/g, '>\n        {/*');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed comprehensive JSX issues in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix specific problematic files
const problematicFiles = [
  '/workspace/app/services/ai-content-generator/page.tsx',
  '/workspace/app/services/ai-content-writer/page.tsx',
  '/workspace/app/services/ai-customer-support-automation/page.tsx',
  '/workspace/app/services/ai-customer-support/page.tsx'
];

let fixedCount = 0;
for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    if (fixJSXFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`🎉 Comprehensive JSX fixing completed! Fixed ${fixedCount} files.`);