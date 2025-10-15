#!/usr/bin/env python3
"""
Script to fix 5G pages with parsing errors.
"""

import os
import glob

def fix_5g_page(file_path, title, description):
    """Fix a 5G page with proper structure."""
    content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {title.replace(' ', '').replace('-', '')}Page() {{
  return (
    <>
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="{description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <p className="text-lg text-gray-300 mb-8">{description}</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}}
'''
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Fix all 5G pages."""
    pages = [
        ('/workspace/app/5g-implementation/page.tsx', '5G Implementation', 'Comprehensive 5G network implementation services for businesses and organizations.'),
        ('/workspace/app/5g-iot-solutions/page.tsx', '5G IoT Solutions', 'Advanced 5G-powered IoT solutions for connected devices and smart systems.'),
        ('/workspace/app/5g-mobile-applications/page.tsx', '5G Mobile Applications', 'High-performance mobile applications optimized for 5G networks.'),
        ('/workspace/app/5g-network-infrastructure/page.tsx', '5G Network Infrastructure', 'Robust 5G network infrastructure design and deployment services.'),
        ('/workspace/app/5g-private-networks/page.tsx', '5G Private Networks', 'Secure private 5G network solutions for enterprise environments.'),
        ('/workspace/app/5g-smart-city-solutions/page.tsx', '5G Smart City Solutions', 'Innovative 5G solutions for smart city development and management.'),
        ('/workspace/app/5g-solutions/page.tsx', '5G Solutions', 'Comprehensive 5G technology solutions for modern businesses.'),
    ]
    
    for file_path, title, description in pages:
        try:
            fix_5g_page(file_path, title, description)
            print(f"Fixed {file_path}")
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")

if __name__ == "__main__":
    main()