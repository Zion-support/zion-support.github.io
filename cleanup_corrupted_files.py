#!/usr/bin/env python3
import os
import re
import glob

def is_corrupted_file(file_path):
    """Check if a file is corrupted"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common corruption patterns
        corruption_patterns = [
            r'^[a-z-]+$',  # Lines with only lowercase letters and hyphens
            r'^cursor/',   # Lines starting with cursor/
            r'^website-audit',  # Lines starting with website-audit
            r'^fix-errors',     # Lines starting with fix-errors
            r'^\s*[a-z-]+\s*$',  # Lines with only lowercase words
        ]
        
        lines = content.split('\n')
        for line in lines[:10]:  # Check first 10 lines
            for pattern in corruption_patterns:
                if re.match(pattern, line.strip()):
                    return True
        
        return False
    except:
        return True

def create_clean_placeholder(file_path):
    """Create a clean placeholder file"""
    try:
        # Extract the service name from the path
        path_parts = file_path.split('/')
        service_name = path_parts[-2] if path_parts[-1] == 'page.tsx' else path_parts[-1].replace('.tsx', '')
        
        # Convert to PascalCase
        service_name_pascal = ''.join(word.capitalize() for word in service_name.replace('-', ' ').split())
        
        clean_content = f'''import React from 'react'
import {{ Helmet }} from 'react-helmet-async'
import {{ Link }} from 'react-router-dom'
import {{ ArrowRight }} from 'lucide-react'

export default function {service_name_pascal}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>{service_name.replace('-', ' ').title()} - Zion Tech Group</title>
        <meta name="description" content="Professional {service_name.replace('-', ' ')} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">{service_name.replace('-', ' ').title()}</h1>
        <p className="text-lg text-gray-300 mb-8">Professional {service_name.replace('-', ' ')} services coming soon.</p>
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
            f.write(clean_content)
        
        print(f"Created clean placeholder: {file_path}")
        return True
    except Exception as e:
        print(f"Error creating placeholder for {file_path}: {e}")
        return False

def main():
    # Find all page files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if is_corrupted_file(file_path):
            if create_clean_placeholder(file_path):
                fixed_count += 1
    
    print(f"Fixed {fixed_count} corrupted files")

if __name__ == "__main__":
    main()