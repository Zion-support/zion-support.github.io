const fs = require('fs');
const path = require('path');

// List of blog files to fix
const blogFiles = [
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx'
];

function fixHelmetImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
    
    // Remove Helmet usage
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
blogFiles.forEach(fixHelmetImports);

console.log('Blog Helmet imports fixed!');