#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Starting JSX fixing...');

// Function to fix JSX issues
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix self-closing div tags that should be opening tags
    const originalContent = content;
    
    // Fix malformed JSX structure
    content = content.replace(/<div([^>]*)\s*\/>/g, '<div$1>');
    content = content.replace(/<h[1-6]([^>]*)\s*\/>/g, '<h$1>');
    content = content.replace(/<p([^>]*)\s*\/>/g, '<p$1>');
    content = content.replace(/<span([^>]*)\s*\/>/g, '<span$1>');
    content = content.replace(/<a([^>]*)\s*\/>/g, '<a$1>');
    content = content.replace(/<button([^>]*)\s*\/>/g, '<button$1>');
    content = content.replace(/<ul([^>]*)\s*\/>/g, '<ul$1>');
    content = content.replace(/<li([^>]*)\s*\/>/g, '<li$1>');
    
    // Fix malformed JSX text content
    content = content.replace(/>\s*([^<{]+);\s*</g, '>$1<');
    content = content.replace(/>\s*([^<{]+)}\s*</g, '>$1<');
    
    // Fix malformed JSX expressions
    content = content.replace(/{\s*([^}]+)}\s*}/g, '{$1}');
    content = content.replace(/{\s*([^}]+);\s*}/g, '{$1}');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*}\s*/g, 'return (');
    content = content.replace(/\);\s*}\s*$/gm, ');');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed JSX issues in: ${filePath}`);
      modified = true;
    }
    
    return modified;
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

console.log(`🎉 JSX fixing completed! Fixed ${fixedCount} files.`);