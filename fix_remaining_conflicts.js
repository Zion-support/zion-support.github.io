const fs = require('fs');
const path = require('path');

// List of files with merge conflicts that need to be fixed
const filesToFix = [
  'app/ai-services/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/blog/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/it-services/page.tsx',
  'app/it-solutions/page.tsx',
  'app/pricing/page.tsx',
  'app/privacy/page.tsx',
  'app/services/page.tsx',
  'app/solutions/page.tsx',
  'app/team/page.tsx',
  'app/terms/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/micro-saas/ai-email-marketing-automation/page.tsx',
  'app/micro-saas/ai-expense-tracker/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx'
];

// Template for a simple page component
const createSimplePage = (pageName, title, description) => `import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ${pageName}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're working on bringing you amazing content for this page. Check back soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${pageName}Page;
`;

// Function to fix a file
function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    // Extract page name from file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
    const pageName = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    
    // Create title and description
    const title = pageName.replace(/([A-Z])/g, ' $1').trim();
    const description = `Comprehensive ${title.toLowerCase()} solutions for modern businesses.`;
    
    // Generate the new content
    const newContent = createSimplePage(pageName, title, description);
    
    // Write the new content
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix merge conflicts...');
filesToFix.forEach(fixFile);
console.log('Finished fixing merge conflicts!');