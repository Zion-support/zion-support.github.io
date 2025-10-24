const fs = require('fs');
const path = require('path');

// List of problematic files that need to be cleaned up
const problematicFiles = [
  'app/components/AdvancedSEOOptimizer_new.tsx',
  'app/components/PerformanceEnhancer.tsx',
  'app/components/utils/accessibilityUtils.ts',
  'app/config/appConfig.ts',
  'app/config/security.ts',
  'app/data/services.ts',
  'app/hooks/useAnalytics.ts',
  'app/hooks/usePerformance.ts',
  'app/hooks/usePerformanceMonitoring.ts',
  'app/metadata.ts',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/middleware/rateLimiter.ts',
  'app/middleware/requestMiddleware.ts',
  'app/page-backup.tsx',
  'app/page-new.tsx',
  'app/page-optimized.tsx',
  'app/page-original.tsx',
  'app/services/BaseService.ts',
  'app/types/enhanced.types.ts',
  'app/utils/__tests__/performanceMonitoring.test.ts',
  'app/utils/a11y.ts',
  'app/utils/accessibility.ts',
  'app/utils/accessibilityChecker.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/advancedCaching.ts',
  'app/utils/analyticsTracker.ts',
  'app/utils/apiCache.ts',
  'app/utils/apiInterceptor.ts',
  'app/utils/cacheManager.ts',
  'app/utils/configManager.ts',
  'app/utils/dataTransformers.ts',
  'app/utils/dataValidator.ts',
  'app/utils/enhancedAnalytics.ts',
  'app/utils/enhancedErrorHandler.ts',
  'app/utils/enhancedErrorTracking.ts',
  'app/utils/enhancedLogger.ts',
  'app/utils/envConfig.ts',
  'app/utils/envValidator.ts',
  'app/utils/errorHandlerEnhanced.ts',
  'app/utils/errorLogger.ts',
  'app/utils/errorReporter.ts',
  'app/utils/errorTracking.ts',
  'app/utils/formValidation.ts',
  'app/utils/logger.ts',
  'app/utils/navigation.tsx',
  'app/utils/performanceMonitor.ts',
  'app/utils/performanceOptimizer.ts',
  'app/utils/preloadOptimizer.ts',
  'app/utils/productionLogger.ts',
  'app/utils/registerServiceWorker.ts',
  'app/utils/securityManager.ts',
  'app/utils/seoOptimizer.ts',
  'app/utils/seoUtils.ts',
  'app/utils/validation.ts',
  'app/utils/validators.ts',
  'src/components/AnalyticsProvider.tsx',
  'src/components/NeonButton.tsx'
];

// Function to clean up merge conflicts and syntax errors
function cleanFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflicts
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`Removing file with merge conflicts: ${filePath}`);
        fs.unlinkSync(filePath);
        return true;
      }
      
      // Check if file is mostly corrupted
      if (content.length < 100 || content.includes('Conflict resolved')) {
        console.log(`Removing corrupted file: ${filePath}`);
        fs.unlinkSync(filePath);
        return true;
      }
      
      // Try to fix common syntax errors
      let cleanedContent = content
        .replace(/<<<<<<<.*?=======.*?>>>>>>>/gs, '') // Remove merge conflicts
        .replace(/<<<<<<<.*?>>>>>>>/gs, '') // Remove incomplete merge conflicts
        .replace(/\/\/ Conflict resolved.*$/gm, '') // Remove conflict resolution comments
        .replace(/^\s*$/gm, '') // Remove empty lines
        .trim();
      
      if (cleanedContent.length < 50) {
        console.log(`Removing file with insufficient content: ${filePath}`);
        fs.unlinkSync(filePath);
        return true;
      }
      
      // Write cleaned content back
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Cleaned file: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    // If we can't clean it, delete it
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted problematic file: ${filePath}`);
    } catch (deleteError) {
      console.error(`Could not delete ${filePath}:`, deleteError.message);
    }
    return true;
  }
  return false;
}

// Clean up all problematic files
let cleanedCount = 0;
for (const filePath of problematicFiles) {
  if (cleanFile(filePath)) {
    cleanedCount++;
  }
}

console.log(`Cleaned up ${cleanedCount} problematic files`);

// Also clean up any remaining files with merge conflicts
function findAndCleanMergeConflicts(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findAndCleanMergeConflicts(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          console.log(`Found merge conflict in: ${fullPath}`);
          fs.unlinkSync(fullPath);
        }
      } catch (error) {
        // Ignore errors
      }
    }
  }
}

console.log('Scanning for additional merge conflicts...');
findAndCleanMergeConflicts('app');
console.log('Cleanup complete!');