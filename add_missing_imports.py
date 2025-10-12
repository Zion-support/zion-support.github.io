#!/usr/bin/env python3
"""
Script to add all missing imports systematically
"""

import os
import re
import glob

def add_missing_imports_to_file(file_path):
    """Add missing imports to a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        new_lines = []
        imports_added = set()
        
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
        
        # Find where to insert imports
        import_section_end = 0
        for i, line in enumerate(lines):
            if line.strip().startswith('import ') and 'from' in line:
                import_section_end = i + 1
            elif line.strip() and not line.strip().startswith('import '):
                break
        
        # Insert imports
        for i, line in enumerate(lines):
            new_lines.append(line)
            if i == import_section_end - 1:
                for import_line in needed_imports:
                    new_lines.append(import_line)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Added missing imports to: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error adding imports to {file_path}: {e}")
        return False

def main():
    """Add missing imports to all files."""
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
                if add_missing_imports_to_file(file_path):
                    fixed_count += 1
    
    print(f"\nAdded missing imports to {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()