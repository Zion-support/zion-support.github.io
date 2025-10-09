import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of blog files to fix
const blogFiles = [
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx'
];

function fixBlogPage(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file uses react-helmet-async
    if (!content.includes('react-helmet-async')) {
      console.log(`File ${filePath} doesn't use react-helmet-async, skipping...`);
      return;
    }

    // Extract title and description from Helmet component
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descMatch = content.match(/<meta name="description" content="([^"]+)" \/>/);
    const keywordsMatch = content.match(/<meta name="keywords" content="([^"]+)" \/>/);

    const title = titleMatch ? titleMatch[1] : 'AI Blog - Zion Tech Group';
    const description = descMatch ? descMatch[1] : 'Latest AI insights and trends from Zion Tech Group';
    const keywords = keywordsMatch ? keywordsMatch[1] : 'AI, artificial intelligence, technology, innovation';

    // Replace imports
    content = content.replace(
      /import React from 'react';\nimport { Helmet } from 'react-helmet-async';\n/,
      `import React from 'react';\nimport { Metadata } from 'next';\n\n`
    );

    // Add metadata export after imports
    const importEndIndex = content.indexOf('const ');
    if (importEndIndex !== -1) {
      const metadataExport = `export const metadata: Metadata = {\n  title: '${title}',\n  description: '${description}',\n  keywords: '${keywords}',\n};\n\n`;
      content = content.slice(0, importEndIndex) + metadataExport + content.slice(importEndIndex);
    }

    // Remove Helmet component usage
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*/, '');
    
    // Fix return statement if it has empty fragments
    content = content.replace(/return \(\s*<>\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all blog files
blogFiles.forEach(fixBlogPage);
console.log('Blog page fixes completed!');