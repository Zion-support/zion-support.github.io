#!/usr/bin/env node
const fs = require('fs');

console.log('🔧 Fixing remaining syntax errors...');

// Fix specific files
const filesToFix = [
  'components/layout/Layout.tsx',
  'pages/pricing.tsx',
  'pages/privacy.tsx',
  'pages/team.tsx',
  'pages/zion-global-2025.tsx'
];

filesToFix.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix malformed import statements
    content = content.replace(/import\s+([^"]*)\s+from\s+"([^"]*)"\s*;/g, (match, imports, module) => {
      return `import ${imports} from '${module}';`;
    });
    
    // Fix malformed string literals
    content = content.replace(/"([^"]*)"\s*;/g, (match, str) => {
      return `'${str}';`;
    });
    
    // Fix malformed interface declarations
    content = content.replace(/interface\s+LayoutProps\s*\{[^}]*\}\s*interface\s+LayoutProps\s*\{/g, 'interface LayoutProps {');
    
    // Fix malformed object properties
    content = content.replace(/,\s*\}\s*;/g, '}');
    
    // Fix malformed JSX
    content = content.replace(/<([^>]*)\s*\/>/g, (match, tag) => {
      return `<${tag} />`;
    });
    
    fs.writeFileSync(file, content);
    console.log(`✅ Fixed: ${file}`);
  } catch (error) {
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
});

console.log('✨ Remaining syntax fixes completed!');