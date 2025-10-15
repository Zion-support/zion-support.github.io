import fs from 'fs';
import path from 'path';

// List of files with naming issues
const filesToFix = [
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
  'app/5g-upgrade/page.tsx',
  'app/ai-3d-generation/page.tsx'
];

// Mapping of incorrect to correct names
const nameMappings = {
  'FiveGdataanalyticsPage': 'FiveGDataAnalytics',
  'FiveGdeploymentPage': 'FiveGDeployment',
  'FiveGedgecomputingPage': 'FiveGEdgeComputingPage',
  'FiveGimplementationPage': 'FiveGImplementationPage',
  'FiveGinfrastructurePage': 'FiveGInfrastructure',
  'FiveGintegrationPage': 'FiveGIntegration',
  'FiveGiotsolutionsPage': 'FiveGIotSolutionsPage',
  'FiveGmaintenancePage': 'FiveGMaintenance',
  'FiveGmigrationPage': 'FiveGMigration',
  'FiveGmobileapplicationsPage': 'FiveGMobileApplicationsPage',
  'FiveGmodernizationPage': 'FiveGModernization',
  'FiveGmonitoringPage': 'FiveGMonitoring',
  'FiveGnetworkinfrastructurePage': 'FiveGNetworkInfrastructurePage',
  'FiveGnetworkoptimizationPage': 'FiveGNetworkOptimizationPage',
  'FiveGoptimizationPage': 'FiveGOptimization',
  'FiveGperformancePage': 'FiveGPerformance',
  'FiveGprivatenetworksPage': 'FiveGPrivateNetworksPage',
  'FiveGreliabilityPage': 'FiveGReliability',
  'FiveGscalabilityPage': 'FiveGScalability',
  'FiveGsecurityPage': 'FiveGSecurity',
  'FiveGsmartcitysolutionsPage': 'FiveGSmartCitySolutionsPage',
  'FiveGsolutionsPage': 'FiveGSolutions',
  'FiveGsupportPage': 'FiveGSupport',
  'FiveGtestingPage': 'FiveGTesting',
  'FiveGtrainingPage': 'FiveGTraining',
  'FiveGtransformationPage': 'FiveGTransformation',
  'FiveGupgradePage': 'FiveGUpgrade',
  'Ai3dGenerationPage': 'Ai3DGenerationPage'
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix export statements
    for (const [incorrect, correct] of Object.entries(nameMappings)) {
      const exportRegex = new RegExp(`export default ${incorrect};`, 'g');
      if (content.match(exportRegex)) {
        content = content.replace(exportRegex, `export default ${correct};`);
        modified = true;
        console.log(`Fixed export in ${filePath}: ${incorrect} -> ${correct}`);
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('🔧 Fixing component naming issues...\n');
filesToFix.forEach(fixFile);
console.log('\n✅ Component naming fixes completed!');