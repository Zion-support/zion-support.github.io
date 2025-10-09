const fs = require('fs');
const path = require('path');

// List of files that need Helmet removal
const files = [
  'app/components/SEO.tsx',
  'app/it-services/page.tsx',
  'app/ai-services/page.tsx',
  'app/case-studies/page.tsx',
  'app/micro-saas/page.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/iot-edge/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/components/SEOHead.tsx',
  'app/cybersecurity/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/blockchain/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-mobile-app-development/page.tsx'
];

function removeHelmetFromFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Remove HelmetProvider import
    content = content.replace(/import\s*{\s*HelmetProvider\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Remove Helmet usage - simple pattern
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*\n?/g, '');
    
    // Fix any broken JSX structure
    content = content.replace(/<>\s*<div/g, '<div');
    content = content.replace(/<\/div>\s*<\/>/g, '</div>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    removeHelmetFromFile(fullPath);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('Helmet removal completed!');