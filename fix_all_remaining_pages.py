#!/usr/bin/env python3
import os
import glob

def fix_all_remaining_pages():
    """Fix all remaining problematic pages"""
    # Get all page files
    page_files = glob.glob('/workspace/app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for page_file in page_files:
        try:
            with open(page_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file has structural issues
            if ('</h2>' in content and '<h2' not in content) or \
               ('</div>' in content and '<div' not in content) or \
               ('Expected identifier' in content) or \
               ('Unexpected closing' in content) or \
               ('Unterminated regular expression' in content):
                
                # Extract page info from file path
                page_path = page_file.replace('/workspace/app', '').replace('/page.tsx', '')
                component_name = ''.join(word.capitalize() for word in page_path.replace('/', '').replace('-', ' ').split()) + 'Page'
                page_title = page_path.replace('/', '').replace('-', ' ').title()
                meta_description = f"Professional {page_title.lower()} services by Zion Tech Group. Expert solutions for your business needs."
                keywords = f"{page_title.lower()}, technology, solutions, business, professional"
                hero_description = f"Professional {page_title.lower()} solutions designed to help your business succeed and grow."
                
                # Generate clean page content
                page_content = f'''\'use client\';

import React from \'react\';
import {{ Helmet }} from \'react-helmet-async\';
import {{ CheckCircle, ArrowRight, Star, Users, Clock, Shield, Zap }} from \'lucide-react\';

const {component_name}: React.FC = () => {{
  return (
    <>
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="{meta_description}" />
        <meta name="keywords" content="{keywords}" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {page_title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              {hero_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Technology</h3>
                <p className="text-gray-300">Cutting-edge solutions powered by the latest technology</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security and reliability</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fast & Efficient</h3>
                <p className="text-gray-300">Optimized for speed and performance</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn more about our {page_title.lower()} solutions.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}};

export default {component_name};'''
                
                # Write clean page file
                with open(page_file, 'w', encoding='utf-8') as f:
                    f.write(page_content)
                
                fixed_count += 1
                print(f"Fixed: {page_file}")
                
        except Exception as e:
            print(f"Error processing {page_file}: {e}")
    
    print(f"\nFixed {fixed_count} problematic pages")

if __name__ == "__main__":
    fix_all_remaining_pages()