#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the latest version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD.*?=======.*?=======.*?>>>>>>> cursor/fix-errors-and-merge-to-main-529a'
        
        # Find all conflicts
        conflicts = re.findall(conflict_pattern, content, re.DOTALL)
        
        if not conflicts:
            return False
        
        # For each conflict, keep the latest version (after the last =======)
        def replace_conflict(match):
            conflict_text = match.group(0)
            # Split by ======= and take the last part (after the last =======)
            parts = conflict_text.split('=======')
            if len(parts) >= 2:
                # Take the last part and remove the >>>>>>> line
                last_part = parts[-1]
                # Remove the >>>>>>> line
                lines = last_part.split('\n')
                # Find the line with >>>>>>>
                for i, line in enumerate(lines):
                    if '>>>>>>>' in line:
                        # Keep everything before this line
                        return '\n'.join(lines[:i])
                return last_part
            return conflict_text
        
        # Replace all conflicts
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle simple conflicts without multiple ======= markers
        simple_conflict_pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> cursor/fix-errors-and-merge-to-main-529a'
        new_content = re.sub(simple_conflict_pattern, replace_conflict, new_content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts"""
    # Get all TypeScript/TSX files in the app directory
    pattern = "app/**/*.{ts,tsx}"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    total_files = len(files)
    
    print(f"Processing {total_files} files...")
    
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files out of {total_files}")

if __name__ == "__main__":
    main()