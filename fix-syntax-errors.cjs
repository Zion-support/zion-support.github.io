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
      // Fix import statements - replace commas with semicolons
      .replace(/import\s+[^;]+,\s*$/gm, (match) => match.replace(/,\s*$/, ';'))
      // Fix object properties - replace commas with colons
      .replace(/"([^"]+)",\s*$/gm, '"$1",')
      .replace(/'([^']+)',\s*$/gm, "'$1',")
      // Fix function parameters
      .replace(/,\s*\)/g, ')')
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']')
      // Fix semicolons in wrong places
      .replace(/;\s*;/g, ';')
      .replace(/,\s*;/g, ';')
      // Fix malformed object syntax
      .replace(/\{\s*,/g, '{')
      .replace(/,\s*\}/g, '}')
      // Fix array syntax
      .replace(/\[\s*,/g, '[')
      .replace(/,\s*\]/g, ']')
      // Fix function declarations
      .replace(/,\s*\)\s*=>/g, ') =>')
      .replace(/,\s*\)\s*{/g, ') {')
      // Remove extra commas and semicolons
      .replace(/,\s*,/g, ',')
      .replace(/;\s*;/g, ';')
      // Fix React component syntax
      .replace(/React\.FC<\{[^}]*,\s*\}\s*>/g, (match) => match.replace(/,\s*}/, '}'))
      // Fix useState calls
      .replace(/useState\([^)]*,\s*\)/g, (match) => match.replace(/,\s*\)/, ')'))
      // Fix useEffect calls
      .replace(/useEffect\([^)]*,\s*\)/g, (match) => match.replace(/,\s*\)/, ')'))
      // Fix return statements
      .replace(/return\s+[^;]*,\s*$/gm, (match) => match.replace(/,\s*$/, ''))
      // Fix JSX syntax
      .replace(/<\s*,\s*>/g, '<>')
      .replace(/,\s*>/g, '>')
      // Fix template literals
      .replace(/`[^`]*,\s*`/g, (match) => match.replace(/,\s*`/, '`'))
      // Clean up multiple newlines
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Fix trailing commas in objects and arrays
      .replace(/,(\s*[}\]])/g, '$1');

    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed syntax errors in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Starting syntax error fixes...');

let fixedCount = 0;
filesToFix.forEach(file => {
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    if (fixSyntaxErrors(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

console.log(`\n🎉 Fixed syntax errors in ${fixedCount}/${filesToFix.length} files`);