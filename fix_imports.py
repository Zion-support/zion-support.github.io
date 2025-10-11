#!/usr/bin/env python3
"""
Fix import paths for components in different directories.
"""

import os
import re
import glob
from pathlib import Path

def fix_imports_in_file(file_path):
    """Fix import paths in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Calculate the correct relative path to components
        file_path_obj = Path(file_path)
        depth = len(file_path_obj.parts) - 2  # Subtract 'app' and filename
        
        # Create the correct relative path
        if depth == 1:
            # Files directly in app/
            navigation_path = './components/Navigation'
            footer_path = './components/Footer'
        elif depth == 2:
            # Files in app/subdirectory/
            navigation_path = '../components/Navigation'
            footer_path = '../components/Footer'
        elif depth == 3:
            # Files in app/subdirectory/subdirectory/
            navigation_path = '../../components/Navigation'
            footer_path = '../../components/Footer'
        else:
            # For deeper nesting, use relative path
            navigation_path = '../' * (depth - 1) + 'components/Navigation'
            footer_path = '../' * (depth - 1) + 'components/Footer'
        
        # Fix the import statements
        content = re.sub(r"import Navigation from '[^']*'", f"import Navigation from '{navigation_path}'", content)
        content = re.sub(r"import Footer from '[^']*'", f"import Footer from '{footer_path}'", content)
        
        # Write the fixed content back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all import paths."""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip backup and disabled files
            if any(skip in file_path for skip in ['backup', 'disabled', '.original', 'node_modules']):
                continue
                
            files_processed += 1
            if fix_imports_in_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed imports in {files_fixed} files")

if __name__ == "__main__":
    main()