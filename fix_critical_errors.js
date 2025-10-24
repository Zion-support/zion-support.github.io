const fs = require('fs');
const path = require('path');

function fixCriticalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Fix specific critical issues
    const fixes = [
      // Fix malformed import statements
      {
        pattern: /import React from 'react&apos;;/g,
        replacement: "import React from 'react';"
      },
      {
        pattern: /&quot;use client&quot;/g,
        replacement: '"use client"'
      },
      {
        pattern: /import React from &quot;react&quot;/g,
        replacement: 'import React from "react"'
      },
      
      // Fix malformed export statements
      {
        pattern: /export const NotFound=";"/g,
        replacement: 'export default function NotFound() {'
      },
      
      // Fix malformed JSX
      {
        pattern: /<p className="text-xl text-gray-300 mb-8 leading-relaxed">Oops! The page you&apos;re looking for seems to have vanished into the<\/p>;/g,
        replacement: '<p className="text-xl text-gray-300 mb-8 leading-relaxed">Oops! The page you\'re looking for seems to have vanished into the digital void. Don\'t worry, even our AI can\'t predict everything!</p>'
      },
      
      // Fix malformed interface declarations
      {
        pattern: /interface AccessibilityComponentsProps {}\s*className\?: string;\s*}/g,
        replacement: 'interface AccessibilityComponentsProps {\n  className?: string;\n}'
      },
      
      // Fix malformed function declarations
      {
        pattern: /export default AccessibilityComponents;\s*export default AccessibilityComponentsPage;/g,
        replacement: 'export default function AccessibilityComponents({ className }: AccessibilityComponentsProps) {\n  return (\n    <div className={className}>\n      <h1>Accessibility Components</h1>\n    </div>\n  );\n}'
      },
      
      // Fix unterminated string literals
      {
        pattern: /"([^"]*)(?=\n)/g,
        replacement: (match, content) => {
          if (content.includes('\\')) {
            return match;
          }
          return `"${content}"`;
        }
      },
      
      // Fix missing semicolons after imports
      {
        pattern: /import[^;]+(?=\n)/g,
        replacement: (match) => {
          if (!match.endsWith(';')) {
            return match + ';';
          }
          return match;
        }
      },
      
      // Fix malformed JSX expressions
      {
        pattern: /\{\s*([^}]*)\s*\}/g,
        replacement: (match, expr) => {
          if (expr.includes('=') && !expr.includes(':')) {
            return `{${expr}}`;
          }
          return match;
        }
      },
      
      // Fix missing closing braces
      {
        pattern: /(\{[^}]*)(\s*)(?=\n\s*[a-zA-Z])/g,
        replacement: '$1}$2'
      },
      
      // Fix malformed function parameters
      {
        pattern: /function\s+(\w+)\s*\([^)]*\)\s*(?!\{)/g,
        replacement: 'function $1() {'
      },
      
      // Fix missing return statements
      {
        pattern: /(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*)(?!return)([^;{]+)(;?)/g,
        replacement: '$1return $2$3'
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
    
    // Additional cleanup
    const cleanupFixes = [
      // Remove duplicate semicolons
      {
        pattern: /;;+/g,
        replacement: ';'
      },
      
      // Fix malformed quotes
      {
        pattern: /&apos;/g,
        replacement: "'"
      },
      
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)\s*=\s*([^"'>\s]+)(?=\s|>)/g,
        replacement: '$1="$2"'
      },
      
      // Fix missing closing tags
      {
        pattern: /(<(\w+)[^>]*>)([^<]*)(?!<\/\2>)(\s*)(?=\n)/g,
        replacement: '$1$3$4</$2>'
      }
    ];
    
    cleanupFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        hasChanges = true;
      }
    });
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed critical errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with critical errors
const criticalFiles = [
  './app/404.tsx',
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
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixCriticalErrors(file)) {
      fixedCount++;
    }
  }
});

console.log(`\nFixed critical errors in ${fixedCount} files.`);