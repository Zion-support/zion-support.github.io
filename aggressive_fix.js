const fs = require('fs');
const path = require('path');

// Function to clean up a file completely
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
    
    // Fix unterminated string literals by adding closing quotes
    content = content.replace(/"([^"]*?)\n/g, '"$1"\n');
    content = content.replace(/'([^']*?)\n/g, "'$1'\n");
    content = content.replace(/`([^`]*?)\n/g, '`$1`\n');
    
    // Fix extra quotes and semicolons in import statements
    content = content.replace(/import\s+([^;]+);""/g, 'import $1;');
    content = content.replace(/import\s+([^;]+)';/g, "import $1;");
    content = content.replace(/import\s+([^;]+)';/g, "import $1;");
    content = content.replace(/from\s+"([^"]+)""/g, 'from "$1"');
    content = content.replace(/from\s+'([^']+)''/g, "from '$1'");
    
    // Fix extra commas and semicolons
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/""/g, '"');
    content = content.replace(/''/g, "'");
    
    // Fix JSX issues
    content = content.replace(/<>\s*<([^>]+)>/g, '<$1>');
    content = content.replace(/<\/>\s*<\/div>/g, '</div>');
    
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
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}\n]+)\n\s*(\w+):/g, '$1: $2,\n$3:');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\n\s*(import|export|const|let|var|function|interface|type)/g, '$1;\n$2');
    
    // Fix missing parentheses
    content = content.replace(/function\s+(\w+)\s*\{/g, 'function $1() {');
    content = content.replace(/\(([^)]*?)\n/g, '($1)\n');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// List of files to clean
const filesToClean = [
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

console.log('Starting aggressive cleanup...');

let cleanedCount = 0;
filesToClean.forEach(file => {
  if (fs.existsSync(file)) {
    if (cleanFile(file)) {
      cleanedCount++;
    }
  }
});

console.log(`\nCleaned ${cleanedCount} files`);