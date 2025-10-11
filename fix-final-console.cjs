#!/usr/bin/env node

const fs = require('fs');

// Function to fix console statements with proper formatting
function fixConsoleStatements(content) {
  // Fix console statements with extra spaces
  content = content.replace(
    /if \(process\.env\.NODE_ENV === 'development'\)\s*{\s*console\.([^}]+);\s*}/g,
    'if (process.env.NODE_ENV === \'development\') { console.$1; }'
  );
  
  // Fix console statements that are not properly wrapped
  content = content.replace(
    /console\.(log|error|warn|info|debug)\([^)]*\);/g,
    (match) => {
      // Check if it's already wrapped
      const beforeMatch = content.substring(0, content.indexOf(match));
      const afterMatch = content.substring(content.indexOf(match) + match.length);
      
      if (beforeMatch.includes('if (process.env.NODE_ENV === \'development\')') && 
          afterMatch.includes('}')) {
        return match;
      }
      
      return `if (process.env.NODE_ENV === 'development') { ${match} }`;
    }
  );
  
  return content;
}

// List of files to fix
const filesToFix = [
  '/workspace/App.tsx',
  '/workspace/app/components/AdvancedPerformanceMonitor.tsx',
  '/workspace/app/components/EnhancedErrorBoundary.tsx',
  '/workspace/app/components/ImprovedErrorBoundary.tsx',
  '/workspace/app/components/PWAInstaller.tsx',
  '/workspace/app/components/PerformanceMonitor.tsx',
  '/workspace/app/components/SystemMonitor.tsx',
  '/workspace/app/hooks/useEnhancedPerformance.ts',
  '/workspace/app/hooks/useForm.ts',
  '/workspace/app/hooks/usePerformanceMonitoringEnhanced.ts',
  '/workspace/app/utils/accessibilityChecker.ts',
  '/workspace/app/utils/accessibilityEnhancer.ts',
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
  '/workspace/app/utils/healthCheck.ts',
  '/workspace/app/utils/logger.ts',
  '/workspace/app/utils/monitoring.ts',
  '/workspace/app/setupTests.tsx'
];

let fixedCount = 0;

filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      content = fixConsoleStatements(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);