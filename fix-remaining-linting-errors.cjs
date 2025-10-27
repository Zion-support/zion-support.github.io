const fs = require('fs');
const path = require('path');

// Function to remove unused React imports
function removeUnusedReactImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if React is imported but not used
  if (content.includes("import React from 'react';") && !content.includes('React.')) {
    content = content.replace("import React from 'react';\n", '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Removed unused React import from: ${filePath}`);
  }
}

// Function to fix unused variables by prefixing with underscore
function fixUnusedVariables(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix specific unused variables
  content = content.replace(/\bvalue\b/g, '_value');
  content = content.replace(/\bsize\b/g, '_size');
  
  if (content !== fs.readFileSync(filePath, 'utf8')) {
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused variables in: ${filePath}`);
  }
}

// Function to fix parsing errors
function fixParsingErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix common parsing errors
  if (content.includes('Parsing error: \',\' expected')) {
    // Look for common syntax issues
    content = content.replace(/,\s*\)/g, ')'); // Remove trailing commas before closing parens
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed parsing errors in: ${filePath}`);
  }
}

// List of specific files to fix
const filesToFix = [
  'app/components/Navigation-backup.tsx',
  'app/components/utils/accessibilityUtils.ts',
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/useErrorMonitoring.ts',
  'app/hooks/useForm.ts',
  'app/hooks/useIntersectionObserver.ts',
  'app/hooks/useLazyLoading.ts',
  'app/hooks/usePerformanceMonitor.ts',
  'app/types/accessibility.ts',
  'app/utils/performanceEnhancer.ts',
  'app/utils/performanceMetrics.ts',
  'app/utils/performanceMonitoring.ts',
  'app/utils/performanceOptimizations.ts',
  'app/utils/performanceUtils.ts',
  'app/utils/seoEnhancer.ts',
  'app/utils/sitemapGenerator.ts',
  'app/utils/testUtils.ts'
];

console.log('Fixing remaining linting errors...');

for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    removeUnusedReactImports(fullPath);
    fixUnusedVariables(fullPath);
    fixParsingErrors(fullPath);
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log('Remaining linting errors fix completed!');