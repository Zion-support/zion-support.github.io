#!/usr/bin/env python3
"""
Script to fix corrupted import statements.
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
    """Fix corrupted import statements."""
    # Fix React import
    content = re.sub(r'impor\s+t\s+Reac\s+t\s+\s*fro\s+m\s+\'reac\s+t\'', "import React from 'react'", content)
    
    # Fix other common imports
    content = re.sub(r'impor\s+t\s+\{\s*([^}]+)\s*\}\s+fro\s+m\s+\'([^\']+)\'', r"import { \1 } from '\2'", content)
    
    # Fix single imports
    content = re.sub(r'impor\s+t\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s+fro\s+m\s+\'([^\']+)\'', r"import \1 from '\2'", content)
    
    # Fix any remaining corrupted imports
    content = re.sub(r'impor\s+t', 'import', content)
    content = re.sub(r'fro\s+m', 'from', content)
    content = re.sub(r'reac\s+t', 'react', content)
    content = re.sub(r'Helme\s+t', 'Helmet', content)
    content = re.sub(r'Lin\s+k', 'Link', content)
    content = re.sub(r'ArrowRigh\s+t', 'ArrowRight', content)
    content = re.sub(r'lucid\s+e', 'lucide', content)
    content = re.sub(r'route\s+r', 'router', content)
    content = re.sub(r'asyn\s+c', 'async', content)
    
    return content

def clean_up_file(file_path):
    """Clean up a specific file by fixing imports."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has corrupted imports
        if 'impor t' in content or 'fro m' in content:
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
    
    print("\nFixing corrupted imports...")
    fixed_count = 0
    
    for file_path in tsx_files:
        if clean_up_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed imports in {fixed_count} files.")

if __name__ == "__main__":
    main()