const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
  'app/sitemap-page.tsx',
  'app/robotics/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/micro-saas/page.tsx',
  'app/it-services/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/case-studies/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-mobile-app-development/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove react-helmet-async import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    content = content.replace(/import { Helmet } from "react-helmet-async";\n?/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta[^>]*>\s*<meta[^>]*>\s*<\/Helmet>\s*/gs, '');
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta[^>]*>\s*<\/Helmet>\s*/gs, '');
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<\/Helmet>\s*/gs, '');
    
    // Clean up any remaining Helmet tags
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
filesToFix.forEach(fixFile);
console.log('All files fixed!');