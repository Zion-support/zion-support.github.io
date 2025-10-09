const fs = require('fs');

const blogFiles = [
  '/workspace/app/blog/ai-enterprise-transformation-2025/page.tsx',
  '/workspace/app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  '/workspace/app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  '/workspace/app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx'
];

blogFiles.forEach(filePath => {
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

console.log('All blog Helmet imports fixed!');