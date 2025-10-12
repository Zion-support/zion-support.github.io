#!/usr/bin/env python3
"""
Script to create minimal working versions of all essential pages
"""
import os

def create_minimal_page(file_path, title, description):
    """Create a minimal working page"""
    content = f''''use client';

import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {title.replace(' ', '')}Page() {{
  return (
    <>
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="{description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-300 mb-8">{description}</p>
          <a
            href="/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
}}
'''
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    with open(file_path, 'w') as f:
        f.write(content)

def main():
    """Create minimal versions of essential pages"""
    pages = [
        ('app/page.tsx', 'Home', 'Welcome to Zion Tech Group - Advanced AI and IT Solutions'),
        ('app/contact/page.tsx', 'Contact', 'Get in touch with Zion Tech Group for AI and IT solutions'),
        ('app/privacy-policy/page.tsx', 'Privacy Policy', 'Privacy Policy for Zion Tech Group'),
        ('app/terms-of-service/page.tsx', 'Terms of Service', 'Terms of Service for Zion Tech Group'),
        ('app/5g-implementation/page.tsx', '5G Implementation', '5G Implementation Services by Zion Tech Group'),
        ('app/it-services/page.tsx', 'IT Services', 'Comprehensive IT Services by Zion Tech Group'),
        ('app/cloud-services/page.tsx', 'Cloud Services', 'Cloud Services and Solutions by Zion Tech Group'),
        ('app/digital-transformation/page.tsx', 'Digital Transformation', 'Digital Transformation Services by Zion Tech Group'),
        ('app/micro-saas-services/page.tsx', 'Micro SaaS Services', 'Micro SaaS Services by Zion Tech Group'),
    ]
    
    for file_path, title, description in pages:
        create_minimal_page(file_path, title, description)
        print(f"✓ Created {file_path}")

if __name__ == "__main__":
    main()