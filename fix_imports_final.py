#!/usr/bin/env python3
"""
Final script to fix import statements specifically.
"""

import os
import re
import glob

def find_tsx_files(directory):
    """Find all TSX files."""
    tsx_files = []
    
    # Directories to exclude
    exclude_dirs = {'node_modules', '.git', 'dist', 'build', '.next', 'out', '.turbo'}
    
    for ext in ['*.tsx', '*.jsx']:
        pattern = os.path.join(directory, '**', ext)
        for file_path in glob.glob(pattern, recursive=True):
            # Skip if in excluded directory
            if any(excluded in file_path for excluded in exclude_dirs):
                continue
                
            # Skip if it's a directory
            if os.path.isdir(file_path):
                continue
                
            tsx_files.append(file_path)
    
    return tsx_files

def fix_imports(content):
    """Fix import statements."""
    # Fix the main issue: importReactfrom -> import React from
    content = re.sub(r'importReactfrom', 'import React from', content)
    
    # Fix other import patterns
    content = re.sub(r'import\s+Reactfrom', 'import React from', content)
    content = re.sub(r'import\s+React\s+from', 'import React from', content)
    
    # Fix other corrupted imports
    content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*from', r'import { \1 } from', content)
    content = re.sub(r'import\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s+from', r'import \1 from', content)
    
    return content

def clean_up_file(file_path):
    """Clean up a specific file by fixing import statements."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has corrupted imports
        if 'importReactfrom' in content:
            print(f"Fixing imports in: {file_path}")
            
            # Apply fixes
            content = fix_imports(content)
            
            # Write back the fixed content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all import statements."""
    workspace_dir = '/workspace'
    
    print("Searching for TSX files with corrupted imports...")
    tsx_files = find_tsx_files(workspace_dir)
    
    if not tsx_files:
        print("No TSX files found.")
        return
    
    print(f"Found {len(tsx_files)} TSX files")
    
    print("\nFixing import statements...")
    fixed_count = 0
    
    for file_path in tsx_files:
        if clean_up_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed imports in {fixed_count} files.")

if __name__ == "__main__":
    main()