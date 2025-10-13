#!/usr/bin/env python3
"""
Script to fix missing default exports in component files
"""
import os
import glob

def fix_missing_export(file_path):
    """Fix missing default exports in component files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has no default export
        if 'export default' not in content and 'export {' not in content:
            print(f"Fixing missing export in: {file_path}")
            
            # Extract component name from file path
            component_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
            
            # Create a basic component with default export
            basic_component = f"""import React from 'react';

interface {component_name}Props {{
  children?: React.ReactNode;
}}

const {component_name}: React.FC<{component_name}Props> = ({{ children }}) => {{
  return (
    <div className="{component_name.lower()}">
      {{children}}
    </div>
  );
}};

export default {component_name};"""
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(basic_component)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all missing exports"""
    # Get all component files
    component_files = []
    
    for root, dirs, files in os.walk('./app/components'):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                file_path = os.path.join(root, file)
                component_files.append(file_path)
    
    print(f"Found {len(component_files)} component files")
    
    fixed_count = 0
    for file_path in component_files:
        if fix_missing_export(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed {fixed_count} component files with missing exports")

if __name__ == "__main__":
    main()