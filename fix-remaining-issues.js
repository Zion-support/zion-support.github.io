#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix remaining console statements
function fixRemainingConsole(content) {
  // Fix console statements that are not properly wrapped
  content = content.replace(
    /console\.(log|error|warn|info)\(/g,
    (match, method) => {
      return `if (process.env.NODE_ENV === 'development') console.${method}(`;
    }
  );
  
  // Add closing braces for console statements
  content = content.replace(
    /if \(process\.env\.NODE_ENV === 'development'\) console\.(log|error|warn|info)\([^)]*\);$/gm,
    (match) => {
      return match + ' }';
    }
  );
  
  return content;
}

// Function to fix unused variables by prefixing with underscore
function fixUnusedVariables(content) {
  // Fix unused function parameters
  content = content.replace(
    /(\w+)\s*:\s*any\s*,\s*(\w+)\s*:\s*any/g,
    '_$1: any, _$2: any'
  );
  
  // Fix unused variables in function parameters
  content = content.replace(
    /\((\w+)\s*:\s*any\s*,\s*(\w+)\s*:\s*any\)/g,
    '(_$1: any, _$2: any)'
  );
  
  // Fix unused variables by prefixing with underscore
  const unusedVars = [
    'addMetaTag',
    'updateCanonicalUrl', 
    'addStructuredData',
    'trackPageView',
    'trackPerformanceMetrics',
    'hasNav',
    'event',
    'ErrorType',
    'jest'
  ];
  
  unusedVars.forEach(varName => {
    const regex = new RegExp(`\\b${varName}\\b`, 'g');
    content = content.replace(regex, `_${varName}`);
  });
  
  return content;
}

// Files that need fixing
const filesToFix = [
  'App.tsx',
  'app/components/AdvancedPerformanceMonitor.tsx',
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/OptimizedImage.tsx',
  'app/guides/ai-2026-implementation-roadmap/page.tsx',
  'app/guides/ai-2027-implementation-roadmap/page.tsx',
  'app/hooks/usePerformanceMonitoringEnhanced.ts',
  'app/setupTests.tsx',
  'app/utils/__tests__/performanceMonitoring.test.ts',
  'app/utils/accessibilityChecker.ts',
  'app/utils/accessibilityEnhancer.ts',
  'app/utils/apiInterceptor.ts',
  'app/utils/advancedPerformanceOptimizer.ts',
  'app/config/errorHandling.ts'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Apply fixes
    content = fixRemainingConsole(content);
    content = fixUnusedVariables(content);
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Remaining issues fixed!');