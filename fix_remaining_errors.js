const fs = require('fs');
const path = require('path');

// Function to fix unterminated string literals
function fixUnterminatedStrings(content) {
  // Fix unterminated string literals by adding closing quotes
  content = content.replace(/"([^"]*?)\n/g, '"$1"\n');
  content = content.replace(/'([^']*?)\n/g, "'$1'\n");
  
  // Fix template literals
  content = content.replace(/`([^`]*?)\n/g, '`$1`\n');
  
  return content;
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
}

// Function to fix JSX issues
function fixJSXIssues(content) {
  // Fix missing closing tags
  content = content.replace(/<nav([^>]*)>(?!.*<\/nav>)/g, (match, attrs) => {
    if (match.includes('</nav>')) return match;
    return match + '</nav>';
  });
  
  content = content.replace(/<footer([^>]*)>(?!.*<\/footer>)/g, (match, attrs) => {
    if (match.includes('</footer>')) return match;
    return match + '</footer>';
  });
  
  content = content.replace(/<body([^>]*)>(?!.*<\/body>)/g, (match, attrs) => {
    if (match.includes('</body>')) return match;
    return match + '</body>';
  });
  
  return content;
}

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^,}\n]+)\n\s*(\w+):/g, '$1: $2,\n$3:');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*\n\s*(import|export|const|let|var|function|interface|type)/g, '$1;\n$2');
  
  // Fix missing parentheses in function calls
  content = content.replace(/function\s+(\w+)\s*\{/g, 'function $1() {');
  
  // Fix missing closing parentheses
  content = content.replace(/\(([^)]*?)\n/g, '($1)\n');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixUnterminatedStrings(content);
    content = fixJSXIssues(content);
    content = fixSyntaxErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with known issues
const problemFiles = [
  './app/App.tsx',
  './app/about/page.tsx',
  './app/components/AIToolCard.tsx',
  './app/components/AccessibilityEnhancer.tsx',
  './app/components/AdvancedErrorBoundary.tsx',
  './app/components/ContentPreviewCard.tsx',
  './app/components/EnhancedAccessibilityWrapper.tsx',
  './app/components/EnhancedLoadingStates.tsx',
  './app/components/ErrorBoundary.tsx',
  './app/components/ErrorBoundaryWrapper.tsx',
  './app/components/ErrorHandler.tsx',
  './app/components/Footer.tsx',
  './app/components/FuturisticBackground.tsx',
  './app/components/InteractiveAIROICalculator.tsx',
  './app/components/Navigation.tsx',
  './app/components/OptimizedErrorBoundary.tsx',
  './app/components/PageLoader.tsx',
  './app/components/PerformanceMonitor.tsx',
  './app/components/SEOHeadWrapper.tsx',
  './app/components/UltimateBusinessIntelligence2025Banner.tsx',
  './app/components/utils/accessibilityUtils.ts',
  './app/contact/page.tsx',
  './app/data/servicesData.ts',
  './app/hooks/useErrorMonitoring.ts',
  './app/hooks/useForm.ts',
  './app/hooks/useImageOptimization.ts',
  './app/hooks/useLazyLoading.ts',
  './app/hooks/usePerformance.ts',
  './app/hooks/usePerformanceMonitoring.ts',
  './app/hooks/usePerformanceMonitoringEnhanced.ts',
  './app/hooks/useSEO.ts',
  './app/layout.tsx',
  './app/middleware/rateLimiter.ts',
  './app/middleware/requestMiddleware.ts',
  './app/network-infrastructure/page.tsx',
  './app/page-new.tsx',
  './app/page.tsx',
  './app/pages/AboutPage.tsx',
  './app/pages/AdminPage.tsx',
  './app/pages/ContactPage.tsx',
  './app/pages/HomePage.tsx',
  './app/services/BaseService.ts',
  './app/test/page.tsx',
  './app/test-page.tsx',
  './app/types/app.types.ts',
  './app/utils/__tests__/performanceMonitoring.test.ts',
  './app/utils/analytics.ts',
  './app/utils/performance.ts',
  './app/utils/seoData.ts'
];

console.log('Fixing remaining linting errors...');

let fixedCount = 0;
problemFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`\nFixed ${fixedCount} files`);