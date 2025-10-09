import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files to fix
const filesToFix = [
  'app/ai-services/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/case-studies/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-services/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/micro-saas/page.tsx',
  'app/robotics/page.tsx',
  'app/sitemap-page.tsx'
];

function fixHelmetImport(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file uses react-helmet-async
    if (!content.includes('react-helmet-async')) {
      console.log(`File ${filePath} doesn't use react-helmet-async, skipping...`);
      return;
    }

    // Extract title and description from Helmet component
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descMatch = content.match(/<meta name="description" content="([^"]+)" \/>/);
    const keywordsMatch = content.match(/<meta name="keywords" content="([^"]+)" \/>/);

    const title = titleMatch ? titleMatch[1] : 'Zion Tech Group - AI Solutions';
    const description = descMatch ? descMatch[1] : 'Leading provider of AI-powered enterprise solutions';
    const keywords = keywordsMatch ? keywordsMatch[1] : 'AI solutions, enterprise technology';

    // Replace imports
    content = content.replace(
      /import React from 'react';\nimport { Helmet } from 'react-helmet-async';\nimport/,
      `import React from 'react';\nimport { Metadata } from 'next';\nimport`
    );

    // Add metadata export after imports
    const importEndIndex = content.indexOf('const ');
    if (importEndIndex !== -1) {
      const metadataExport = `\nexport const metadata: Metadata = {\n  title: '${title}',\n  description: '${description}',\n  keywords: '${keywords}',\n};\n\n`;
      content = content.slice(0, importEndIndex) + metadataExport + content.slice(importEndIndex);
    }

    // Remove Helmet component usage
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*/, '');
    
    // Fix return statement if it has empty fragments
    content = content.replace(/return \(\s*<>\s*<div/g, 'return (\n    <div');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n  );');

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixHelmetImport);
console.log('Helmet import fixes completed!');