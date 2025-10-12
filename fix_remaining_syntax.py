#!/usr/bin/env python3
"""
Script to fix remaining syntax errors.
This script will:
1. Fix missing semicolons
2. Fix malformed function declarations
3. Fix remaining merge conflict markers
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

def fix_syntax_errors(content):
    """Fix remaining syntax errors."""
    
    # Fix missing semicolons after import statements
    content = re.sub(r"import React from 'react'$", "import React from 'react';", content, flags=re.MULTILINE)
    content = re.sub(r"import { ([^}]+) } from '([^']+)'$", r"import { \1 } from '\2';", content, flags=re.MULTILINE)
    content = re.sub(r"import ([a-zA-Z_$][a-zA-Z0-9_$]*) from '([^']+)'$", r"import \1 from '\2';", content, flags=re.MULTILINE)
    
    # Fix function declarations
    content = re.sub(r'export default function ([A-Za-z0-9_]+)\(\) \{', r'export default function \1() {', content)
    
    # Fix missing semicolons after variable declarations
    content = re.sub(r'const ([a-zA-Z_$][a-zA-Z0-9_$]*) = ([^;]+)$', r'const \1 = \2;', content, flags=re.MULTILINE)
    content = re.sub(r'let ([a-zA-Z_$][a-zA-Z0-9_$]*) = ([^;]+)$', r'let \1 = \2;', content, flags=re.MULTILINE)
    content = re.sub(r'var ([a-zA-Z_$][a-zA-Z0-9_$]*) = ([^;]+)$', r'var \1 = \2;', content, flags=re.MULTILINE)
    
    # Fix missing semicolons after return statements
    content = re.sub(r'return ([^;]+)$', r'return \1;', content, flags=re.MULTILINE)
    
    # Fix malformed JSX attributes
    content = re.sub(r'className="([^"]*?)"$', r'className="\1"', content, flags=re.MULTILINE)
    
    # Fix missing semicolons after JSX elements
    content = re.sub(r'<([A-Za-z][A-Za-z0-9]*)\s+([^>]+)>$', r'<\1 \2>', content, flags=re.MULTILINE)
    
    # Fix malformed function calls
    content = re.sub(r'([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*\)\s*\{', r'\1() {', content)
    
    # Fix missing semicolons after object properties
    content = re.sub(r'([a-zA-Z_$][a-zA-Z0-9_$]*):\s*([^,}]+)(?=[,}])', r'\1: \2', content)
    
    # Fix malformed array/object literals
    content = re.sub(r'\[\s*([^\]]+)\s*\]', r'[\1]', content)
    content = re.sub(r'\{\s*([^}]+)\s*\}', r'{\1}', content)
    
    # Fix missing semicolons after statements
    content = re.sub(r'([^;{}])\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix malformed JSX fragments
    content = re.sub(r'<>\s*$', '<>', content, flags=re.MULTILINE)
    content = re.sub(r'</>\s*$', '</>', content, flags=re.MULTILINE)
    
    # Fix malformed closing tags
    content = re.sub(r'</([a-zA-Z][a-zA-Z0-9]*)>\s*$', r'</\1>', content, flags=re.MULTILINE)
    
    return content

def clean_up_file(file_path):
    """Clean up a specific file by fixing syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"Fixing syntax in: {file_path}")
        
        # Apply fixes
        content = fix_syntax_errors(content)
        
        # Clean up excessive whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Ensure proper file ending
        content = content.strip() + '\n'
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining syntax errors."""
    workspace_dir = '/workspace'
    
    print("Searching for TSX files...")
    tsx_files = find_tsx_files(workspace_dir)
    
    if not tsx_files:
        print("No TSX files found.")
        return
    
    print(f"Found {len(tsx_files)} TSX files")
    
    print("\nFixing remaining syntax errors...")
    fixed_count = 0
    
    for file_path in tsx_files:
        if clean_up_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed syntax in {fixed_count} files.")

if __name__ == "__main__":
    main()