#!/usr/bin/env python3
"""
Script to create simple placeholder pages for all 5G services
"""

import os

# List of 5G service pages to create
services = [
    '5g-edge-computing',
    '5g-implementation', 
    '5g-iot-solutions',
    '5g-mobile-applications',
    '5g-network-infrastructure',
    '5g-private-networks',
    '5g-smart-city-solutions'
]

def create_page(service_name):
    """Create a simple placeholder page for a service"""
    page_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {service_name.replace('-', '').title().replace('5G', 'FiveG')}Page() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{service_name.replace('-', ' ').title()} | Zion Tech Group</title>
        <meta name="description" content="{service_name.replace('-', ' ')} solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">{service_name.replace('-', ' ').title()}</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
}}'''

    # Create directory if it doesn't exist
    os.makedirs(f'app/{service_name}', exist_ok=True)
    
    # Write the page file
    with open(f'app/{service_name}/page.tsx', 'w') as f:
        f.write(page_content)
    
    print(f"Created {service_name}/page.tsx")

def main():
    """Create all 5G service pages"""
    for service in services:
        create_page(service)
    
    print("All 5G service pages created successfully!")

if __name__ == "__main__":
    main()