#!/usr/bin/env node

import fs from 'fs';

// Files that still have merge conflicts
const remainingFiles = [
  './app/ai-customer-support/page-backup.tsx',
  './app/ai-customer-support/page-fixed.tsx',
  './app/components/AccessibilityComponents.tsx',
  './app/components/AdvancedPerformanceMonitor.tsx',
  './app/components/ContentNewsletterSignup.tsx',
  './app/components/ContentStatistics.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/ErrorBoundary.tsx',
  './app/components/GlobalErrorBoundary.tsx',
  './app/components/Header.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/SEOOptimizer.tsx'
];

function fixRemainingConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      console.log(`No merge conflicts in: ${filePath}`);
      return true;
    }

    console.log(`Fixing remaining merge conflicts in: ${filePath}`);

    // Remove empty merge conflict sections
    // Pattern: <<<<<<< HEAD\n\n=======\n>>>>>>> branch
    let fixed = content.replace(/<<<<<<< HEAD\s*\n\s*\n=======\s*\n>>>>>>> [^\n]+/g, '');

    // Pattern: <<<<<<< HEAD\n\n=======\n\n>>>>>>> branch
    fixed = fixed.replace(/<<<<<<< HEAD\s*\n\s*\n=======\s*\n\s*\n>>>>>>> [^\n]+/g, '');

    // Pattern: <<<<<<< HEAD\ncontent\n=======\n>>>>>>> branch
    fixed = fixed.replace(/<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n>>>>>>> [^\n]+/gs, '$1');

    // Pattern: <<<<<<< HEAD\n\n=======\ncontent\n>>>>>>> branch
    fixed = fixed.replace(/<<<<<<< HEAD\s*\n\s*\n=======\s*\n(.*?)\n>>>>>>> [^\n]+/gs, '$1');

    // Clean up any remaining empty lines
    fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');

    // Write the fixed content back
    fs.writeFileSync(filePath, fixed, 'utf8');
    
    // Verify the fix worked
    const verifyContent = fs.readFileSync(filePath, 'utf8');
    if (verifyContent.includes('<<<<<<< HEAD') || verifyContent.includes('=======') || verifyContent.includes('>>>>>>>')) {
      console.log(`Warning: Merge conflicts may still exist in: ${filePath}`);
      return false;
    }

    console.log(`Successfully fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix remaining files
let successCount = 0;
let totalCount = remainingFiles.length;

console.log(`Fixing remaining merge conflicts in ${totalCount} files...`);

remainingFiles.forEach(filePath => {
  if (fixRemainingConflicts(filePath)) {
    successCount++;
  }
});

console.log(`\nCompleted: ${successCount}/${totalCount} files fixed successfully`);