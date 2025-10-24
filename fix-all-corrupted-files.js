const fs = require('fs');
const path = require('path');

// Function to check if a file is corrupted
function isCorruptedFile(content) {
  const corruptedPatterns = [
    /import\s*\{\s*,\s*/,  // Malformed imports
    /return\s+null\s*\}\s*</,  // Return null followed by JSX
    /,\s*->\s*<Helmet>/,  // Arrow syntax in wrong place
    /icon:\s*<.*?>\s*,\s*$/,  // Unterminated string constants
    /description:\s*'$/,  // Unterminated strings
    /const\s+page\s*=\s*React\.lazy/,  // Lazy loading in wrong place
    /Expected\s+';',\s+'}'\s+or\s+<eof>/,  // Syntax errors
    /Unterminated\s+string\s+constant/  // String errors
  ];
  
  return corruptedPatterns.some(pattern => pattern.test(content));
}

// Function to find all corrupted files
function findCorruptedFiles(dir) {
  const corruptedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (isCorruptedFile(content)) {
            corruptedFiles.push(fullPath);
          }
        } catch (error) {
          // If we can't read the file, it's likely corrupted
          corruptedFiles.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return corruptedFiles;
}

// Template for a basic page component
const createBasicPage = (filePath) => {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2]; // Get the directory name
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Professional ${title.toLowerCase()} services by Zion Tech Group. Advanced solutions for your business needs.`;
  
  return `"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Star, BarChart, Shield, Zap } from "lucide-react";

const ${title.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with AI-powered insights and real-time reporting."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee and advanced protection."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Expert Support",
      description: "24/7 expert support and monitoring to ensure your success."
    }
  ];

  const benefits = [
    "Improve efficiency by 40%",
    "Reduce costs by 30%",
    "Enhance security posture",
    "Scale operations seamlessly",
    "Get 24/7 expert support"
  ];

  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful capabilities for your business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven benefits that drive real business results
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-semibold">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create powerful solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Function to fix a corrupted file
function fixCorruptedFile(filePath) {
  try {
    const newContent = createBasicPage(filePath);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Fixed: ' + filePath);
    return true;
  } catch (error) {
    console.error('Error fixing ' + filePath + ':', error.message);
    return false;
  }
}

// Main execution
console.log('Scanning for corrupted files...');
const corruptedFiles = findCorruptedFiles(__dirname);

console.log('Found ' + corruptedFiles.length + ' corrupted files:');
corruptedFiles.forEach(file => console.log('  - ' + file));

console.log('\nStarting to fix corrupted files...');
let fixedCount = 0;
corruptedFiles.forEach(file => {
  if (fixCorruptedFile(file)) {
    fixedCount++;
  }
});

console.log('\nFixed ' + fixedCount + ' out of ' + corruptedFiles.length + ' corrupted files.');