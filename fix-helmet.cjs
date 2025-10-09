const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/sitemap-page.tsx',
  'app/iot-edge/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/robotics/page.tsx',
  'app/micro-saas/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/it-services/page.tsx',
  'app/case-studies/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-workflow-automation/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    content = content.replace(/import { Helmet } from "react-helmet-async";\n?/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta[^>]*>\s*<meta[^>]*>\s*<\/Helmet>\s*/gs, '');
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta[^>]*>\s*<\/Helmet>\s*/gs, '');
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<\/Helmet>\s*/gs, '');
    
    // Fix return statements that might have been broken
    content = content.replace(/return \(\s*<>\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('All files fixed!');