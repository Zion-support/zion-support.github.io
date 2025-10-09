import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that need TypeScript fixes
const filesToFix = [
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/Analytics.tsx',
  'app/components/ComprehensiveErrorBoundary.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/PerformanceMonitor.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/SEOOptimizer.tsx',
  'app/components/SecurityEnhancer.tsx',
  'app/components/PWAInstaller.tsx'
];

function fixTypeScriptIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix console statements in production
    if (content.includes('console.')) {
      // Replace console statements with proper logging or remove them
      content = content.replace(/console\.(log|warn|error|info)\([^)]*\);?/g, (match) => {
        // Only remove in production builds, keep in development
        if (match.includes('console.log')) {
          return '// ' + match; // Comment out console.log
        }
        return match; // Keep console.warn, console.error for debugging
      });
      modified = true;
    }

    // Fix any types with more specific types
    const anyTypeFixes = [
      // Common any type patterns
      { pattern: /:\s*any\b/g, replacement: ': unknown' },
      { pattern: /\(\s*any\s*\)/g, replacement: '(unknown)' },
      { pattern: /\[\s*any\s*\]/g, replacement: '[unknown]' },
      // Specific cases
      { pattern: /window\s*as\s*any/g, replacement: 'window as Window & typeof globalThis' },
      { pattern: /gtag\s*in\s*window\s*\?\s*\(window\s*as\s*any\)\.gtag/g, replacement: 'gtag in window ? (window as Window & { gtag: Function }).gtag' },
    ];

    anyTypeFixes.forEach(({ pattern, replacement }) => {
      if (content.match(pattern)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    // Fix specific any types with better types
    const specificTypeFixes = [
      // Analytics component
      { pattern: /initializeErrorTracking:\s*any/g, replacement: 'initializeErrorTracking: () => void' },
      { pattern: /initializePerformanceMonitoring:\s*any/g, replacement: 'initializePerformanceMonitoring: () => void' },
      { pattern: /initializeUserBehaviorTracking:\s*any/g, replacement: 'initializeUserBehaviorTracking: () => void' },
      { pattern: /trackEvent:\s*any/g, replacement: 'trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void' },
      { pattern: /trackPageView:\s*any/g, replacement: 'trackPageView: (pageName: string, parameters?: Record<string, unknown>) => void' },
      { pattern: /trackError:\s*any/g, replacement: 'trackError: (error: Error, context?: Record<string, unknown>) => void' },
      { pattern: /trackPerformance:\s*any/g, replacement: 'trackPerformance: (metric: string, value: number, context?: Record<string, unknown>) => void' },
      
      // Performance monitoring
      { pattern: /performance\.getEntriesByType\('navigation'\)\[0\]\s*as\s*any/g, replacement: 'performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming' },
      
      // Error handling
      { pattern: /error:\s*any/g, replacement: 'error: Error' },
      { pattern: /errorInfo:\s*any/g, replacement: 'errorInfo: ErrorInfo' },
      { pattern: /error\.stack\s*\|\|\s*''/g, replacement: 'error.stack ?? ""' },
      { pattern: /errorInfo\.componentStack\s*\|\|\s*''/g, replacement: 'errorInfo.componentStack ?? ""' },
    ];

    specificTypeFixes.forEach(({ pattern, replacement }) => {
      if (content.match(pattern)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    // Add proper type imports if needed
    if (content.includes('PerformanceNavigationTiming') && !content.includes('PerformanceNavigationTiming')) {
      // Add type import if not already present
      const importMatch = content.match(/import\s+.*from\s+['"]react['"];?/);
      if (importMatch) {
        content = content.replace(importMatch[0], `${importMatch[0]}\nimport type { ErrorInfo } from 'react';`);
        modified = true;
      }
    }

    // Fix non-null assertions
    content = content.replace(/!/g, ' ?? null');
    if (content.includes('?? null')) {
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed TypeScript issues in ${filePath}`);
    } else {
      console.log(`No TypeScript issues found in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixTypeScriptIssues(fullPath);
  }
});

console.log('TypeScript issues cleanup completed!');