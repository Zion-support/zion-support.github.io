#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with merge conflicts
const filesWithConflicts = [
  'app/cloud-infrastructure/page.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/ErrorFallback.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/contact/page.tsx',
  'app/contexts/AnalyticsContext.tsx',
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx',
  'App_minimal.tsx',
  'SidebarNavigation.tsx',
  'api/newsletter/subscribe.js',
  'api/quotes.js',
  'api/error-report.js',
  'api/create-payment-intent.js',
  'api/wallet.js',
  'api/onsite-request.js',
  'api/subscribe.js',
  'api/create-checkout-session.js',
  'api/shipping-rates.js',
  'eslint.config.js'
];

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictDepth = 0;
    let lastValidContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictDepth++;
        continue;
      }
      
      if (line.startsWith('=======')) {
        // Keep content after ======= as it's usually the final version
        lastValidContent = [];
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictDepth--;
        if (conflictDepth === 0) {
          // Add the last valid content
          cleanedLines.push(...lastValidContent);
          lastValidContent = [];
        }
        continue;
      }
      
      if (inConflict) {
        // Store content during conflict for potential use
        lastValidContent.push(line);
      } else {
        cleanedLines.push(line);
      }
    }
    
    // If we're still in a conflict at the end, add the last valid content
    if (inConflict && lastValidContent.length > 0) {
      cleanedLines.push(...lastValidContent);
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    // Additional cleanup for common issues
    const finalContent = cleanedContent
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive blank lines
      .replace(/^\s*\n/gm, '') // Remove lines with only whitespace
      .trim();
    
    fs.writeFileSync(filePath, finalContent);
    console.log(`✅ Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

console.log('🧹 Starting merge conflict cleanup...\n');

let successCount = 0;
let totalCount = filesWithConflicts.length;

for (const file of filesWithConflicts) {
  if (fs.existsSync(file)) {
    if (cleanMergeConflicts(file)) {
      successCount++;
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
}

console.log(`\n✨ Cleanup complete! ${successCount}/${totalCount} files processed successfully.`);