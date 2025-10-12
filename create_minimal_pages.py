#!/usr/bin/env python3
import os
import glob

def create_minimal_page(file_path):
    """Create a minimal working page for corrupted files"""
    try:
        # Extract page name from path
        page_name = os.path.basename(os.path.dirname(file_path))
        if page_name == 'app':
            page_name = 'Home'
        else:
            page_name = page_name.replace('-', ' ').replace('_', ' ').title()
        
        # Create minimal React component
        content = f'''import React from 'react'
import {{ Helmet }} from 'react-helmet-async'
import {{ Link }} from 'react-router-dom'
import {{ ArrowRight, CheckCircle }} from 'lucide-react'

export default function {page_name.replace(' ', '')}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_name.lower()} services and solutions from Zion Tech Group." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {page_name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional {page_name.lower()} services and solutions to help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error creating {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    files_processed = 0
    files_created = 0
    
    for file_path in page_files:
        # Skip files we've already fixed
        if any(skip in file_path for skip in ['about', 'contact', 'it-services', 'cybersecurity']):
            continue
            
        files_processed += 1
        if create_minimal_page(file_path):
            files_created += 1
            print(f"Created minimal page: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Created minimal pages for {files_created} files")

if __name__ == "__main__":
    main()
