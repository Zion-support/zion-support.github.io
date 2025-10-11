const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/ai-ml-platform/page.tsx',
  'src/ai-project-manager/page.tsx', 
  'src/ai-services/page.tsx',
  'src/it-services/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Remove Navigation and Footer imports
    const importRegex = /import\s+(Navigation|Footer)\s+from\s+['"][^'"]+['"];?\s*\n?/g;
    const beforeContent = content;
    content = content.replace(importRegex, '');
    if (content !== beforeContent) {
      modified = true;
    }
    
    // Remove unused variable declarations - look for const features =, const pricingPlans =, const stats =, const services =, const benefits =, const itServices =
    const variableRegex = /const\s+(features|pricingPlans|stats|services|benefits|itServices)\s*=\s*\[[\s\S]*?\];\s*\n/g;
    const beforeContent2 = content;
    content = content.replace(variableRegex, '');
    if (content !== beforeContent2) {
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Fixing final unused variables...');
filesToFix.forEach(fixFile);
console.log('Done!');