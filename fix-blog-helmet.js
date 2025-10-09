import fs from 'fs';

const blogFiles = [
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx'
];

function fixBlogHelmet(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove react-helmet-async import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Remove Helmet wrapper
    content = content.replace(/<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*/g, '');
    
    // Remove closing fragment
    content = content.replace(/\s*<\/>\s*$/gm, '');
    
    // Clean up any remaining empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed blog: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all blog files
blogFiles.forEach(fixBlogHelmet);
console.log('All blog helmet imports fixed!');