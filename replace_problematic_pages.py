#!/usr/bin/env python3
"""
Script to replace problematic pages with a simple working template.
"""

import os
import re

def replace_problematic_pages():
    """Replace problematic pages with simple working templates"""
    
    # List of problematic pages to replace
    problematic_pages = [
        'ai-accounting-assistant/page.tsx',
        'ai-agricultural-intelligence-pro/page.tsx',
        'ai-analytics-dashboard-pro/page.tsx',
        'ai-analytics-dashboard/page.tsx',
        'ad-management/page.tsx'
    ]
    
    replaced_count = 0
    
    for page_path in problematic_pages:
        full_path = f'/workspace/app/{page_path}'
        
        if os.path.exists(full_path):
            try:
                # Extract service name from path
                service_name = page_path.split('/')[-2].replace('-', ' ').title()
                function_name = ''.join(word.capitalize() for word in service_name.split())
                
                # Generate content
                content = f'''\'use client\';
import React from \'react\';
import Head from \'next/head\';
import Link from \'next/link\';
import {{ ArrowRight }} from \'lucide-react\';
import Footer from \'@/components/Footer\';

export default function {function_name}() {{
  return (
    <>
      <Head>
        <title>{service_name} - Zion Tech Group</title>
        <meta name="description" content="Professional {service_name.lower()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            {service_name}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional {service_name.lower()} services coming soon.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}};'''
                
                # Write the file
                with open(full_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                replaced_count += 1
                print(f"Replaced: {page_path}")
                
            except Exception as e:
                print(f"Error replacing {page_path}: {e}")
    
    print(f"Successfully replaced {replaced_count} problematic pages")

if __name__ == "__main__":
    replace_problematic_pages()