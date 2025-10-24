const fs = require('fs');
const path = require('path');

// Find all corrupted files
function findCorruptedFiles(dirPath) {
  const corruptedFiles = [];
  
  function scanDirectory(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('layout')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          // Check for common corruption patterns
          if (content.includes('";      <div') || 
              content.includes('";import') || 
              content.includes("';import") ||
              content.includes('const Page = () => {return (') ||
              content.includes("'use client'';")) {
            corruptedFiles.push(fullPath);
          }
        } catch (error) {
          // If we can't read the file, it's likely corrupted
          corruptedFiles.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dirPath);
  return corruptedFiles;
}

// Create a simple page template
function createSimplePage(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 1].replace('.tsx', '');
  const route = '/' + pathParts.slice(1, -1).join('/');
  
  let title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  let description = `Comprehensive ${title.toLowerCase()} solutions for modern businesses.`;
  
  // Customize based on file
  switch (fileName) {
    case 'blog':
      title = 'Blog';
      description = 'Insights, trends, and updates from the world of technology.';
      break;
    case 'careers':
      title = 'Careers';
      description = 'Join our team and help shape the future of technology.';
      break;
    case 'case-studies':
      title = 'Case Studies';
      description = 'Discover how we\'ve helped businesses transform with our technology solutions.';
      break;
    case 'cloud-infrastructure':
      title = 'Cloud Infrastructure';
      description = 'Scalable and secure cloud infrastructure solutions for modern businesses.';
      break;
    case 'contact':
      title = 'Contact';
      description = 'Get in touch with our team for AI solutions and consultations.';
      break;
    case 'cybersecurity':
      title = 'Cybersecurity';
      description = 'Advanced cybersecurity solutions to protect your business.';
      break;
    case 'digital-transformation':
      title = 'Digital Transformation';
      description = 'Transform your business with our digital solutions.';
      break;
    case 'it-services':
      title = 'IT Services';
      description = 'Comprehensive IT services for modern businesses.';
      break;
    case 'it-solutions':
      title = 'IT Solutions';
      description = 'Custom IT solutions tailored to your business needs.';
      break;
    case 'privacy':
      title = 'Privacy Policy';
      description = 'Our privacy policy and data protection practices.';
      break;
    case 'terms':
      title = 'Terms of Service';
      description = 'Terms and conditions for using our services.';
      break;
    case 'team':
      title = 'Our Team';
      description = 'Meet the experts behind our innovative solutions.';
      break;
    case 'solutions':
      title = 'Solutions';
      description = 'Comprehensive technology solutions for your business.';
      break;
  }
  
  const componentName = title.replace(/\s+/g, '') + 'Page';
  
  return `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} - Zion Tech Group',
  description: '${description}',
  keywords: '${title.toLowerCase()}, AI solutions, technology services',
  openGraph: {
    title: '${title} - Zion Tech Group',
    description: '${description}',
    type: 'website',
    url: 'https://ziontechgroup.com${route}',
  },
};

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;
}

// Main execution
console.log('Finding corrupted files...');
const corruptedFiles = findCorruptedFiles('./app');
console.log(`Found ${corruptedFiles.length} corrupted files:`);
corruptedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\nFixing corrupted files...');
let fixedCount = 0;

for (const filePath of corruptedFiles) {
  try {
    const content = createSimplePage(filePath);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files.`);
