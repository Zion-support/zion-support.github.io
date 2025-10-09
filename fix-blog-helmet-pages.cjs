const fs = require('fs');

// List of blog pages to fix
const blogPagesToFix = [
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx'
];

function fixBlogPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    
    // Add Navigation and Footer imports if not present
    if (!content.includes("import Navigation from '../../components/Navigation'")) {
      content = content.replace(
        /import React from 'react';\n/,
        "import React from 'react';\nimport Navigation from '../../components/Navigation';\nimport Footer from '../../components/Footer';\n"
      );
    }
    
    // Remove Helmet usage
    content = content.replace(
      /<Helmet>[\s\S]*?<\/Helmet>\n?/g,
      ''
    );
    
    // Fix the main structure - replace the opening div with Navigation
    content = content.replace(
      /<div className="min-h-screen bg-gradient-to-br from-slate-50 to-[^"]*">\s*$/m,
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Navigation />'
    );
    
    // Add Footer before closing div
    content = content.replace(
      /(\s*)<\/div>\s*\);\s*};/,
      '$1      <Footer />\n    </div>\n  );\n};'
    );
    
    // Fix any remaining structure issues
    content = content.replace(/\s*<>\s*$/m, '');
    content = content.replace(/\s*<\/>\s*$/m, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all blog pages
blogPagesToFix.forEach(fixBlogPage);

console.log('All blog pages fixed!');
