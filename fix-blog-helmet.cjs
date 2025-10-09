const fs = require('fs');
const path = require('path');

// List of blog files that need fixing
const blogFiles = [
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove react-helmet-async import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    content = content.replace(/import { Helmet } from "react-helmet-async";\n?/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta[^>]*>\s*<meta[^>]*>\s*<\/Helmet>\s*/gs, '');
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta[^>]*>\s*<\/Helmet>\s*/gs, '');
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<\/Helmet>\s*/gs, '');
    
    // Clean up any remaining Helmet tags
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    
    // Remove empty lines that might be left
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
blogFiles.forEach(fixFile);
console.log('All blog files fixed!');