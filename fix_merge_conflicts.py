#!/usr/bin/env python3
"""
Script to fix merge conflicts in the codebase
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
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the latest version (after =======)
        lines = content.split('\n')
        fixed_lines = []
        skip_until_end = False
        in_conflict = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                skip_until_end = False
                continue
            elif line.strip() == '=======':
                skip_until_end = True
                continue
            elif line.strip() == '>>>>>>>':
                in_conflict = False
                skip_until_end = False
                continue
            elif in_conflict and skip_until_end:
                # Skip lines between ======= and >>>>>>>
                continue
            elif in_conflict and not skip_until_end:
                # Keep lines between <<<<<<< and =======
                fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(fixed_lines))
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
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
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()