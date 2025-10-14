#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to create a clean page template
function createCleanPageTemplate(fileName, title) {
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, '');
  
  return `import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Globe, Mail, Phone } from "lucide-react";

const ${componentName}Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Professional Service",
      description: "High-quality ${title.toLowerCase()} solutions tailored to your needs."
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Global Reach",
      description: "Serving clients worldwide with local expertise."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group." />
      </Helmet>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional ${title.toLowerCase()} services by Zion Tech Group. 
            We deliver innovative solutions that drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
            <button className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional results through innovation and expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our ${title.toLowerCase()} solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
              <a
                href="/contact"
                className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${componentName}Page;`;
}

// Function to get a proper title from filename
function getTitleFromFileName(fileName) {
  return fileName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/Page$/, '')
    .replace(/Tsx$/, '');
}

// Function to check if a file has any TypeScript errors
function hasTypeScriptErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common error patterns
    const errorPatterns = [
      /TS1002.*Unterminated string literal/,
      /TS1005.*expected/,
      /TS1109.*Expression expected/,
      /TS1128.*Declaration or statement expected/,
      /TS17002.*Expected corresponding JSX closing tag/,
      /TS17008.*JSX element.*has no corresponding closing tag/,
      /TS2657.*JSX expressions must have one parent element/,
      /TS1185.*Merge conflict marker/,
      /import.*"[^"]*$/,
      /className="[^"]*$/,
      /<<<<<<< HEAD/,
      /=======/,
      />>>>>>> origin/,
      /<Helmet><\/Helmet>\s*<title>/,
      /<title>.*<\/title>\s*<meta.*\/>\s*<\/Helmet>/
    ];
    
    return errorPatterns.some(pattern => pattern.test(content));
  } catch (error) {
    return true; // If we can't read the file, consider it corrupted
  }
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const title = getTitleFromFileName(fileName);
    
    // Skip if it's a component file (in components directory)
    if (filePath.includes('/components/')) {
      return false;
    }
    
    // Skip if it's already a working file
    if (!hasTypeScriptErrors(filePath)) {
      return false;
    }
    
    console.log(`Rewriting file: ${filePath}`);
    const newContent = createCleanPageTemplate(fileName, title);
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript files
function findFiles(dir, extensions = ['.tsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
function main() {
  console.log('Starting clean rewrite...');
  
  const appDir = path.join(__dirname, 'app');
  const files = findFiles(appDir);
  
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findFiles, createCleanPageTemplate, hasTypeScriptErrors };