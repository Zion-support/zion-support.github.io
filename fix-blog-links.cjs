const fs = require('fs');

const blogFiles = [
  '/workspace/app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  '/workspace/app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  '/workspace/app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx'
];

blogFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add Link import if not present
    if (!content.includes("import Link from 'next/link'")) {
      content = content.replace(
        /import Head from 'next\/head';/,
        "import Head from 'next/head';\nimport Link from 'next/link';"
      );
    }
    
    // Replace to= with href=
    content = content.replace(/to="/g, 'href="');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
});

console.log('All blog Link imports fixed!');