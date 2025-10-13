#!/usr/bin/env python3
"""
Script to fix merge conflicts by keeping the newer version (after =======)
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
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?=======', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
        
        # Keep the part after ======= (newer version)
        # Find the end of the conflict (>>>>>>> )
        conflict_end = re.search(r'>>>>>>> .*', parts[1])
        if conflict_end:
            # Keep everything before the conflict and after =======
            new_content = parts[0] + parts[1][:conflict_end.start()]
        else:
            # If no end marker, keep everything after =======
            new_content = parts[0] + parts[1]
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'>>>>>>> .*', '', new_content)
        new_content = re.sub(r'<<<<<<< HEAD.*?=======', '', new_content, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/**/*.tsx',
        '/workspace/**/*.ts',
        '/workspace/**/*.jsx',
        '/workspace/**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()