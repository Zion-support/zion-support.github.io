const fs = require('fs');
const path = require('path');

const servicesDir = './app/services';

// Get all .tsx files in the services directory
const files = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => path.join(servicesDir, dirent.name, 'page.tsx'))
  .filter(filePath => fs.existsSync(filePath));

console.log(`Found ${files.length} service files to check`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts or is corrupted
    if (content.includes('<<<<<<< HEAD') || 
        content.includes('=======') || 
        content.includes('>>>>>>>') ||
        content.trim().startsWith('</div>') ||
        content.trim().startsWith('export const metadata = {') && !content.includes('export default function') ||
        content.includes('Expression expected') ||
        content.includes('Unexpected token')) {
      
      // Extract service name from path
      const serviceName = path.basename(path.dirname(filePath))
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      const title = serviceName.replace(/([A-Z])/g, ' $1').trim();
      
      const newContent = `import React from 'react';

export const metadata = {
  title: '${title} | Zion Tech Group',
  description: 'Professional ${title.toLowerCase()} services for your business needs.',
  keywords: '${path.basename(path.dirname(filePath)).replace(/-/g, ', ')}, services, business, technology'
};

export default function ${serviceName.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${title}
          </h1>
          <p className="text-xl text-gray-600">
            Professional ${title.toLowerCase()} services for your business needs
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Expert Solutions
          </h2>
          <p className="text-gray-600">
            Our ${title.toLowerCase()} services provide comprehensive solutions tailored to your specific business requirements and industry standards.
          </p>
        </div>
      </div>
    </div>
  );
}`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.log(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);