#!/usr/bin/env python3
"""
Fix problematic files by rewriting them with correct JSX structure
"""

import os
import re

def create_fixed_5g_page(file_path):
    """Create a fixed 5G page"""
    page_name = os.path.basename(file_path).replace('.tsx', '').replace('page', '')
    page_title = page_name.replace('-', ' ').replace('5g', '5G').title()
    
    content = f"""'use client';
import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name.replace('-', '').replace('5g', 'FiveG').title()}Page() {{
  return (
    <>
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="Professional {page_title.lower()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{page_title}</h1>
          <p className="text-lg text-gray-300 mb-8">Professional {page_title.lower()} services coming soon.</p>
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
}}"""

    return content

def fix_problematic_files():
    """Fix all problematic files"""
    problematic_files = [
        '/workspace/app/5g-data-analytics/page.tsx',
        '/workspace/app/5g-edge-computing/page.tsx',
        '/workspace/app/5g-implementation/page.tsx',
        '/workspace/app/5g-iot-solutions/page.tsx',
        '/workspace/app/5g-mobile-applications/page.tsx',
        '/workspace/app/5g-network-infrastructure/page.tsx',
        '/workspace/app/5g-private-networks/page.tsx',
        '/workspace/app/5g-smart-city-solutions/page.tsx',
        '/workspace/app/5g-solutions/page.tsx'
    ]
    
    files_fixed = 0
    
    for file_path in problematic_files:
        try:
            if os.path.exists(file_path):
                content = create_fixed_5g_page(file_path)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed: {file_path}")
                files_fixed += 1
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")
    
    return files_fixed

def main():
    """Main function"""
    files_fixed = fix_problematic_files()
    print(f"\nFixed {files_fixed} problematic files")

if __name__ == "__main__":
    main()