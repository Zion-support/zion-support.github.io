import fs from 'fs';

// List of blog files to fix
const blogFiles = [
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx'
];

function fixHelmetImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace react-helmet-async import with next/head
    content = content.replace(
      /import { Helmet } from 'react-helmet-async';/g,
      "import Head from 'next/head';"
    );
    
    // Replace <Helmet> with <Head>
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all blog files
blogFiles.forEach(fixHelmetImport);

console.log('All blog helmet imports fixed!');