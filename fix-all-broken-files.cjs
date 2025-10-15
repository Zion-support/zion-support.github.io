const fs = require('fs');
const path = require('path');

// Read the working template
const templatePath = path.join(__dirname, 'app/ai-3d-generation/page.tsx');
const template = fs.readFileSync(templatePath, 'utf8');

// List of all broken files
const brokenFiles = [
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx',
  'app/api-docs/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/components/About.tsx',
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/ComprehensiveErrorBoundary.tsx',
  'app/components/EnhancedNavigation.tsx',
  'app/components/ErrorHandler.tsx',
  'app/components/FuturisticCard.tsx',
  'app/components/ProductionErrorBoundary.tsx',
  'app/components/Sidebar.tsx',
  'app/docs/page.tsx',
  'app/DynamicPageLoader.tsx',
  'app/hooks/usePerformanceMonitor.ts',
  'app/hooks/useSEO.ts',
  'app/it-services/page.tsx',
  'app/pages/HomePage.tsx',
  'app/status/page.tsx',
  'app/utils/advancedCaching.ts',
  'app/utils/registerServiceWorker.ts',
  'app/utils/structuredData.ts',
  'app/utils/usePerformanceMonitor.ts',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-compliance-manager/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-data-sync/page.tsx',
  'app/zion-email-automation/page.tsx',
  'app/zion-inventory-smart/page.tsx',
  'app/zion-invoice-genius/page.tsx',
  'app/zion-lead-magnet/page.tsx',
  'app/zion-performance-monitor/page.tsx',
  'app/zion-project-master/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-social-scheduler/page.tsx',
  'app/zion-workflow-automation/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    // Extract component name from file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const componentName = fileName.replace('.tsx', '').replace('page', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '') || 'AIService';
    
    // Create title based on component name
    const title = componentName.replace(/([A-Z])/g, ' $1').trim();
    
    // Replace the component name and title in the template
    let newContent = template
      .replace(/const AI3DGeneration =/g, `const ${componentName} =`)
      .replace(/export default AI3DGeneration/g, `export default ${componentName}`)
      .replace(/AI 3D Generation/g, title)
      .replace(/AI 3D Generation solutions powered by AI/g, `${title} solutions powered by AI`);
    
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`Fixed ${filePath} with component name: ${componentName}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all broken files
console.log('Starting to fix all broken files...');
brokenFiles.forEach(fixFile);
console.log('Finished fixing all files!');