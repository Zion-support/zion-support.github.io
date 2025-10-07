#!/usr/bin/env node

import fs from 'fs';

console.log('🔧 Fixing remaining TypeScript errors...');

// Fix App.tsx - remove duplicate ErrorBoundary
let appContent = fs.readFileSync('App.tsx', 'utf8');
appContent = appContent.replace(
  /const ErrorBoundary = memo\(\(\) => \([\s\S]*?\)\);/g,
  ''
);
fs.writeFileSync('App.tsx', appContent);

// Fix usePerformance.ts - fix import
let usePerformanceContent = fs.readFileSync(
  'src/hooks/usePerformance.ts',
  'utf8'
);
usePerformanceContent = usePerformanceContent.replace(
  "import { performanceOptimizer } from '../utils/performanceOptimizer';",
  "import performanceOptimizer from '../utils/performanceOptimizer';"
);
fs.writeFileSync('src/hooks/usePerformance.ts', usePerformanceContent);

// Fix analytics.ts - remove duplicate properties
let analyticsContent = fs.readFileSync('src/utils/analytics.ts', 'utf8');
analyticsContent = analyticsContent.replace(
  /const event: AnalyticsEvent = \{[\s\S]*?timestamp: Date\.now\(\),\s*\};/g,
  `const event: AnalyticsEvent = {
      name,
      category,
      action: action || '',
      label: label || undefined,
      value: value || 0,
      properties: properties || {},
      timestamp: Date.now(),
    };`
);

// Remove duplicate analytics declarations
analyticsContent = analyticsContent.replace(
  /\/\/ Create singleton instance[\s\S]*?export default analytics;/g,
  `// Create singleton instance
export const analytics = new Analytics();
export default analytics;`
);

fs.writeFileSync('src/utils/analytics.ts', analyticsContent);

// Fix errorHandler.ts - remove duplicate declarations
let errorHandlerContent = fs.readFileSync('src/utils/errorHandler.ts', 'utf8');
errorHandlerContent = errorHandlerContent.replace(
  /\/\/ Create singleton instance[\s\S]*?export default errorHandler;/g,
  `// Create singleton instance
export const errorHandler = new ErrorHandler();
export default errorHandler;`
);

fs.writeFileSync('src/utils/errorHandler.ts', errorHandlerContent);

console.log('✅ Fixed remaining TypeScript errors');
