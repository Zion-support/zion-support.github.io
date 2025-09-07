#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple working template
const template = `import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'SERVICE_TITLE | Zion Tech Group',
  description: 'Professional services for your business needs.',
  keywords: 'services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            SERVICE_TITLE
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional services designed to meet your business requirements.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Get all service page files
function getAllServicePages() {
  const files = [];
  const servicesDir = path.join(__dirname, 'app', 'services');
  
  function findServicePages(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findServicePages(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  findServicePages(servicesDir);
  return files;
}

// Fix a single file
function fixFile(filePath) {
  try {
    const serviceName = filePath.split('/')[2].split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const content = template.replace(/SERVICE_TITLE/g, serviceName);
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const files = getAllServicePages();
  console.log(`Found ${files.length} service pages to process...`);
  
  let fixed = 0;
  for (const filePath of files) {
    if (fixFile(filePath)) {
      fixed++;
    }
  }
  
  console.log(`Fixed ${fixed} files`);
}

main();