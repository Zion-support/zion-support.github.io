import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of page files in the pages directory that need fixing
const pageFiles = [
  'app/pages/PricingPage.tsx',
  'app/pages/PrivacyPage.tsx',
  'app/pages/SolutionsPage.tsx',
  'app/pages/SupportPage.tsx',
  'app/pages/TermsPage.tsx',
  'app/pages/TutorialsPage.tsx'
];

// Function to get page name from file path
function getPageName(filePath) {
  const parts = filePath.split('/');
  const fileName = parts[parts.length - 1]; // Get the file name
  return fileName.replace('.tsx', '').replace('Page', '');
}

// Template for page components
function createPageTemplate(pageName) {
  return `"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

const ${pageName}: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">${pageName}</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ${pageName};`;
}

// Fix each page file
pageFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const pageName = getPageName(filePath);
  const content = createPageTemplate(pageName);
  
  try {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Pages directory fixing completed!');