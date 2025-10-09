const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/ai-services/page.tsx',
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx',
  'app/iot-edge/page.tsx',
  'app/micro-saas/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/case-studies/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-mobile-app-development/page.tsx'
];

function fixHelmetImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    content = content.replace(/import { Helmet } from "react-helmet-async";\n?/g, '');
    
    // Remove Helmet components
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\n?/g, '');
    
    // Fix return statements that might have been broken
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
filesToFix.forEach(fixHelmetImports);
console.log('All Helmet imports fixed!');