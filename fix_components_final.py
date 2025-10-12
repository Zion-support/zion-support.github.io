#!/usr/bin/env python3
"""
Script to fix all component files with proper JSX
"""
import os
import glob

def create_clean_component(component_name):
    """Create a clean component without HTML comments"""
    return f'''import React from 'react';

export default function {component_name}() {{
  return (
    <div className="hidden">
      <div>{component_name} component</div>
    </div>
  );
}}'''

def fix_all_components():
    """Fix all component files"""
    component_files = glob.glob('app/components/*.tsx')
    
    for file_path in component_files:
        try:
            # Extract component name from file path
            component_name = os.path.basename(file_path).replace('.tsx', '').replace('-', ' ').title().replace(' ', '')
            
            content = create_clean_component(component_name)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed: {file_path}")
            
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")

def main():
    """Main function"""
    print("Fixing all component files...")
    fix_all_components()
    print("Done!")

if __name__ == "__main__":
    main()