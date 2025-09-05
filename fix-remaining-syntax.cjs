const fs = require('fs');
const path = require('path');

// Fix specific files with remaining syntax errors
const filesToFix = [
  'components/Header.tsx',
  'components/OptimizedImage.tsx',
  'components/Sidebar.tsx',
  'components/SimpleLayout.tsx',
  'components/SkeletonLoader.tsx',
  'components/layout/EnhancedFooter.tsx',
  'components/layout/Footer.tsx',
  'components/layout/Header.tsx',
  'components/layout/Layout.tsx',
  'components/layout/MainLayout.tsx',
  'components/performance/LazyComponent.tsx',
  'components/performance/OptimizedImage.tsx',
  'components/ui/EnhancedMarketplaceCard.tsx',
  'components/ui/InteractiveNavigation.tsx',
  'components/ui/NotificationSystem.tsx'
];

function fixRemainingSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix object properties missing colons and commas
    content = content
      // Fix object properties without colons
      .replace(/(\s+)(\w+)\s*\n\s*(\w+)/g, '$1$2: $3')
      // Fix missing commas in object properties
      .replace(/(\w+):\s*([^,\n}]+)\n\s*(\w+)/g, '$1: $2,\n  $3')
      // Fix missing commas in function parameters
      .replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n  $2')
      // Fix interface properties
      .replace(/(\w+)\s*([^:;,\n]+)\n\s*(\w+)/g, '$1: $2;\n  $3')
      // Fix closing braces
      .replace(/\}\s*(\w+)/g, '},\n  $1')
      // Fix missing commas in arrays
      .replace(/(\w+)\s*\n\s*\{/g, '$1,\n  {')
      // Fix function parameters
      .replace(/\(\s*(\w+)\s*\n\s*(\w+)/g, '($1,\n  $2')
      // Fix object closing
      .replace(/(\w+)\s*\}/g, '$1\n  }')
      // Fix interface closing
      .replace(/(\w+)\s*\};/g, '$1;\n};')
      // Fix component props
      .replace(/(\w+)\s*\n\s*(\w+)\s*=/g, '$1,\n  $2 =')
      // Fix missing colons in object properties
      .replace(/(\s+)(\w+)\s+([^:,\n}]+)/g, '$1$2: $3')
      // Fix trailing commas
      .replace(/,(\s*[}\]])/g, '$1')
      // Fix multiple newlines
      .replace(/\n\s*\n\s*\n/g, '\n\n');

    fs.writeFileSync(filePath, content);
    console.log(`Fixed remaining syntax errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    fixRemainingSyntax(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Remaining syntax error fixing completed!');