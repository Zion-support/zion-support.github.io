const fs = require('fs');
const path = require('path');

const files = [
  '/workspace/app/ai-workflow-automation/page.tsx',
  '/workspace/app/it-services/page.tsx',
  '/workspace/app/cybersecurity/page.tsx',
  '/workspace/app/iot-edge-computing/page.tsx',
  '/workspace/app/ai-services/page.tsx',
  '/workspace/app/blockchain-web3/page.tsx',
  '/workspace/app/blockchain/page.tsx',
  '/workspace/app/iot-edge/page.tsx',
  '/workspace/app/case-studies/page.tsx',
  '/workspace/app/robotics/page.tsx',
  '/workspace/app/ai-healthcare/page.tsx',
  '/workspace/app/sitemap-page.tsx',
  '/workspace/app/it-infrastructure/page.tsx',
  '/workspace/app/ai-mobile-app-development/page.tsx',
  '/workspace/app/micro-saas/page.tsx'
];

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import and usage
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\n?/g, '');
    content = content.replace(/import React from 'react';\n?/g, "'use client';\nimport React from 'react';\n");
    content = content.replace(/import Navigation from '\.\.\/components\/Navigation';\n?/g, '');
    content = content.replace(/import Footer from '\.\.\/components\/Footer';\n?/g, '');
    
    // Add proper imports if not present
    if (!content.includes("import Navigation from '../components/Navigation'")) {
      content = content.replace(/'use client';\nimport React from 'react';\n/, "'use client';\nimport React from 'react';\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';\n");
    }
    
    // Fix component structure
    content = content.replace(/return \(\s*<>\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
    
    // Add Navigation and Footer if missing
    if (!content.includes('<Navigation />')) {
      content = content.replace(/(<div[^>]*>)/, '$1\n      <Navigation />\n      <main>');
    }
    if (!content.includes('<Footer />')) {
      content = content.replace(/(<\/main>)/, '$1\n      <Footer />');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
});

console.log('All files fixed!');