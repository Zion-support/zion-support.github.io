#!/usr/bin/env python3
import os
import re
import glob

def create_page_content(page_name, page_path):
    """Create a complete page component"""
    # Convert page name to title (e.g., api-development -> API Development)
    title = page_name.replace('-', ' ').title()
    
    # Define features based on the page type
    features = [
        {
            "icon": "🚀",
            "title": "Professional",
            "description": f"Professional {title.lower()} solutions"
        },
        {
            "icon": "⚡",
            "title": "Fast & Reliable",
            "description": "Quick and efficient service delivery"
        },
        {
            "icon": "📊",
            "title": "Analytics",
            "description": "Comprehensive analytics and insights"
        },
        {
            "icon": "🔧",
            "title": "Customizable",
            "description": "Tailored solutions for your business needs"
        }
    ]
    
    # Convert features to proper JSX format
    features_jsx = "[\n    " + ",\n    ".join([
        f"{{\n      icon: \"{feature['icon']}\",\n      title: \"{feature['title']}\",\n      description: \"{feature['description']}\"\n    }}"
        for feature in features
    ]) + "\n  ]"
    
    # Determine if it's an AI page or regular service page
    is_ai_page = page_name.startswith('ai-')
    component_name = page_name.replace('-', '').replace('ai', 'AI').title() if is_ai_page else page_name.replace('-', '').title()
    
    content = f'''"use client";
import React from "react";
import {{ Helmet }} from "react-helmet-async";

const {component_name} = () => {{
  const features = {features_jsx};

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="Professional {title.lower()} solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {{/* Hero Section */}}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional {title.lower()} solutions tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {{/* Features Section */}}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {{features.map((feature, index) => (
                <div key={{index}} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">{{feature.icon}}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {{feature.title}}
                  </h3>
                  <p className="text-gray-300">{{feature.description}}</p>
                </div>
              ))}}
            </div>
          </div>
        </section>

        {{/* CTA Section */}}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement this solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}};

export default {component_name};'''
    
    return content

def fix_corrupted_pages():
    """Fix all corrupted pages"""
    app_dir = "/workspace/app"
    all_pages = glob.glob(f"{app_dir}/*/page.tsx")
    
    fixed_count = 0
    
    for page_path in all_pages:
        try:
            # Extract page name from path
            page_name = os.path.basename(os.path.dirname(page_path))
            
            # Skip certain pages that should not be fixed
            skip_pages = ['layout', 'loading', 'error', 'not-found', 'globals', 'favicon.ico']
            if page_name in skip_pages:
                continue
            
            # Read current content
            with open(page_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if page is corrupted
            is_corrupted = (
                ('return (' in content and 'const ' not in content and 'function ' not in content) or
                ('Unexpected token' in content) or
                ('Expression expected' in content) or
                ('Return statement is not allowed here' in content) or
                (content.strip().startswith('"use client";') and 'export default' not in content) or
                ('const features = [{' in content) or
                (len(content.strip()) < 100)  # Very short files are likely corrupted
            )
            
            if is_corrupted:
                print(f"Fixing corrupted page: {page_name}")
                
                # Create new content
                new_content = create_page_content(page_name, page_path)
                
                # Write new content
                with open(page_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                fixed_count += 1
                print(f"Fixed: {page_name}")
                
        except Exception as e:
            print(f"Error fixing {page_path}: {e}")
    
    print(f"Fixed {fixed_count} corrupted pages")

if __name__ == "__main__":
    fix_corrupted_pages()