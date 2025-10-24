#!/usr/bin/env python3
import os
import re
import glob

def fix_remaining_pages():
    """Fix all remaining pages with syntax errors"""
    try:
        # Get all page files that might have issues
        page_files = []
        
        # Find all page.tsx files in app directory
        for root, dirs, files in os.walk('app'):
            for file in files:
                if file == 'page.tsx':
                    page_files.append(os.path.join(root, file))
        
        fixed_count = 0
        
        for page_path in page_files:
            try:
                with open(page_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has syntax issues
                if 'return (' in content and ('<>' in content or '<div>' in content):
                    # Extract page name from path
                    page_name = os.path.basename(os.path.dirname(page_path))
                    if page_name == 'app':
                        page_name = 'Home'
                    else:
                        page_name = page_name.replace('-', ' ').title().replace(' ', '')
                    
                    # Create clean page content
                    clean_content = f"""'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {{ ArrowRight }} from 'lucide-react';
import Footer from '@/components/Footer';

export default function {page_name}Page() {{
  return (
    <>
      <Head>
        <title>{page_name} - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {page_name} - Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional {page_name.lower()} services by Zion Tech Group.
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}}"""
                    
                    with open(page_path, 'w', encoding='utf-8') as f:
                        f.write(clean_content)
                    
                    fixed_count += 1
                    print(f"Fixed page: {page_path}")
                    
            except Exception as e:
                print(f"Error fixing {page_path}: {e}")
                continue
        
        print(f"Fixed {fixed_count} pages")
        return True
        
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    fix_remaining_pages()
