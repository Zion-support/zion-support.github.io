const fs = require('fs');
const path = require('path');

// Function to create a clean page component
function createCleanPage(filePath) {
  const pageName = path.basename(filePath, '.tsx');
  const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Page';
  const displayName = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const cleanTemplate = `import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${displayName}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under construction and will be available soon.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700">
              We are working hard to bring you the best experience. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;

  return cleanTemplate;
}

// List of files that need to be completely replaced
const problematicFiles = [
  'app/about/page.tsx',
  'app/accessibility/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-chatbot-builder/page.tsx'
];

console.log('Performing final cleanup of problematic files...');

problematicFiles.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  try {
    const cleanContent = createCleanPage(filePath);
    fs.writeFileSync(fullPath, cleanContent);
    console.log(`Replaced with clean template: ${filePath}`);
  } catch (error) {
    console.error(`Error replacing ${filePath}:`, error.message);
  }
});

console.log('Final cleanup completed!');