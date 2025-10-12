const fs = require('fs');
const path = require('path');

// Files that need Navigation and Footer removed
const filesToFix = [
  'src/ai-cybersecurity/page.tsx',
  'src/ai-data-analytics/page.tsx',
  'src/ai-data-visualization/page.tsx',
  'src/ai-document-processing/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/ai-fintech/page.tsx',
  'src/ai-healthcare/page.tsx',
  'src/ai-lead-generation/page.tsx',
  'src/ai-marketing/page.tsx',
  'src/ai-mobile-app-development/page.tsx',
  'src/ai-sales-automation/page.tsx',
  'src/ai-workflow-automation/page.tsx',
  'src/autonomous-systems/page.tsx',
  'src/blockchain-web3/page.tsx',
  'src/business-intelligence/page.tsx',
  'src/careers/page.tsx',
  'src/consultation/page.tsx',
  'src/contact/page.tsx',
  'src/cybersecurity/page.tsx',
  'src/database/page.tsx',
  'src/demo/page.tsx',
  'src/devops/page.tsx',
  'src/iot-edge-computing/page.tsx',
  'src/it-infrastructure/page.tsx',
  'src/networking/page.tsx',
  'src/news/page.tsx',
  'src/offline/page.tsx',
  'src/pricing/page.tsx',
  'src/quantum-computing/page.tsx',
  'src/robotics/page.tsx',
  'src/services/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Remove Navigation and Footer imports
    const importRegex = /import\s+(Navigation|Footer)\s+from\s+['"][^'"]+['"];?\s*\n?/g;
    const beforeContent = content;
    content = content.replace(importRegex, '');
    if (content !== beforeContent) {
      modified = true;
    }
    
    // Remove unused variable declarations
    const variableRegex = /const\s+(AICRMPage|features|pricingPlans|stats|services|benefits|itServices)\s*=\s*[^;]+;/g;
    const beforeContent2 = content;
    content = content.replace(variableRegex, '');
    if (content !== beforeContent2) {
      modified = true;
    }
    
    // Remove unused useState import
    const useStateRegex = /import\s+React,\s*{\s*useState\s*}\s+from\s+['"]react['"];?\s*\n?/g;
    const beforeContent3 = content;
    content = content.replace(useStateRegex, "import React from 'react';");
    if (content !== beforeContent3) {
      modified = true;
    }
    
    // Remove unused SEOOptimizer import
    const seoRegex = /import\s+SEOOptimizer\s+from\s+['"][^'"]+['"];?\s*\n?/g;
    const beforeContent4 = content;
    content = content.replace(seoRegex, '');
    if (content !== beforeContent4) {
      modified = true;
    }
    
    // Remove unused sitemap imports
    const sitemapRegex = /import\s+{\s*generateSitemap,\s*getAllPages\s*}\s+from\s+['"][^'"]+['"];?\s*\n?/g;
    const beforeContent5 = content;
    content = content.replace(sitemapRegex, '');
    if (content !== beforeContent5) {
      modified = true;
    }
    
    // Remove unused React imports from offline page
    if (filePath.includes('offline/page.tsx')) {
      const offlineRegex = /import\s+React\s+from\s+['"]react['"];\s*\nimport\s+{\s*WifiOff,\s*RefreshCw,\s*Home,\s*Wifi\s*}\s+from\s+['"]lucide-react['"];?\s*\n?/g;
      const beforeContent6 = content;
      content = content.replace(offlineRegex, '');
      if (content !== beforeContent6) {
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Fixing remaining unused imports...');
filesToFix.forEach(fixFile);
console.log('Done!');