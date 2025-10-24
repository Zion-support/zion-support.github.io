const fs = require('fs');
const path = require('path');

// List of files with JSX errors
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
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // 2. Fix malformed JSX elements
    content = content.replace(/<(\w+)([^>]*?)\s*>\s*$/gm, '<$1$2>');
    content = content.replace(/^\s*<\/\w+>\s*$/gm, (match) => {
      const tagName = match.match(/<\/(\w+)>/);
      if (tagName) {
        return `</${tagName[1]}>`;
      }
      return match;
    });
    
    // 3. Fix self-closing tags
    content = content.replace(/<(\w+)([^>]*?)\s*>\s*<\/\1>/g, '<$1$2 />');
    
    // 4. Fix missing closing tags for common elements
    const commonTags = ['div', 'section', 'button', 'h1', 'h2', 'h3', 'p', 'span', 'ul', 'li'];
    commonTags.forEach(tag => {
      const openTagRegex = new RegExp(`<${tag}([^>]*?)>`, 'g');
      const closeTagRegex = new RegExp(`</${tag}>`, 'g');
      
      let openMatches = content.match(openTagRegex) || [];
      let closeMatches = content.match(closeTagRegex) || [];
      
      if (openMatches.length > closeMatches.length) {
        // Add missing closing tags
        const missing = openMatches.length - closeMatches.length;
        for (let i = 0; i < missing; i++) {
          content += `</${tag}>`;
        }
      }
    });
    
    // 5. Fix JSX expressions with multiple parent elements
    content = content.replace(/(\s*)(<[^>]+>)\s*(\s*<[^>]+>)/g, '$1<>\n$2\n$3\n</>');
    
    // 6. Fix malformed function declarations
    content = content.replace(/^\s*}\s*$/gm, '');
    content = content.replace(/^\s*]\s*$/gm, '');
    
    // 7. Fix missing semicolons and syntax
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    content = content.replace(/;\s*;/g, ';');
    
    // 8. Fix React component structure
    if (content.includes('const') && content.includes('React.FC') && !content.includes('export default')) {
      content += '\n\nexport default ComponentName;';
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixJSXFile(fullPath);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('JSX fixes completed!');
