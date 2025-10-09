import fs from 'fs';
import path from 'path';

// List of files to fix
const filesToFix = [
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/micro-saas/page.tsx',
  'app/it-services/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/case-studies/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx'
];

function fixHelmetImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace react-helmet-async import with next/head
    content = content.replace(
      /import { Helmet } from 'react-helmet-async';/g,
      "import Head from 'next/head';"
    );
    
    // Replace <Helmet> with <Head>
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixHelmetImport);

console.log('All helmet imports fixed!');