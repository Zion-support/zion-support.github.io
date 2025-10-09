#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in {file_path}")
        
        # Remove all merge conflict markers and keep the content after =======
        # This assumes we want the newer version (after =======)
        lines = content.split('\n')
        new_lines = []
        skip_until_equals = False
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_equals = True
                continue
            elif line.strip() == '=======':
                skip_until_equals = False
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_equals and not skip_until_end:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.css',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts',
        '*.css',
        '*.js',
        '*.json'
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                if fix_merge_conflicts(file_path):
                    fixed_files.append(file_path)
    
    print(f"\nFixed merge conflicts in {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  - {file_path}")
    
    # Check if there are still any merge conflicts
    remaining_conflicts = []
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            remaining_conflicts.append(file_path)
                except:
                    pass
    
    if remaining_conflicts:
        print(f"\nWarning: {len(remaining_conflicts)} files still have merge conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("\n✅ All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()