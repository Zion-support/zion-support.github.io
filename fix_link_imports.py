#!/usr/bin/env python3
"""
Script to fix missing Link imports in TSX files.
"""

import os
import re
from pathlib import Path

def fix_link_imports_in_file(file_path):
    """Fix missing Link imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file uses Link but doesn't import it
        if '<Link' in content and 'react-router-dom' not in content:
            print(f"Fixing Link import in: {file_path}")
            
            # Find the first import line
            lines = content.split('\n')
            import_line_index = -1
            
            for i, line in enumerate(lines):
                if line.strip().startswith('import '):
                    import_line_index = i
                elif line.strip() and not line.strip().startswith('//') and not line.strip().startswith('/*'):
                    break
            
            # Add the Link import
            if import_line_index >= 0:
                lines.insert(import_line_index + 1, "import { Link } from 'react-router-dom';")
            else:
                lines.insert(0, "import { Link } from 'react-router-dom';")
            
            # Write the fixed content back
            fixed_content = '\n'.join(lines)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix Link imports."""
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
        if fix_link_imports_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed Link imports in {fixed_count} files")

if __name__ == "__main__":
    main()