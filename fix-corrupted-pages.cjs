const fs = require('fs');
const path = require('path');

const corruptedFiles = [
  'app/services/analytics-dashboard/page.tsx',
  'app/services/automation-solutions/page.tsx',
  'app/services/cloud-services/page.tsx',
  'app/services/crm-platform/page.tsx',
  'app/services/crm-solution/page.tsx'
];

const basicPageTemplate = (title, description, keywords) => `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} - Zion Tech Group',
  description: '${description}',
  keywords: '${keywords}'
};

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ${title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ${description}
        </p>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 text-center">
          This service is currently under development. Please contact us for more information.
        </p>
      </div>
      <div className="text-center">
        <a
          href="mailto:kleber@ziontechgroup.com?subject=${title} Inquiry"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}`;

corruptedFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  
  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Extract service name from path
  const serviceName = path.basename(path.dirname(filePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const content = basicPageTemplate(
    serviceName,
    `Professional ${serviceName.toLowerCase()} services to help your business grow and succeed.`,
    `${serviceName.toLowerCase()}, business solutions, professional services`
  );
  
  fs.writeFileSync(fullPath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('All corrupted pages have been fixed!');