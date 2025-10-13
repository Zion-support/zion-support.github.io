#!/usr/bin/env python3
import os
import glob
import re

def create_basic_page(file_path, page_name):
    """Create a basic page component"""
    # Convert kebab-case to PascalCase for component name
    component_name = ''.join(word.capitalize() for word in page_name.split('-'))
    
    content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';

const {component_name}Page = () => {{
  return (
    <>
      <Helmet>
        <title>{component_name.title()} - Zion Tech Group</title>
        <meta name="description" content="{component_name.title()} page for Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {component_name.title()}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This is the {component_name.title()} page for Zion Tech Group.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}};

export default {component_name}Page;
'''
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Fix all corrupted page files"""
    # Find all page.tsx files in the app directory
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    # List of pages that need to be fixed
    pages_to_fix = [
        'case-studies',
        'blog', 
        'team',
        'privacy',
        'terms',
        'cookies'
    ]
    
    for page in pages_to_fix:
        page_path = f'app/{page}/page.tsx'
        if os.path.exists(page_path):
            print(f'Fixing {page_path}')
            create_basic_page(page_path, page)
    
    print(f'Fixed {len(pages_to_fix)} page files')

if __name__ == "__main__":
    main()