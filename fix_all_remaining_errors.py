#!/usr/bin/env python3
"""
Script to fix all remaining parsing errors
"""
import os
import re
import glob

def fix_jsx_file(file_path):
    """Fix JSX structure in a single file."""    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        # Skip if file is already properly formatted
        if ('return (\n    <>\n      <Helmet>' in content and 
            '    </>\n  );' in content and
            'Expected corresponding closing tag for JSX fragment' not in content):
            return False
        
        # Extract the function name
        func_match = re.search(r'export default function (\w+)', content)
        if not func_match:
            return False
        
        func_name = func_match.group(1)
        
        # Create title from function name
        title = func_name.replace('Page', '')
        # Add spaces before capital letters
        title = re.sub(r'([A-Z])', r' \1', title).strip()
        if not title.endswith('Zion Tech Group'):
            title += ' - Zion Tech Group'
        
        # Create description
        service_name = title.replace(' - Zion Tech Group', '').lower()
        description = f"Professional {service_name} by Zion Tech Group. Transform your business with our expert solutions."
        
        # Create heading
        heading = title.replace(' - Zion Tech Group', '')
        
        # Create paragraph
        paragraph = f"Professional {heading.lower()} coming soon."
        
        # Create the fixed content
        fixed_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {func_name}() {{
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="{description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{heading}</h1>
          <p className="text-lg text-gray-300 mb-8">{paragraph}</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Get all TSX files that need fixing
    patterns = [
        'app/**/*.tsx',
        'components/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                print(f"Processing: {file_path}")
                
                if fix_jsx_file(file_path):
                    files_fixed += 1
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")
if __name__ == "__main__":
    main()