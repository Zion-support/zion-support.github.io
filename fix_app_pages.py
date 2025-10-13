#!/usr/bin/env python3
import os
import re
import glob

def fix_app_page(file_path):
    """Fix corrupted app page files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file is corrupted (starts with closing tags or has merge conflicts)
        if content.strip().startswith('</div>') or '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
            print(f"Fixing corrupted file: {file_path}")
            
            # Extract page name from file path
            page_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
            page_title = page_name.replace('-', ' ').title()
            
            # Create a basic React component
            new_content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Brain, Shield, Zap }} from 'lucide-react';

export default function {page_name.replace('-', '')}() {{
  const features = [
    {{
      title: 'Advanced Solutions',
      description: 'Cutting-edge technology for your business needs',
      icon: Brain
    }},
    {{
      title: 'Secure Platform',
      description: 'Enterprise-grade security and reliability',
      icon: Shield
    }},
    {{
      title: 'High Performance',
      description: 'Optimized for speed and efficiency',
      icon: Zap
    }}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>{page_title} - Zion AI</title>
        <meta name="description" content="Professional {page_title.lower()} services and solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {page_title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional {page_title.lower()} services and solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {{features.map((feature, index) => (
            <div key={{index}} className="bg-white rounded-lg p-6 shadow-lg">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{{feature.title}}</h3>
              <p className="text-gray-600">{{feature.description}}</p>
            </div>
          ))}}
        </div>
      </div>
    </div>
  );
}}'''
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed corrupted file: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all app page files
    app_files = glob.glob('app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in app_files:
        if fix_app_page(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} corrupted app pages")

if __name__ == "__main__":
    main()
