#!/usr/bin/env python3
"""
Advanced script to resolve merge conflicts by keeping the latest version
and properly reconstructing the files.
"""

import os
import re
import glob

def fix_merge_conflicts_advanced(file_path):
    """Fix merge conflicts in a single file using advanced logic."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<<' not in content or '=======' not in content or '>>>>>>>' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split the content into lines
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        conflict_start = -1
        found_equals = False
        
        for i, line in enumerate(lines):
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                conflict_start = i
                found_equals = False
                continue
            elif line.strip().startswith('======='):
                found_equals = True
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                conflict_start = -1
                found_equals = False
                continue
            elif not in_conflict:
                # Not in a conflict, keep the line
                new_lines.append(line)
            elif in_conflict and found_equals:
                # We're in a conflict and have passed the ======= marker
                # This means we want to keep this line (it's the new version)
                new_lines.append(line)
            # If in_conflict is True but found_equals is False, skip the line
            # (this is the old version before =======)
        
        new_content = '\n'.join(new_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Get all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts',
        'vite.config.ts',
        'main.tsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    print(f"Found {total_count} files to check for merge conflicts...")
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_merge_conflicts_advanced(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files out of {total_count} files checked.")

if __name__ == "__main__":
    main()