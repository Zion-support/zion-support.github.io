#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content by conflict markers
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        keep_section = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_section = True
                continue
            elif line.strip() == '=======':
                keep_section = False
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                keep_section = False
                continue
            elif in_conflict and not keep_section:
                # Skip lines in the non-HEAD section
                continue
            else:
                # Keep the line
                fixed_lines.append(line)
        
        # Write the fixed content back
        fixed_content = '\n'.join(fixed_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and 'dist' not in f]
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    print(f"Found {total_count} files to check for merge conflicts...")
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files out of {total_count} files checked.")

if __name__ == "__main__":
    main()