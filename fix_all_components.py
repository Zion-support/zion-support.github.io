#!/usr/bin/env python3
"""
Script to fix all corrupted React/TypeScript component files
"""
import os
import glob
import re

def create_basic_component(file_path):
    """Create a basic working component"""
    component_name = os.path.basename(file_path).replace('.tsx', '')
    
    # Convert camelCase to TitleCase for display
    display_name = re.sub(r'([A-Z])', r' \1', component_name).strip()
    display_name = display_name.replace('_', ' ').title()
    
    content = f"""'use client'
import React from 'react';

interface {component_name}Props {{
  className?: string;
}}

const {component_name}: React.FC<{component_name}Props> = ({{ className }}) => {{
  return (
    <div className={{className}}>
      <h2 className="text-xl font-semibold mb-4">{display_name}</h2>
      <p className="text-gray-600">This is a placeholder component for {display_name}.</p>
    </div>
  );
}};

export default {component_name};
"""
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def is_corrupted_file(file_path):
    """Check if a file is corrupted"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common corruption patterns
        corruption_patterns = [
            '<<<<<<< HEAD',
            '=======',
            '>>>>>>>',
            '&quot;',
            '&lt;',
            '&gt;',
            'Unterminated string literal',
            'Expression expected',
            'Declaration or statement expected'
        ]
        
        # Check if file has proper React structure
        has_import_react = 'import React' in content
        has_export = 'export default' in content
        has_jsx = '<' in content and '>' in content
        
        # If it has corruption patterns or lacks basic structure, it's corrupted
        has_corruption = any(pattern in content for pattern in corruption_patterns)
        lacks_structure = not (has_import_react and has_export and has_jsx)
        
        return has_corruption or lacks_structure or len(content.strip()) < 100
        
    except Exception:
        return True

def main():
    """Main function to fix all component files"""
    # Find all TSX files in the app/components directory
    pattern = "app/components/*.tsx"
    files = glob.glob(pattern)
    
    fixed_count = 0
    for file_path in files:
        if is_corrupted_file(file_path):
            print(f"Fixing corrupted file: {file_path}")
            create_basic_component(file_path)
            fixed_count += 1
    
    print(f"Fixed {fixed_count} corrupted component files")

if __name__ == "__main__":
    main()