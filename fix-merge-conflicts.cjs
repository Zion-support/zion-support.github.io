const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesWithConflicts = [
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
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and use the newer naming convention
    content = content.replace(/<<<<<<< HEAD\nconst (\w+): React\.FC = \(\) => \{\n=======\nconst (\w+): React\.FC = \(\) => \{\n>>>>>>> cursor\/fix-errors-and-merge-to-main-789c/g, 'const $2: React.FC = () => {');
    
    // Fix export statements to match the component name
    content = content.replace(/export default (\w+);/g, (match, componentName) => {
      // Extract the page name from the file path
      const pageName = path.basename(path.dirname(filePath));
      const newComponentName = pageName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      return `export default ${newComponentName};`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log('Merge conflict fixes completed!');