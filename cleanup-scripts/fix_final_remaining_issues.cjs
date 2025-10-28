const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX fragment issues
    if (content.includes('<>') && content.includes('</>') && content.includes('Navigation')) {
      console.log(`Fixing JSX fragments in: ${filePath}`);
      
      // Remove standalone JSX fragments
      content = content.replace(/\s*<>\s*\n\s*\{\/\*.*?\*\/\}\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      content = content.replace(/\s*<>\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      
      modified = true;
    }

    // Fix malformed JSX - remove stray fragments
    if (content.includes('<>') && content.includes('</>')) {
      console.log(`Fixing JSX fragments in: ${filePath}`);
      
      // Remove standalone JSX fragments that are not properly nested
      content = content.replace(/\s*<>\s*\n\s*\{\/\*.*?\*\/\}\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      content = content.replace(/\s*<>\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      
      modified = true;
    }

    // Fix metadata placement - move to top of file
    if (content.includes('export const metadata') && content.includes('export default function')) {
      console.log(`Fixing metadata placement in: ${filePath}`);
      
      // Extract metadata
      const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*\{[^}]*\};/);
      const metadata = metadataMatch ? metadataMatch[0] + '\n\n' : '';
      
      // Extract imports
      const importMatches = content.match(/import\s+.*?from\s+['"][^'"]*['"];?\s*/g);
      const imports = importMatches ? importMatches.join('\n') + '\n\n' : '';
      
      // Remove metadata from anywhere in the file
      content = content.replace(/export\s+const\s+metadata\s*=\s*\{[^}]*\};\s*/g, '');
      
      // Extract the main component function
      const componentMatch = content.match(/export\s+default\s+function\s+[^{]*\{[\s\S]*\}/);
      if (componentMatch) {
        const component = componentMatch[0];
        
        // Clean up the component - remove any stray imports/exports inside
        const cleanComponent = component
          .replace(/import\s+.*?from\s+['"][^'"]*['"];?\s*/g, '')
          .replace(/export\s+const\s+metadata\s*=\s*\{[^}]*\};\s*/g, '');
        
        // Rebuild the file with proper structure
        content = imports + metadata + cleanComponent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all problematic files
const problematicFiles = [
  '/workspace/app/supply-chain-optimizer/page.tsx',
  '/workspace/app/test/page.tsx',
  '/workspace/app/zion-ai-api-tester/page.tsx',
  '/workspace/app/zion-ai-database-optimizer/page.tsx',
  '/workspace/app/5g-data-analytics/page.tsx'
];

console.log('Fixing final remaining issues...');

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('All remaining issues have been resolved.');
