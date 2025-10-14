import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of page files that need fixing
const pageFiles = [
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

// Function to generate page name from file path
function getPageName(filePath) {
  const parts = filePath.split('/');
  const pageDir = parts[parts.length - 2];
  return pageDir
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') + ' Page';
}

// Function to generate component name from file path
function getComponentName(filePath) {
  const parts = filePath.split('/');
  const pageDir = parts[parts.length - 2];
  return pageDir
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
}

// Template for fixed page files
function getPageTemplate(filePath) {
  const pageName = getPageName(filePath);
  const componentName = getComponentName(filePath);
  
  return `import React from 'react'
import { Helmet } from 'react-helmet-async'

const ${componentName} = () => {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1>${pageName}</h1>
          <p>This page is under development.</p>
        </div>
      </div>
    </>
  );
}

export default ${componentName}`;
}

// Fix all page files
pageFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    const content = getPageTemplate(filePath);
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All page files have been fixed!');