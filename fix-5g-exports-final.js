import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of 5G page files to fix
const files = [
  'app/5g-consulting/page.tsx',
  'app/5g-data-analytics/page.tsx',
  'app/5g-deployment/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-infrastructure/page.tsx',
  'app/5g-integration/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-maintenance/page.tsx',
  'app/5g-migration/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-modernization/page.tsx',
  'app/5g-monitoring/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-network-optimization/page.tsx',
  'app/5g-optimization/page.tsx',
  'app/5g-performance/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-reliability/page.tsx',
  'app/5g-scalability/page.tsx',
  'app/5g-security/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/5g-support/page.tsx',
  'app/5g-testing/page.tsx',
  'app/5g-training/page.tsx',
  'app/5g-transformation/page.tsx',
  'app/5g-upgrade/page.tsx'
];

files.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the component name (const ComponentName: React.FC = () => {)
    const componentMatch = content.match(/const\s+([A-Za-z0-9_]+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/);
    if (componentMatch) {
      const componentName = componentMatch[1];
      
      // Find the export statement and replace it
      const exportMatch = content.match(/export\s+default\s+[^;]+;/);
      if (exportMatch) {
        const newExport = `export default ${componentName};`;
        content = content.replace(exportMatch[0], newExport);
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed export in ${filePath} to use ${componentName}`);
      }
    }
  }
});

console.log('Fixed all 5G page exports');