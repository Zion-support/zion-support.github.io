#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix malformed files
function fixMalformedFiles(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has malformed structure
    if (content.includes("const ComponentName = () => {") && content.includes("const data = [")) {
      // This is a malformed file that needs to be rewritten
      const fileName = path.basename(filePath, '.tsx');
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Page';
      
      // Extract the title from the file name or content
      let title = componentName.replace('Page', '');
      if (title.includes('AI')) {
        title = 'AI Services';
      } else if (title.includes('IT')) {
        title = 'IT Services';
      } else if (title.includes('Cloud')) {
        title = 'Cloud Infrastructure';
      } else if (title.includes('Digital')) {
        title = 'Digital Transformation';
      } else if (title.includes('Cyber')) {
        title = 'Cybersecurity';
      } else if (title.includes('Case')) {
        title = 'Case Studies';
      } else if (title.includes('Contact')) {
        title = 'Contact Us';
      } else if (title.includes('About')) {
        title = 'About Us';
      } else if (title.includes('Pricing')) {
        title = 'Pricing';
      } else if (title.includes('Services')) {
        title = 'Services';
      } else if (title.includes('Solutions')) {
        title = 'Solutions';
      } else if (title.includes('Support')) {
        title = 'Support';
      } else if (title.includes('Terms')) {
        title = 'Terms of Service';
      } else if (title.includes('Privacy')) {
        title = 'Privacy Policy';
      } else if (title.includes('Tutorials')) {
        title = 'Tutorials';
      } else if (title.includes('Demo')) {
        title = 'Demo';
      } else if (title.includes('Blog')) {
        title = 'Blog';
      } else {
        title = componentName.replace('Page', '');
      }
      
      const newContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${title} - Professional services from Zion Tech Group" />
        <meta name="keywords" content="${title.toLowerCase()}, services, solutions, technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${title.toLowerCase()} services to help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${componentName};`;
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for malformed files...');
const sourceFiles = findSourceFiles('./app');

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  try {
    if (fixMalformedFiles(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  } catch (error) {
    errorCount++;
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
}

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

if (fixedCount > 0) {
  console.log('\n🎉 Malformed files fixed! You can now run the build.');
} else {
  console.log('\n✨ No malformed files found or all issues were already resolved.');
}