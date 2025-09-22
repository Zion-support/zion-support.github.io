#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read all service directories
const serviceDirs = fs.readdirSync(path.join(__dirname, 'app', 'services'));

const template = `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SERVICE_NAME | Zion Tech Group',
  description: 'SERVICE_DESCRIPTION',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            SERVICE_TITLE
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            SERVICE_DESCRIPTION_LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 1.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 1.1</li>
              <li>• Feature 1.2</li>
              <li>• Feature 1.3</li>
              <li>• Feature 1.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 2.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 2.1</li>
              <li>• Feature 2.2</li>
              <li>• Feature 2.3</li>
              <li>• Feature 2.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 3.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 3.1</li>
              <li>• Feature 3.2</li>
              <li>• Feature 3.3</li>
              <li>• Feature 3.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Function to convert service name to title
function serviceNameToTitle(serviceName) {
  return serviceName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to generate description
function generateDescription(serviceName) {
  const title = serviceNameToTitle(serviceName);
  return `Professional ${title.toLowerCase()} services for your business needs.`;
}

// Function to generate long description
function generateLongDescription(serviceName) {
  const title = serviceNameToTitle(serviceName);
  return `Comprehensive ${title.toLowerCase()} solutions designed to help your business grow and succeed.`;
}

let fixedCount = 0;
let skippedCount = 0;

serviceDirs.forEach(service => {
  const filePath = path.join(__dirname, 'app', 'services', service, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if the file is already properly formatted
      if (content.includes('export default function ServicePage()') && 
          content.includes('return (') && 
          content.includes('</div>') &&
          content.includes('export const metadata: Metadata = {')) {
        skippedCount++;
        return;
      }
      
      // Generate content for this service
      const serviceTitle = serviceNameToTitle(service);
      const serviceDescription = generateDescription(service);
      const serviceDescriptionLong = generateLongDescription(service);
      
      const newContent = template
        .replace(/SERVICE_NAME/g, serviceTitle)
        .replace(/SERVICE_DESCRIPTION/g, serviceDescription)
        .replace(/SERVICE_TITLE/g, serviceTitle)
        .replace(/SERVICE_DESCRIPTION_LONG/g, serviceDescriptionLong);
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed ${service}/page.tsx`);
      fixedCount++;
    } catch (error) {
      console.error(`Error fixing ${service}:`, error.message);
    }
  }
});

console.log(`\\nSummary:`);
console.log(`- Fixed: ${fixedCount} service pages`);
console.log(`- Skipped: ${skippedCount} service pages (already properly formatted)`);
console.log(`- Total processed: ${fixedCount + skippedCount} service pages`);