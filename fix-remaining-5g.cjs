const fs = require('fs');
const path = require('path');

const pagesDir = '/workspace/app';
const files = fs.readdirSync(pagesDir).filter(file => file.startsWith('5g-') && file.endsWith('.tsx'));

const componentMappings = {
  '5g-deployment': 'FiveGDeploymentPage',
  '5g-edge-computing': 'FiveGEdgeComputingPage', 
  '5g-implementation': 'FiveGImplementationPage',
  '5g-infrastructure': 'FiveGInfrastructurePage',
  '5g-integration': 'FiveGIntegrationPage',
  '5g-iot-solutions': 'FiveGIotSolutionsPage',
  '5g-maintenance': 'FiveGMaintenancePage',
  '5g-migration': 'FiveGMigrationPage',
  '5g-mobile-applications': 'FiveGMobileApplicationsPage',
  '5g-modernization': 'FiveGModernizationPage',
  '5g-monitoring': 'FiveGMonitoringPage',
  '5g-network-infrastructure': 'FiveGNetworkInfrastructurePage',
  '5g-network-optimization': 'FiveGNetworkOptimizationPage',
  '5g-optimization': 'FiveGOptimizationPage',
  '5g-performance': 'FiveGPerformancePage',
  '5g-private-networks': 'FiveGPrivateNetworksPage',
  '5g-reliability': 'FiveGReliabilityPage'
};

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const pageName = file.replace('.tsx', '');
  const componentName = componentMappings[pageName];
  
  if (componentName) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the component declaration
    content = content.replace(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/, `const ${componentName}: React.FC = () => {`);
    
    // Fix the export
    content = content.replace(/export default __\w+;/, `export default ${componentName};`);
    content = content.replace(/export default \w+;/, `export default ${componentName};`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file} -> ${componentName}`);
  }
});

console.log('All 5G pages fixed!');