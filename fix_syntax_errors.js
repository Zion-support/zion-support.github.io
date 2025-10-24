const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Fix common syntax issues
    const fixes = [
      // Fix unescaped quotes in JSX
      {
        pattern: /(\s*)([^>]*)([^<]*'[^']*'[^<]*)([^>]*)(\s*)/g,
        replacement: (match, before, start, middle, end, after) => {
          const fixedMiddle = middle.replace(/'/g, '&apos;');
          return before + start + fixedMiddle + end + after;
        }
      },
      
      // Fix missing semicolons after variable declarations
      {
        pattern: /(const|let|var)\s+(\w+)\s*=\s*[^;]+(?!;)(\s*)(?=\n)/g,
        replacement: '$1 $2 = $3;'
      },
      
      // Fix missing closing braces
      {
        pattern: /(\{[^}]*)(\s*)(?=\n\s*[a-zA-Z])/g,
        replacement: '$1}$2'
      },
      
      // Fix JSX attribute syntax issues
      {
        pattern: /(\w+)\s*=\s*([^"'>\s]+)(?=\s|>)/g,
        replacement: '$1="$2"'
      },
      
      // Fix missing commas in object literals
      {
        pattern: /(\w+)\s*:\s*([^,}]+)(\s*)(?=\n\s*\w+\s*:)/g,
        replacement: '$1: $2,$3'
      },
      
      // Fix missing closing parentheses
      {
        pattern: /(\w+\s*\([^)]*)(\s*)(?=\n\s*[a-zA-Z])/g,
        replacement: '$1)$2'
      },
      
      // Fix malformed JSX expressions
      {
        pattern: /\{\s*([^}]*)\s*\}/g,
        replacement: (match, expr) => {
          // Fix common JSX expression issues
          let fixed = expr
            .replace(/(\w+)\s*=\s*([^,}]+)(?=\s*[,}])/g, '$1: $2')
            .replace(/(\w+)\s*:\s*([^,}]+)(?=\s*[,}])/g, '$1: $2');
          return `{${fixed}}`;
        }
      },
      
      // Fix missing return statements
      {
        pattern: /(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*)(?!return)([^;{]+)(;?)/g,
        replacement: '$1return $2$3'
      },
      
      // Fix malformed function declarations
      {
        pattern: /(function\s+\w+\s*\([^)]*\)\s*)(?!\{)/g,
        replacement: '$1{'
      },
      
      // Fix missing closing tags in JSX
      {
        pattern: /(<(\w+)[^>]*>)([^<]*)(?!<\/\2>)(\s*)(?=\n)/g,
        replacement: '$1$3$4</$2>'
      }
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        hasChanges = true;
      }
    });
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix missing export statements
      {
        pattern: /^(const\s+\w+\s*=)/gm,
        replacement: 'export $1'
      },
      
      // Fix missing React imports
      {
        pattern: /^(import.*from\s+['"]react['"];?\s*)?(export\s+default\s+function)/m,
        replacement: "import React from 'react';\n$2"
      },
      
      // Fix missing semicolons at end of statements
      {
        pattern: /([^;{}])(\s*)(?=\n\s*[a-zA-Z])/g,
        replacement: '$1;$2'
      }
    ];
    
    specificFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        hasChanges = true;
      }
    });
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with syntax errors
const filesWithErrors = [
  './app/404.tsx',
  './app/ai-customer-support/page-backup.tsx',
  './app/ai-customer-support/page-fixed.tsx',
  './app/case-studies/page.tsx',
  './app/compliance/page-backup.tsx',
  './app/compliance/page-fixed.tsx',
  './app/components/AccessibilityComponents.tsx',
  './app/components/AccessibilityUtils.tsx',
  './app/components/AdvancedAccessibilityEnhancer.tsx',
  './app/components/AdvancedErrorBoundary.tsx',
  './app/components/AdvancedPerformanceMonitor.tsx',
  './app/components/AdvancedPerformanceOptimizer.tsx',
  './app/components/AdvancedSEOOptimizer.tsx',
  './app/components/AdvancedSEOOptimizer_new.tsx',
  './app/components/Analytics.tsx',
  './app/components/AnalyticsProvider.tsx',
  './app/components/AnimatedCounter.tsx',
  './app/components/Breadcrumb.tsx',
  './app/components/ContentCarousel.tsx',
  './app/components/ContentNewsletterSignup.tsx',
  './app/components/ContentPreviewCard.tsx',
  './app/components/ContentPromotionBanner.tsx',
  './app/components/ContentStatistics.tsx',
  './app/components/DynamicContentShowcase.tsx',
  './app/components/EnhancedAccessibility.tsx',
  './app/components/EnhancedAccessibilityEnhancer.tsx',
  './app/components/EnhancedAnalytics.tsx',
  './app/components/EnhancedErrorBoundary.tsx',
  './app/components/EnhancedHero.tsx',
  './app/components/EnhancedLoading.tsx',
  './app/components/EnhancedLoadingStates.tsx',
  './app/components/EnhancedPerformanceMonitor.tsx',
  './app/components/EnhancedPerformanceOptimizer.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/EnhancedSEOHead.tsx',
  './app/components/EnhancedSEOOptimizer.tsx',
  './app/components/EnhancedServicesShowcase.tsx',
  './app/components/EnhancedSkipLink.tsx',
  './app/components/ErrorBoundary.tsx',
  './app/components/ErrorHandler.tsx',
  './app/components/FuturisticBackground.tsx',
  './app/components/FuturisticHero.tsx',
  './app/components/FuturisticServiceCard.tsx',
  './app/components/GlobalErrorBoundary.tsx',
  './app/components/Header.tsx',
  './app/components/ImageOptimizer.tsx',
  './app/components/LazyImage.tsx',
  './app/components/Loading.tsx',
  './app/components/LoadingSkeleton.tsx',
  './app/components/LoadingSpinner.tsx',
  './app/components/LoadingStates.tsx',
  './app/components/NeonButton.tsx',
  './app/components/NotFoundPage.tsx',
  './app/components/OptimizedImage.tsx',
  './app/components/OptimizedLoadingSpinner.tsx',
  './app/components/PWAInstaller.tsx',
  './app/components/PerformanceDashboard.tsx',
  './app/components/PerformanceEnhancer.tsx',
  './app/components/PerformanceImage.tsx',
  './app/components/PerformanceMonitor.tsx',
  './app/components/PerformanceOptimizations.tsx',
  './app/components/PerformanceOptimizer.tsx',
  './app/components/ResponsiveContainer.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/SEOHead.tsx',
  './app/components/SEOOptimizer.tsx',
  './app/components/SecurityEnhancer.tsx',
  './app/components/ServiceCard.tsx',
  './app/components/ServiceCardSkeleton.tsx',
  './app/components/ServicePageTemplate.tsx',
  './app/components/ServiceWorker.tsx',
  './app/components/ServiceWorkerRegistration.tsx',
  './app/components/Sidebar.tsx',
  './app/components/SkipLink.tsx',
  './app/components/SystemMonitor.tsx',
  './app/components/UserExperienceEnhancer.tsx',
  './app/components/utils/accessibilityUtils.ts',
  './app/config/errorBoundaryConfig.tsx',
  './app/utils/image.tsx',
  './app/utils/performanceEnhancer.ts',
  './app/utils/performanceMetrics.ts',
  './app/utils/performanceMonitoring.ts',
  './app/utils/securityHeaders.ts',
  './app/utils/seoEnhancer.ts',
  './app/utils/sitemapGenerator.ts',
  './app/utils/testUtils.ts'
];

let fixedCount = 0;
filesWithErrors.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
});

console.log(`\nFixed syntax errors in ${fixedCount} files.`);