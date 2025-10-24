#!/usr/bin/env python3
"""
Final script to fix lucide-react import statements.
"""

import os
import re
import glob
from pathlib import Path

def fix_lucide_imports(file_path):
    """Fix lucide-react import statements specifically"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix lucide-react imports - add missing opening brace
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*'lucide-react'", r"import { \1 } from 'lucide-react'", content)
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*\"lucide-react\"", r"import { \1 } from \"lucide-react\"", content)
        
        # Fix malformed lucide-react imports with missing opening brace
        content = re.sub(r"import\s*([^}]+)\s*}\s*from\s*'lucide-react'", r"import { \1 } from 'lucide-react'", content)
        content = re.sub(r"import\s*([^}]+)\s*}\s*from\s*\"lucide-react\"", r"import { \1 } from \"lucide-react\"", content)
        
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
        if fix_lucide_imports(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()