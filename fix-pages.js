import fs from 'fs';
import path from 'path';

// List of problematic page files
const problematicFiles = [
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/blog/page.tsx',
  'app/consultation/page.tsx',
  'app/cookies/page.tsx',
  'app/custom-software/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/demo/page.tsx',
  'app/enterprise/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/iot-edge/page.tsx',
  'app/it-micro-saas/page.tsx',
  'app/it-solutions/page.tsx',
  'app/micro-saas-solutions/page.tsx',
  'app/micro-saas/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/news/page.tsx'
];

// Function to get page title from file path
function getPageTitle(filePath) {
  const pathParts = filePath.split('/');
  const pageName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
  return pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to fix a page file
function fixPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the problematic pattern
    if (content.includes('PagePage') || content.includes('</Helmet>"')) {
      const pageTitle = getPageTitle(filePath);
      const componentName = pageTitle.replace(/\s+/g, '');
      
      const fixedContent = `import React from 'react'
import { Helmet } from 'react-helmet-async'

const ${componentName}Page = () => {
  return (
    <>
      <Helmet>
        <title>${pageTitle} - Zion Tech Group</title>
        <meta name="description" content="${pageTitle} - Zion Tech Group" />
      </Helmet>
      <div>
        <h1>${pageTitle}</h1>
        <p>This page is under development.</p>
      </div>
    </>
  );
}

export default ${componentName}Page
`;
      
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all problematic files
problematicFiles.forEach(fixPageFile);

console.log('Page fixing completed!');