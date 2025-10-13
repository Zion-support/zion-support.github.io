#!/usr/bin/env python3
"""
Fix all 5G pages with proper component names.
"""

import os

def fix_5g_pages():
    """Fix all 5G pages."""
    pages = [
        ('app/5g-iot-solutions/page.tsx', 'IoTSolutions5GPage', '5G IoT Solutions'),
        ('app/5g-mobile-applications/page.tsx', 'MobileApplications5GPage', '5G Mobile Applications'),
        ('app/5g-network-infrastructure/page.tsx', 'NetworkInfrastructure5GPage', '5G Network Infrastructure'),
        ('app/5g-private-networks/page.tsx', 'PrivateNetworks5GPage', '5G Private Networks'),
        ('app/5g-smart-city-solutions/page.tsx', 'SmartCitySolutions5GPage', '5G Smart City Solutions'),
        ('app/5g-solutions/page.tsx', 'Solutions5GPage', '5G Solutions')
    ]
    
    for page_path, component_name, page_title in pages:
        content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>{page_title} - Zion Tech Group</title>
        <meta name="description" content="Advanced {page_title.lower()} solutions for next-generation connectivity and performance." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">{page_title}</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive {page_title.lower()} solutions designed to meet your business needs.
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
}}
'''
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {page_path}")

def fix_survey_builder():
    """Fix the survey builder page."""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SurveyBuilderPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>AI Survey Builder - Zion Tech Group</title>
        <meta name="description" content="AI-powered survey builder for creating intelligent surveys and forms." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">AI Survey Builder</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Create intelligent surveys and forms with our AI-powered survey builder.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Design</h3>
              <p className="text-gray-300">
                Let AI help you design effective surveys and forms automatically.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Smart Analytics</h3>
              <p className="text-gray-300">
                Get intelligent insights from your survey responses with AI analytics.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
              <p className="text-gray-300">
                Seamlessly integrate surveys into your existing workflows and systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'''
    
    with open('app/zion-ai-survey-builder/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed: app/zion-ai-survey-builder/page.tsx")

def main():
    """Main function."""
    print("Fixing 5G pages and survey builder...")
    
    fix_5g_pages()
    fix_survey_builder()
    
    print("5G pages and survey builder fixes complete!")

if __name__ == "__main__":
    main()