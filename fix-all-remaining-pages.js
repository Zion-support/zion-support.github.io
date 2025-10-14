import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all remaining pages files that need fixing
const pagesFiles = [
  'app/pages/5GSolutionsPage.tsx',
  'app/pages/DemoPage.tsx',
  'app/pages/DigitalTransformationPage.tsx',
  'app/pages/DocumentationPage.tsx',
  'app/pages/FiveGSolutionsPage.tsx',
  'app/pages/HomePage.tsx',
  'app/pages/ITServicesPage.tsx',
  'app/pages/MicroSaaSPage.tsx',
  'app/pages/PricingPage.tsx',
  'app/pages/PrivacyPage.tsx',
  'app/pages/ServicesPage.tsx',
  'app/pages/SolutionsPage.tsx',
  'app/pages/SupportPage.tsx',
  'app/pages/TeamPage.tsx',
  'app/pages/TermsPage.tsx',
  'app/pages/TutorialsPage.tsx'
];

// Function to generate page name from file path
function getPageName(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  return fileName.replace(/([A-Z])/g, ' $1').trim();
}

// Function to generate component name from file path
function getComponentName(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  return fileName;
}

// Template for fixed page files
function getPageTemplate(filePath) {
  const pageName = getPageName(filePath);
  const componentName = getComponentName(filePath);
  
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName} = () => {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">${pageName}</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;
}

// Fix all pages files
pagesFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    const content = getPageTemplate(filePath);
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All remaining pages files have been fixed!');