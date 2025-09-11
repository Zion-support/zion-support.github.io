#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing commas in object literals and arrays
    content = content.replace(
      /(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g,
      '$1: $2,\n$3:'
    );
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n$2:');
    content = content.replace(/(\w+)\s*\n\s*(\w+)\]/g, '$1,\n$2]');
    content = content.replace(/(\w+)\s*\n\s*(\w+)\}/g, '$1,\n$2}');
    content = content.replace(/(\w+)\s*\n\s*(\w+)\)/g, '$1,\n$2)');

    // Fix interface and type definitions
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2;\n$3:');
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+)\}/g, '$1: $2;\n$3}');

    // Fix function parameters
    content = content.replace(/\(\s*(\w+)\s*\n\s*(\w+)\s*\)/g, '($1,\n$2)');
    content = content.replace(/\(\s*(\w+)\s*\n\s*(\w+):/g, '($1,\n$2:');

    // Fix JSX syntax
    content = content.replace(/<\s*(\w+)\s*>\s*{/g, '<$1>{');
    content = content.replace(/<\s*(\w+)\s*>\s*</g, '<$1><');

    // Fix import statements
    content = content.replace(
      /import\s+([^;]+)\s*\n\s*import/g,
      'import $1;\nimport'
    );
    content = content.replace(
      /import\s+([^;]+)\s*\n\s*const/g,
      'import $1;\nconst'
    );

    // Fix variable declarations
    content = content.replace(
      /const\s+(\w+)\s*=\s*{\s*\n\s*(\w+):/g,
      'const $1 = {\n$2:'
    );
    content = content.replace(
      /let\s+(\w+)\s*=\s*{\s*\n\s*(\w+):/g,
      'let $1 = {\n$2:'
    );
    content = content.replace(
      /var\s+(\w+)\s*=\s*{\s*\n\s*(\w+):/g,
      'var $1 = {\n$2:'
    );

    // Fix React component syntax
    content = content.replace(
      /React\.FC<(\w+)>\s*=\s*\(\s*{\s*(\w+)\s*}\s*\)\s*=>/g,
      'React.FC<$1> = ({ $2 }) =>'
    );
    content = content.replace(
      /React\.FC<(\w+)>\s*=\s*\(\s*{\s*(\w+)\s*,\s*(\w+)\s*}\s*\)\s*=>/g,
      'React.FC<$1> = ({ $2, $3 }) =>'
    );

    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\n\s*export/g, '$1;\nexport');
    content = content.replace(/(\w+)\s*\n\s*const/g, '$1;\nconst');
    content = content.replace(/(\w+)\s*\n\s*let/g, '$1;\nlet');
    content = content.replace(/(\w+)\s*\n\s*var/g, '$1;\nvar');

    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    // Remove trailing whitespace
    content = content.replace(/\s+$/gm, '');

    // Check if content changed
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed parsing errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const filesToFix = [
  'components/AccessibilityEnhancer.tsx',
  'components/Analytics.tsx',
  'components/ContactForm.tsx',
  'components/ErrorBoundary.tsx',
  'components/Footer.tsx',
  'components/Header.tsx',
  'components/LoadingSpinner.tsx',
  'components/Navigation.tsx',
  'components/OptimizedImage.tsx',
  'components/PerformanceMonitor.tsx',
  'components/SEOHead.tsx',
  'components/SearchBar.tsx',
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
  'components/ui/NotificationSystem.tsx',
  'pages/404.tsx',
  'pages/ai-services.tsx',
  'pages/blockchain.tsx',
  'pages/contact.tsx',
  'pages/index.tsx',
];

console.log('Fixing parsing errors...');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixParsingErrors(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files`);
