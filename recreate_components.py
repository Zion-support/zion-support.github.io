#!/usr/bin/env python3
import os
import glob

def create_clean_component(file_path):
    """Create a clean, minimal version of a component"""
    component_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
    
    # Create a basic React component template
    clean_content = f'''import React from 'react';

interface {component_name}Props {{
  className?: string;
  children?: React.ReactNode;
}}

const {component_name}: React.FC<{component_name}Props> = ({{ className = '', children }}) => {{
  return (
    <div className={{`p-4 ${{className}}`}}>
      <h2 className="text-xl font-semibold mb-2">{component_name}</h2>
      <p className="text-gray-600 mb-4">This component is being rebuilt.</p>
      {{children}}
    </div>
  );
}};

export default {component_name};
'''
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(clean_content)
        return True
    except Exception as e:
        print(f"Error creating clean component {file_path}: {e}")
        return False

def main():
    # Find all component files
    patterns = [
        'app/components/*.tsx',
        'app/components/*.ts'
    ]
    
    files_processed = 0
    files_recreated = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern):
            print(f"Recreating: {file_path}")
            files_processed += 1
            
            if create_clean_component(file_path):
                files_recreated += 1
                print(f"  ✓ Recreated: {file_path}")
            else:
                print(f"  ✗ Failed: {file_path}")
    
    print(f"\\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files recreated: {files_recreated}")

if __name__ == "__main__":
    main()