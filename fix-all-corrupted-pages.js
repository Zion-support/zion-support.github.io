const fs = require('fs');
const path = require('path');

// Find all corrupted pages
function findCorruptedPages() {
  const corruptedPages = [];
  const appDir = path.join(__dirname, 'app');
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item === 'page.tsx') {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('Conflict resolved')) {
          const relativePath = path.relative(appDir, fullPath);
          corruptedPages.push(relativePath);
        }
      }
    }
  }
  
  scanDirectory(appDir);
  return corruptedPages;
}

// Generate a valid function name from page path
function getValidFunctionName(pagePath) {
  const pathParts = pagePath.split('/');
  const pageName = pathParts[pathParts.length - 2]; // Get the directory name
  
  // Remove numbers and special characters, convert to PascalCase
  const cleanName = pageName
    .replace(/[0-9]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '')
    .split('')
    .map((char, index) => index === 0 ? char.toUpperCase() : char.toLowerCase())
    .join('');
  
  return cleanName + 'Page';
}

// Generate page title from path
function getPageTitle(pagePath) {
  const pathParts = pagePath.split('/');
  const pageName = pathParts[pathParts.length - 2];
  
  return pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate page description
function getPageDescription(pageName) {
  const descriptions = {
    'ai': 'Advanced artificial intelligence solutions for modern businesses.',
    '5g': 'Next-generation 5G technology solutions and services.',
    'cybersecurity': 'Comprehensive cybersecurity solutions to protect your digital assets.',
    'cloud': 'Scalable cloud infrastructure and services.',
    'data': 'Advanced data analytics and processing solutions.',
    'mobile': 'Mobile application development and solutions.',
    'web': 'Web development and digital solutions.',
    'iot': 'Internet of Things solutions and services.',
    'blockchain': 'Blockchain technology solutions and services.',
    'automation': 'Business process automation solutions.',
    'analytics': 'Data analytics and business intelligence solutions.',
    'security': 'Security solutions and services.',
    'management': 'Management and administrative solutions.',
    'content': 'Content management and creation solutions.',
    'customer': 'Customer relationship and support solutions.',
    'business': 'Business intelligence and optimization solutions.',
    'code': 'Code development and management solutions.',
    'api': 'API development and management solutions.',
    'chatbot': 'AI-powered chatbot and conversational solutions.',
    'climate': 'Climate and environmental technology solutions.',
    'computer': 'Computer vision and AI solutions.',
    'conversation': 'Conversational AI and communication solutions.',
    'crm': 'Customer relationship management solutions.',
    'cyber': 'Cybersecurity and digital protection solutions.',
    'defense': 'Digital defense and security solutions.',
    'delivery': 'Content delivery and distribution solutions.',
    'generation': 'AI-powered content and code generation solutions.',
    'intelligence': 'Artificial intelligence and machine learning solutions.',
    'moderation': 'Content moderation and safety solutions.',
    'network': 'Network infrastructure and management solutions.',
    'prediction': 'Predictive analytics and forecasting solutions.',
    'reporting': 'Automated reporting and analytics solutions.',
    'studio': 'Content creation and management studio solutions.',
    'support': 'Customer support and service solutions.',
    'testing': 'Automated testing and quality assurance solutions.',
    'writer': 'AI-powered content writing solutions.'
  };
  
  const lowerName = pageName.toLowerCase();
  
  for (const [key, description] of Object.entries(descriptions)) {
    if (lowerName.includes(key)) {
      return description;
    }
  }
  
  return 'Professional technology solutions and services for modern businesses.';
}

// Template for generic pages
const pageTemplate = (pageName, title, description) => `import React from 'react'
import Link from 'next/link'

export default function ${getValidFunctionName(pageName)}() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              ${description}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Advanced technology implementation</li>
              <li>Scalable and secure solutions</li>
              <li>24/7 support and maintenance</li>
              <li>Custom solutions tailored to your needs</li>
              <li>Proven track record of success</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance</h3>
                <p className="text-gray-600">
                  Optimized solutions designed for maximum performance and efficiency.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Built with enterprise-grade reliability and security standards.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}`;

// Main function
function main() {
  console.log('Finding corrupted pages...');
  const corruptedPages = findCorruptedPages();
  console.log(`Found ${corruptedPages.length} corrupted pages`);
  
  let fixedCount = 0;
  
  for (const pagePath of corruptedPages) {
    try {
      const fullPath = path.join(__dirname, 'app', pagePath);
      const pageName = pagePath.replace('/page.tsx', '');
      const title = getPageTitle(pagePath);
      const description = getPageDescription(pageName);
      
      const content = pageTemplate(pageName, title, description);
      fs.writeFileSync(fullPath, content);
      
      fixedCount++;
      if (fixedCount % 50 === 0) {
        console.log(`Fixed ${fixedCount} pages...`);
      }
    } catch (error) {
      console.error(`Error fixing ${pagePath}:`, error.message);
    }
  }
  
  console.log(`Successfully fixed ${fixedCount} corrupted pages!`);
}

main();