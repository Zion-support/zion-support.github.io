#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the latest version
(after the ======= markers) and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<<' not in content or '=======' not in content or '>>>>>>>' not in content:
            return False
        
        # Split content by conflict markers and keep the latest version
        # Pattern: <<<<<<< ... ======= ... >>>>>>>
        # We want to keep everything after ======= and before >>>>>>>
        
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
                if in_conflict:
                    keep_lines = True
                    continue
            elif line.strip().startswith('>>>>>>>'):
                if in_conflict:
                    in_conflict = False
                    keep_lines = False
                    continue
            
            if not in_conflict or keep_lines:
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
    """Main function to fix all merge conflicts."""
    # Find all TypeScript/TSX files in the app directory
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    total_conflicts = 0
    
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
            total_conflicts += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files out of {len(files)} total files.")
    
    # Also check for any remaining conflict markers
    remaining_conflicts = []
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                    remaining_conflicts.append(file_path)
        except:
            pass
    
    if remaining_conflicts:
        print(f"\nWarning: {len(remaining_conflicts)} files still have conflict markers:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("\nAll merge conflicts have been resolved!")

if __name__ == "__main__":
    main()