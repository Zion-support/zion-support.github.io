#!/usr/bin/env python3
"""
Script to fix corrupted page files by creating proper React components.
"""

import os
import glob
import re

def create_generic_page_component(page_name, title, description):
    """Create a generic page component"""
    return f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name}() {{
  return (
    <>
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="{description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <p className="text-lg text-gray-300 mb-8">{description}</p>
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

def fix_corrupted_page(file_path):
    """Fix a corrupted page file"""
    try:
        # Extract page name from file path
        page_name = os.path.basename(os.path.dirname(file_path))
        page_name = re.sub(r'[^a-zA-Z0-9]', '', page_name)
        page_name = ''.join(word.capitalize() for word in page_name.split('-'))
        
        # Create title and description
        title = page_name.replace('Page', '').replace('Ai', 'AI')
        description = f"Professional {title.lower()} services by Zion Tech Group. Transform your business with our expert solutions."
        
        # Create the component
        component_content = create_generic_page_component(page_name, title, description)
        
        # Write the file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(component_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    print("Fixing corrupted page files...")
    
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if file is corrupted (has syntax errors)
            if (');' in content and 'return' not in content) or \
               ('<title>' in content and 'return' not in content) or \
               ('export default' in content and 'function' not in content) or \
               content.strip() == 'import React from \'react\';\n}':
                
                if fix_corrupted_page(file_path):
                    fixed_count += 1
                    
        except Exception as e:
            print(f"Error checking {file_path}: {e}")
    
    print(f"Fixed {fixed_count} corrupted page files")

if __name__ == "__main__":
    main()