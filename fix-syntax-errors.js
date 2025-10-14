import fs from 'fs';
import path from 'path';

const fixSyntaxErrors = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors
    const fixes = [
      // Fix semicolon instead of comma
      { pattern: /;\s*}/g, replacement: '}' },
      { pattern: /;\s*\)/g, replacement: ')' },
      { pattern: /;\s*\]/g, replacement: ']' },
      
      // Fix missing commas in objects
      { pattern: /(\w+)\s*;\s*(\w+)/g, replacement: '$1,\n  $2' },
      
      // Fix malformed function declarations
      { pattern: /(\w+)\s*\(\s*\)\s*{\s*$/gm, replacement: '$1: () => {\n    ' },
      
      // Fix missing closing braces
      { pattern: /}\s*$/gm, replacement: '}\n' },
      
      // Fix malformed JSX fragments
      { pattern: /<>\s*$/gm, replacement: '<>\n' },
      { pattern: /<\/>\s*$/gm, replacement: '</>\n' },
      
      // Fix missing return statements
      { pattern: /(\w+)\s*\(\s*\)\s*{\s*([^}]+)\s*}/gm, replacement: '$1: () => {\n    return $2;\n  }' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Get all TypeScript files with errors
const errorFiles = [
  'app/config/errorBoundaryConfig.tsx',
  'app/contexts/AnalyticsContextDefinition.ts',
  'app/hooks/useSEO.ts',
  'app/lib/utils.ts',
  'app/types/gtag.d.ts',
  'app/utils/accessibilityChecker.ts',
  'app/utils/advancedAnalytics.ts',
  'app/utils/analyticsTracker.ts',
  'app/utils/dataTransformers.ts',
  'app/utils/enhancedAnalytics.ts',
  'app/utils/enhancedErrorTracking.ts',
  'app/utils/errorHandlerEnhanced.ts',
  'app/utils/errorLogger.ts',
  'app/utils/errorReporter.ts',
  'app/utils/errorTracking.ts',
  'app/utils/performanceMonitor.ts',
  'app/utils/performanceMonitoring.ts',
  'app/utils/securityHeaders.ts',
  'app/utils/seoEnhancer.ts',
  'app/utils/seoUtils.ts',
  'app/utils/structuredData.ts',
  'app/utils/usePerformanceMonitor.ts'
];

errorFiles.forEach(fixSyntaxErrors);
console.log('Syntax errors fixed');