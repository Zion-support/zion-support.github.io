#!/usr/bin/env python3
"""
Script to fix import paths in ai-services directory
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
    
    # Fix Navigation and Footer imports
    content = re.sub(r"import Navigation from '\.\./components/Navigation';", 
                    "import Navigation from '../../components/Navigation';", content)
    content = re.sub(r"import Footer from '\.\./components/Footer';", 
                    "import Footer from '../../components/Footer';", content)
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return False

def main():
    """Main function to fix all import paths"""
    # Get all TypeScript/TSX files in the ai-services directory
    pattern = "/workspace/app/ai-services/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    total_count = len(files)
    
    for file_path in files:
        if fix_import_paths(file_path):
            fixed_count += 1
    
    print(f"Fixed imports in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()