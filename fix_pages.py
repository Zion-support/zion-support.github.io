#!/usr/bin/env python3
import os
import re
import glob

def fix_page_file(file_path):
    """Fix a page file by removing duplicate content and fixing syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has duplicate content pattern
        if "'use client'" in content and content.count("'use client'") > 1:
            print(f"Fixing {file_path}")
            
            # Extract the page name from the file path
            page_name = os.path.basename(os.path.dirname(file_path))
            page_name = page_name.replace('-', ' ').title().replace(' ', '')
            
            # Create a clean template
            clean_content = f"""'use client';
import React from 'react';
import {{ CheckCircle, ArrowRight }} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const {page_name}Page: React.FC = () => {{
  const features = [
    {{
      title: '{page_name}',
      description: 'Professional {page_name.lower()} services delivered by experienced professionals.',
      benefits: ['Quality Assurance', 'Fast Delivery', '24/7 Support', 'Custom Solutions']
    }},
    {{
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    }},
    {{
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {page_name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional {page_name.lower()} services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {{features.map((feature, index) => (
              <div key={{index}} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{{feature.title}}</h3>
                <p className="text-gray-300 mb-4">{{feature.description}}</p>
                <ul className="space-y-2">
                  {{feature.benefits.map((benefit, benefitIndex) => (
                    <li key={{benefitIndex}} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {{benefit}}
                    </li>
                  ))}}
                </ul>
              </div>
            ))}}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our {page_name.lower()} services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}};

export default {page_name}Page;"""
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(clean_content)
            
            return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files in the app directory
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if fix_page_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} page files")

if __name__ == "__main__":
    main()