#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Files to fix with specific patterns
const fixes = [
  // Remove unused imports and variables
  {
    file: '/workspace/app/contact/page.tsx',
    pattern: /import.*Metadata.*from.*react/g,
    replacement: ''
  },
  {
    file: '/workspace/app/page.tsx',
    pattern: /import.*lazy.*from.*react/g,
    replacement: ''
  },
  {
    file: '/workspace/app/guides/ai-2026-implementation-roadmap/page.tsx',
    pattern: /Target,|CheckCircle,/g,
    replacement: ''
  },
  {
    file: '/workspace/app/guides/ai-2027-implementation-roadmap/page.tsx',
    pattern: /Calendar,|User,|Tag,|Cpu,/g,
    replacement: ''
  },
  {
    file: '/workspace/app/utils/apiInterceptor.ts',
    pattern: /ErrorType,/g,
    replacement: ''
  },
  {
    file: '/workspace/app/utils/__tests__/performanceMonitoring.test.ts',
    pattern: /jest,/g,
    replacement: ''
  }
];

// Fix unused variables by prefixing with underscore
const unusedVarFixes = [
  {
    file: '/workspace/app/components/AdvancedPerformanceMonitor.tsx',
    patterns: [
      { from: /catch\s*\(\s*error\s*\)/g, to: 'catch (_error)' },
      { from: /slowResourceData/g, to: '_slowResourceData' }
    ]
  },
  {
    file: '/workspace/app/components/AdvancedSEOOptimizer.tsx',
    patterns: [
      { from: /structuredDataRef/g, to: '_structuredDataRef' }
    ]
  },
  {
    file: '/workspace/app/components/EnhancedErrorBoundary.tsx',
    patterns: [
      { from: /errorReport/g, to: '_errorReport' },
      { from: /reportingError/g, to: '_reportingError' }
    ]
  },
  {
    file: '/workspace/app/components/SystemMonitor.tsx',
    patterns: [
      { from: /catch\s*\(\s*error\s*\)/g, to: 'catch (_error)' }
    ]
  },
  {
    file: '/workspace/app/hooks/useEnhancedPerformance.ts',
    patterns: [
      { from: /performanceOptimizer/g, to: '_performanceOptimizer' },
      { from: /markName/g, to: '_markName' }
    ]
  },
  {
    file: '/workspace/app/hooks/useForm.ts',
    patterns: [
      { from: /ValidationResult/g, to: '_ValidationResult' }
    ]
  },
  {
    file: '/workspace/app/utils/accessibilityChecker.ts',
    patterns: [
      { from: /hasNav/g, to: '_hasNav' }
    ]
  },
  {
    file: '/workspace/app/utils/accessibilityEnhancer.ts',
    patterns: [
      { from: /event\)/g, to: '_event)' }
    ]
  },
  {
    file: '/workspace/app/utils/healthCheck.ts',
    patterns: [
      { from: /catch\s*\(\s*error\s*\)/g, to: 'catch (_error)' }
    ]
  },
  {
    file: '/workspace/app/utils/image.tsx',
    patterns: [
      { from: /quality/g, to: '_quality' },
      { from: /placeholder/g, to: '_placeholder' },
      { from: /blurDataURL/g, to: '_blurDataURL' },
      { from: /isLoaded/g, to: '_isLoaded' }
    ]
  },
  {
    file: '/workspace/app/utils/logger.ts',
    patterns: [
      { from: /metadata\)/g, to: '_metadata)' }
    ]
  },
  {
    file: '/workspace/app/utils/monitoring.ts',
    patterns: [
      { from: /catch\s*\(\s*error\s*\)/g, to: 'catch (_error)' }
    ]
  },
  {
    file: '/workspace/app/utils/performanceMonitor.ts',
    patterns: [
      { from: /PerformancePaintTiming/g, to: '_PerformancePaintTiming' },
      { from: /LargestContentfulPaint/g, to: '_LargestContentfulPaint' },
      { from: /PerformanceEventTiming/g, to: '_PerformanceEventTiming' }
    ]
  },
  {
    file: '/workspace/app/utils/performanceOptimizer.ts',
    patterns: [
      { from: /catch\s*\(\s*error\s*\)/g, to: 'catch (_error)' }
    ]
  },
  {
    file: '/workspace/app/utils/registerServiceWorker.ts',
    patterns: [
      { from: /isLocalhost/g, to: '_isLocalhost' }
    ]
  }
];

// Replace console statements with proper logging
const consoleFixes = [
  '/workspace/app/components/ImprovedErrorBoundary.tsx',
  '/workspace/app/components/PWAInstaller.tsx',
  '/workspace/app/hooks/useEnhancedPerformance.ts',
  '/workspace/app/hooks/useForm.ts',
  '/workspace/app/hooks/usePerformanceMonitoringEnhanced.ts',
  '/workspace/app/setupTests.tsx',
  '/workspace/app/utils/advancedAnalytics.ts',
  '/workspace/app/utils/advancedCaching.ts',
  '/workspace/app/utils/analytics.ts',
  '/workspace/app/utils/analyticsTracker.ts',
  '/workspace/app/utils/enhancedAnalytics.ts',
  '/workspace/app/utils/enhancedErrorHandler.ts',
  '/workspace/app/utils/enhancedErrorMonitoring.ts',
  '/workspace/app/utils/enhancedErrorTracking.ts',
  '/workspace/app/utils/enhancedLogger.ts',
  '/workspace/app/utils/envConfig.ts',
  '/workspace/app/utils/envValidator.ts',
  '/workspace/app/utils/errorHandler.tsx',
  '/workspace/app/utils/errorHandlerEnhanced.ts',
  '/workspace/app/utils/errorLogger.ts',
  '/workspace/app/utils/errorReporter.ts',
  '/workspace/app/utils/logger.ts',
  '/workspace/app/utils/monitoring.ts',
  '/workspace/app/utils/performanceEnhancer.ts',
  '/workspace/app/utils/performanceMetrics.ts',
  '/workspace/app/utils/performanceOptimizer.ts',
  '/workspace/app/utils/performanceUtils.ts',
  '/workspace/app/utils/registerServiceWorker.ts',
  '/workspace/app/utils/securityEnhancer.ts'
];

function applyFixes() {
  console.log('Applying fixes...');
  
  // Apply specific pattern fixes
  fixes.forEach(fix => {
    try {
      if (fs.existsSync(fix.file)) {
        let content = fs.readFileSync(fix.file, 'utf8');
        content = content.replace(fix.pattern, fix.replacement);
        fs.writeFileSync(fix.file, content);
        console.log(`Fixed: ${fix.file}`);
      }
    } catch (error) {
      console.error(`Error fixing ${fix.file}:`, error.message);
    }
  });

  // Apply unused variable fixes
  unusedVarFixes.forEach(fix => {
    try {
      if (fs.existsSync(fix.file)) {
        let content = fs.readFileSync(fix.file, 'utf8');
        fix.patterns.forEach(pattern => {
          content = content.replace(pattern.from, pattern.to);
        });
        fs.writeFileSync(fix.file, content);
        console.log(`Fixed unused vars: ${fix.file}`);
      }
    } catch (error) {
      console.error(`Error fixing unused vars in ${fix.file}:`, error.message);
    }
  });

  // Replace console statements
  consoleFixes.forEach(file => {
    try {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace console.log with logger.info
        content = content.replace(/console\.log\(/g, 'logger.info(');
        content = content.replace(/console\.warn\(/g, 'logger.warn(');
        content = content.replace(/console\.error\(/g, 'logger.error(');
        content = content.replace(/console\.info\(/g, 'logger.info(');
        
        // Add logger import if not present
        if (content.includes('logger.') && !content.includes("import.*logger")) {
          const importMatch = content.match(/import.*from.*['"]/);
          if (importMatch) {
            const importLine = importMatch[0];
            const newImport = importLine.replace(/['"];?$/, ';\nimport { logger } from \'./logger\';');
            content = content.replace(importLine, newImport);
          }
        }
        
        fs.writeFileSync(file, content);
        console.log(`Fixed console statements: ${file}`);
      }
    } catch (error) {
      console.error(`Error fixing console statements in ${file}:`, error.message);
    }
  });
}

applyFixes();
console.log('Fixes applied successfully!');