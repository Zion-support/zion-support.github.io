#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by choosing the better version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+', content, flags=re.DOTALL)
        
        if len(parts) >= 3:
            # Choose the better version (after =======)
            new_content = parts[0] + parts[2] + parts[4] if len(parts) > 4 else parts[0] + parts[2]
            
            # Clean up any remaining merge conflict markers
            new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> cursor[^\n]*\n?', '', new_content, flags=re.DOTALL)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            return True
        else:
            print(f"Could not parse merge conflicts in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in app directory with merge conflicts
    app_files = glob.glob('/workspace/app/**/*.{ts,tsx,js,jsx}', recursive=True)
    
    fixed_count = 0
    for file_path in app_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
