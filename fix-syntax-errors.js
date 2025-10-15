#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
// Files with critical syntax errors that need fixing
const criticalFiles = [
  'app/components/AdvancedAccessibilityEnhancer.tsx',
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/AdvancedPerformanceEnhancer.tsx',
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/Analytics.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/AnimatedCounter.tsx',
  'app/components/Breadcrumb.tsx',
  'app/components/CacheManager.tsx',
  'app/components/ContactForm.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentNewsletterSignup.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/CookieConsent.tsx',
  'app/components/CoreWebVitals.tsx',
  'app/components/CriticalResourcePreloader.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/EnhancedAccessibilityManager.tsx',
  'app/components/EnhancedAnalytics.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/EnhancedErrorFeedback.tsx',
  'app/components/EnhancedHero.tsx',
  'app/components/EnhancedLoading.tsx',
  'app/components/EnhancedLoadingSkeleton.tsx',
  'app/components/EnhancedLoadingStates.tsx',
  'app/components/EnhancedPerformanceMonitor.tsx',
  'app/components/EnhancedPerformanceOptimizer.tsx',
  'app/components/EnhancedSEO.tsx',
  'app/components/EnhancedSEOHead.tsx',
  'app/components/EnhancedSEOOptimizer.tsx',
  'app/components/EnhancedServicesShowcase.tsx',
  'app/components/EnhancedSkipLink.tsx',
  'app/components/ErrorFallback.tsx',
  'app/components/ErrorHandler.tsx',
  'app/components/FuturisticButton.tsx',
  'app/components/FuturisticCard.tsx',
  'app/components/FuturisticGlow.tsx',
  'app/components/FuturisticHero.tsx',
  'app/components/FuturisticLoader.tsx',
  'app/components/FuturisticServiceCard.tsx',
  'app/components/FuturisticText.tsx',
  'app/components/GenericServicePage.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/Icons.tsx',
  'app/components/LazyImage.tsx',
  'app/components/Loading.tsx',
  'app/components/LoadingOptimizer.tsx',
  'app/components/LoadingSkeleton.tsx',
  'app/components/LoadingStates.tsx',
  'app/components/MobileNavigation.tsx',
  'app/components/MobileOptimizer.tsx',
  'app/components/ModernLoadingSpinner.tsx',
  'app/components/NeonButton.tsx',
  'app/components/NewsletterSignup.tsx',
  'app/components/OptimizedImage.tsx'
];

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing React import
    if (!content.includes('import React') && content.includes('JSX')) {
      content = 'import React from \'react\';\n' + content;
      modified = true;
    }

    // Fix missing function declarations
    if (content.includes('return (') && !content.includes('function ') && !content.includes('const ') && !content.includes('export default')) {
      const lines = content.split('\n');
      const returnIndex = lines.findIndex(line => line.trim().startsWith('return ('));
      if (returnIndex > 0) {
        lines.splice(returnIndex, 0, 'export default function Component() {');
        content = lines.join('\n');
        modified = true;
      }
    }

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    // Fix common JSX syntax errors
    content = content.replace(/<(\w+)\s*$/gm, '<$1>');
    content = content.replace(/<\/\s*$/gm, '</>');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix common parsing errors
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/;\s*$/gm, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process critical files
console.log('Fixing critical syntax errors...');
criticalFiles.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixSyntaxErrors(fullPath);
  }
});

console.log('Syntax error fixing completed!');