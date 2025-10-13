#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with merge conflicts
const filesWithConflicts = [
  './app/components/SEOEnhancer.tsx',
  './app/components/PerformanceMonitor.tsx',
  './app/types/next.d.ts',
  './eslint.config.js',
  './app/zion-ai-voice-assistant-pro/page.tsx',
  './app/zion-smart-expense-categorizer/page.tsx',
  './app/cloud-infrastructure/page.tsx',
  './app/zion-smart-inventory-optimizer/page.tsx',
  './app/components/EnhancedLoading.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/ErrorFallback.tsx',
  './app/components/FuturisticBackgroundEnhanced.tsx',
  './app/components/AccessibilityEnhancer.tsx',
  './api/newsletter/subscribe.js',
  './api/error-report.js',
  './api/onsite-request.js',
  './app/zion-ai-performance-optimizer/page.tsx',
  './app/contexts/AnalyticsContext.tsx',
  './app/zion-ai-email-analyzer/page.tsx',
  './app/zion-ai-social-media-manager/page.tsx',
  './app/contact/page.tsx',
  './app/zion-ai-inventory-manager/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the content between them
    // This regex matches merge conflict markers and removes them
    const conflictRegex = /^<<<<<<< .*?\n(.*?)\n=======\n(.*?)\n>>>>>>> .*?$/gms;
    
    // For now, let's use a simpler approach - remove all conflict markers
    content = content.replace(/^<<<<<<< .*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>> .*$/gm, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove leading/trailing whitespace from lines
    content = content.split('\n').map(line => line.trimEnd()).join('\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix merge conflicts...');
filesWithConflicts.forEach(fixMergeConflicts);
console.log('Merge conflict fixing completed!');