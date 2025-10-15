import fs from 'fs';
import path from 'path';

// Function to fix export statements
function fixExports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix export default __ pattern
  content = content.replace(/export default __(\w+);/g, (match, componentName) => {
    // Convert to proper component name
    const properName = componentName.replace(/([A-Z])/g, ' $1').trim().replace(/\s+/g, '');
    return `export default ${properName};`;
  });
  
  return content;
}

// Function to clean up unused imports
function cleanImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Common unused imports to remove
  const unusedImports = [
    'Zap', 'Brain', 'MapPin', 'Download', 'Pause', 'RefreshCw', 'Eye', 'Filter', 
    'Calendar', 'Target', 'Lock', 'Users', 'Award', 'TrendingUp', 'Database',
    'Radio', 'Antenna', 'Router', 'Server', 'Network', 'Activity', 'memo', 'lazy', 'Suspense'
  ];
  
  // Remove unused imports from lucide-react
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
  if (importMatch) {
    const imports = importMatch[1].split(',').map(imp => imp.trim());
    const usedImports = imports.filter(imp => {
      const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
      return !unusedImports.includes(cleanImp) && content.includes(cleanImp);
    });
    
    if (usedImports.length > 0) {
      content = content.replace(
        importMatch[0],
        `import { ${usedImports.join(', ')} } from 'lucide-react';`
      );
    } else {
      content = content.replace(importMatch[0], '');
    }
  }
  
  return content;
}

// Get all problematic files
const filesToFix = [
  'app/5g-iot-solutions/page.tsx',
  'app/5g-reliability/page.tsx',
  'app/5g-transformation/page.tsx',
  'app/5g-migration/page.tsx',
  'app/5g-infrastructure/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-scalability/page.tsx',
  'app/5g-support/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-modernization/page.tsx',
  'app/5g-optimization/page.tsx',
  'app/5g-monitoring/page.tsx',
  'app/5g-security/page.tsx',
  'app/5g-data-analytics/page.tsx',
  'app/5g-upgrade/page.tsx',
  'app/5g-deployment/page.tsx',
  'app/5g-performance/page.tsx',
  'app/5g-maintenance/page.tsx',
  'app/5g-network-optimization/page.tsx',
  'app/5g-testing/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-training/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/5g-consulting/page.tsx',
  'app/5g-integration/page.tsx'
];

console.log('Fixing exports and cleaning imports...');

filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix exports
      content = fixExports(content);
      
      // Clean imports
      content = cleanImports(content);
      
      // Write back
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Export and import fixes completed!');