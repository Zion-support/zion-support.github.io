#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts
"""
import os
import re
import glob

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match merge conflicts
        # <<<<<<< HEAD
        # ... content ...
        # =======
        # ... newer content ...
        # >>>>>>> branch-name
        
        # Remove everything before ======= and keep everything after
        pattern = r'<<<<<<< HEAD.*?=======\s*\n(.*?)(?=>>>>>>> |$)'
        
        def replace_conflict(match):
            return match.group(1)
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>> .*', '', new_content)
        
        # Clean up extra newlines
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/**/*.tsx',
        '/workspace/**/*.ts',
        '/workspace/**/*.jsx',
        '/workspace/**/*.js'
    ]
    
    all_files = []
    for pattern in patterns:
        all_files.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other irrelevant directories
    files_to_process = []
    for file_path in all_files:
        if any(exclude in file_path for exclude in ['node_modules', '.git', 'dist', 'build']):
            continue
        files_to_process.append(file_path)
    
    print(f"Processing {len(files_to_process)} files...")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_merge_conflicts_in_file(file_path):
            print(f"Fixed: {file_path}")
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()