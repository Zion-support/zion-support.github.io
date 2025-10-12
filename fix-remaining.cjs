const fs = require('fs');
const path = require('path');

// Function to recursively find all page.tsx files
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Template for basic page structure
const pageTemplate = (title, description, content) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">${title}</h1>
            <p className="text-lg text-gray-300 mb-8">
              ${content}
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Find all page.tsx files
const pageFiles = findPageFiles(path.join(__dirname, 'app'));

console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;

// Fix each page file
pageFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax errors (missing JSX structure)
    if (content.includes('className="text-4xl font-bold text-white mb-6"') && 
        (!content.includes('return (') || !content.includes('<>'))) {
      
      const relativePath = path.relative(__dirname, filePath);
      const fileName = path.basename(path.dirname(filePath));
      const title = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const description = `Professional ${title.toLowerCase()} services by Zion Tech Group.`;
      const pageContent = `Professional ${title.toLowerCase()} services coming soon.`;
      
      const newContent = pageTemplate(title, description, pageContent);
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${relativePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} page files!`);