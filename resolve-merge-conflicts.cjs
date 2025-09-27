#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by choosing the version from the fix-syntax-errors branch
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and choose the better version (usually the one after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Fix common syntax issues
    content = content.replace(/\s+,\s+/g, ' ');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/{\s*,\s*/g, '{');
    content = content.replace(/\[\s*,\s*/g, '[');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
  }
}

// List of files with merge conflicts
const conflictedFiles = [
  'middleware.ts',
  'pages/404.tsx',
  'pages/_app.tsx',
  'pages/about.tsx',
  'pages/api/analytics.ts',
  'pages/api/error-reporting.ts',
  'pages/api/health.ts',
  'pages/api/image-optimization.ts',
  'pages/api/security-events.ts',
  'pages/dashboard.tsx',
  'pages/enhanced-home.tsx',
  'pages/faq.tsx',
  'pages/index.tsx',
  'pages/portfolio.tsx',
  'pages/privacy-policy.tsx',
  'pages/services.tsx',
  'src/components/AccessibilityAuditor.tsx',
  'src/components/PerformanceOptimizer.tsx',
  'src/components/SEO.tsx',
  'src/components/WebVitals.tsx',
  'src/hooks/useAnalytics.ts',
  'src/utils/errorHandling.ts'
];

// Resolve conflicts for each file
conflictedFiles.forEach(file => {
  if (fs.existsSync(file)) {
    resolveConflicts(file);
  }
});

console.log('Merge conflict resolution completed!');