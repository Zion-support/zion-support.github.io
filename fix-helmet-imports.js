import fs from 'fs';
import path from 'path';

const filesToFix = [
  'app/robotics/page.tsx',
  'app/micro-saas/page.tsx',
  'app/sitemap-page.tsx',
  'app/cybersecurity/page.tsx',
  'app/it-services/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/blockchain/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/case-studies/page.tsx'
];

function fixHelmetImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove react-helmet-async import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Remove Helmet wrapper and move title/meta to head
    content = content.replace(/<>\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta\s+name="description"\s+content="([^"]*)"\s*\/>\s*<meta\s+name="keywords"\s+content="([^"]*)"\s*\/>\s*<\/Helmet>\s*/g, '');
    
    // Remove closing fragment
    content = content.replace(/\s*<\/>\s*$/gm, '');
    
    // Clean up any remaining empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixHelmetImports);
console.log('All helmet imports fixed!');