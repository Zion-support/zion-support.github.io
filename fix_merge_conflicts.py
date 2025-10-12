#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by removing conflict markers
and keeping the HEAD version (the content between <<<<<<< HEAD and =======)
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        # <<<<<<< HEAD
        # ... content to keep ...
        # =======
        # ... content to discard ...
        # >>>>>>> origin/main (or other branch)
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in sequence
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n', '', fixed_content)
        fixed_content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+\n', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'=======\n', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n', '', fixed_content)
        
        # Clean up any double newlines
        fixed_content = re.sub(r'\n\n\n+', '\n\n', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all relevant files"""
    # File patterns to search for
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js',
        '**/*.json',
        '**/*.css',
        '**/*.md'
    ]
    
    fixed_files = []
    error_files = []
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has merge conflict markers
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    print(f"Fixing merge conflicts in: {file_path}")
                    if fix_merge_conflicts(file_path):
                        fixed_files.append(file_path)
                    else:
                        error_files.append(file_path)
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
                error_files.append(file_path)
    
    print(f"\nFixed {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  ✓ {file_path}")
    
    if error_files:
        print(f"\nErrors in {len(error_files)} files:")
        for file_path in error_files:
            print(f"  ✗ {file_path}")

if __name__ == "__main__":
    main()