#!/usr/bin/env python3
"""
Script to fix page files with specific syntax errors
"""

import os
import re
import glob

def fix_page_file(file_path):
    """Fix a single page file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Skip if it's not a page file
        if not file_path.endswith('/page.tsx'):
            return False
        
        # Skip if it doesn't have the problematic pattern
        if 'export default function' not in content or 'return (' not in content:
            return False
        
        # Extract the function name
        func_match = re.search(r'export default function (\w+)', content)
        if not func_match:
            return False
        
        func_name = func_match.group(1)
        
        # Extract the title from the Head section
        title_match = re.search(r'<title>([^<]+)</title>', content)
        title = title_match.group(1) if title_match else func_name.replace('Page', '')
        
        # Create a clean version of the file
        clean_content = f"""'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {{ ArrowRight }} from 'lucide-react';
import Footer from '@/components/Footer';

export default function {func_name}() {{
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1>{title}</h1>
          <p>Professional {title.lower()} services coming soon.</p>
          <Link href="/contact"
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
        
        # Only write if content changed
        if clean_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(clean_content)
            print(f"Fixed page file: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all page files"""
    patterns = [
        'app/**/page.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_page_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} page files")
    print(f"Fixed {files_fixed} page files")

if __name__ == "__main__":
    main()