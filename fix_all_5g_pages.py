#!/usr/bin/env python3
"""
Fix all 5G-related pages with JSX syntax errors.
"""

import os
import glob

def create_5g_page_template(page_name, title, description):
    """Create a template for 5G pages."""
    return f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="{description}" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
        <p className="text-lg text-gray-300 mb-8">{description}</p>
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
}}
'''

def fix_all_5g_pages():
    """Fix all 5G-related pages."""
    pages = [
        {
            'file': 'app/5g-mobile-applications/page.tsx',
            'name': 'FiveGMobileApplicationsPage',
            'title': '5G Mobile Applications',
            'description': 'Professional 5G mobile application development services by Zion Tech Group. Transform your business with our expert solutions.'
        },
        {
            'file': 'app/5g-network-infrastructure/page.tsx',
            'name': 'FiveGNetworkInfrastructurePage',
            'title': '5G Network Infrastructure',
            'description': 'Professional 5G network infrastructure services by Zion Tech Group. Transform your business with our expert solutions.'
        },
        {
            'file': 'app/5g-private-networks/page.tsx',
            'name': 'FiveGPrivateNetworksPage',
            'title': '5G Private Networks',
            'description': 'Professional 5G private network solutions by Zion Tech Group. Transform your business with our expert solutions.'
        },
        {
            'file': 'app/5g-smart-city-solutions/page.tsx',
            'name': 'FiveGSmartCitySolutionsPage',
            'title': '5G Smart City Solutions',
            'description': 'Professional 5G smart city solutions by Zion Tech Group. Transform your business with our expert solutions.'
        },
        {
            'file': 'app/5g-solutions/page.tsx',
            'name': 'FiveGSolutionsPage',
            'title': '5G Solutions',
            'description': 'Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions.'
        }
    ]
    
    for page in pages:
        content = create_5g_page_template(page['name'], page['title'], page['description'])
        with open(page['file'], 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {page['file']}")

def main():
    """Fix all 5G pages."""
    print("Fixing all 5G pages...")
    fix_all_5g_pages()
    print("All 5G pages fixed!")

if __name__ == "__main__":
    main()