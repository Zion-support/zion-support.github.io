#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files that need export fixes
const filesToFix = [
  'src/components/AbsoluteTechShowcase2031.tsx',
  'src/components/DynamicContentCarousel.tsx',
  'src/components/InteractiveTechShowcase.tsx',
  'src/components/RevolutionaryContentBanner2027.tsx',
  'src/pages/NeuralInterfaceRevolution2025.tsx',
  'src/pages/QuantumComputingRevolution2025.tsx',
  'src/pages/QuantumRealityEngine2027.tsx',
  'src/pages/SyntheticBiologyRevolution2027.tsx',
  'src/pages/UltimateTechShowcase2026.tsx'
];

function fixExports(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file already has default export
    if (content.includes('export default')) {
      console.log(`File already has default export: ${filePath}`);
      return;
    }

    // Find the component name (assuming it's the first const/function declaration)
    const componentMatch = content.match(/(?:const|function)\s+(\w+)\s*[=:]?\s*(?:React\.FC|React\.Component|\(\)|\(.*\))/);
    
    if (componentMatch) {
      const componentName = componentMatch[1];
      const newContent = content + `\n\nexport default ${componentName};\n`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed exports for: ${filePath}`);
    } else {
      console.log(`Could not find component name in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixExports);

console.log('Export fixing completed!');