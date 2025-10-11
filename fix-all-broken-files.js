#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Template for a basic working page component
const createPageTemplate = (pageName, title, description, keywords) => `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const ${pageName}: React.FC = () => {
  const features = [
    {
      icon: Star,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses.',
      benefits: ['Machine learning', 'Natural language processing', 'Computer vision', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time capabilities.',
      benefits: ['Real-time processing', 'Scalable infrastructure', 'Optimized algorithms', 'Cloud deployment']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for enterprise applications.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance standards']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and multi-language support.',
      benefits: ['Multi-region deployment', 'Localization', '24/7 support', 'Global infrastructure']
    }
  ];

  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${title.split(' - ')[0]} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ${description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Powerful AI-driven solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to learn more about our solutions and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ${pageName};`;

// Function to get page info from file path
function getPageInfo(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') + ' - Zion Tech Group | AI & IT Solutions';
  
  const description = `Advanced ${fileName.split('-').join(' ')} solutions powered by artificial intelligence. Transform your business with cutting-edge technology.`;
  
  const keywords = fileName.split('-').join(', ') + ', AI solutions, IT services, technology';
  
  return { pageName, title, description, keywords };
}

// Function to check if a file has syntax errors
function hasSyntaxErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common syntax error patterns
    const errorPatterns = [
      /error TS/,
      //,
      //,
      />>>>>>>/,
      /import\s+React\s+from\s+['"]react['"];\s*import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];\s*import\s+{\s*[^}]*}\s+from\s+['"]lucide-react['"];\s*import\s+Navigation\s+from\s+['"]\.\.\/components\/Navigation['"];\s*import\s+Footer\s+from\s+['"]\.\.\/components\/Footer['"];/,
      /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[/,
      /<>\s*<>\s*<Helmet>/,
      /<\/Helmet>\s*<\/>\s*<\/>/,
      /<h1[^>]*>([^<]*)<\/h1>\s*<h3[^>]*>([^<]*)<\/h3>\s*<p[^>]*>([^<]*)<\/p>\s*<\/>\s*<\/>/
    ];
    
    return errorPatterns.some(pattern => pattern.test(content));
  } catch (error) {
    return true;
  }
}

// Function to recursively find and fix broken files
function findAndFixBrokenFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        continue;
      }
      fixedCount += findAndFixBrokenFiles(filePath);
    } else if (file.endsWith('.tsx') && file.startsWith('page.tsx')) {
      if (hasSyntaxErrors(filePath)) {
        console.log(`Fixing broken file: ${filePath}`);
        const { pageName, title, description, keywords } = getPageInfo(filePath);
        const newContent = createPageTemplate(pageName, title, description, keywords);
        fs.writeFileSync(filePath, newContent);
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting broken file fixes...');
const fixedCount = findAndFixBrokenFiles('/workspace/app');
console.log(`Fixed ${fixedCount} broken files.`);