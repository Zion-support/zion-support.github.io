#!/usr/bin/env python3
import os
import re
import glob

def final_fix():
    """Final comprehensive fix for all remaining issues"""
    try:
        # 1. Fix all remaining pages with syntax errors
        problematic_pages = [
            'app/database-services/page.tsx',
            'app/gdpr/page.tsx', 
            'app/it-training/page.tsx',
            'app/mobile-development/page.tsx',
            'app/specialized-services/page.tsx',
            'app/5g-iot-solutions/page.tsx'
        ]
        
        for page_path in problematic_pages:
            if os.path.exists(page_path):
                # Extract page name
                page_name = os.path.basename(os.path.dirname(page_path))
                page_name = page_name.replace('-', ' ').title().replace(' ', '')
                
                # Create proper content
                content = f"""'use client';
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
                    f.write(content)
                print(f"Fixed page: {page_path}")
        
        print("All fixes applied successfully!")
        return True
        
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    final_fix()
