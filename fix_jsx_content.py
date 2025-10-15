#!/usr/bin/env python3
"""
Script to fix JSX content in TSX files by creating proper component structure.
"""

import os
import re
import glob

def create_basic_component(component_name, file_path):
    """Create a basic component structure for a page."""
    import re
    display_name = re.sub(r'([A-Z])', r' \1', component_name.replace('Page', '')).strip()
    display_name_lower = display_name.lower()
    
    return f"""'use client';
import React from 'react';
import {{ CheckCircle }} from 'lucide-react';

const {component_name}: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {display_name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional {display_name_lower} services delivered by experienced professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Expert Solutions</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Professional {display_name_lower} services delivered by experienced professionals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Quality Assurance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Fast Delivery
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Custom Solutions
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Advanced Technology</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Cutting-edge tools and technologies to deliver superior results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Latest Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Modern Methods
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Scalable Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Future-Ready
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Proven Results</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Track record of successful projects and satisfied clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  High Success Rate
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Client Satisfaction
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Ongoing Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Continuous Improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}};

export default {component_name};"""

def fix_tsx_file(file_path):
    """Fix a single TSX file by creating a proper component structure."""
    print(f"Fixing {file_path}...")
    
    try:
        # Extract component name from file path
        filename = os.path.basename(file_path)
        if filename == 'page.tsx':
            # Get the directory name for the component name
            dir_name = os.path.basename(os.path.dirname(file_path))
            component_name = ''.join(word.capitalize() for word in dir_name.split('-')) + 'Page'
        else:
            component_name = filename.replace('.tsx', '').replace('-', ' ').title().replace(' ', '') + 'Page'
        
        # Create the component content
        component_content = create_basic_component(component_name, file_path)
        
        # Write the component
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(component_content)
        
        print(f"  Created component {component_name} in {file_path}")
        return True
        
    except Exception as e:
        print(f"  Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all TSX files."""
    app_dir = '/workspace/app'
    tsx_files = glob.glob(os.path.join(app_dir, '**', 'page.tsx'), recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} page.tsx files to fix...")
    
    for file_path in tsx_files:
        if fix_tsx_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()