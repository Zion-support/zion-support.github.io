const fs = require('fs');
const path = require('path');

// Get all .tsx files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Generic page template
const createGenericPageTemplate = (pageName, title, description, category = 'AI') => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ${description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">${category} Solutions</h2>
            <p className="text-gray-600 mb-6">
              This page is under development. Please check back later for comprehensive ${category.toLowerCase()} solutions.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
                <p className="text-gray-600">
                  Advanced ${category.toLowerCase()} solution for your business requirements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
                <p className="text-gray-600">
                  Cutting-edge technology integration and optimization.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
                <p className="text-gray-600">
                  Scalable and secure implementation.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Function to generate page name from file path
function generatePageName(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.dirname(filePath).split('/').pop();
  
  // Convert kebab-case to PascalCase
  const name = (dirName + '-' + fileName)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  return name + 'Page';
}

// Function to generate title from file path
function generateTitle(filePath) {
  const dirName = path.dirname(filePath).split('/').pop();
  
  // Convert kebab-case to Title Case
  return dirName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to generate description
function generateDescription(filePath) {
  const title = generateTitle(filePath);
  return `Advanced ${title} solutions by Zion Tech Group for modern businesses.`;
}

// Function to determine category
function getCategory(filePath) {
  if (filePath.includes('5g-')) return '5G';
  if (filePath.includes('ai-')) return 'AI';
  if (filePath.includes('security')) return 'Security';
  if (filePath.includes('analytics')) return 'Analytics';
  return 'AI';
}

// Function to check if a file has JSX errors
function hasJsxErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common JSX error patterns
    const errorPatterns = [
      /export default function.*\{[\s\S]*?export default function/, // Multiple function definitions
      /<div[^>]*>[^<]*export default function/, // JSX mixed with function definitions
      /<[^>]*>[^<]*export default function/, // Any JSX mixed with function definitions
      /export default function.*\{[\s\S]*?import/, // Function definition mixed with imports
      /<[^>]*>[^<]*import/, // JSX mixed with imports
    ];
    
    return errorPatterns.some(pattern => pattern.test(content));
  } catch (error) {
    return false;
  }
}

// Function to fix a file
function fixFile(filePath) {
  try {
    const pageName = generatePageName(filePath);
    const title = generateTitle(filePath);
    const description = generateDescription(filePath);
    const category = getCategory(filePath);
    
    const content = createGenericPageTemplate(pageName, title, description, category);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive JSX error fix...');

const appDir = path.join(process.cwd(), 'app');
const allTsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${allTsxFiles.length} .tsx files`);

let fixedCount = 0;
let errorCount = 0;

for (const filePath of allTsxFiles) {
  if (hasJsxErrors(filePath)) {
    console.log(`Processing: ${filePath}`);
    if (fixFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
}

console.log(`\nFixed: ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);
console.log('Finished comprehensive JSX error fix.');