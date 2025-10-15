#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
and removing all conflict markers.
"""

import os
import re
import sys

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        # <<<<<<< HEAD
        # ... content ...
        # =======
        # ... other content ...
        # >>>>>>> branch-name
        conflict_pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+'
        
        # Remove all merge conflict blocks (keeping HEAD version)
        # This regex removes everything from <<<<<<< HEAD to ======= and from ======= to >>>>>>> branch
        lines = content.split('\n')
        new_lines = []
        skip_until_equals = False
        skip_until_end = False
        
        for line in lines:
            if '<<<<<<< HEAD' in line:
                skip_until_equals = True
                continue
            elif '=======' in line and skip_until_equals:
                skip_until_equals = False
                skip_until_end = True
                continue
            elif '>>>>>>> ' in line and skip_until_end:
                skip_until_end = False
                continue
            elif not skip_until_equals and not skip_until_end:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Additional cleanup for any remaining malformed content
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        
        # Clean up multiple empty lines
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    if len(sys.argv) > 1:
        files_to_fix = sys.argv[1:]
    else:
        # Read from merge_conflicts.txt
        try:
            with open('merge_conflicts.txt', 'r') as f:
                files_to_fix = [line.strip() for line in f if line.strip()]
        except FileNotFoundError:
            print("merge_conflicts.txt not found. Please provide file paths as arguments.")
            return
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
        else:
            print(f"File not found: {file_path}")
    
    print(f"\nFixed merge conflicts in {fixed_count}/{total_count} files")

if __name__ == "__main__":
    main()