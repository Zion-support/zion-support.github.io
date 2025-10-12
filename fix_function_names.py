#!/usr/bin/env python3
import os
import re
import glob

def fix_function_name(file_path):
    """Fix function names that start with numbers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if there's a function name starting with a number
        if re.search(r'export default function \d+', content):
            # Extract the directory name to create proper content
            dir_name = os.path.basename(os.path.dirname(file_path))
            function_name = ''.join(word.capitalize() for word in dir_name.replace('-', ' ').split())
            page_title = ' '.join(word.capitalize() for word in dir_name.replace('-', ' ').split())
            
            # Replace the function name
            content = re.sub(r'export default function \d+\w+', f'export default function {function_name}', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed function name in: {file_path}")
            return True
        
        print(f"No changes needed: {file_path}")
        return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all function names that start with numbers"""
    app_dir = "/workspace/app"
    tsx_files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)
    
    fixed_count = 0
    total_count = len(tsx_files)
    
    print(f"Found {total_count} TSX files to check for invalid function names...")
    
    for file_path in tsx_files:
        if fix_function_name(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()