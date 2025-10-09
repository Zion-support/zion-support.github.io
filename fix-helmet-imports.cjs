const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/micro-saas/page.tsx',
  'app/iot-edge/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-cybersecurity/page.tsx'
];

function fixHelmetImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    
    // Remove empty lines that might be left
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixHelmetImports);

console.log('Helmet imports fixed!');