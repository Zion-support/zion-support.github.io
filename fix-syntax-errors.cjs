const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common patterns
    const fixes = [
      // Fix malformed className attributes
      { from: /className="w-5h-5ml-2"/g, to: 'className="w-5 h-5 ml-2"' },
      { from: /className="w-5h-5ml-2"/g, to: 'className="w-5 h-5 ml-2"' },
      
      // Fix malformed JSX elements
      { from: /<h1 className="w-5h-5ml-2" \/>\s*<span className="w-5h-5ml-2" \/>([^<]+)<\/span>\s*<\/h1>/g, to: '<h1 className="text-4xl font-bold text-white mb-4">$1</h1>' },
      { from: /<p className="w-5h-5ml-2">([^<]+)<\/p>/g, to: '<p className="text-gray-300 mb-4">$1</p>' },
      { from: /<h2 className="text-2 xl font-bold text-white mb-4"\s*>\s*Coming Soon<\/h2>/g, to: '<h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>' },
      { from: /<button className="w-5h-5ml-2">([^<]+)<\/button>/g, to: '<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">$1</button>' },
      
      // Fix malformed div structures
      { from: /<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/g, to: '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">' },
      
      // Fix missing imports
      { from: /import React from 'react';\s*'use client';/g, to: "'use client';\nimport React from 'react';" },
      
      // Fix malformed JSX fragments
      { from: /<>\s*<Helmet>/g, to: '<>\n      <Helmet>' },
      
      // Fix missing closing tags
      { from: /<\/div>\s*<\/>\s*\);\s*};/g, to: '        </div>\n      </div>\n    </>\n  );\n};' }
    ];

    fixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        modified = true;
      }
    });

    // Fix specific patterns for page components
    if (content.includes('Coming Soon') && content.includes('w-5h-5ml-2')) {
      // Extract the service name from the title
      const titleMatch = content.match(/<title>([^-]+) - Zion Tech Group<\/title>/);
      const serviceName = titleMatch ? titleMatch[1].trim() : 'Service';
      
      // Create a proper page structure
      const properPage = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ${serviceName.replace(/\s+/g, '')}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>${serviceName} - Zion Tech Group</title>
        <meta name="description" content="${serviceName} services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="${serviceName.toLowerCase().replace(/\s+/g, '-')}, AI solutions, IT services" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ${serviceName}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ${serviceName.toLowerCase()} services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ${serviceName.toLowerCase()} solutions. 
              Contact us to learn more about our services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${serviceName.replace(/\s+/g, '')}Page;`;

      content = properPage;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TSX files with syntax errors
function findAndFixTsxFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixTsxFiles(filePath);
    } else if (file.endsWith('.tsx') && !file.includes('node_modules')) {
      if (fixTsxFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Run the fix
console.log('Starting to fix TSX syntax errors...');
const fixedCount = findAndFixTsxFiles('./app');
console.log(`Fixed ${fixedCount} files.`);