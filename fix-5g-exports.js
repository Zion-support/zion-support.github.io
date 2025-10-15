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

// Component name mapping
const componentNames = {
  'app/5g-consulting/page.tsx': 'FiveGConsulting',
  'app/5g-data-analytics/page.tsx': 'FiveGDataAnalytics',
  'app/5g-deployment/page.tsx': 'FiveGDeployment',
  'app/5g-edge-computing/page.tsx': 'FiveGEdgeComputingPage',
  'app/5g-implementation/page.tsx': 'FiveGImplementationPage',
  'app/5g-infrastructure/page.tsx': 'FiveGInfrastructure',
  'app/5g-integration/page.tsx': 'FiveGIntegration',
  'app/5g-iot-solutions/page.tsx': 'FiveGIotSolutionsPage',
  'app/5g-maintenance/page.tsx': 'FiveGMaintenance',
  'app/5g-migration/page.tsx': 'FiveGMigration',
  'app/5g-mobile-applications/page.tsx': 'FiveGMobileApplicationsPage',
  'app/5g-modernization/page.tsx': 'FiveGModernization',
  'app/5g-monitoring/page.tsx': 'FiveGMonitoring',
  'app/5g-network-infrastructure/page.tsx': 'FiveGNetworkInfrastructurePage',
  'app/5g-network-optimization/page.tsx': 'FiveGNetworkOptimizationPage',
  'app/5g-optimization/page.tsx': 'FiveGOptimization',
  'app/5g-performance/page.tsx': 'FiveGPerformance',
  'app/5g-private-networks/page.tsx': 'FiveGPrivateNetworksPage',
  'app/5g-reliability/page.tsx': 'FiveGReliability',
  'app/5g-scalability/page.tsx': 'FiveGScalability',
  'app/5g-security/page.tsx': 'FiveGSecurity',
  'app/5g-smart-city-solutions/page.tsx': 'FiveGSmartCitySolutionsPage',
  'app/5g-solutions/page.tsx': 'FiveGSolutions',
  'app/5g-support/page.tsx': 'FiveGSupport',
  'app/5g-testing/page.tsx': 'FiveGTesting',
  'app/5g-training/page.tsx': 'FiveGTraining',
  'app/5g-transformation/page.tsx': 'FiveGTransformation',
  'app/5g-upgrade/page.tsx': 'FiveGUpgrade'
};

files.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const componentName = componentNames[filePath];
    
    if (componentName) {
      // Fix the export statement
      const exportPattern = /export default __[^;]+;/g;
      const newExport = `export default ${componentName};`;
      
      if (exportPattern.test(content)) {
        content = content.replace(exportPattern, newExport);
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed export in ${filePath}`);
      }
    }
  }
});

console.log('Fixed all 5G page exports');