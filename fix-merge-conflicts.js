#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// List of files with merge conflicts
const filesWithConflicts = [
  './app/ai-customer-support/page-backup.tsx',
  './app/ai-customer-support/page-fixed.tsx',
  './app/ai-powered-devops/page.tsx',
  './app/ai-powered-email-analyzer/page.tsx',
  './app/components/AccessibilityComponents.tsx',
  './app/components/AdvancedErrorBoundary.tsx',
  './app/components/AdvancedPerformanceMonitor.tsx',
  './app/components/AdvancedPerformanceOptimizer.tsx',
  './app/components/Breadcrumb.tsx',
  './app/components/ContentNewsletterSignup.tsx',
  './app/components/ContentStatistics.tsx',
  './app/components/EnhancedPerformanceOptimizer.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/EnhancedSkipLink.tsx',
  './app/components/ErrorBoundary.tsx',
  './app/components/FuturisticServiceCard.tsx',
  './app/components/GlobalErrorBoundary.tsx',
  './app/components/Header.tsx',
  './app/components/Navigation-backup.tsx',
  './app/components/PerformanceEnhancer.tsx',
  './app/components/PerformanceOptimizer.tsx',
  './app/components/ResponsiveContainer.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/SEOOptimizer.tsx',
  './app/components/SearchBar.tsx',
  './app/components/SearchModal.tsx',
  './app/components/SecurityEnhancer.tsx',
  './app/components/ServiceCard.tsx',
  './app/components/ServiceCardSkeleton.tsx',
  './app/components/ServicePageTemplate.tsx',
  './app/components/ServiceWorkerRegistration.tsx',
  './app/components/Sidebar.tsx',
  './app/components/SkipLink.tsx',
  './app/components/SystemMonitor.tsx',
  './app/components/ThemeToggle.tsx',
  './app/components/performanceUtils.ts',
  './app/ecommerce-analytics-pro/page.tsx',
  './app/error.tsx',
  './app/global-error.tsx',
  './app/hooks/useEnhancedPerformance.ts',
  './app/hooks/useForm.ts',
  './app/hooks/useIntersectionObserver.ts',
  './app/hooks/usePerformanceMonitor.ts',
  './app/it-services/cybersecurity-audit/page.tsx',
  './app/legal-document-manager/page.tsx',
  './app/loading.tsx',
  './app/medical-records-manager/page.tsx',
  './app/online-learning-platform/page.tsx',
  './app/page-new.tsx',
  './app/page-optimized.tsx',
  './app/property-management-ai/page.tsx',
  './app/supply-chain-optimizer/page.tsx',
  './app/test/page.tsx',
  './app/types/accessibility.ts',
  './app/types/app.types.ts',
  './app/types/global.d.ts',
  './app/types/next.d.ts',
  './app/utils/apiClient.ts',
  './app/utils/monitoring.ts',
  './app/utils/performanceEnhancer.ts',
  './app/utils/performanceMetrics.ts',
  './app/utils/performanceMonitoring.ts',
  './app/utils/performanceOptimizations.ts',
  './app/utils/performanceUtils.ts',
  './app/utils/securityHeaders.ts',
  './app/utils/seoEnhancer.ts',
  './app/utils/sitemapGenerator.ts',
  './app/utils/testUtils.ts'
];

function fixMergeConflicts(filePath) {
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

    console.log(`Fixing merge conflicts in: ${filePath}`);

    // Pattern 1: Empty HEAD section, keep the content after =======
    // <<<<<<< HEAD
    // 
    // =======
    // content here
    // >>>>>>> branch
    let fixed = content.replace(/<<<<<<< HEAD\s*\n\s*\n=======\s*\n(.*?)\n>>>>>>> [^\n]+/gs, '$1');

    // Pattern 2: Content in HEAD, empty after =======
    // <<<<<<< HEAD
    // content here
    // =======
    // 
    // >>>>>>> branch
    fixed = fixed.replace(/<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n\s*\n>>>>>>> [^\n]+/gs, '$1');

    // Pattern 3: Both sections have content - keep HEAD (current branch)
    // <<<<<<< HEAD
    // content here
    // =======
    // other content
    // >>>>>>> branch
    fixed = fixed.replace(/<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+/gs, (match, headContent, otherContent) => {
      // If HEAD content is not empty, keep it
      if (headContent.trim()) {
        return headContent;
      }
      // Otherwise keep the other content
      return otherContent;
    });

    // Pattern 4: Simple case with just import differences
    // <<<<<<< HEAD
    // 'use client';
    // =======
    // 'use client'
    // import React from 'react';
    // >>>>>>> branch
    fixed = fixed.replace(/<<<<<<< HEAD\s*\n'use client';\s*\n=======\s*\n'use client'\s*\n(.*?)\n>>>>>>> [^\n]+/gs, "'use client';\n$1");

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

// Fix all files
let successCount = 0;
let totalCount = filesWithConflicts.length;

console.log(`Starting to fix merge conflicts in ${totalCount} files...`);

filesWithConflicts.forEach(filePath => {
  if (fixMergeConflicts(filePath)) {
    successCount++;
  }
});

console.log(`\nCompleted: ${successCount}/${totalCount} files fixed successfully`);

if (successCount === totalCount) {
  console.log('All merge conflicts have been resolved!');
} else {
  console.log('Some files may still have issues. Please check manually.');
}