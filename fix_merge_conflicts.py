#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to automatically resolve merge conflicts by choosing the newer version
=======
Script to automatically resolve merge conflicts by choosing the HEAD version
>>>>>>> 8669b08b156fc236de843adab9f429d1f2f974da
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Pattern to match merge conflict markers
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def replace_conflict(match):
            # Choose the version after ======= (newer version)
            return match.group(2) + '\n'
        
        # Replace all merge conflicts
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n', '', new_content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed merge conflicts in {file_path}")
            return True
        return False
=======
        # Remove merge conflict markers and keep HEAD version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> origin/main
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/main'
        content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> cursor/...
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor/[^\n]+'
        content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> cursor/...
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor/[^\n]+'
        content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
>>>>>>> 8669b08b156fc236de843adab9f429d1f2f974da
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
<<<<<<< HEAD
    # Find all TypeScript and TSX files
    patterns = ['**/*.ts', '**/*.tsx']
    files = []
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
=======
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.ts',
        'src/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.tsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
>>>>>>> 8669b08b156fc236de843adab9f429d1f2f974da
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()