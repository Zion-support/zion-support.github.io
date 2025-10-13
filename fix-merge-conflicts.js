#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with merge conflicts
const filesWithConflicts = [
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/EnhancedSEO.tsx', 
  'app/components/PerformanceMonitor.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/contexts/AnalyticsContext.tsx',
  'app/types/next.d.ts',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx',
  'App_minimal.tsx',
  'SidebarNavigation.tsx',
  'api/create-checkout-session.js',
  'api/create-payment-intent.js',
  'api/error-report.js',
  'api/newsletter/subscribe.js',
  'api/onsite-request.js',
  'api/quotes.js',
  'api/shipping-rates.js',
  'api/subscribe.js',
  'api/wallet.js'
];

function fixMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/<<<<<<< HEAD\n?([\s\S]*?)=======\n?([\s\S]*?)>>>>>>> [^\n]*\n?/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    } else {
      console.log(`No conflicts found in: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting merge conflict resolution...');

let fixedCount = 0;
filesWithConflicts.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed merge conflicts in ${fixedCount} files.`);

// Verify no more conflicts exist
console.log('\nVerifying no remaining conflicts...');
const remainingConflicts = [];
filesWithConflicts.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
      remainingConflicts.push(file);
    }
  }
});

if (remainingConflicts.length > 0) {
  console.log('Warning: Remaining conflicts found in:');
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
} else {
  console.log('All merge conflicts resolved successfully!');
}