const fs = require('fs');
const path = require('path');

const blogFiles = [
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx'
];

blogFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove react-helmet-async import
    content = content.replace(/import.*react-helmet-async.*\n/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    
    // Fix return statement if it has empty fragment
    content = content.replace(/return \(\s*<>\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
    
    // Fix any remaining empty fragments
    content = content.replace(/return \(\s*<>\s*([\s\S]*?)\s*<\/>\s*\);/g, 'return (\n    $1\n  );');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All blog files fixed!');