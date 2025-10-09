const fs = require('fs');
const path = require('path');

const files = [
  '/workspace/app/blog/ai-enterprise-transformation-2025/page.tsx',
  '/workspace/app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  '/workspace/app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  '/workspace/app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx'
];

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove Helmet import
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*/g, '');
      
      // Remove Helmet usage
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
      content = content.replace(/\s*<Helmet>[\s\S]*?<\/Helmet>\s*/g, '');
      
      // Clean up empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Blog Helmet removal completed!');