const fs = require('fs');
const path = require('path');

// List of files with JSX syntax errors
const filesToFix = [
  'app/components/ContentPreviewCard.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/EnhancedLoading.tsx',
  'app/components/EnhancedLoadingStates.tsx',
  'app/components/EnhancedPerformanceOptimizer.tsx',
  'app/components/EnhancedSEOHead.tsx',
  'app/components/EnhancedSkipLink.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/ErrorHandler.tsx',
  'app/components/FuturisticBackground.tsx',
  'app/components/LazyImage.tsx',
  'app/components/Loading.tsx',
  'app/components/LoadingSpinner.tsx',
  'app/components/LoadingStates.tsx',
  'app/components/NeonButton.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/OptimizedLoadingSpinner.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceOptimizations.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/components/ResponsiveContainer.tsx',
  'app/components/SEOHead.tsx',
  'app/components/SecurityEnhancer.tsx',
  'app/components/ServiceCard.tsx',
  'app/components/ServiceCardSkeleton.tsx',
  'app/components/ServiceWorker.tsx',
  'app/components/Sidebar.tsx',
  'app/components/SkipLink.tsx',
  'app/components/UserExperienceEnhancer.tsx'
];

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX issues
    // 1. Fix unclosed JSX fragments
    content = content.replace(/<>([^]*?)(?=\n\s*<\/>)/g, (match, inner) => {
      // Check if the fragment is properly closed
      if (!match.includes('</>')) {
        return match + '\n      </>';
      }
      return match;
    });
    
    // 2. Fix self-closing divs that should be properly closed
    content = content.replace(/<div([^>]*?)\s*\/>/g, '<div$1></div>');
    
    // 3. Fix malformed JSX structure
    content = content.replace(/<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>/g, '<div$1></div>\n          <div$2></div>');
    
    // 4. Fix missing closing tags for sections
    content = content.replace(/<section([^>]*?)>\s*<div([^>]*?)>\s*<\/div>\s*(?=\n\s*<)/g, '<section$1>\n          <div$2></div>\n        </section>');
    
    // 5. Fix incomplete JSX expressions
    content = content.replace(/<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>/g, 
      '<div$1></div>\n          <div$2></div>\n          <div$3></div>');
    
    // 6. Ensure proper closing of main container div
    if (content.includes('<div className="min-h-screen') && !content.includes('</div>\n      <Footer />')) {
      content = content.replace(/(<div className="min-h-screen[^>]*>[\s\S]*?)(<\/section>\s*)(<\/div>)/g, 
        '$1$2\n      </div>');
    }
    
    // 7. Fix missing closing tags for the main fragment
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/(<>\s*[\s\S]*?)(<\/div>\s*<Footer \/>)/g, '$1\n      </div>\n      <Footer />\n    </>');
    }
    
    // 8. Fix specific syntax errors
    content = content.replace(/<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>/g,
      '<div$1></div>\n          <div$2></div>\n          <div$3></div>\n          <div$4></div>');
    
    // 9. Fix missing closing tags for buttons and other elements
    content = content.replace(/<button([^>]*?)>\s*([^<]*?)\s*<([^>]*?)>\s*([^<]*?)\s*<\/button>/g, 
      '<button$1>\n                $2\n                <$3>$4</$3>\n              </button>');
    
    // 10. Ensure proper indentation and structure
    content = content.replace(/(\s*)<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>\s*<div([^>]*?)>\s*<\/div>/g,
      '$1<div$2></div>\n$1          <div$3></div>\n$1          <div$4></div>\n$1          <div$5></div>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixJSXFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('JSX syntax fixes completed!');