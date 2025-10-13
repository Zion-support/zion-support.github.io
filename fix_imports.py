#!/usr/bin/env python3
"""
Script to fix missing imports in TypeScript/React files.
"""

import os
import re
import sys
from pathlib import Path

def fix_imports(file_path):
    """Fix missing imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file needs fixing
        needs_fixing = False
        missing_imports = []
        
        # Check for common missing imports
        if 'Helmet' in content and 'import.*Helmet' not in content:
            missing_imports.append("import { Helmet } from 'react-helmet-async';")
            needs_fixing = True
        
        if 'Link' in content and 'import.*Link' not in content:
            missing_imports.append("import { Link } from 'react-router-dom';")
            needs_fixing = True
        
        if 'ArrowRight' in content and 'import.*ArrowRight' not in content:
            missing_imports.append("import { ArrowRight } from 'lucide-react';")
            needs_fixing = True
        
        if 'lazy' in content and 'import.*lazy' not in content:
            missing_imports.append("import { lazy } from 'react';")
            needs_fixing = True
        
        if 'Suspense' in content and 'import.*Suspense' not in content:
            missing_imports.append("import { Suspense } from 'react';")
            needs_fixing = True
        
        if not needs_fixing:
            return False
        
        # Find the first import statement or add at the beginning
        lines = content.split('\n')
        insert_index = 0
        
        # Find where to insert imports
        for i, line in enumerate(lines):
            if line.strip().startswith('import '):
                insert_index = i
            elif line.strip() and not line.strip().startswith('//') and not line.strip().startswith('/*'):
                break
        
        # Add missing imports
        for import_stmt in missing_imports:
            if import_stmt not in content:
                lines.insert(insert_index, import_stmt)
                insert_index += 1
        
        # Write the fixed content back
        new_content = '\n'.join(lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with missing imports."""
    workspace = Path('/workspace')
    app_dir = workspace / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all .tsx files
    files_to_check = []
    for file_path in app_dir.rglob('*.tsx'):
        files_to_check.append(file_path)
    
    print(f"Checking {len(files_to_check)} files for missing imports")
    
    fixed_count = 0
    for file_path in files_to_check:
        if fix_imports(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path.relative_to(workspace)}")
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()