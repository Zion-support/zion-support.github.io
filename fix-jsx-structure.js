const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues in a file
function fixJsxStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the pattern where there's a nested div structure that's malformed
    if (content.includes('return (\n    <div>\n      <div className="min-h-screen')) {
      // Replace the malformed structure with a proper one
      content = content.replace(
        /return \(\s*<div>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\s*<h1 className="text-4xl font-bold text-white mb-6">\s*([^<]+)\s*<\/h1>\s*<p className="text-xl text-gray-300 mb-8">\s*([^<]+)\s*<\/p>\s*<div className="bg-white\/10 backdrop-blur-sm rounded-lg p-8">\s*<h2 className="text-2xl font-semibold text-white mb-4">Coming Soon<\/h2>\s*<p className="text-gray-300">\s*([^<]+)\s*<\/p>\s*<\/div>\s*<\/div>\s*[\s\S]*?<\/div>\s*\)/g,
        (match, title, description, comingSoonText) => {
          return `return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          ${title.trim()}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          ${description.trim()}
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-300">
            ${comingSoonText.trim()}
          </p>
        </div>
      </div>
    </div>
  )`;
        }
      );
      modified = true;
    }

    // Remove unused Head import
    if (content.includes("import Head from 'next/head';") && !content.includes('<Head')) {
      content = content.replace(/import Head from 'next\/head';\n/g, '');
      modified = true;
    }

    // Remove unused imports
    if (content.includes("import Link from 'next/link';") && !content.includes('<Link')) {
      content = content.replace(/import Link from 'next\/link';\n/g, '');
      modified = true;
    }

    if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('<ArrowRight')) {
      content = content.replace(/import { ArrowRight } from 'lucide-react';\n/g, '');
      modified = true;
    }

    if (content.includes("import Footer from '../components/Footer';") && !content.includes('<Footer')) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer';\n/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed structure: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting JSX structure fixes...');
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixJsxStructure(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${pageFiles.length} total page files.`);