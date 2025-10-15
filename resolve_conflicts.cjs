#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files that have merge conflicts
const conflictedFiles = [
  'app/5g-edge-computing/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-network-optimization/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/about/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Footer.tsx',
  'app/components/Navigation.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/SEOOptimizer.tsx',
  'app/constants/analytics.ts',
  'app/micro-saas/page.tsx',
  'app/page.tsx',
  'app/sitemap.ts',
  'app/support/page.tsx'
];

// Files that were deleted by main but modified in PR - we'll keep the main version (delete them)
const deletedByMainFiles = [
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/EnhancedSEO.tsx',
  'app/components/MetaManager.tsx',
  'app/components/Sidebar.tsx',
  'app/config/errorBoundaryConfig.tsx',
  'app/contexts/AnalyticsProvider.tsx',
  'app/utils/a11y.ts',
  'app/utils/accessibility.ts',
  'app/utils/apiInterceptor.ts',
  'app/utils/configManager.ts',
  'app/utils/enhancedErrorTracking.ts',
  'app/utils/enhancedLogger.ts',
  'app/utils/envConfig.ts',
  'app/utils/errorHandlerEnhanced.ts',
  'app/utils/errorLogger.ts',
  'app/utils/errorReporter.ts',
  'app/utils/errorTracking.ts',
  'app/utils/performanceMonitor.ts',
  'app/utils/preloadOptimizer.ts',
  'app/utils/productionLogger.ts'
];

function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File ${filePath} does not exist, skipping...`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      console.log(`No conflicts in ${filePath}, skipping...`);
      return;
    }

    console.log(`Resolving conflicts in ${filePath}...`);

    // For most files, we'll accept the main branch version (HEAD)
    // This means we'll keep everything before ======= and after >>>>>>> 
    let resolvedContent = content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1')
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '');

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✓ Resolved conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
  }
}

function main() {
  console.log('Starting merge conflict resolution...');

  // Resolve conflicts in modified files
  conflictedFiles.forEach(resolveMergeConflicts);

  // Remove files that were deleted by main
  deletedByMainFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`✓ Removed ${filePath} (deleted by main)`);
      } catch (error) {
        console.error(`Error removing ${filePath}:`, error.message);
      }
    }
  });

  console.log('Merge conflict resolution completed!');
}

main();