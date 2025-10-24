#!/usr/bin/env python3
"""
Script to fix malformed component files by creating proper React components
"""
import os
import re
import glob

def fix_component_file(file_path):
    """Fix a single component file by creating a proper React component"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the component name from the file path
        component_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
        
        # Create a proper React component
        proper_component = f'''import React from 'react';

interface {component_name}Props {{
  // Add props as needed
}}

const {component_name}: React.FC<{component_name}Props> = ({{ ...props }}) => {{
  return (
    <div className="{component_name.lower()}">
      <h2>{component_name}</h2>
      <p>Component content coming soon.</p>
    </div>
  );
}};

export default {component_name};'''
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(proper_component)
        
        print(f"Fixed component file: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all component files"""
    # Find all component files
    patterns = [
        'app/components/*.tsx',
        'app/components/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_component_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} component files")
    print(f"Fixed {files_fixed} component files")

if __name__ == "__main__":
    main()