#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all page.tsx files
function getAllPageFiles() {
  try {
    const output = execSync('find /workspace/app -name "page.tsx" -type f', { encoding: 'utf8' });
    return output.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.log('Error finding page files');
    return [];
  }
}

function fixPageFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Skip if already properly formatted
    if (content.includes('<>') && content.includes('</>') && content.includes('export default function')) {
      console.log(`Already fixed: ${filePath}`);
      return;
    }
    
    // Extract the page title from the content
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Page';
    
    // Extract the heading from the content
    const headingMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const heading = headingMatch ? headingMatch[1] : title;
    
    // Extract the description from the content
    const descMatch = content.match(/<p[^>]*>([^<]+)<\/p>/);
    const description = descMatch ? descMatch[1] : 'Professional services coming soon.';
    
    // Clean up the function name
    const functionName = heading.replace(/[^a-zA-Z0-9]/g, '') || 'Page';
    
    // Create the fixed content
    const fixedContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${functionName}() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-6">${heading}</h1>
          <p className="text-lg text-gray-300 mb-8">
            ${description}
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}`;

    fs.writeFileSync(fullPath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files and fix them
const pageFiles = getAllPageFiles();
console.log(`Found ${pageFiles.length} page files`);

pageFiles.forEach(fixPageFile);
console.log('All page files fixed!');