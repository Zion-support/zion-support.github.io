#!/usr/bin/env python3
"""
Script to fix corrupted TSX files that have duplicate content and syntax errors.
"""

import os
import re
import glob

def fix_tsx_file(file_path):
    """Fix a single TSX file by removing duplicate content and fixing syntax errors."""
    print(f"Fixing {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the first occurrence of 'const.*Page.*React.FC'
        pattern = r'const\s+(\w+Page):\s*React\.FC\s*=\s*\(\)\s*=>\s*{'
        match = re.search(pattern, content)
        
        if not match:
            print(f"  No React.FC pattern found in {file_path}")
            return False
        
        # Find the start of the actual component
        start_pos = match.start()
        
        # Extract the component name
        component_name = match.group(1)
        
        # Find the end of the component by counting braces
        brace_count = 0
        end_pos = start_pos
        in_jsx = False
        
        for i, char in enumerate(content[start_pos:], start_pos):
            if char == '{':
                brace_count += 1
                if i > 0 and content[i-1] == '<':
                    in_jsx = True
            elif char == '}':
                brace_count -= 1
                if brace_count == 0 and not in_jsx:
                    end_pos = i + 1
                    break
            elif char == '>' and in_jsx:
                in_jsx = False
        
        if brace_count != 0:
            print(f"  Could not find matching closing brace in {file_path}")
            return False
        
        # Extract the clean component
        clean_component = content[start_pos:end_pos]
        
        # Create the fixed content
        fixed_content = f"'use client';\nimport React from 'react';\nimport {{ CheckCircle }} from 'lucide-react';\n\n{clean_component}\n"
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"  Fixed {file_path}")
        return True
        
    except Exception as e:
        print(f"  Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all TSX files."""
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