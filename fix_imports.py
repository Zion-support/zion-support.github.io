#!/usr/bin/env python3
import os
import glob

def fix_import_paths(file_path):
    """Fix import paths for Navigation and Footer components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has incorrect import paths
        if '../components/Navigation' in content or '../components/Footer' in content:
            # Count directory levels to determine correct import path
            path_parts = file_path.split('/')
            app_index = path_parts.index('app')
            depth = len(path_parts) - app_index - 2  # -2 for 'app' and 'page.tsx'
            
            # Create correct import path
            import_path = '../' * depth + 'components/'
            
            # Replace import paths
            content = content.replace('../components/Navigation', f'{import_path}Navigation')
            content = content.replace('../components/Footer', f'{import_path}Footer')
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files in nested directories
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        # Only fix files in nested directories (not direct app/*/page.tsx)
        if file_path.count('/') > 2:
            if fix_import_paths(file_path):
                fixed_count += 1
    
    print(f"Fixed import paths in {fixed_count} page files")

if __name__ == "__main__":
    main()