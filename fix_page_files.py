#!/usr/bin/env python3
import os
import re
import glob

def fix_page_file(file_path):
    """Fix common page file issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file needs fixing
        if 'export default function' in content or 'export default' in content:
            return False
        
        # Pattern 1: Missing function declaration
        if content.strip().startswith('import') and '];' in content and '<div className="min-h-screen' in content:
            # Extract the page name from the path
            page_name = os.path.basename(os.path.dirname(file_path)).replace('-', ' ').title()
            
            # Find where the imports end and the content begins
            lines = content.split('\n')
            import_end = 0
            content_start = 0
            
            for i, line in enumerate(lines):
                if line.strip().startswith('import'):
                    import_end = i
                elif line.strip() == '];' and content_start == 0:
                    content_start = i + 1
                    break
            
            if content_start > 0:
                # Reconstruct the file
                imports = '\n'.join(lines[:import_end + 1])
                content_part = '\n'.join(lines[content_start:])
                
                # Create a proper function
                function_name = page_name.replace(' ', '') + 'Page'
                
                new_content = f"""{imports}

export default function {function_name}() {{
  return (
{content_part}
  );
}}"""
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                print(f"Fixed page file: {file_path}")
                return True
        
        # Pattern 2: Completely malformed files
        if content.strip() in ['ursor/website-audit-and-update-with-deployment-a178', '']:
            page_name = os.path.basename(os.path.dirname(file_path)).replace('-', ' ').title()
            function_name = page_name.replace(' ', '') + 'Page'
            
            new_content = f"""import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function {function_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.lower()} services and solutions." />
        <meta name="keywords" content="{page_name.lower()}, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {page_name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Professional {page_name.lower()} services and solutions for your business.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}}"""
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Created new page file: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page files
    patterns = [
        'app/**/page.tsx',
        'app/**/page.ts'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_page_file(file_path):
                files_fixed += 1
    
    print(f"\nFixed {files_fixed} page files")

if __name__ == "__main__":
    main()