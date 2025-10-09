const fs = require('fs');
const path = require('path');

// Files with console statements based on linting output
const filesToFix = [
  'app/components/ComprehensiveErrorBoundary.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/PWAInstaller.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/SecurityEnhancer.tsx'
];

function fixConsoleStatements(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove console.log, console.error, console.warn statements
    // But keep console statements that are in development-only blocks
    const consoleRegex = /^\s*console\.(log|error|warn|info|debug)\([^)]*\);\s*$/gm;
    
    // Replace with empty line or remove entirely
    content = content.replace(consoleRegex, '');
    
    // Also remove console statements that might be on the same line as other code
    const inlineConsoleRegex = /console\.(log|error|warn|info|debug)\([^)]*\);\s*/g;
    content = content.replace(inlineConsoleRegex, '');
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed console statements in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  fixConsoleStatements(file);
});

console.log('Console statements fixed!');