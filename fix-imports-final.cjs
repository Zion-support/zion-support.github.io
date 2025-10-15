const fs = require('fs');
const { glob } = require('glob');

async function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix broken imports and component names
    content = content
      // Fix import statements with spaces
      .replace(/import\s+{\s*([^}]+)\s*}\s*from\s*'([^']+)';/g, (match, imports, module) => {
        const cleanImports = imports.split(',').map(imp => imp.trim().replace(/\s+/g, '')).join(', ');
        return `import { ${cleanImports} } from '${module}';`;
      })
      
      // Fix default imports with spaces
      .replace(/import\s+([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*\s*[A-Za-z]*)\s*from\s*'([^']+)';/g, (match, name, module) => {
        const cleanName = name.replace(/\s+/g, '');
        return `import ${cleanName} from '${module}';`;
      })
      
      // Fix component names with spaces
      .replace(/const\s+([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*\s*[A-Za-z]*)\s*=/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `const ${cleanName} =`;
      })
      
      // Fix function declarations with spaces
      .replace(/function\s+([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*\s*[A-Za-z]*)\s*\(/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `function ${cleanName}(`;
      })
      
      // Fix export default with spaces
      .replace(/export\s+default\s+([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*\s*[A-Za-z]*)/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `export default ${cleanName}`;
      })
      
      // Fix JSX component names with spaces
      .replace(/<([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*\s*[A-Za-z]*)/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `<${cleanName}`;
      })
      
      // Fix closing JSX tags with spaces
      .replace(/<\/([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*\s*[A-Za-z]*)>/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `</${cleanName}>`;
      })
      
      // Fix specific patterns
      .replace(/Enhanced\s+SEO/g, 'EnhancedSEO')
      .replace(/Five\s+G\s+Consulting\s+Page/g, 'FiveGConsultingPage')
      .replace(/Five\s+G\s+Data\s+Analytics\s+Page/g, 'FiveGDataAnalyticsPage')
      .replace(/Five\s+G\s+Deployment\s+Page/g, 'FiveGDeploymentPage')
      .replace(/Five\s+G\s+Edge\s+Computing\s+Page/g, 'FiveGEdgeComputingPage')
      .replace(/Five\s+G\s+Integration\s+Page/g, 'FiveGIntegrationPage')
      .replace(/Five\s+G\s+IoT\s+Solutions\s+Page/g, 'FiveGIoTSolutionsPage')
      .replace(/Five\s+G\s+Maintenance\s+Page/g, 'FiveGMaintenancePage')
      .replace(/Five\s+G\s+Mobile\s+Applications\s+Page/g, 'FiveGMobileApplicationsPage')
      .replace(/Five\s+G\s+Modernization\s+Page/g, 'FiveGModernizationPage')
      .replace(/Five\s+G\s+Monitoring\s+Page/g, 'FiveGMonitoringPage')
      .replace(/Five\s+G\s+Network\s+Infrastructure\s+Page/g, 'FiveGNetworkInfrastructurePage')
      .replace(/Five\s+G\s+Network\s+Optimization\s+Page/g, 'FiveGNetworkOptimizationPage')
      .replace(/Five\s+G\s+Optimization\s+Page/g, 'FiveGOptimizationPage')
      .replace(/Five\s+G\s+Performance\s+Page/g, 'FiveGPerformancePage')
      .replace(/Five\s+G\s+Private\s+Networks\s+Page/g, 'FiveGPrivateNetworksPage')
      .replace(/Five\s+G\s+Reliability\s+Page/g, 'FiveGReliabilityPage')
      .replace(/Five\s+G\s+Scalability\s+Page/g, 'FiveGScalabilityPage')
      .replace(/Five\s+G\s+Security\s+Page/g, 'FiveGSecurityPage')
      .replace(/Five\s+G\s+Smart\s+City\s+Solutions\s+Page/g, 'FiveGSmartCitySolutionsPage')
      .replace(/Five\s+G\s+Solutions\s+Page/g, 'FiveGSolutionsPage')
      .replace(/Five\s+G\s+Support\s+Page/g, 'FiveGSupportPage')
      .replace(/Five\s+G\s+Testing\s+Page/g, 'FiveGTestingPage')
      .replace(/Five\s+G\s+Training\s+Page/g, 'FiveGTrainingPage')
      .replace(/Five\s+G\s+Transformation\s+Page/g, 'FiveGTransformationPage')
      .replace(/Five\s+G\s+Upgrade\s+Page/g, 'FiveGUpgradePage')
      .replace(/Not\s+Found\s+Page/g, 'NotFoundPage')
      .replace(/Global\s+Error\s+Page/g, 'GlobalErrorPage')
      .replace(/Error\s+Page/g, 'ErrorPage');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
    
    console.log(`Found ${files.length} files to process...`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (await fixFile(file)) {
        fixedCount++;
      }
    }
    
    console.log(`Fixed ${fixedCount} files.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();