#!/usr/bin/env python3
"""
Script to fix merge conflicts in TSX files by choosing the more complete version.
"""

import os
import re
import glob

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflicts
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> cursor/fix-errors-and-merge-to-main-9874'
        
        # Replace merge conflicts with the content after =======
        def replace_conflict(match):
            return match.group(1).strip()
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Find all TSX files with merge conflicts
    tsx_files = glob.glob('app/**/*.tsx', recursive=True)
    tsx_files.extend(glob.glob('*.tsx'))
    tsx_files.extend(glob.glob('*.ts'))
    tsx_files.extend(glob.glob('*.js'))
    
    fixed_count = 0
    total_files = 0
    
    for file_path in tsx_files:
        if os.path.isfile(file_path):
            total_files += 1
            if fix_merge_conflicts_in_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files.")

if __name__ == "__main__":
    main()