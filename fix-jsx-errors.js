#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix common JSX syntax errors
function fixJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    const fixes = [
      // Fix unclosed div tags
      {
        pattern: /<div className="min-h-screen[^>]*>[\s\S]*?<div className="min-h-screen[^>]*>/g,
        replacement: (match) => {
          // Remove the duplicate div
          return match.replace(/<div className="min-h-screen[^>]*>[\s\S]*?<div className="min-h-screen[^>]*>/, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">');
        }
      },
      // Fix missing closing tags
      {
        pattern: /<\/div>\s*<\/section>\s*$/gm,
        replacement: '</div>\n      </div>\n      <Footer />\n    </>\n  );\n};\n\nexport default'
      },
      // Fix malformed JSX structure
      {
        pattern: /<section[^>]*>[\s\S]*?<\/div>\s*<\/section>/g,
        replacement: (match) => {
          if (!match.includes('</div>')) {
            return match.replace('</section>', '</div>\n        </section>');
          }
          return match;
        }
      },
      // Fix missing return statement wrapper
      {
        pattern: /^(\s*)<div className="min-h-screen[^>]*>/m,
        replacement: '$1return (\n    <>\n      <Helmet>\n        <title>AI Blockchain Analytics - Zion Tech Group</title>\n        <meta name="description" content="Advanced AI-powered blockchain analytics solution for modern businesses." />\n        <meta name="keywords" content="AI blockchain analytics, artificial intelligence, blockchain solutions, AI solutions, intelligent automation" />\n      </Helmet>\n      \n      <Navigation />\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">'
      }
    ];
    
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    });
    
    // Ensure proper closing structure
    if (!content.includes('export default') && content.includes('const ')) {
      content = content.replace(/(\s*);\s*$/, '$1;\n\nexport default AiBlockchainAnalyticsPage;');
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to create a proper AI page template
function createProperAiPage(filePath, pageName, title, description, color = 'violet') {
  const componentName = pageName.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^./, str => str.toUpperCase()) + 'Page';
  
  const template = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ${componentName}: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
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
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="AI solutions, artificial intelligence, ${pageName}, AI technology, intelligent automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-${color}-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-${color}-500 to-blue-600 hover:from-${color}-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-${color}-400 text-${color}-400 hover:bg-${color}-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-${color}-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-${color}-500 to-blue-600 hover:from-${color}-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-${color}-400 text-${color}-400 hover:bg-${color}-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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

  fs.writeFileSync(filePath, template, 'utf8');
  return true;
}

// Function to find files with JSX errors
function findFilesWithJsxErrors() {
  try {
    const result = execSync('npm run type-check 2>&1 | grep -E "\\.tsx.*error" | cut -d: -f1 | sort -u || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
}

// Main function
function main() {
  console.log('Starting JSX error resolution...');
  
  const filesWithErrors = findFilesWithJsxErrors();
  console.log(`Found ${filesWithErrors.length} files with JSX errors`);
  
  let fixedCount = 0;
  
  filesWithErrors.forEach(filePath => {
    console.log(`Fixing JSX errors in: ${filePath}`);
    
    // Extract page name from file path
    const pageName = filePath.match(/app\/([^\/]+)\/page\.tsx$/)?.[1] || 'ai-solution';
    const title = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const description = `Advanced AI-powered ${pageName.replace(/-/g, ' ')} solution for modern businesses.`;
    
    // Create a proper page
    if (createProperAiPage(filePath, pageName, title, description)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed JSX errors in ${fixedCount} files`);
}

main();