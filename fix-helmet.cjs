const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/sitemap-page.tsx',
  'app/robotics/page.tsx',
  'app/micro-saas/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-services/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/case-studies/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove react-helmet-async import
    content = content.replace(/import.*react-helmet-async.*\n/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    
    // Fix return statement if it has empty fragment
    content = content.replace(/return \(\s*<>\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
    
    // Fix any remaining empty fragments
    content = content.replace(/return \(\s*<>\s*([\s\S]*?)\s*<\/>\s*\);/g, 'return (\n    $1\n  );');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All files fixed!');