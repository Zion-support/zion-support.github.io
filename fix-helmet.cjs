const fs = require('fs');
const path = require('path');

const files = [
  '/workspace/app/cybersecurity/page.tsx',
  '/workspace/app/iot-edge-computing/page.tsx',
  '/workspace/app/ai-services/page.tsx',
  '/workspace/app/blockchain-web3/page.tsx',
  '/workspace/app/analytics-tools/page.tsx',
  '/workspace/app/blockchain/page.tsx',
  '/workspace/app/iot-edge/page.tsx',
  '/workspace/app/case-studies/page.tsx',
  '/workspace/app/ai-marketing/page.tsx',
  '/workspace/app/robotics/page.tsx',
  '/workspace/app/sitemap-page.tsx',
  '/workspace/app/it-infrastructure/page.tsx',
  '/workspace/app/services/page.tsx',
  '/workspace/app/ai-mobile-app-development/page.tsx',
  '/workspace/app/micro-saas/page.tsx',
  '/workspace/app/marketing-tools/page.tsx'
];

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace import
    content = content.replace(
      /import { Helmet } from 'react-helmet-async';/g,
      "import Head from 'next/head';"
    );
    
    // Replace Helmet with Head
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
});

console.log('All Helmet imports fixed!');