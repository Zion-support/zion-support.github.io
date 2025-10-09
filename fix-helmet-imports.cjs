const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/sitemap-page.tsx',
  'app/robotics/page.tsx',
  'app/micro-saas/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/it-services/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/SEO.tsx',
  'app/components/SEOHead.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/case-studies/page.tsx',
  'app/ai-services/page.tsx',
  'app/blockchain/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-mobile-app-development/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace import
    content = content.replace(
      /import { Helmet } from 'react-helmet-async';/g,
      "import Head from 'next/head';"
    );
    
    // Replace Helmet with Head
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All helmet imports fixed!');