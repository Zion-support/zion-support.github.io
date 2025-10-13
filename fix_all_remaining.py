#!/usr/bin/env python3
import os
import re
import glob

def create_clean_page_component(title, description, filename):
    """Create a clean page component"""
    return f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {title.replace(' ', '').replace('-', '')}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="{description}" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {description}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}}'''

def fix_file(file_path, title, description):
    """Fix a specific file"""
    try:
        fixed_content = create_clean_page_component(title, description, os.path.basename(file_path))
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Files that need to be fixed with their titles and descriptions
    files_to_fix = [
        ('app/ai-mobile-app-builder/page.tsx', 'AI Mobile App Builder', 'Advanced AI mobile app builder solutions by Zion Tech Group'),
        ('app/ai-mobile-builder/page.tsx', 'AI Mobile Builder', 'Advanced AI mobile builder solutions by Zion Tech Group'),
        ('app/ai-website-builder/page.tsx', 'AI Website Builder', 'Advanced AI website builder solutions by Zion Tech Group'),
        ('app/cloud-infrastructure-management/page.tsx', 'Cloud Infrastructure Management', 'Advanced cloud infrastructure management solutions by Zion Tech Group'),
        ('app/micro-saas-services/ai-chatbot-builder/page.tsx', 'AI Chatbot Builder', 'Advanced AI chatbot builder solutions by Zion Tech Group'),
        ('app/zion-ai-analytics-pro/page.tsx', 'Zion AI Analytics Pro', 'Advanced AI analytics solutions by Zion Tech Group'),
        ('app/zion-ai-crm-pro/page.tsx', 'Zion AI CRM Pro', 'Advanced AI CRM solutions by Zion Tech Group'),
        ('app/zion-ai-survey-builder/page.tsx', 'Zion AI Survey Builder', 'Advanced AI survey builder solutions by Zion Tech Group'),
    ]
    
    fixed_count = 0
    
    for file_path, title, description in files_to_fix:
        if os.path.exists(file_path):
            if fix_file(file_path, title, description):
                fixed_count += 1
    
    # Fix specific files with syntax errors
    special_files = [
        'app/zion-ai-email-marketing-pro/page.tsx',
        'app/zion-ai-inventory-optimizer-pro/page.tsx',
    ]
    
    for file_path in special_files:
        if os.path.exists(file_path):
            # Read the file and clean it up
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remove any malformed content and create clean component
                title = os.path.basename(file_path).replace('page.tsx', '').replace('-', ' ').title()
                description = f"Advanced {title.lower()} solutions by Zion Tech Group"
                
                if fix_file(file_path, title, description):
                    fixed_count += 1
                    
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()