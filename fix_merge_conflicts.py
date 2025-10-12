#!/usr/bin/env python3
"""
Fix merge conflicts in files by keeping the newer version (after =======)
"""

import os
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        keep_section = False
        
        for line in lines:
            if line.startswith('<<<<<<<'):
                in_conflict = True
                continue
            elif line.startswith('======='):
                keep_section = True
                continue
            elif line.startswith('>>>>>>>'):
                in_conflict = False
                keep_section = False
                continue
            elif in_conflict and not keep_section:
                continue
            else:
                fixed_lines.append(line)
        
        new_content = '\n'.join(fixed_lines)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if any(skip in file_path for skip in ['.original', '.backup', '.broken']):
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()