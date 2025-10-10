#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove all merge conflict markers and keep the last version (usually the most complete)
        lines = content.split('\n')
        fixed_lines = []
        skip_until_end = False
        in_conflict = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                skip_until_end = True
                continue
            elif line.strip() == '=======':
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                skip_until_end = False
                continue
            elif not skip_until_end:
                fixed_lines.append(line)
        
        # Write the fixed content back
        fixed_content = '\n'.join(fixed_lines)
        
        # Clean up any remaining artifacts
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)  # Remove excessive newlines
        fixed_content = re.sub(r'^\s*\n', '', fixed_content, flags=re.MULTILINE)  # Remove leading empty lines
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path) and fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()