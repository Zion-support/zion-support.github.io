const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to create a proper page template
function createPageTemplate(pageName, title, description, keywords) {
  return `import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const ${pageName}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
            <p className="text-xl text-gray-300 mb-8">
              ${description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${pageName};`;
}

// Function to fix corrupted JSX
function fixCorruptedJSX(content, filePath) {
  // Extract page name from file path
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1];
  const pageName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  // Extract title from file path
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  // Create description and keywords
  const description = `Professional ${title.toLowerCase()} solutions and services`;
  const keywords = title.toLowerCase().replace(/\s+/g, ', ');
  
  // Return the properly formatted template
  return createPageTemplate(pageName, title, description, keywords);
}

// Main function to process all files
async function fixAllFiles() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check if the file is corrupted (contains malformed JSX)
      if (content.includes('<>Helmet>') || content.includes('div className=') && !content.includes('<div className=')) {
        console.log(`Fixing corrupted file: ${file}`);
        const fixed = fixCorruptedJSX(content, file);
        fs.writeFileSync(file, fixed, 'utf8');
      } else {
        console.log(`Skipping file (appears to be valid): ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('All files processed!');
}

// Run the fix
fixAllFiles().catch(console.error);