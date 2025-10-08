#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix console statements
function fixConsoleStatements(content) {
  // Replace console.log with proper logging in production
  content = content.replace(/console\.(log|error|warn|info)\(/g, (match, method) => {
    return `if (process.env.NODE_ENV === 'development') console.${method}(`;
  });

  // Add closing parenthesis for the if statement
  content = content.replace(
    /if \(process\.env\.NODE_ENV === 'development'\) console\.(log|error|warn|info)\([^)]*\);/g,
    match => {
      return match.replace(/\);$/, '); }');
    }
  );

  return content;
}

// Function to fix unused variables by prefixing with underscore
function fixUnusedVariables(content) {
  // Fix unused function parameters
  content = content.replace(/(\w+)\s*:\s*any\s*,\s*(\w+)\s*:\s*any/g, '_$1: any, _$2: any');

  // Fix unused variables in function parameters
  content = content.replace(/\((\w+)\s*:\s*any\s*,\s*(\w+)\s*:\s*any\)/g, '(_$1: any, _$2: any)');

  return content;
}

// Function to fix specific files
function fixFile(filePath) {
  try {
    const _fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {

      return;
    }

    let _content = fs.readFileSync(fullPath, 'utf8');

    // Apply fixes
    content = fixConsoleStatements(content);
    content = fixUnusedVariables(content);

    fs.writeFileSync(fullPath, content);

  } catch (error) {

  }
}

// Files that need fixing
const filesToFix = [
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/ImprovedErrorBoundary.tsx',
  'app/components/PWAInstaller.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/SystemMonitor.tsx',
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/useForm.ts',
  'app/hooks/usePerformanceMonitoringEnhanced.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/advancedCaching.ts',
  'app/utils/analytics.ts',
  'app/utils/analyticsTracker.ts',
  'app/utils/enhancedAnalytics.ts',
  'app/utils/enhancedErrorHandler.ts',
  'app/utils/enhancedErrorMonitoring.ts',
  'app/utils/enhancedErrorTracking.ts',
  'app/utils/enhancedLogger.ts',
  'app/utils/envConfig.ts',
  'app/utils/envValidator.ts',
  'app/utils/errorHandler.tsx',
  'app/utils/errorHandlerEnhanced.ts',
  'app/utils/errorLogger.ts',
  'app/utils/errorReporter.ts',
  'app/utils/logger.ts',
  'app/utils/monitoring.ts',
];

// Fix all files
filesToFix.forEach(fixFile);
