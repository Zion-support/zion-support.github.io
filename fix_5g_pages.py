#!/usr/bin/env python3
"""
Fix all 5G pages by creating simple templates
"""

import os
from pathlib import Path

def create_5g_page_template(page_name, file_path):
    """Create a simple 5G page template."""
    display_name = page_name.replace('5g-', '5G ').replace('-', ' ').title()
    
    template = f'''import React from 'react';

export default function {page_name.replace('-', '').replace('5g', 'FiveG').title()}() {{
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {display_name}
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Discover our comprehensive {display_name} solutions designed to transform your business operations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                Cutting-edge {display_name} solutions powered by the latest technology.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible and scalable {display_name} implementations for any business size.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated support team to help you maximize your {display_name} investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}}
'''
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(template)
        return True
    except Exception as e:
        print(f"Error creating template for {file_path}: {e}")
        return False

def main():
    """Fix all 5G pages."""
    five_g_pages = [
        '5g-data-analytics',
        '5g-edge-computing', 
        '5g-implementation',
        '5g-iot-solutions',
        '5g-mobile-applications',
        '5g-network-infrastructure',
        '5g-private-networks',
        '5g-smart-city-solutions',
        '5g-solutions'
    ]
    
    fixed_count = 0
    
    for page_name in five_g_pages:
        page_dir = f"app/{page_name}"
        page_file = f"{page_dir}/page.tsx"
        
        if os.path.exists(page_file):
            print(f"Fixing {page_file}")
            if create_5g_page_template(page_name, page_file):
                fixed_count += 1
        else:
            print(f"Creating {page_file}")
            os.makedirs(page_dir, exist_ok=True)
            if create_5g_page_template(page_name, page_file):
                fixed_count += 1
    
    print(f"Fixed {fixed_count} 5G pages")

if __name__ == "__main__":
    main()