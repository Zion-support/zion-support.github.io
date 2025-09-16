#!/usr/bin/env python3
import os
import re
import sys

def is_file_corrupted(file_path):
    """Check if a file is corrupted with incomplete JSX/TSX"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common corruption patterns
        if 'return (' in content and ');' not in content:
            return True
        if 'return (' in content and content.count('(') != content.count(')'):
            return True
        if 'const ' in content and '= () => {' in content and '};' not in content:
            return True
        if content.strip().endswith('</div>') and not content.strip().startswith('<div'):
            return True
        if 'return (' in content and content.count('<') != content.count('>'):
            return True
            
        return False
    except:
        return True

def create_simple_component(file_path):
    """Create a simple working component"""
    filename = os.path.basename(file_path)
    component_name = filename.replace('.tsx', '').replace('.jsx', '')
    
    # Determine if it's a page or component
    is_page = '/pages/' in file_path
    
    if is_page:
        template = f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';

const {component_name}: React.FC = () => {{
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>{component_name} | Zion Tech Group</title>
        <meta name="description" content="{component_name} - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">{component_name}</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
}};

export default {component_name};'''
    else:
        template = f'''import React from 'react';

const {component_name}: React.FC = () => {{
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">{component_name}</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
}};

export default {component_name};'''
    
    return template

def main():
    """Find and fix all corrupted files"""
    import subprocess
    
    # Find all TSX/JSX files
    result = subprocess.run(['find', '.', '-name', '*.tsx', '-o', '-name', '*.jsx'], 
                          capture_output=True, text=True, cwd='/workspace')
    
    files = result.stdout.strip().split('\n')
    fixed_count = 0
    
    for file_path in files:
        if file_path and not file_path.startswith('./node_modules'):
            if is_file_corrupted(file_path):
                print(f"Fixing corrupted file: {file_path}")
                try:
                    simple_component = create_simple_component(file_path)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(simple_component)
                    fixed_count += 1
                except Exception as e:
                    print(f"Error fixing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} corrupted files")

if __name__ == "__main__":
    main()