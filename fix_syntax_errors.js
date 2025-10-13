#!/usr/bin/env node

import fs from 'fs';

// Files with syntax errors
const filesToFix = [
  './app/components/AccessibilityEnhancer.tsx',
  './app/components/EnhancedLoading.tsx',
  './app/components/ErrorFallback.tsx',
  './app/components/FuturisticBackgroundEnhanced.tsx',
  './app/contact/page.tsx',
  './app/zion-ai-email-analyzer/page.tsx',
  './app/zion-ai-inventory-manager/page.tsx',
  './app/zion-ai-performance-optimizer/page.tsx'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import '));
    const uniqueImports = [...new Set(importLines)];
    
    // Remove all import lines and add unique ones at the top
    content = content.split('\n').filter(line => !line.trim().startsWith('import ')).join('\n');
    
    // Find the first non-empty line to insert imports
    const lines = content.split('\n');
    let insertIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() !== '') {
        insertIndex = i;
        break;
      }
    }
    
    // Insert unique imports
    if (uniqueImports.length > 0) {
      lines.splice(insertIndex, 0, ...uniqueImports, '');
    }
    
    content = lines.join('\n');
    
    // Fix common JSX issues
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<\/div>\s*$/gm, '</div>');
    
    // Remove empty lines at the beginning
    content = content.replace(/^\s*\n+/, '');
    
    // Ensure proper closing of JSX elements
    const openDivs = (content.match(/<div/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      for (let i = 0; i < missingDivs; i++) {
        content += '\n    </div>';
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix syntax errors...');
filesToFix.forEach(fixFile);
console.log('Syntax error fixing completed!');