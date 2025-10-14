#!/usr/bin/env node

const fs = require('fs');

// Function to fix PerformanceMonitor syntax issues
function fixPerformanceMonitor(content) {
  // Fix semicolons after closing brackets
  content = content.replace(/,\s*\}\s*$/gm, '}');
  content = content.replace(/,\s*\]\s*$/gm, ']');
  
  // Fix semicolons in function parameters
  content = content.replace(/,\s*\)\s*:/g, '):');
  content = content.replace(/,\s*\)\s*=>/g, ') =>');
  
  // Fix semicolons in type definitions
  content = content.replace(/,\s*\}\s*$/gm, '}');
  content = content.replace(/,\s*\]\s*$/gm, ']');
  
  // Fix semicolons in function calls
  content = content.replace(/,\s*\)\s*;/g, ');');
  content = content.replace(/,\s*\)\s*,/g, '),');
  
  // Fix specific patterns
  content = content.replace(/,\s*\)\s*,\s*\}\s*$/gm, '}');
  content = content.replace(/,\s*\)\s*,\s*\]\s*$/gm, ']');
  
  return content;
}

// Read and fix the file
const filePath = '/workspace/app/components/PerformanceMonitor.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const fixedContent = fixPerformanceMonitor(content);

if (fixedContent !== content) {
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('Fixed PerformanceMonitor.tsx');
} else {
  console.log('No changes needed for PerformanceMonitor.tsx');
}