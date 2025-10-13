#!/usr/bin/env python3
"""
Script to generate all missing page components.
"""

import os
import glob

def create_page_component(file_path, page_name):
    """Create a page component with proper naming."""
    # Convert kebab-case to PascalCase
    component_name = ''.join(word.capitalize() for word in page_name.split('-'))
    
    content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

const {component_name}: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>{page_name.replace('-', ' ').title()} - Zion Tech Group</title>
        <meta name="description" content="{page_name.replace('-', ' ').title()} solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">{page_name.replace('-', ' ').title()}</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later for updates.
          </p>
        </div>
      </div>
    </div>
  );
}};

export default {component_name};
'''
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Generate all missing page components."""
    # List of all page files that need to be created
    page_files = [
        'app/ai-analytics/page.tsx',
        'app/ai-automation/page.tsx',
        'app/ai-business-intelligence/page.tsx',
        'app/ai-content-generation/page.tsx',
        'app/ai-customer-service/page.tsx',
        'app/ai-data-analytics/page.tsx',
        'app/ai-email-automation/page.tsx',
        'app/ai-fraud-detection/page.tsx',
        'app/ai-healthcare/page.tsx',
        'app/ai-marketing/page.tsx',
        'app/ai-predictive-analytics/page.tsx',
        'app/ai-project-management/page.tsx',
        'app/5g-network-infrastructure/page.tsx',
        'app/5g-private-networks/page.tsx',
        'app/5g-iot-solutions/page.tsx',
        'app/5g-edge-computing/page.tsx',
        'app/5g-smart-city-solutions/page.tsx',
    ]
    
    for page_file in page_files:
        if os.path.exists(page_file):
            with open(page_file, 'r', encoding='utf-8') as f:
                content = f.read().strip()
            
            if not content or len(content) < 50:  # If file is empty or very short
                page_name = os.path.basename(os.path.dirname(page_file))
                create_page_component(page_file, page_name)
                print(f"Generated page: {page_file}")
        else:
            # Create directory if it doesn't exist
            os.makedirs(os.path.dirname(page_file), exist_ok=True)
            page_name = os.path.basename(os.path.dirname(page_file))
            create_page_component(page_file, page_name)
            print(f"Created page: {page_file}")

if __name__ == "__main__":
    main()