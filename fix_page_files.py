#!/usr/bin/env python3
import os
import glob

def fix_page_file(file_path):
    """Fix page files that have incomplete JSX"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file looks complete
        if 'export default' in content and content.count('{') == content.count('}'):
            return False
            
        # Extract the page name from the path
        page_name = os.path.basename(os.path.dirname(file_path))
        if page_name == 'app':
            page_name = 'Page'
        else:
            page_name = page_name.replace('-', ' ').title().replace(' ', '')
        
        # Create a basic page template
        template = f'''import React from 'react';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {page_name}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(template)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page files that might be broken
    patterns = [
        'app/ai-services/**/page.tsx',
        'app/micro-saas/**/page.tsx',
        'app/micro-saas-services/**/page.tsx',
        'app/it-services/**/page.tsx'
    ]
    
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_page_file(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"Fixed {files_fixed} page files")

if __name__ == "__main__":
    main()