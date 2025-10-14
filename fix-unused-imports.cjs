const fs = require('fs');
const path = require('path');

// List of unused imports to remove
const unusedImports = [
  'CheckCircleIcon',
  'CloudIcon',
  'GlobeAltIcon', 
  'ChartBarIcon',
  'Circle'
];

// Get all files that need fixing
const filesToFix = [
  'app/5g-implementation/page.tsx',
  'app/about/page.tsx',
  'app/ad-management/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-automation-suite/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-content-creation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-mining-pro/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-education-platform/page.tsx',
  'app/ai-fintech-solutions/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-fraud-detection-pro/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-language-translation/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-nlp-text-analysis/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/ai-time-series-forecasting/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blockchain/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/cloud-services/page.tsx',
  'app/contact/page.tsx'
];

function fixUnusedImports(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused imports from the import statement
    unusedImports.forEach(importName => {
      // Remove the import from the import statement
      const importRegex = new RegExp(`\\s*,\\s*${importName}\\s*,?`, 'g');
      content = content.replace(importRegex, ',');
      
      // Remove the import if it's the only one on the line
      const singleImportRegex = new RegExp(`\\s*${importName}\\s*,?\\s*`, 'g');
      content = content.replace(singleImportRegex, '');
      
      // Clean up any double commas
      content = content.replace(/,\s*,/g, ',');
      
      // Clean up trailing commas before closing brace
      content = content.replace(/,\s*}/g, '}');
      
      // Clean up leading commas
      content = content.replace(/{\s*,/g, '{');
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixUnusedImports);

console.log('Finished fixing unused imports');