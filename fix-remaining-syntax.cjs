#!/usr/bin/env node

const fs = require('fs');
<<<<<<< HEAD
const path = require('path');
const glob = require('glob');


function fixFile(filePath) {


// Function to fix specific syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing commas in object literals
    const objectFix = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n$2');
    if (objectFix !== content) {
      content = objectFix;
      modified = true;
    }

    // Fix missing commas in function parameters
    const paramFix = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n$2:');
    if (paramFix !== content) {
      content = paramFix;
      modified = true;
    }

    // Fix missing commas in arrays
    const arrayFix = content.replace(/(\w+)\s*\n\s*(\w+)\]/g, '$1,\n$2]');
    if (arrayFix !== content) {
      content = arrayFix;
      modified = true;
    }

    // Fix interface/type definitions
    const interfaceFix = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2;\n$3:');
    if (interfaceFix !== content) {
      content = interfaceFix;
      modified = true;
    }

    // Fix JSX syntax issues
    const jsxFix = content.replace(/<\s*(\w+)\s*>\s*{/g, '<$1>{');
    if (jsxFix !== content) {
      content = jsxFix;
      modified = true;
    }

    // Remove duplicate declarations
    const lines = content.split('\n');
    const seen = new Set();
    const newLines = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('const ') || trimmed.startsWith('let ') || trimmed.startsWith('var ')) {
        const key = trimmed.split(' ')[1]?.split('=')[0]?.split(':')[0];
        if (key && seen.has(key)) {
          continue; // Skip duplicate declarations
        }
        if (key) seen.add(key);
      }
      newLines.push(line);
    }
    
    const dedupedContent = newLines.join('\n');
    if (dedupedContent !== content) {
      content = dedupedContent;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const componentFiles = [
  'components/AccessibilityEnhancer.tsx',
  'components/Analytics.tsx',
  'components/ErrorBoundary.tsx',
  'components/Footer.tsx',
  'components/Header.tsx',
  'components/LoadingSpinner.tsx',
  'components/Navigation.tsx',
  'components/OptimizedImage.tsx',
  'components/PerformanceMonitor.tsx',
  'components/SEOHead.tsx',
  'components/SearchBar.tsx',
  'components/Sidebar.tsx'
];

console.log('Fixing remaining syntax errors...');

let fixedCount = 0;
for (const file of componentFiles) {
  if (fs.existsSync(file)) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files`);