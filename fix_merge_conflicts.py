#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping the latest version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the latest version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        # We'll keep everything after ======= and before >>>>>>>
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        keep_lines = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                keep_lines = False
                continue
            elif line.strip().startswith('======='):
                keep_lines = True
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                keep_lines = False
                continue
            elif not in_conflict or keep_lines:
                fixed_lines.append(line)
        
        # Write the fixed content back
        fixed_content = '\n'.join(fixed_lines)
        
        # Only write if content changed
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            print(f"No conflicts found in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in ['node_modules', '.git', 'dist', 'build', '.next'])]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()