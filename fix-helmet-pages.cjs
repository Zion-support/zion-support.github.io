const fs = require('fs');
const path = require('path');

// List of pages to fix
const pagesToFix = [
  'app/cybersecurity/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blockchain/page.tsx',
  'app/iot-edge/page.tsx',
  'app/case-studies/page.tsx',
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/micro-saas/page.tsx'
];

function fixPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
    
    // Add Navigation and Footer imports if not present
    if (!content.includes("import Navigation from '../components/Navigation'")) {
      content = content.replace(
        /import React from 'react';\n/,
        "import React from 'react';\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';\n"
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

// Fix all pages
pagesToFix.forEach(fixPage);

console.log('All pages fixed!');
