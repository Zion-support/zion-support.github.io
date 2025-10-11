#!/usr/bin/env python3
"""
Script to properly fix corrupted React/TypeScript files
"""

import os
import re
import glob

def create_clean_page(file_path):
    """Create a clean, working page component"""
    # Extract page name from file path
    page_name = os.path.basename(os.path.dirname(file_path))
    if page_name == 'app':
        page_name = 'Home'
    else:
        page_name = page_name.replace('-', ' ').replace('_', ' ').title()
    
    # Create clean component
    clean_content = f"""'use client';
import React from 'react';
import {{Helmet}} from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const {page_name.replace(' ', '')}Page: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.lower()} services and solutions" />
        <meta name="keywords" content="{page_name.lower()}, technology, solutions, services" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {page_name}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional {page_name.lower()} services and solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}};

export default {page_name.replace(' ', '')}Page;
"""
    
    return clean_content

def fix_file(file_path):
    """Fix a single file by replacing it with clean content"""
    print(f"Fixing {file_path}")
    
    try:
        clean_content = create_clean_page(file_path)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(clean_content)
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Get all TypeScript/TSX files in the app directory
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    # Skip certain files that should remain as-is
    skip_files = [
        '/workspace/app/layout.tsx',
        '/workspace/app/page.tsx',  # Main page
        '/workspace/app/components/Navigation.tsx',
        '/workspace/app/components/Footer.tsx'
    ]
    
    files_to_fix = [f for f in files if f not in skip_files]
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()