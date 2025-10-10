#!/usr/bin/env python3
import os
import re
import glob

def fix_import_paths(file_path):
    """Fix import paths in TSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix relative import paths
        content = re.sub(r"from '\.\./\.\./components/", "from '../components/", content)
        content = re.sub(r"from \"\.\./\.\./components/", "from \"../components/", content)
        content = re.sub(r"from '\.\./\.\./\.\./components/", "from '../components/", content)
        content = re.sub(r"from \"\.\./\.\./\.\./components/", "from \"../components/", content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_import_paths(file_path):
                fixed_count += 1
                print(f"Fixed: {file_path}")
    
    print(f"Fixed import paths in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()
