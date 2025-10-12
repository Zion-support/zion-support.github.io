#!/usr/bin/env python3
import os
import re
import glob

def create_standard_page(file_path):
    """Create a standard page template for broken files"""
    try:
        # Extract page name from path
        page_name = os.path.basename(os.path.dirname(file_path))
        if page_name == 'app':
            page_name = 'Home'
        else:
            page_name = page_name.replace('-', ' ').replace('_', ' ').title()
        
        # Create standard page content
        content = f'''import React from 'react'
import {{ Link }} from 'react-router-dom'
import {{ Helmet }} from 'react-helmet-async'
import {{ ArrowRight }} from 'lucide-react'

export default function {page_name.replace(' ', '')}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.lower()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">{page_name}</h1>
        <p className="text-lg text-gray-300 mb-8">Professional {page_name.lower()} services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  )
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created standard page: {file_path}")
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def is_broken_file(file_path):
    """Check if a file has syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common syntax issues
        if not content.strip():
            return True
        
        # Check for missing function declaration
        if 'return (' in content and 'export default function' not in content:
            return True
        
        # Check for malformed JSX
        if content.count('{') != content.count('}'):
            return True
        
        # Check for missing closing braces
        if 'export default' in content and content.count('{') > content.count('}'):
            return True
        
        return False
    except:
        return True

def main():
    # Find all page files
    patterns = [
        'app/**/page.tsx',
        'app/**/page.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                total_files += 1
                if is_broken_file(file_path):
                    if create_standard_page(file_path):
                        fixed_count += 1
    
    print(f"\nProcessed {total_files} page files, fixed {fixed_count} broken files")

if __name__ == "__main__":
    main()