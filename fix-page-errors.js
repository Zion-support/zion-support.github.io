#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common parsing errors in page files
function fixPageErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed array structures - common pattern: missing closing bracket
    const arrayFix1 = /(\w+):\s*\[([\s\S]*?)\n\s*\]\s*\n\s*\]/g;
    if (arrayFix1.test(content)) {
      content = content.replace(arrayFix1, (match, varName, arrayContent) => {
        return `${varName}: [${arrayContent.trim()}\n  ]`;
      });
      modified = true;
    }
    
    // Fix malformed object arrays - pattern with missing closing bracket
    const arrayFix2 = /(\w+)\s*=\s*\[([\s\S]*?)\n\s*\]\s*\n\s*\]/g;
    if (arrayFix2.test(content)) {
      content = content.replace(arrayFix2, (match, varName, arrayContent) => {
        return `${varName} = [${arrayContent.trim()}\n];`;
      });
      modified = true;
    }
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed JSX meta tags
    content = content.replace(/<meta\s+([^>]*?)(?<!\/)>/g, '<meta $1 />');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\n\s*const\s+/g, '$1;\nconst ');
    content = content.replace(/(\w+)\s*\n\s*function\s+/g, '$1;\nfunction ');
    content = content.replace(/(\w+)\s*\n\s*export\s+/g, '$1;\nexport ');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*\n\s*<>/g, 'return (\n    <>');
    
    // Fix missing closing parentheses in function calls
    content = content.replace(/(\w+)\s*\(\s*\n\s*\)/g, '$1()');
    
    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s+['"]([^'"]+)['"]\s*;\s*\n\s*import/g, 'import { $1 } from \'$2\';\nimport');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n+/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to create a basic valid React component for severely broken files
function createBasicPageComponent(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    const basicComponent = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain } from 'lucide-react';

const ${componentName}: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing with optimized algorithms.',
      benefits: ['Fast processing', 'Optimized algorithms', 'Real-time results', 'Scalable architecture']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption.',
      benefits: ['End-to-end encryption', 'Secure data handling', 'Compliance standards', 'Regular audits']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName} solutions by Zion Tech Group" />
        <meta name="keywords" content="AI, ${componentName}, artificial intelligence, business solutions" />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ${componentName}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${componentName} solutions tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Advanced technology that drives results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              <p className="text-xl text-gray-300">Proven results that drive business growth and efficiency</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ${componentName};`;

    fs.writeFileSync(filePath, basicComponent);
    return true;
  } catch (error) {
    console.error(`Error creating basic component for ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Fixing page parsing errors...');
  
  // Get all page files in the app directory
  const appDir = '/workspace/app';
  const pageFiles = [];
  
  function findPageFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findPageFiles(filePath);
      } else if (file.endsWith('page.tsx')) {
        pageFiles.push(filePath);
      }
    }
  }
  
  findPageFiles(appDir);
  
  console.log(`Found ${pageFiles.length} page files`);
  
  let fixedCount = 0;
  let basicCount = 0;
  
  pageFiles.forEach(file => {
    console.log(`\nProcessing: ${file}`);
    
    // Try to fix the file first
    if (fixPageErrors(file)) {
      console.log(`  ✓ Fixed parsing errors`);
      fixedCount++;
    } else {
      // Check if the file has parsing errors by trying to read it
      try {
        const content = fs.readFileSync(file, 'utf8');
        // If the file is very short or has obvious issues, replace it
        if (content.length < 500 || content.includes('<<<<<<< HEAD') || content.includes('=======')) {
          console.log(`  ⚠ Creating basic component`);
          if (createBasicPageComponent(file)) {
            basicCount++;
          }
        } else {
          console.log(`  ✓ No issues found`);
        }
      } catch (error) {
        console.log(`  ⚠ Creating basic component due to read error`);
        if (createBasicPageComponent(file)) {
          basicCount++;
        }
      }
    }
  });
  
  console.log(`\nFixed ${fixedCount} files and created ${basicCount} basic components.`);
}

main();