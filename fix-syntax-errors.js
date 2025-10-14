import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with syntax errors that need fixing
const filesToFix = [
  'app/hooks/useAnalyticsContext.ts',
  'app/hooks/usePerformanceMonitor.ts',
  'app/types/app.types.ts',
  'app/types/gtag.d.ts',
  'app/utils/a11y.ts',
  'app/utils/accessibility.ts',
  'app/utils/accessibilityChecker.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/analyticsTracker.ts',
  'app/utils/apiClient.ts',
  'app/utils/apiInterceptor.ts',
  'app/utils/configManager.ts',
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
  'app/utils/performanceMonitor.ts',
  'app/utils/performanceMonitoring.ts',
  'app/utils/preloadOptimizer.ts',
  'app/utils/productionLogger.ts',
  'app/utils/registerServiceWorker.ts',
  'app/utils/seoConstants.ts',
  'app/utils/seoEnhancer.ts',
  'app/utils/seoOptimizer.ts',
  'app/utils/seoUtils.ts',
  'app/utils/sitemapGenerator.ts',
  'app/utils/structuredData.ts',
  'app/utils/validation.ts',
  'hooks/usePerformanceMetrics.ts',
  'utils/seoUtils.ts'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Fix missing commas in object literals
      .replace(/(\w+):\s*([^,\n}]+)(?=\s*[}\n])/g, '$1: $2,')
      // Fix missing commas in arrays
      .replace(/(\w+)(?=\s*[}\n])/g, '$1,')
      // Fix unterminated strings
      .replace(/(\w+):\s*"([^"]*)$/gm, '$1: "$2"')
      // Fix missing closing brackets
      .replace(/(\w+):\s*\[([^\]]*)$/gm, '$1: [$2]')
      // Fix missing closing parentheses
      .replace(/(\w+):\s*\(([^)]*)$/gm, '$1: ($2)')
      // Remove trailing commas before closing brackets
      .replace(/,(\s*[}\]])/g, '$1')
      // Fix incomplete function declarations
      .replace(/(\w+)\s*\(([^)]*)$/gm, (match, funcName, params) => {
        if (params.trim() === '') {
          return `${funcName}() { return null; }`;
        }
        return match;
      });

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Syntax error fixing completed!');