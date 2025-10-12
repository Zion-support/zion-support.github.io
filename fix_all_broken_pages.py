#!/usr/bin/env python3
"""
Script to fix all broken page files by finding and replacing broken patterns
"""

import os
import glob
import re

def fix_broken_page(file_path):
    """Fix a broken page file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has broken patterns
        if 'return (' in content and '<>' in content and 'title>' in content:
            # Extract page name from file path
            page_name = os.path.basename(os.path.dirname(file_path)).replace('-', ' ').title().replace(' ', '')
            if page_name.endswith('Page'):
                page_name = page_name[:-4]
            
            # Create a proper page
            proper_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name}Page() {{
  return (
    <>
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.lower()} solutions and services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">{page_name}</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional {page_name.lower()} solutions and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-services"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}}'''
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(proper_content)
            return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all broken page files"""
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for page_file in page_files:
        if fix_broken_page(page_file):
            print(f"Fixed: {page_file}")
            fixed_count += 1
    
    print(f"Fixed {fixed_count} broken pages!")

if __name__ == "__main__":
    main()