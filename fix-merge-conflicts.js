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
