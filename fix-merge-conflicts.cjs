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
}

console.log('Starting merge conflict resolution...');

filesWithConflicts.forEach(filePath => {
  fixMergeConflicts(filePath);
});

console.log('Merge conflict resolution completed!');