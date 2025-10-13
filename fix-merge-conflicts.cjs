#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
  './app/cloud-infrastructure/page.tsx',
  './app/components/AccessibilityEnhancer.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/ErrorFallback.tsx',
  './app/components/FuturisticBackgroundEnhanced.tsx',
  './app/components/PerformanceMonitor.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/contact/page.tsx',
  './app/contexts/AnalyticsContext.tsx',
  './app/zion-ai-email-analyzer/page.tsx',
  './app/zion-ai-inventory-manager/page.tsx',
  './app/zion-ai-performance-optimizer/page.tsx',
  './app/zion-ai-social-media-manager/page.tsx',
  './app/zion-ai-voice-assistant-pro/page.tsx',
  './app/zion-smart-expense-categorizer/page.tsx',
  './app/zion-smart-inventory-optimizer/page.tsx',
  './SidebarNavigation.tsx',
  './App_minimal.tsx',
  './api/newsletter/subscribe.js',
  './api/quotes.js',
  './api/error-report.js',
  './api/create-payment-intent.js',
  './api/wallet.js',
  './api/onsite-request.js',
  './api/subscribe.js',
  './api/create-checkout-session.js',
  './api/shipping-rates.js',
  './scripts/generate-sitemap.cjs',
  './performance-report.json',
  './fix-syntax-errors.cjs'
];

function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and their content
    // This is a simple approach - remove everything between <<<<<<< and >>>>>>>
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<< HEAD$/gm, '');
    content = content.replace(/^=======$/gm, '');
    content = content.replace(/^>>>>>>> [^\n]+$/gm, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
=======
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');

    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');

    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
    } else {
      console.log(`No conflicts found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
}

console.log('Starting merge conflict resolution...');

<<<<<<< HEAD
const files = findFiles('.');
let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      if (fixMergeConflicts(file)) {
        fixedCount++;
      } else {
        errorCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors: ${errorCount}`);
=======
filesWithConflicts.forEach(filePath => {
  fixMergeConflicts(filePath);
});

console.log('Merge conflict resolution completed!');
>>>>>>> cursor/fix-errors-and-merge-to-main-d3c2
