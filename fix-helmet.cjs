const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/ai-services/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/quantum-computing/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/robotics/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-services/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/cloud-services/page.tsx',
  'app/devops/page.tsx',
  'app/database/page.tsx',
  'app/networking/page.tsx',
  'app/micro-saas/page.tsx',
  'app/case-studies/page.tsx',
  'app/blockchain/page.tsx',
  'app/iot-edge/page.tsx'
];

function fixHelmetInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\n?/g, '');
    
    // Fix return statement structure
    content = content.replace(/return \(\s*<>\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  fixHelmetInFile(file);
});

console.log('Helmet fixes completed!');
