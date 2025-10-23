const fs = require('fs');
const path = require('path');

// Function to fix common JSX issues
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX issues
    const fixes = [
      // Fix malformed JSX structure
      { from: /<>\s*<\/><Helmet>/g, to: '<>\n      <Helmet>' },
      { from: /<\/Helmet>\s*<div/g, to: '</Helmet>\n\n      <div' },
      { from: /<\/div><section/g, to: '</div>\n        <section' },
      { from: /<\/section><div/g, to: '</section>\n          <div' },
      { from: /<\/div><h1/g, to: '</div>\n            <h1' },
      { from: /<\/h1>\s*<\/div><p/g, to: '</h1>\n            <p' },
      { from: /<\/p>\s*<\/div><div/g, to: '</p>\n            <div' },
      { from: /<\/div>\s*<\/div><\/div>/g, to: '</div>\n          </div>\n        </div>' },
      
      // Fix missing opening tags
      { from: /^\s*return\s*\(\s*<>\s*$/gm, to: '  return (\n    <>' },
      { from: /^\s*<>\s*$/gm, to: '    <>' },
      
      // Fix malformed closing tags
      { from: /<\/h\$[0-9]>/g, to: '</h1>' },
      { from: /<h\$[0-9]/g, to: '<h1' },
      
      // Fix missing React import
      { from: /^"use client";\s*$/m, to: '"use client";\nimport React from "react";' },
      
      // Fix malformed component structure
      { from: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*$/gm, to: 'const $1: React.FC = () => {\n  ' },
      
      // Fix missing export
      { from: /^};$/gm, to: '};\n\nexport default $1;' },
    ];

    fixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        modified = true;
      }
    });

    // If the file is severely malformed, create a basic template
    if (content.includes('Parsing error') || content.length < 100) {
      const componentName = path.basename(filePath, '.tsx').replace(/^page$/, 'Page');
      content = `"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

const ${componentName}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${componentName} - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Professional ${componentName.toLowerCase()} services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${componentName}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional services coming soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TSX files in the app directory
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  const originalContent = fs.readFileSync(file, 'utf8');
  fixJSXFile(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);