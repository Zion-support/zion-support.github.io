const fs = require('fs');
const path = require('path');

// List of files to fix
const files = [
  'app/ai-marketing/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/case-studies/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/micro-saas/page.tsx',
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx'
];

files.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\n?/g, '');
    
    // Fix return statement structure
    content = content.replace(/return \(\s*<>\s*<div className="min-h-screen bg-gradient-to-br from-slate-50 to-[^"]*">/g, 'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
    
    // Fix closing tags
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All files fixed!');