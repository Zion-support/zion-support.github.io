#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of app pages that use react-helmet-async
const pagesToFix = [
  'app/ai-workflow-automation/page.tsx',
  'app/it-services/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/robotics/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/iot-edge/page.tsx',
  'app/sitemap-page.tsx'
];

function fixHelmetUsage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Remove Helmet import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Remove HelmetProvider import if present
    content = content.replace(/import\s*{\s*HelmetProvider\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Remove Helmet JSX usage
    content = content.replace(/<Helmet[^>]*>[\s\S]*?<\/Helmet>\s*\n?/g, '');
    
    // Clean up any empty lines that might be left
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all pages
console.log('Fixing Helmet usage in app pages...');
pagesToFix.forEach(fixHelmetUsage);
console.log('Done!');