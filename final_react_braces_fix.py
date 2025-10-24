#!/usr/bin/env python3
"""
Final script to fix double braces in React import statements.
"""

import os
import re
import glob
from pathlib import Path

def fix_double_braces(file_path):
    """Fix double braces in React import statements"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix double braces in React import
        content = re.sub(r"import\s*{\s*{\s*React\s*}\s*from\s*'react'", r"import React from 'react'", content)
        content = re.sub(r"import\s*{\s*{\s*React\s*}\s*from\s*\"react\"", r"import React from \"react\"", content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return content != original_content
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files precisely"""
    app_dir = Path('/workspace/app')
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TSX files to fix")
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_double_braces(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()