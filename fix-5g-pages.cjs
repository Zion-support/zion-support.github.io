<<<<<<< HEAD
const fs = require("fs");
const path = require("path");

const pages = [
  "5g-implementation",
  "5g-iot-solutions",
  "5g-mobile-applications",
  "5g-network-infrastructure",
  "5g-private-networks",
  "5g-smart-city-solutions",
  "5g-solutions",
];

const template = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function {PAGE_NAME}Page() {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE} - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{PAGE_TITLE}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional {PAGE_DESCRIPTION} services coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
=======
const fs = require('fs');
const path = require('path');

// Function to fix 5g page files
function fix5gPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path
    const pageName = path.basename(path.dirname(filePath));
    const title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Create valid component name (prefix with FiveG)
    const componentName = 'FiveG' + pageName.split('-').slice(1).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    
    // Create the fixed content
    const fixedContent = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="${pageName}, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional ${title.toLowerCase()} services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced ${title.toLowerCase()} solutions. 
              Stay tuned for updates!
            </p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}`;

const pageTitles = {
  "5g-implementation": "5G Implementation",
  "5g-iot-solutions": "5G IoT Solutions",
  "5g-mobile-applications": "5G Mobile Applications",
  "5g-network-infrastructure": "5G Network Infrastructure",
  "5g-private-networks": "5G Private Networks",
  "5g-smart-city-solutions": "5G Smart City Solutions",
  "5g-solutions": "5G Solutions",
};

const pageDescriptions = {
  "5g-implementation": "5G implementation",
  "5g-iot-solutions": "5G IoT solutions",
  "5g-mobile-applications": "5G mobile applications",
  "5g-network-infrastructure": "5G network infrastructure",
  "5g-private-networks": "5G private networks",
  "5g-smart-city-solutions": "5G smart city solutions",
  "5g-solutions": "5G solutions",
};

pages.forEach((page) => {
  const pageName = page
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const content = template
    .replace(/{PAGE_NAME}/g, pageName)
    .replace(/{PAGE_TITLE}/g, pageTitles[page])
    .replace(/{PAGE_DESCRIPTION}/g, pageDescriptions[page]);

  const filePath = path.join(__dirname, "app", page, "page.tsx");
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${page}/page.tsx`);
});
=======
};

export default ${componentName}Page;`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all 5g page files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function find5gPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Check if this directory starts with 5g and has a page.tsx file
      if (file.startsWith('5g-')) {
        const pagePath = path.join(filePath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          pageFiles.push(pagePath);
        }
      }
      find5gPageFiles(filePath);
    }
  }
}

find5gPageFiles(appDir);

console.log(`Found ${pageFiles.length} 5g page files`);

// Fix each 5g page file
let fixedCount = 0;
for (const pageFile of pageFiles) {
  if (fix5gPageFile(pageFile)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${pageFiles.length} 5g page files`);
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
