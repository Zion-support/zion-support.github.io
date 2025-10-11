#!/usr/bin/env python3
"""
Script to fix all import paths in the app directory
"""

import os
import re
import glob

def fix_import_paths(file_path):
    """Fix import paths in a single file"""
    print(f"Fixing imports in {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False
    
    # Calculate the correct relative path to components
    file_dir = os.path.dirname(file_path)
    app_dir = "/workspace/app"
    
    # Count how many levels deep we are from app directory
    relative_path = os.path.relpath(file_dir, app_dir)
    depth = len(relative_path.split(os.sep)) - 1 if relative_path != '.' else 0
    
    # Build the correct import path
    if depth == 0:
        # We're in the app directory itself
        import_path = './components'
    else:
        # We're in a subdirectory, need to go up
        import_path = '../' * depth + 'components'
    
    # Fix Navigation and Footer imports
    content = re.sub(r"import Navigation from '\.\./components/Navigation';", 
                    f"import Navigation from '{import_path}/Navigation';", content)
    content = re.sub(r"import Footer from '\.\./components/Footer';", 
                    f"import Footer from '{import_path}/Footer';", content)
    
    # Also fix any other relative imports that might be wrong
    content = re.sub(r"import Navigation from '\.\./\.\./components/Navigation';", 
                    f"import Navigation from '{import_path}/Navigation';", content)
    content = re.sub(r"import Footer from '\.\./\.\./components/Footer';", 
                    f"import Footer from '{import_path}/Footer';", content)
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def main():
    """Main function to fix all import paths"""
    # Get all TypeScript/TSX files in the app directory
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    # Skip the main app files that are already correct
    skip_files = [
        '/workspace/app/page.tsx',
        '/workspace/app/layout.tsx',
        '/workspace/app/components/Navigation.tsx',
        '/workspace/app/components/Footer.tsx'
    ]
    
    files_to_fix = [f for f in files if f not in skip_files]
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    for file_path in files_to_fix:
        if fix_import_paths(file_path):
            fixed_count += 1
    
    print(f"Fixed imports in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()