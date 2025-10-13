#!/usr/bin/env python3
"""
Script to fix malformed import statements where Helmet import was inserted incorrectly.
"""

import os
import re
from pathlib import Path

def fix_malformed_imports_in_file(file_path):
    """Fix malformed import statements in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has malformed imports
        if 'import {\nimport { Helmet }' in content:
            print(f"Fixing malformed imports in: {file_path}")
            
            # Fix the malformed import pattern
            content = re.sub(
                r'import \{\nimport \{ Helmet \} from \'react-helmet-async\';\n',
                r'import { Helmet } from \'react-helmet-async\';\nimport {\n',
                content
            )
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix malformed imports."""
    workspace_root = Path('/workspace')
    app_dir = workspace_root / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_malformed_imports_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed malformed imports in {fixed_count} files")

if __name__ == "__main__":
    main()