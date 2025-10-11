#!/usr/bin/env python3
"""
Script to fix parsing errors in TSX files by ensuring proper JSX structure.
"""

import os
import re
import glob

def fix_tsx_file(file_path):
    """Fix parsing errors in a single TSX file."""
    print(f"Fixing parsing errors in {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the component definition
        component_pattern = r'const\s+(\w+Page):\s*React\.FC\s*=\s*\(\)\s*=>\s*{'
        match = re.search(component_pattern, content)
        
        if not match:
            print(f"  No component pattern found in {file_path}")
            return False
        
        component_name = match.group(1)
        
        # Extract the component content
        start_pos = match.start()
        
        # Find the return statement
        return_pattern = r'return\s*\('
        return_match = re.search(return_pattern, content[start_pos:])
        
        if not return_match:
            print(f"  No return statement found in {file_path}")
            return False
        
        return_start = start_pos + return_match.start()
        
        # Find the JSX content
        jsx_start = return_start + return_match.end() - 1  # Include the opening parenthesis
        
        # Count braces to find the end of JSX
        brace_count = 0
        jsx_end = jsx_start
        in_string = False
        escape_next = False
        
        for i, char in enumerate(content[jsx_start:], jsx_start):
            if escape_next:
                escape_next = False
                continue
                
            if char == '\\':
                escape_next = True
                continue
                
            if char in ['"', "'", '`'] and not escape_next:
                in_string = not in_string
                continue
                
            if not in_string:
                if char == '(':
                    brace_count += 1
                elif char == ')':
                    brace_count -= 1
                    if brace_count == 0:
                        jsx_end = i + 1
                        break
        
        if brace_count != 0:
            print(f"  Could not find matching closing parenthesis in {file_path}")
            return False
        
        # Extract JSX content
        jsx_content = content[jsx_start:jsx_end]
        
        # Create a clean component
        clean_component = f"""'use client';
import React from 'react';
import {{ CheckCircle }} from 'lucide-react';

const {component_name}: React.FC = () => {{
  return (
{jsx_content}
  );
}};

export default {component_name};"""
        
        # Write the clean component
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(clean_component)
        
        print(f"  Fixed parsing errors in {file_path}")
        return True
        
    except Exception as e:
        print(f"  Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all TSX files with parsing errors."""
    app_dir = '/workspace/app'
    tsx_files = glob.glob(os.path.join(app_dir, '**', '*.tsx'), recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TSX files to check...")
    
    for file_path in tsx_files:
        if fix_tsx_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()