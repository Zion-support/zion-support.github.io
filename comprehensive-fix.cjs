const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix concatenated imports
    if (content.includes("';'import")) {
      content = content.replace(/';'import/g, ";\nimport");
      fixed = true;
    }
    
    // Fix concatenated statements
    if (content.includes("';'const")) {
      content = content.replace(/';'const/g, ";\n\nconst");
      fixed = true;
    }
    
    if (content.includes("';'interface")) {
      content = content.replace(/';'interface/g, ";\n\ninterface");
      fixed = true;
    }
    
    if (content.includes("';'function")) {
      content = content.replace(/';'function/g, ";\n\nfunction");
      fixed = true;
    }
    
    // Fix malformed function parameters
    content = content.replace(/(\w+), title = '([^']*)','/g, "$1, title = '$2',\n  ");
    content = content.replace(/(\w+), description = '([^']*)','/g, "$1, description = '$2',\n  ");
    
    // Fix malformed URLs
    content = content.replace(/https: \/\//g, 'https://');
    
    // Fix malformed JSX
    content = content.replace(/>"(\s*<)/g, '>\n    $1');
    content = content.replace(/>"(\s*<\/)/g, '>\n  $1');
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix critical files
const criticalFiles = [
  'components/AccessibilityEnhancer.tsx',
  'components/PerformanceOptimizer.tsx', 
  'components/SEOEnhancer.tsx',
  'components/layout/EnhancedFooter.tsx',
  'components/layout/EnhancedNavigation.tsx'
];

criticalFiles.forEach(fixFile);
console.log('Critical files fixed!');