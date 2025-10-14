const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix corrupted JSX
function fixCorruptedJSX(content) {
  let fixed = content;
  
  // Fix malformed JSX elements - add missing angle brackets
  fixed = fixed.replace(/<>Helmet>/g, '<Helmet>');
  fixed = fixed.replace(/<title>/g, '<title>');
  fixed = fixed.replace(/meta name="([^"]*)" content="([^"]*)" \/>/g, '<meta name="$1" content="$2" />');
  fixed = fixed.replace(/\/Helmet>/g, '</Helmet>');
  
  // Fix div elements
  fixed = fixed.replace(/<div className="([^"]*)"[^>]*>/g, '<div className="$1">');
  fixed = fixed.replace(/<\/div>/g, '</div>');
  
  // Fix h1 elements
  fixed = fixed.replace(/<h1 className="([^"]*)"[^>]*>/g, '<h1 className="$1">');
  fixed = fixed.replace(/<\/h1>/g, '</h1>');
  
  // Fix h3 elements
  fixed = fixed.replace(/<h3 className="([^"]*)"[^>]*>/g, '<h3 className="$1">');
  fixed = fixed.replace(/<\/h3>/g, '</h3>');
  
  // Fix p elements
  fixed = fixed.replace(/<p className="([^"]*)"[^>]*>/g, '<p className="$1">');
  fixed = fixed.replace(/<\/p>/g, '</p>');
  
  // Fix Link elements
  fixed = fixed.replace(/<Link to="([^"]*)"[^>]*>/g, '<Link to="$1">');
  fixed = fixed.replace(/<\/Link>/g, '</Link>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/\/h3>/g, '</h3>');
  fixed = fixed.replace(/\/p>/g, '</p>');
  fixed = fixed.replace(/\/div>/g, '</div>');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>([^<]*)/g, '<>\n    $1');
  fixed = fixed.replace(/([^>]*)<\/>/g, '$1\n  </>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\s+}\s*)(\n\s*export\s+default)/g, '$1;\n$2');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix 404 page specifically
  if (filePath.includes('404/page.tsx')) {
    fixed = `import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="Professional 404 solutions and services" />
        <meta name="keywords" content="404" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">404</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional 404 solutions and services
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

export default NotFoundPage;`;
  }
  
  // Fix 5g-consulting page
  if (filePath.includes('5g-consulting/page.tsx')) {
    fixed = `import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const FiveGConsultingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5G Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Professional 5G consulting services and solutions" />
        <meta name="keywords" content="5G, consulting, services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">5G Consulting Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional 5G consulting services and solutions
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

export default FiveGConsultingPage;`;
  }
  
  return fixed;
}

// Main function to process all files
async function fixAllFiles() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixed = fixCorruptedJSX(content);
      fixed = fixSpecificFile(file, fixed);
      
      // Write the fixed content back
      fs.writeFileSync(file, fixed, 'utf8');
      console.log(`Fixed: ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('All files processed!');
}

// Run the fix
fixAllFiles().catch(console.error);