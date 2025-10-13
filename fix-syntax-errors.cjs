const fs = require('fs');
const path = require('path');

// List of files with "Declaration or statement expected" errors
const filesToFix = [
  'app/ad-management/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation-suite/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-content-creation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-education-platform/page.tsx',
  'app/ai-fintech-solutions/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blockchain/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/cloud-services/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common patterns
    content = content.replace(/\);}\s*}'/g, ');\n};');
    content = content.replace(/\);}\s*}\s*}'/g, ');\n};\n');
    content = content.replace(/;\s*}/g, '\n}');
    content = content.replace(/;\s*>/g, '\n>');
    content = content.replace(/;\s*</g, '\n<');
    content = content.replace(/;\s*\/\//g, '\n//');
    content = content.replace(/;\s*\/\*/g, '\n/*');
    
    // Remove trailing quotes and semicolons
    content = content.replace(/;'$/gm, ';');
    content = content.replace(/'$/gm, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Syntax error fixes completed!');