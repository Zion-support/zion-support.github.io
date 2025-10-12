#!/usr/bin/env python3
"""
Script to fix 5G pages with broken JSX structure.
"""

import os
import re
from pathlib import Path

<<<<<<< HEAD
def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file"""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove merge conflict markers and keep the second version (after =======)
    content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> .*?\n', r'\1', content, flags=re.DOTALL)
    
    # Clean up any remaining merge conflict markers
    content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n', '', content, flags=re.DOTALL)
    content = re.sub(r'>>>>>>> .*?\n', '', content)
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"Fixed merge conflicts in {file_path}")

def main():
    # Find all 5G pages
    pattern = "app/5g-*/page.tsx"
    files = glob.glob(pattern)
    
    for file_path in files:
        if os.path.exists(file_path):
            fix_merge_conflicts(file_path)
    
    print(f"Processed {len(files)} files")
=======
def fix_5g_page(file_path):
    """Fix a single 5G page file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the page name from the file path
        page_name = file_path.stem.replace('-', ' ').title().replace(' ', '')
        
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
    """Main function to fix all 5G pages."""
    workspace = Path('/workspace')
    
    # Find all 5G pages
    five_g_pages = list(workspace.glob('app/5g-*/page.tsx'))
    
    print(f"Found {len(five_g_pages)} 5G pages to fix")
    
    fixed_count = 0
    for page_path in five_g_pages:
        if fix_5g_page(page_path):
            fixed_count += 1
            print(f"Fixed: {page_path}")
    
    print(f"Successfully fixed {fixed_count} 5G pages")
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

if __name__ == "__main__":
    main()