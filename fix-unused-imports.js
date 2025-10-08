import fs from 'fs';
import path from 'path';

// Files that commonly have unused Link imports
const filesWithUnusedLink = [
  'app/App.tsx',
  'app/about/page.tsx',
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/AnalyticsProvider.tsx',
  'app/components/ContentShowcase.tsx',
  'app/components/EmptyComponent.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/InteractiveAIROICalculator.tsx',
  'app/components/InteractiveContentShowcase2026.tsx',
  'app/components/LoadingComponents.tsx',
  'app/components/LoadingSpinner.tsx',
  'app/components/ModernLoadingSpinner.tsx',
  'app/components/OptimizedErrorBoundary.tsx',
  'app/components/OptimizedLoadingSpinner.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/PlaceholderBanner.tsx',
  'app/components/SEO.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/components/ServiceCard.tsx',
  'app/components/SystemMonitor.tsx',
  'app/components/Toast.tsx',
  'app/config/errorBoundaryConfig.tsx',
  'app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx',
  'app/pages/Home.tsx',
  'app/pages/HomePage.tsx',
  'app/services/page.tsx',
  'app/utils/errorHandler.tsx',
  'app/utils/testRunner.tsx'
];

// Files that commonly have unused React imports
const filesWithUnusedReact = [
  'app/config/appConfig.ts',
  'app/config/errorHandling.ts',
  'app/config/security.ts',
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/usePerformance.ts',
  'app/middleware/rateLimiter.ts',
  'app/middleware/requestMiddleware.ts',
  'app/services/BaseService.ts',
  'app/setupTests.tsx',
  'app/utils/__tests__/performanceMonitoring.test.ts',
  'app/utils/a11y.ts',
  'app/utils/accessibility.ts',
  'app/utils/accessibilityChecker.ts',
  'app/utils/accessibilityEnhancer.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/advancedCaching.ts',
  'app/utils/analyticsTracker.ts',
  'app/utils/apiClient.ts',
  'app/utils/apiInterceptor.ts',
  'app/utils/cacheManager.ts',
  'app/utils/configManager.ts',
  'app/utils/dataTransformers.ts',
  'app/utils/dataValidator.ts',
  'app/utils/enhancedAnalytics.ts',
  'app/utils/enhancedErrorHandler.ts',
  'app/utils/enhancedErrorMonitoring.ts',
  'app/utils/enhancedErrorTracking.ts',
  'app/utils/enhancedLogger.ts',
  'app/utils/envConfig.ts',
  'app/utils/errorLogger.ts',
  'app/utils/errorReporter.ts',
  'app/utils/errorTracking.ts',
  'app/utils/formValidation.ts',
  'app/utils/performanceEnhancer.ts',
  'app/utils/performanceMetrics.ts',
  'app/utils/performanceMonitor.ts',
  'app/utils/performanceMonitoring.ts',
  'app/utils/registerServiceWorker.ts',
  'app/utils/securityHeaders.ts',
  'app/utils/securityManager.ts',
  'app/utils/seoEnhancer.ts',
  'app/utils/sitemapGenerator.ts',
  'app/utils/testUtils.ts',
  'app/utils/validators.ts',
  'app/vite-env.d.ts'
];

// Fix unused Link imports
filesWithUnusedLink.forEach(filePath => {
  try {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused Link import
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];\s*\n/g, '');
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];\s*/g, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed unused Link import in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

// Fix unused React imports
filesWithUnusedReact.forEach(filePath => {
  try {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused React import
    content = content.replace(/import\s*React\s*from\s*['"]react['"];\s*\n/g, '');
    content = content.replace(/import\s*React\s*from\s*['"]react['"];\s*/g, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed unused React import in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Unused imports fixes completed');