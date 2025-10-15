const fs = require('fs');
const path = require('path');

// Files with syntax errors
const filesToFix = [
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentPromotionBanner.tsx'
];

function fixComponentSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix interface names with spaces
    content = content.replace(/interface\s+(\w+)\s+(\w+)\s+(\w+)/g, 'interface $1$2$3');
    
    // Fix property names with spaces
    content = content.replace(/(\w+)\s+(\w+)\s*:/g, '$1$2:');
    
    // Fix JSX closing tags
    content = content.replace(/<\/but>/g, '</button>');
    content = content.replace(/<but/g, '<button');
    
    // Fix JSX expressions
    content = content.replace(/\{'>'\}/g, "'>'");
    content = content.replace(/\{'<'\}/g, "'<'");
    content = content.replace(/\{'}\'\}/g, "'}'");
    content = content.replace(/\{'\}'\}/g, "'}'");
    
    // Fix function parameter syntax
    content = content.replace(/\(\s*(\w+)\s+(\w+)\s*\)/g, '($1$2)');
    
    // Fix object property syntax
    content = content.replace(/(\w+)\s+(\w+)\s*:/g, '$1$2:');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixComponentSyntax);

console.log('Component syntax fixes completed!');