#!/usr/bin/env python3
import os
import glob

def create_clean_page(file_path):
    """Create a clean, minimal version of a page"""
    page_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
    page_title = page_name.replace('-', ' ').replace('_', ' ').title()
    
    # Create a basic React page template
    clean_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const {page_name}: React.FC = () => {{
  return (
    <>
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="{page_title} services and solutions from Zion Tech Group." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {page_title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              This page is being rebuilt with enhanced functionality.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 mb-6">
                We are working on bringing you the best {page_title.lower()} solutions. 
                Please check back soon for updates.
              </p>
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}};

export default {page_name};
'''
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(clean_content)
        return True
    except Exception as e:
        print(f"Error creating clean page {file_path}: {e}")
        return False

def main():
    # Find all page files
    patterns = [
        'app/*/page.tsx',
        'app/*/page.ts'
    ]
    
    files_processed = 0
    files_recreated = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern):
            print(f"Recreating: {file_path}")
            files_processed += 1
            
            if create_clean_page(file_path):
                files_recreated += 1
                print(f"  ✓ Recreated: {file_path}")
            else:
                print(f"  ✗ Failed: {file_path}")
    
    print(f"\\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files recreated: {files_recreated}")

if __name__ == "__main__":
    main()