const fs = require('fs');
const path = require('path');

// List of files that need Helmet removal
const files = [
  'app/ai-services/page.tsx',
  'app/sitemap-page.tsx',
  'app/robotics/page.tsx',
  'app/micro-saas/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/case-studies/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-mobile-app-development/page.tsx'
];

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet[^>]*>[\s\S]*?<\/Helmet>\s*/g, '');
    
    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Helmet removal completed!');