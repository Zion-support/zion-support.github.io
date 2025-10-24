const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/test/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/online-learning-platform/page.tsx'
];

function fixPage(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract title and description from Head component
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descMatch = content.match(/<meta name="description" content="([^"]+)" \/>/);
    
    const title = titleMatch ? titleMatch[1] : 'Page - Zion Tech Group';
    const description = descMatch ? descMatch[1] : 'Professional services and solutions from Zion Tech Group.';
    
    // Replace the old pattern with App Router pattern
    const newContent = content
      .replace(/import React from 'react';\nimport Head from 'next\/head';\n/, "'use client';\n\nimport React from 'react';\n")
      .replace(/import Navigation from '\.\.\/components\/Navigation';\nimport Footer from '\.\.\/components\/Footer';\n/, "import Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';\n")
      .replace(/import Navigation from '\.\.\/\.\.\/components\/Navigation';\nimport Footer from '\.\.\/\.\.\/components\/Footer';\n/, "import Navigation from '../../components/Navigation';\nimport Footer from '../../components/Footer';\n")
      .replace(/const Page: React\.FC = \(\) => \{/, `export const metadata = {\n  title: '${title}',\n  description: '${description}',\n};\n\nconst Page: React.FC = () => {`)
      .replace(/return \(\n    <>\n      <Head>\n        <title>[^<]+<\/title>\n        <meta name="description" content="[^"]+" \/>\n      <\/Head>\n      \n      <Navigation \/>/, 'return (\n    <>\n      <Navigation />');
    
    fs.writeFileSync(fullPath, newContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixPage);
console.log('All pages have been fixed for App Router compatibility!');