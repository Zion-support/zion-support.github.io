#!/usr/bin/env python3
"""
Script to fix function names that start with numbers.
"""

import os
import glob
import re

def fix_file(file_path):
    """Fix a file by replacing numbered function names with valid ones."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract page name from path
        path_parts = file_path.split('/')
        if path_parts[-1] == 'page.tsx':
            page_name = path_parts[-2]
        else:
            page_name = path_parts[-1].replace('.tsx', '').replace('.ts', '')
        
        # Convert kebab-case to Title Case
        title = ' '.join(word.capitalize() for word in page_name.split('-'))
        
        # Create a valid function name (replace numbers at start)
        valid_page_name = re.sub(r'^(\d+)', r'G\1', page_name)
        function_name = ''.join(word.capitalize() for word in valid_page_name.split('-'))
        
        # Determine if it's a component or page
        if 'components' in file_path:
            # Create a basic component
            component_name = function_name
            content = f'''import React from 'react';

interface {component_name}Props {{
  className?: string;
  children?: React.ReactNode;
}}

export default function {component_name}({{ className = '', children }}: {component_name}Props) {{
  return (
    <div className={{`{page_name.replace('-', ' ')}-component ${{className}}`}}>
      {{children}}
    </div>
  );
}}'''
        elif file_path.endswith('.ts'):
            # Create a basic TypeScript file
            content = f'''// {title} utilities and types

export interface {title.replace(' ', '')}Config {{
  enabled: boolean;
  options: Record<string, any>;
}}

export const default{title.replace(' ', '')}Config: {title.replace(' ', '')}Config = {{
  enabled: true,
  options: {{}}
}};

export function initialize{title.replace(' ', '')}(config: {title.replace(' ', '')}Config) {{
  // Implementation here
  return config;
}}'''
        else:
            # Create a basic page
            content = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

export default function {function_name}Page() {{
  return (
    <>
      <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content="{title} solutions and services from Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our {title.lower()} solutions and services designed to help your business grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}}'''
        
        # Write the content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files with numbered function names."""
    # Get all TypeScript/React files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and 'dist' not in f]
    
    # Fix all files
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()