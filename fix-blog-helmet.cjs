const fs = require('fs');
const path = require('path');

// List of blog files to fix
const blogFiles = [
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx'
];

function fixHelmetImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    content = content.replace(/import { Helmet } from "react-helmet-async";\n?/g, '');
    
    // Remove Helmet components
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\n?/g, '');
    
    // Fix return statements that might have been broken
    content = content.replace(/return \(\s*<>\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all blog files
blogFiles.forEach(fixHelmetImports);
console.log('All blog Helmet imports fixed!');