const fs = require('fs');
const path = require('path');

// List of files with syntax errors
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

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Fix trailing commas in imports
      .replace(/import\s+[^;]+,\s*$/gm, (match) => match.replace(/,\s*$/, ';'))
      // Fix object property syntax
      .replace(/"([^"]+)":\s*([^,;]+),;/g, '$1: $2,')
      .replace(/"([^"]+)":\s*([^,;]+);/g, '$1: $2,')
      // Fix function parameters
      .replace(/\(\s*([^)]+),\s*\)/g, '($1)')
      .replace(/,\s*\)/g, ')')
      // Fix interface properties
      .replace(/(\w+):\s*([^,;]+),;/g, '$1: $2;')
      // Fix array syntax
      .replace(/\[\s*,/g, '[')
      .replace(/,\s*\]/g, ']')
      // Fix object syntax
      .replace(/\{\s*,/g, '{')
      .replace(/,\s*\}/g, '}')
      // Fix trailing commas in function calls
      .replace(/,\s*\)/g, ')')
      // Fix semicolons after commas
      .replace(/,\s*;/g, ',')
      // Fix multiple commas
      .replace(/,\s*,/g, ',')
      // Fix empty lines with just commas
      .replace(/^\s*,\s*$/gm, '')
      // Fix quotes in object keys
      .replace(/"([^"]+)":/g, '$1:')
      // Fix function parameter destructuring
      .replace(/\(\s*\{\s*([^}]+),\s*\}\s*\)/g, '({ $1 })')
      // Fix React component syntax
      .replace(/const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{\s*([^}]+),\s*\}\s*\)/g, 'const $1: React.FC<$1Props> = ({ $2 })')
      // Fix interface closing
      .replace(/,\s*\};\s*$/gm, '};')
      // Fix component props destructuring
      .replace(/\{\s*([^}]+),\s*;\s*\}/g, '{ $1 }')
      // Fix trailing semicolons in object properties
      .replace(/(\w+):\s*([^,;]+),;/g, '$1: $2,')
      // Fix empty object properties
      .replace(/,\s*$/gm, '')
      // Fix multiple semicolons
      .replace(/;+/g, ';')
      // Fix semicolons at end of lines that should be commas
      .replace(/;\s*$/gm, (match, offset, string) => {
        const nextLine = string.substring(offset + match.length).split('\n')[0];
        if (nextLine.trim().startsWith('}') || nextLine.trim().startsWith(']')) {
          return '';
        }
        return match;
      });

    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    fixSyntaxErrors(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Syntax error fixing completed!');