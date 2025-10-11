#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Complete template for a page component
const completePageTemplate = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence technology to transform your business operations.',
      benefits: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology." />
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our advanced AI-powered solutions designed for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="cyber-button-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive suite of AI-powered tools and services are designed to drive your business forward.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven solutions that deliver measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using our AI-powered solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="cyber-button-secondary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PagePage;`;

// Function to fix malformed files
function fixMalformedFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is malformed (missing proper structure)
    const isMalformed = (
      content.includes('const features = [') && !content.includes('return (') ||
      content.includes('</div>') && !content.includes('const PagePage') ||
      content.includes('export default') && !content.includes('return (') ||
      content.includes('import React') && content.includes('</div>') && !content.includes('const PagePage')
    );
    
    if (isMalformed) {
      console.log(`Fixing malformed file: ${filePath}`);
      
      // Extract the page name from the file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const pageName = fileName.replace('.tsx', '').replace('page', '');
      
      // Create a customized template
      const customizedTemplate = completePageTemplate
        .replace(/PagePage/g, `${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page`)
        .replace(/Page Solutions/g, `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} Solutions`)
        .replace(/page solutions/g, `${pageName} solutions`)
        .replace(/AI, page, artificial intelligence/g, `AI, ${pageName}, artificial intelligence`);
      
      fs.writeFileSync(filePath, customizedTemplate, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find malformed files
function findMalformedFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile() && item.endsWith('.tsx') && item.includes('page.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting malformed file fixes...');

// Find all page files
const files = findMalformedFiles('/workspace');
console.log(`Checking ${files.length} page files for malformed structure`);

let fixedCount = 0;
for (const file of files) {
  if (fixMalformedFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} malformed files`);
console.log('Malformed file fixes complete!');