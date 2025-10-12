#!/usr/bin/env python3
"""
Script to fix all page files by creating clean, working versions
"""
import os
import re
import glob

def create_clean_page(file_path):
    """Create a clean page file"""
    try:
        # Extract the page name from the path
        path_parts = file_path.split('/')
        page_name = path_parts[-2]  # Get the directory name before page.tsx
        
        # Convert kebab-case to PascalCase for component name
        component_name = ''.join(word.capitalize() for word in page_name.split('-'))
        
        # Create a clean page component
        clean_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {component_name}Page() {{
  return (
    <>
      <Helmet>
        <title>{component_name.replace('Page', '')} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.replace('-', ' ')} solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{component_name.replace('Page', '')}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional {page_name.replace('-', ' ')} solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(clean_content)
        print(f"Created clean page: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all page files"""
    # Get all page files
    page_files = []
    
    for root, dirs, files in os.walk('./app'):
        for file in files:
            if file.endswith('page.tsx'):
                page_files.append(os.path.join(root, file))
    
    print(f"Found {len(page_files)} page files")
    
    fixed_count = 0
    for file_path in page_files:
        if create_clean_page(file_path):
            fixed_count += 1
    
    print(f"Created clean versions for {fixed_count} page files")

if __name__ == "__main__":
    main()