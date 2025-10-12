const fs = require('fs');
const path = require('path');

// List of files that need to be fixed with proper function declarations
const corruptedFiles = [
  'app/api/page.tsx',
  'app/automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/database/page.tsx',
  'app/devops/page.tsx',
  'app/health/page.tsx',
  'app/investors/page.tsx',
  'app/iot/page.tsx',
  'app/news/page.tsx',
  'app/nlp/page.tsx',
  'app/offline/page.tsx',
  'app/productivity/page.tsx',
  'app/search/page.tsx',
  'app/security/page.tsx',
  'app/sla/page.tsx'
];

function createStandardPage(filePath, pageName, title, description) {
  const content = `import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">${title}</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ${title.toLowerCase()} services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}`;

  return content;
}

function fixCorruptedFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1) + 'Page';
    const title = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ');
    const description = `Professional ${title.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions.`;
    
    const content = createStandardPage(filePath, pageName, title, description);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed corrupted file: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all corrupted files
corruptedFiles.forEach(filePath => {
  const fullPath = path.join('./', filePath);
  if (fs.existsSync(fullPath)) {
    fixCorruptedFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Corrupted files fix completed!');