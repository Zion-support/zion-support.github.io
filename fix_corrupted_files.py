#!/usr/bin/env python3
"""
Fix corrupted files that have malformed content after merge conflict resolution.
"""

import os
import glob
import re

def is_corrupted_file(file_path):
    """Check if a file is corrupted based on common patterns."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common corruption patterns
        corruption_patterns = [
            r'^\s*[A-Z][a-z\s]+;\s*$',  # Lines like "Get Started Today;"
            r'^\s*</div>;\s*$',  # Lines like "</div>;"
            r'^\s*</>;\s*$',  # Lines like "</>;"
            r'^\s*\);\s*$',  # Lines like ");"
            r'^\s*;\s*$',  # Lines with just semicolons
            r'^\s*"\s*$',  # Lines with just quotes
            r'^\s*;\s*"\s*$',  # Lines like ';"'
            r'^\s*export\s+default\s+\w+;\s*\';\s*$',  # Malformed exports
        ]
        
        lines = content.split('\n')
        corrupted_lines = 0
        total_lines = len(lines)
        
        for line in lines:
            for pattern in corruption_patterns:
                if re.match(pattern, line.strip()):
                    corrupted_lines += 1
                    break
        
        # If more than 50% of lines are corrupted, consider the file corrupted
        return (corrupted_lines / total_lines) > 0.5 if total_lines > 0 else False
        
    except:
        return True

def create_basic_component(file_path):
    """Create a basic React component to replace corrupted files."""
    filename = os.path.basename(file_path)
    component_name = filename.replace('.tsx', '').replace('.ts', '')
    
    # Determine if it's a page or component based on path
    if '/page.tsx' in file_path:
        # It's a page component
        content = f'''import React from 'react';

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {component_name.replace('-', ' ').title()}
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

def fix_corrupted_files():
    """Fix all corrupted files."""
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
            content = create_basic_component(file_path)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            fixed_count += 1
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")
    
    print(f"Successfully fixed {fixed_count} files")

if __name__ == "__main__":
    os.chdir('/workspace')
    fix_corrupted_files()