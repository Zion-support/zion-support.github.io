#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with merge conflicts
const filesWithConflicts = [
  'app/cloud-infrastructure/page.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/components/ErrorFallback.tsx',
  'app/contexts/AnalyticsContext.tsx',
  'app/contact/page.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'SidebarNavigation.tsx',
  'App_minimal.tsx',
  'eslint.config.js',
  'api/newsletter/subscribe.js',
  'api/quotes.js',
  'api/error-report.js',
  'api/create-payment-intent.js',
  'api/wallet.js',
  'api/onsite-request.js',
  'api/subscribe.js',
  'api/create-checkout-session.js',
  'api/shipping-rates.js'
];

function cleanMergeConflicts(content) {
  // Remove all merge conflict markers and keep the latest version
  let cleaned = content;
  
  // Remove all conflict markers
  cleaned = cleaned.replace(/^<<<<<<< .*$/gm, '');
  cleaned = cleaned.replace(/^=======.*$/gm, '');
  cleaned = cleaned.replace(/^>>>>>>> .*$/gm, '');
  
  // Remove empty lines that might be left behind
  cleaned = cleaned.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove duplicate imports
  const lines = cleaned.split('\n');
  const seenImports = new Set();
  const filteredLines = [];
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      if (!seenImports.has(line.trim())) {
        seenImports.add(line.trim());
        filteredLines.push(line);
      }
    } else {
      filteredLines.push(line);
    }
  }
  
  return filteredLines.join('\n');
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const cleaned = cleanMergeConflicts(content);
    
    // Only write if content changed
    if (cleaned !== content) {
      fs.writeFileSync(filePath, cleaned);
      console.log(`Fixed merge conflicts in: ${filePath}`);
    } else {
      console.log(`No conflicts found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
console.log('Starting merge conflict cleanup...');
filesWithConflicts.forEach(fixFile);
console.log('Merge conflict cleanup completed!');