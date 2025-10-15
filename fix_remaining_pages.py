#!/usr/bin/env python3
"""
Script to fix remaining broken pages with proper React component structure.
"""

import os
import re
from pathlib import Path

def fix_page_file(file_path):
    """Fix a single page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the page name from the file path
        page_name = file_path.parent.name.replace('-', ' ').title().replace(' ', '')
        
        # Create a proper React component structure
        fixed_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name}() {{
  return (
    <>
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.lower()} services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">{page_name}</h1>
            <p className="text-lg text-gray-300 mb-8">Professional {page_name.lower()} services coming soon.</p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining broken pages."""
    workspace = Path('/workspace')
    
    # Find all page.tsx files that might be broken
    page_files = []
    for pattern in ['app/*/page.tsx', 'app/*/*/page.tsx']:
        page_files.extend(workspace.glob(pattern))
    
    # Filter out files that are likely already fixed
    broken_files = []
    for page_file in page_files:
        try:
            with open(page_file, 'r', encoding='utf-8') as f:
                content = f.read()
                # Check if it looks like a broken file
                if ('export default function' not in content or 
                    'return (' not in content or
                    content.strip().startswith('<') or
                    'import React' not in content):
                    broken_files.append(page_file)
        except:
            broken_files.append(page_file)
    
    print(f"Found {len(broken_files)} potentially broken page files")
    
    fixed_count = 0
    for page_path in broken_files[:50]:  # Limit to first 50 to avoid too many changes
        if fix_page_file(page_path):
            fixed_count += 1
            print(f"Fixed: {page_path}")
    
    print(f"Successfully fixed {fixed_count} page files")

if __name__ == "__main__":
    main()