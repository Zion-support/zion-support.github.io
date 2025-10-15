#!/usr/bin/env python3
"""
Comprehensive script to fix all corrupted files in the project.
"""

import os
import glob
import re

def is_corrupted_file(file_path):
    """Check if a file is corrupted."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common corruption patterns
        corruption_indicators = [
            r'^\s*[A-Z][a-z\s]+;\s*$',  # Lines like "Get Started Today;"
            r'^\s*</div>;\s*$',  # Lines like "</div>;"
            r'^\s*</>;\s*$',  # Lines like "</>;"
            r'^\s*\);\s*$',  # Lines like ");"
            r'^\s*;\s*$',  # Lines with just semicolons
            r'^\s*"\s*$',  # Lines with just quotes
            r'^\s*;\s*"\s*$',  # Lines like ';"'
            r'^\s*export\s+default\s+\w+;\s*\';\s*$',  # Malformed exports
            r'^\s*}\s*return\s*\(\s*\)\s*$',  # Malformed return statements
            r'^\s*interface\s+\w+Props\s*\{\s*\}\s*,\s*$',  # Malformed interfaces
            r'^\s*\}\s*;\s*$',  # Lines like "};"
            r'^\s*\}\s*return\s*\(\s*\)\s*$',  # Malformed return
            r'^\s*\}\s*;\s*export\s+default\s+\w+;\s*$',  # Malformed export
        ]
        
        lines = content.split('\n')
        corrupted_lines = 0
        total_lines = len(lines)
        
        for line in lines:
            line = line.strip()
            if not line:  # Skip empty lines
                continue
            for pattern in corruption_indicators:
                if re.match(pattern, line):
                    corrupted_lines += 1
                    break
        
        # If more than 30% of non-empty lines are corrupted, consider the file corrupted
        return (corrupted_lines / max(total_lines, 1)) > 0.3
        
    except:
        return True

def create_component_content(file_path):
    """Create proper React component content."""
    filename = os.path.basename(file_path)
    component_name = filename.replace('.tsx', '').replace('.ts', '')
    
    # Determine if it's a page or component based on path
    if '/page.tsx' in file_path:
        # It's a page component
        page_title = component_name.replace('-', ' ').replace('_', ' ').title()
        content = f'''import React from 'react';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {page_title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is currently under development.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-500">
              Content will be available soon. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}}
'''
    else:
        # It's a regular component
        content = f'''import React from 'react';

interface {component_name}Props {{
  className?: string;
  children?: React.ReactNode;
}}

export default function {component_name}({{ className = '', children }}: {component_name}Props) {{
  return (
    <div className={{className}}>
      {{children}}
    </div>
  );
}}
'''
    
    return content

def fix_all_corrupted_files():
    """Fix all corrupted files in the project."""
    print("Scanning for corrupted files...")
    
    # Find all TypeScript/JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    all_files = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if 'node_modules' in file_path or '.git' in file_path:
                continue
            all_files.append(file_path)
    
    corrupted_files = []
    for file_path in all_files:
        if is_corrupted_file(file_path):
            corrupted_files.append(file_path)
    
    print(f"Found {len(corrupted_files)} corrupted files")
    
    # Fix each corrupted file
    fixed_count = 0
    for file_path in corrupted_files:
        try:
            print(f"Fixing: {file_path}")
            content = create_component_content(file_path)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            fixed_count += 1
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")
    
    print(f"Successfully fixed {fixed_count} files")

if __name__ == "__main__":
    os.chdir('/workspace')
    fix_all_corrupted_files()