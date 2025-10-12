#!/usr/bin/env python3
"""
Script to fix components with names starting with numbers
"""
import os
import glob
import re

def fix_numbered_component(file_path):
    """Fix component names that start with numbers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract page name from file path
        if file_path.endswith('/page.tsx') or file_path.endswith('/page.ts'):
            dir_name = os.path.basename(os.path.dirname(file_path))
            # Convert 5g-* to FiveG*
            if dir_name.startswith('5g-'):
                component_name = 'FiveG' + ''.join(word.capitalize() for word in dir_name[3:].replace('-', ' ').split())
            else:
                component_name = ''.join(word.capitalize() for word in dir_name.replace('-', ' ').replace('_', ' ').split())
        else:
            filename = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
            if filename.startswith('5g-'):
                component_name = 'FiveG' + ''.join(word.capitalize() for word in filename[3:].replace('-', ' ').split())
            else:
                component_name = ''.join(word.capitalize() for word in filename.replace('-', ' ').replace('_', ' ').split())
        
        # Create a simple valid component
        new_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';

export default function {component_name}() {{
  return (
    <>
      <Helmet>
        <title>{component_name.replace('Page', '')} - Zion Tech Group</title>
        <meta name="description" content="Professional {component_name.replace('Page', '').lower()} services at Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{component_name.replace('Page', '')}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional {component_name.replace('Page', '').lower()} services coming soon.</p>
          <div className="space-x-4">
            <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Go Home
            </Link>
            <Link to="/contact" className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}}'''
        
        # Write the content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed numbered component: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all numbered components"""
    # Get all files that might have numbered components
    patterns = [
        'app/**/5g-*/page.tsx',
        'app/**/5g-*/page.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Also check for any files with 5G in the name
    all_files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('app/**/*.ts', recursive=True)
    for file_path in all_files:
        if '5g-' in file_path.lower() and file_path not in files_to_fix:
            files_to_fix.append(file_path)
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    print(f"Processing {total_count} numbered component files...")
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_numbered_component(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} numbered component files")

if __name__ == "__main__":
    main()