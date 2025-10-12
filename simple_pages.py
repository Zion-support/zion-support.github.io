#!/usr/bin/env python3
import os
import glob

def create_simple_page(file_path):
    """Create a simple page component"""
    try:
        # Extract page name from path
        page_name = os.path.basename(os.path.dirname(file_path))
        if page_name == 'app':
            page_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
        
        # Convert to title case
        title = page_name.replace('-', ' ').replace('_', ' ').title()
        
        content = f'''import React from 'react'
import {{ Helmet }} from 'react-helmet-async'
import {{ Link }} from 'react-router-dom'
import {{ ArrowRight }} from 'lucide-react'

export default function {page_name.replace('-', '').replace('_', '').title()}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="Professional {title.lower()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
        <p className="text-lg text-gray-300 mb-8">Professional {title.lower()} services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Created simple page: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all page files that might be problematic
    file_patterns = [
        'app/**/page.tsx',
        'app/**/page.ts'
    ]
    
    fixed_count = 0
    
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if create_simple_page(file_path):
                fixed_count += 1
    
    print(f"\nCreated {fixed_count} simple pages")

if __name__ == "__main__":
    main()