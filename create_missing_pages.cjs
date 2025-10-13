const fs = require('fs');
const path = require('path');

const pages = [
  'analytics-dashboard',
  'customer-relationship', 
  'inventory-management',
  'financial-tracking',
  'cloud-infrastructure',
  'cybersecurity',
  'data-management',
  'network-solutions',
  'it-consulting',
  'system-integration',
  '5g-network-infrastructure',
  '5g-iot-solutions',
  '5g-smart-city',
  '5g-edge-computing',
  '5g-mobile-apps',
  '5g-data-analytics'
];

const template = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const PAGE_NAME = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>PAGE_TITLE - Zion Tech Group</title>
        <meta name="description" content="PAGE_DESCRIPTION" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PAGE_TITLE
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Coming Soon - PAGE_DESCRIPTION
          </p>
        </div>
      </div>
    </div>
  );
};

export default PAGE_NAME;`;

pages.forEach(page => {
  const pageName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const pageTitle = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const pageDescription = `Advanced ${pageTitle.toLowerCase()} solutions and services`;
  
  const content = template
    .replace(/PAGE_NAME/g, pageName)
    .replace(/PAGE_TITLE/g, pageTitle)
    .replace(/PAGE_DESCRIPTION/g, pageDescription);
  
  const filePath = path.join('app', page, 'page.tsx');
  fs.writeFileSync(filePath, content);
  console.log(`Created ${filePath}`);
});

console.log('All pages created successfully!');
