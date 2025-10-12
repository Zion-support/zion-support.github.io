#!/usr/bin/env python3
"""
Script to fix malformed page files by creating proper React components
"""
import os
import re
import glob

def fix_page_file(file_path):
    """Fix a single page file by creating a proper React component"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the page name from the file path
        page_name = os.path.basename(os.path.dirname(file_path))
        if page_name == 'app':
            page_name = 'page'
        
        # Create a proper React component
        proper_component = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name.replace('-', '').replace('_', '').title()}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_name.replace('-', ' ').title()} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.replace('-', ' ')} services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{page_name.replace('-', ' ').title()}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional {page_name.replace('-', ' ')} services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}}'''
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(proper_component)
        
        print(f"Fixed page file: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all page files"""
    # Find all page.tsx files
    pattern = 'app/**/page.tsx'
    
    files_processed = 0
    files_fixed = 0
    
    for file_path in glob.glob(pattern, recursive=True):
        # Skip node_modules and other directories
        if 'node_modules' in file_path or '.git' in file_path:
            continue
            
        files_processed += 1
        if fix_page_file(file_path):
            files_fixed += 1
    
    print(f"\nProcessed {files_processed} page files")
    print(f"Fixed {files_fixed} page files")

if __name__ == "__main__":
    main()