#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping the most recent version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the most recent version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+\n?'
        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content)
        content = re.sub(r'=======.*?\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to modify
    files_to_fix = [f for f in files_to_fix if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'out', 
        'backup-problematic-files', 'recovered-branches', 'data/',
        '.original', 'corrupted-src-backup'
    ])]
    
    print(f"Found {len(files_to_fix)} files to check for merge conflicts")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            # Check if file has merge conflicts
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    if fix_merge_conflicts(file_path):
                        fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()