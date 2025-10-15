const fs = require('fs');
const path = require('path');

// List of 5G pages to fix
const pages = [
  '5g-data-analytics',
  '5g-deployment', 
  '5g-edge-computing',
  '5g-implementation',
  '5g-infrastructure',
  '5g-integration',
  '5g-iot-solutions',
  '5g-maintenance',
  '5g-migration',
  '5g-mobile-applications',
  '5g-modernization',
  '5g-monitoring',
  '5g-network-infrastructure',
  '5g-network-optimization',
  '5g-optimization',
  '5g-performance',
  '5g-private-networks',
  '5g-reliability',
  '5g-scalability',
  '5g-security',
  '5g-smart-city-solutions',
  '5g-solutions',
  '5g-support',
  '5g-testing',
  '5g-training',
  '5g-transformation',
  '5g-upgrade'
];

function fixPage(pageName) {
  const filePath = path.join(__dirname, 'app', pageName, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Convert kebab-case to PascalCase for component name, handling 5g prefix
  const componentName = pageName
    .replace('5g-', 'FiveG')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
  
  // Fix the component declaration - look for any const declaration
  const componentRegex = /const\s+(\w+):\s+React\.FC\s*=\s*\(\)\s*=>\s*{/;
  const match = content.match(componentRegex);
  
  if (match) {
    const oldName = match[1];
    content = content.replace(new RegExp(`const\\s+${oldName}:\\s+React\\.FC\\s*=\\s*\\(\\)\\s*=>\\s*{`, 'g'), `const ${componentName}: React.FC = () => {`);
  }
  
  // Fix the export statement
  const exportRegex = /export\s+default\s+(\w+);/;
  const exportMatch = content.match(exportRegex);
  
  if (exportMatch) {
    const oldExportName = exportMatch[1];
    content = content.replace(new RegExp(`export\\s+default\\s+${oldExportName};`, 'g'), `export default ${componentName};`);
  }
  
  // Remove unused import if it exists
  content = content.replace(/import\s+{\s*Lock\s*}\s+from\s+['"][^'"]+['"];\s*\n/, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath} -> ${componentName}`);
}

// Fix all pages
pages.forEach(fixPage);

console.log('All 5G pages fixed!');