const fs = require('fs');
const path = require('path');

// Files with merge conflicts
const filesToFix = [
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-network-optimization/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD\nconst \w+: React\.FC = \(\) => \{\n=======\nconst \w+Page: React\.FC = \(\) => \{\n>>>>>>> cursor\/fix-errors-and-merge-to-main-\w+\n/g, 
      (match) => {
        const lines = match.split('\n');
        const pageLine = lines.find(line => line.includes('Page: React.FC'));
        return pageLine || lines[1];
      });
    
    // Fix export statements
    content = content.replace(/export default \w+;(?!Page)/g, (match) => {
      const componentName = match.replace('export default ', '').replace(';', '');
      return `export default ${componentName}Page;`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixMergeConflicts);

console.log('Merge conflict fixes completed!');