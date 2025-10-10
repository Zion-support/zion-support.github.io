const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/robotics/page.tsx',
  'app/iot-edge/page.tsx',
  'app/micro-saas/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/sitemap-page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/case-studies/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-mobile-app-development/page.tsx'
];

filesToFix.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove react-helmet-async import
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
      
      // Remove Helmet usage
      content = content.replace(/<Helmet[^>]*>[\s\S]*?<\/Helmet>\s*/g, '');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Helmet imports fixed!');