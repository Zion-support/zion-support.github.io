const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Remove trailing commas before semicolons
      .replace(/,;/g, ';')
      // Fix JSX attributes with trailing commas
      .replace(/,(\s*[}>])/g, '$1')
      // Fix object properties with trailing commas
      .replace(/,(\s*[}])/g, '$1')
      // Fix array elements with trailing commas
      .replace(/,(\s*\])/g, '$1')
      // Fix function parameters with trailing commas
      .replace(/,(\s*\))/g, '$1')
      // Fix JSX closing tags with trailing commas
      .replace(/,(\s*\/>)/g, '$1')
      // Fix JSX children with trailing commas
      .replace(/,(\s*<\/[^>]+>)/g, '$1')
      // Remove standalone commas
      .replace(/^,;$/gm, '')
      .replace(/^,$/gm, '')
      // Fix multiple semicolons
      .replace(/;+/g, ';')
      // Fix spaces around colons in CSS
      .replace(/:\s*;/g, ': ')
      // Fix malformed JSX attributes
      .replace(/(\w+)\s*=\s*{([^}]+)}\s*,/g, '$1={$2}')
      // Fix malformed object properties
      .replace(/(\w+):\s*([^,}]+)\s*,/g, '$1: $2,')
      // Clean up extra whitespace
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n/g, '\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript and JSX files
const files = [
  'components/AccessibilityEnhancer.tsx',
  'components/AccessibilityProvider.tsx',
  'components/Analytics.tsx',
  'components/ContactForm.tsx',
  'components/Header.tsx',
  'components/Layout.tsx',
  'components/LoadingSpinner.tsx',
  'components/OptimizedImage.tsx',
  'components/PerformanceMonitor.tsx',
  'components/SEOHead.tsx',
  'components/SearchBar.tsx',
  'components/Sidebar.tsx',
  'components/SimpleLayout.tsx',
  'components/layout/Footer.tsx',
  'components/layout/Layout.tsx',
  'components/layout/MainLayout.tsx',
  'components/performance/LazyComponent.tsx',
  'components/performance/OptimizedImage.tsx',
  'components/ui/EnhancedMarketplaceCard.tsx',
  'components/ui/InteractiveNavigation.tsx',
  'components/ui/NotificationSystem.tsx',
  'hooks/useApi.ts',
  'hooks/useLocalStorage.ts',
  'hooks/usePerformanceMonitor.ts',
  'hooks/useResponsive.ts'
];

let fixedCount = 0;
files.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);