const fs = require('fs');
const path = require('path');

const files = [
  '/workspace/app/ai-workflow-automation/page.tsx',
  '/workspace/app/ai-ecommerce-solutions/page.tsx',
  '/workspace/app/cybersecurity/page.tsx',
  '/workspace/app/iot-edge-computing/page.tsx',
  '/workspace/app/ai-services/page.tsx',
  '/workspace/app/blockchain-web3/page.tsx',
  '/workspace/app/blockchain/page.tsx',
  '/workspace/app/iot-edge/page.tsx',
  '/workspace/app/case-studies/page.tsx',
  '/workspace/app/ai-marketing/page.tsx',
  '/workspace/app/robotics/page.tsx',
  '/workspace/app/ai-healthcare/page.tsx',
  '/workspace/app/ai-fintech/page.tsx',
  '/workspace/app/ai-data-analytics/page.tsx',
  '/workspace/app/it-infrastructure/page.tsx',
  '/workspace/app/ai-content-generation/page.tsx',
  '/workspace/app/ai-cybersecurity/page.tsx',
  '/workspace/app/ai-mobile-app-development/page.tsx',
  '/workspace/app/micro-saas/page.tsx'
];

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove Helmet import
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*/g, '');
      
      // Remove Helmet usage
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
      content = content.replace(/\s*<Helmet>[\s\S]*?<\/Helmet>\s*/g, '');
      
      // Clean up empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Helmet removal completed!');