#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Template for a basic page component
const createBasicPageTemplate = (pageName) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${pageName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>${pageName.replace(/([A-Z])/g, ' $1').trim()} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} services by Zion Tech Group." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ${pageName.replace(/([A-Z])/g, ' $1').trim()}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ${pageName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} services 
            designed to help your business grow and succeed.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide comprehensive ${pageName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} 
                solutions tailored to your specific needs and requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Custom solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Expert consultation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Ongoing support
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>
              <p className="mb-6">
                Ready to transform your business with our ${pageName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} services?
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our ${pageName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} 
            services can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>;
);
};

export default ${pageName};`;

// Function to fix a broken file
function fixBrokenFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is severely broken (has only export default or similar)
    if (content.trim().split('\n').length < 10) {
      console.log(`Fixing severely broken file: ${filePath}`);
      
      // Extract page name from file path
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      
      // Create new content
      const newContent = createBasicPageTemplate(pageName);
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    
    // Check for common syntax errors and try to fix them
    let fixedContent = content;
    let hasChanges = false;
    
    // Fix common JSX issues
    if (fixedContent.includes('      console.log(`Removing merge conflict markers from: ${filePath}`);
      fixedContent = fixedContent
        .replace(/        .replace(/              content.includes('<div') && !content.includes('</div>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read;
}
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting broken file repair...');

const workspaceDir = process.cwd();
const brokenFiles = findBrokenFiles(workspaceDir);

console.log(`Found ${brokenFiles.length} broken files:`);
brokenFiles.forEach(file => console.log(`  - ${file}`));

let fixedCount = 0;
for (const file of brokenFiles) {
  if (fixBrokenFile(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} files.`);

// Run a quick syntax check
console.log('\nRunning syntax check...');
try {
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'pipe' });
  console.log('✅ TypeScript syntax check passed');
} catch (error) {
  console.log('❌ TypeScript syntax check failed - some files may still have issues');
  const errorOutput = error.stdout?.toString() || error.message;
  const errorLines = errorOutput.split('\n').filter(line => line.includes('error TS')).slice(0, 10);
  console.log('First 10 errors:');
  errorLines.forEach(line => console.log(`  ${line}`));
}

console.log('\nBroken file repair complete!');)))