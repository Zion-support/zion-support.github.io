#!/usr/bin/env python3
"""
Script to properly add missing imports at the top of files
"""

import os
import re
import glob

def fix_imports_in_file(file_path):
    """Fix imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check what imports are needed
        needed_imports = []
        
        if 'Helmet' in content and "import { Helmet }" not in content:
            needed_imports.append("import { Helmet } from 'react-helmet-async';")
        
        if 'Link' in content and "import { Link }" not in content:
            needed_imports.append("import { Link } from 'react-router-dom';")
        
        if 'ArrowRight' in content and "import { ArrowRight }" not in content:
            needed_imports.append("import { ArrowRight } from 'lucide-react';")
        
        if 'HelmetProvider' in content and "import { HelmetProvider }" not in content:
            needed_imports.append("import { HelmetProvider } from 'react-helmet-async';")
        
        if 'BrowserRouter' in content and "import { BrowserRouter }" not in content:
            needed_imports.append("import { BrowserRouter } from 'react-router-dom';")
        
        if 'Suspense' in content and "import { Suspense }" not in content:
            needed_imports.append("import { Suspense } from 'react';")
        
        if 'Routes' in content and "import { Routes }" not in content:
            needed_imports.append("import { Routes } from 'react-router-dom';")
        
        if 'Route' in content and "import { Route }" not in content:
            needed_imports.append("import { Route } from 'react-router-dom';")
        
        if not needed_imports:
            return False
        
        # Add imports at the very beginning of the file
        new_content = '\n'.join(needed_imports) + '\n\n' + content
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed imports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing imports in {file_path}: {e}")
        return False

def main():
    """Fix imports in all files."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_imports_in_file(file_path):
                    fixed_count += 1
    
    print(f"\nFixed imports in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()