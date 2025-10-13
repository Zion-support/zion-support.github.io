#!/usr/bin/env python3
import os

def fix_micro_saas_files():
    """Fix micro-saas files with syntax errors"""
    
    micro_saas_files = [
        'app/micro-saas/ai-customer-support-chatbot/page.tsx',
        'app/micro-saas/ai-email-marketing-automation/page.tsx',
        'app/micro-saas/ai-expense-tracker/page.tsx',
        'app/micro-saas/ai-inventory-manager/page.tsx',
        'app/micro-saas/ai-project-manager/page.tsx',
        'app/micro-saas/ai-social-media-scheduler/page.tsx'
    ]
    
    template = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function {PAGE_NAME}() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>{PAGE_NAME} - Zion Tech Group</title>
        <meta name="description" content="{PAGE_NAME} solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">{PAGE_NAME}</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive {PAGE_NAME_LOWER} solutions designed to meet your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}'''
    
    fixed_count = 0
    
    for file_path in micro_saas_files:
        if os.path.exists(file_path):
            try:
                # Extract page name from path
                page_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
                page_name = ''.join(word.capitalize() for word in page_name.split('-'))
                page_name_lower = page_name.lower()
                
                # Replace placeholders in template
                content = template.replace('{PAGE_NAME}', page_name).replace('{PAGE_NAME_LOWER}', page_name_lower)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed: {file_path}")
                fixed_count += 1
            except Exception as e:
                print(f"Error fixing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} micro-saas files")

if __name__ == "__main__":
    fix_micro_saas_files()