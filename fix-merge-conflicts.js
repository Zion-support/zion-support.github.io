#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with merge conflicts
const filesWithConflicts = [
  './scripts/generate-sitemap.cjs',
  './performance-report.json',
  './app/types/next.d.ts',
  './eslint.config.js',
  './fix-syntax-errors.cjs',
  './SidebarNavigation.tsx',
  './app/zion-ai-voice-assistant-pro/page.tsx',
  './api/newsletter/subscribe.js',
  './app/zion-smart-expense-categorizer/page.tsx',
  './api/quotes.js',
  './api/error-report.js',
  './api/create-payment-intent.js',
  './api/wallet.js',
  './api/onsite-request.js',
  './api/subscribe.js',
  './api/create-checkout-session.js',
  './api/shipping-rates.js',
  './app/zion-smart-inventory-optimizer/page.tsx',
  './app/zion-ai-social-media-manager/page.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/PerformanceMonitor.tsx',
  './App_minimal.tsx',
  './app/zion-ai-performance-optimizer/page.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/ErrorBoundary.tsx',
  './app/components/ErrorFallback.tsx',
  './app/components/FuturisticBackgroundEnhanced.tsx',
  './app/zion-ai-inventory-manager/page.tsx',
  './app/contexts/AnalyticsContext.tsx',
  './app/zion-ai-email-analyzer/page.tsx',
  './app/contact/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers
    content = content.replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
    content = content.replace(/^=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
    content = content.replace(/^<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+$/gm, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/^<<<<<<< HEAD$/gm, '');
    content = content.replace(/^=======$/gm, '');
    content = content.replace(/^>>>>>>> [^\n]+$/gm, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Clean up any stray characters
    content = content.replace(/^\s*$/gm, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log('Merge conflict fixing completed!');