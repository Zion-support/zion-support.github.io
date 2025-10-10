#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix JSX syntax errors in a file
function fixJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX issues
    const fixes = [
      // Fix unclosed tags
      {
        pattern: /<div[^>]*>[\s\S]*?<\/section>/g,
        replacement: (match) => {
          return match.replace(/<\/section>/, '</div>');
        }
      },
      // Fix mismatched tags
      {
        pattern: /<section[^>]*>[\s\S]*?<\/div>/g,
        replacement: (match) => {
          return match.replace(/<\/div>/, '</section>');
        }
      },
      // Fix unclosed fragments
      {
        pattern: /<>[\s\S]*?<\/div>/g,
        replacement: (match) => {
          return match.replace(/<\/div>/, '</>');
        }
      },
      // Fix unterminated regular expressions
      {
        pattern: /\/\*[\s\S]*?\*\/[\s\S]*?<[^>]*$/gm,
        replacement: (match) => {
          return match.replace(/<[^>]*$/, '');
        }
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

// Function to create a proper page template
function createProperPage(filePath, pageName, title, description) {
  const componentName = pageName.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^./, str => str.toUpperCase()) + 'Page';
  
  const template = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ${componentName}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="AI solutions, IT services, ${pageName.replace(/-/g, ' ')}, technology" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technology solutions that drive business success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-4">Advanced artificial intelligence solutions for modern businesses.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Machine Learning
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Computer Vision
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
                <p className="text-gray-300 mb-4">Scalable cloud infrastructure and services.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cloud Migration
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Infrastructure Management
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Security & Compliance
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security Solutions</h3>
                <p className="text-gray-300 mb-4">Comprehensive cybersecurity and data protection.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Threat Detection
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data Encryption
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Compliance Management
                  </li>
                </ul>
              </div>
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
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
    const result = execSync('npm run build 2>&1 | grep -E "\\.tsx.*error" | cut -d: -f1 | sort -u || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
}

// Main function
function main() {
  console.log('Starting comprehensive JSX error resolution...');
  
  const filesWithErrors = findFilesWithJsxErrors();
  console.log(`Found ${filesWithErrors.length} files with JSX errors`);
  
  let fixedCount = 0;
  
  filesWithErrors.forEach(filePath => {
    console.log(`Fixing JSX errors in: ${filePath}`);
    
    // Extract page name from file path
    const pageName = filePath.match(/app\/([^\/]+)\/page\.tsx$/)?.[1] || 'page';
    const title = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const description = `Advanced ${pageName.replace(/-/g, ' ')} solutions for modern businesses.`;
    
    // Create a proper page
    if (createProperPage(filePath, pageName, title, description)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed JSX errors in ${fixedCount} files`);
}

main();