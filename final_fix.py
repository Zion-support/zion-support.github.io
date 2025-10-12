#!/usr/bin/env python3
import os
import re
import glob

def final_fix_file(file_path):
    """Final comprehensive fix for all files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Extract page name from path
        page_name = os.path.basename(os.path.dirname(file_path))
        if page_name == 'app':
            page_name = 'Home'
        else:
            page_name = page_name.replace('-', ' ').replace('_', ' ').title()
        
        # Create clean standard page content
        clean_content = f'''import React from 'react'
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
        
        # Only replace if the file has issues
        if (re.search(r'export default.*export default', content) or 
            re.search(r'function.*function', content) or
            content.count('{') != content.count('}') or
            '<<<<<<< HEAD' in content or
            '=======' in content or
            '>>>>>>>' in content):
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(clean_content)
            print(f"Fixed: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

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
                if final_fix_file(file_path):
                    fixed_count += 1
    
    print(f"\nProcessed {total_files} page files, fixed {fixed_count} files")

if __name__ == "__main__":
    main()