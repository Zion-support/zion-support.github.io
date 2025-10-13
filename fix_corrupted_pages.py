#!/usr/bin/env python3
"""
Script to fix corrupted page files by creating clean versions.
"""

import os
import glob

def create_clean_page(file_path, page_name):
    """Create a clean page file."""
    
    # Extract the route from the file path
    route = file_path.replace('/workspace/app/', '').replace('/page.tsx', '')
    
    # Generate title and description based on route
    title = route.replace('-', ' ').replace('/', ' ').title()
    if route == '':
        title = "Home"
    elif route == "ai-services":
        title = "AI Services"
    elif route == "micro-saas":
        title = "Micro SAAS"
    elif route == "5g-solutions":
        title = "5G Solutions"
    
    description = f"Discover {title.lower()} solutions and services from Zion Tech Group. Leading provider of AI-powered solutions, IT services, and digital transformation."
    
    content = f'''import React from 'react';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight, CheckCircle, Star, Users, Zap, Shield }} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const {page_name} = () => {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="{title} - Zion Tech Group"
        description="{description}"
        keywords="{title.lower()}, AI solutions, IT services, digital transformation, Zion Tech Group"
      />
      
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive {title.lower()} solutions designed to transform your business and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Our {title}?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge solutions with unmatched expertise and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Leverage the latest technologies and methodologies to stay ahead of the competition.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
            <p className="text-gray-300">
              Enterprise-grade security and reliability to protect your business operations.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Expert Support</h3>
            <p className="text-gray-300">
              Dedicated support team to help you succeed with our solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with our {title.lower()} solutions today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/demo"
              className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}};

export default {page_name};
'''

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Fix all corrupted page files."""
    # Find all page.tsx files
    page_files = glob.glob('/workspace/app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    
    for file_path in page_files:
        try:
            # Read the file to check if it's corrupted
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check for common corruption patterns
            if ('</span>' in content and 'return (' not in content) or \
               ('Expected identifier' in content) or \
               ('<<<<<<< HEAD' in content) or \
               (len(content) < 100):
                
                # Extract page name from path
                page_name = file_path.split('/')[-2].replace('-', '').title()
                if page_name == 'Page':
                    page_name = 'Page'
                
                if create_clean_page(file_path, page_name):
                    print(f"Fixed: {file_path}")
                    fixed_count += 1
                else:
                    print(f"Failed to fix: {file_path}")
        
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed {fixed_count} corrupted page files")

if __name__ == "__main__":
    main()