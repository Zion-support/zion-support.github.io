#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> ', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
        
        # Keep the newer version (after =======)
        new_content = parts[0]
        for i in range(1, len(parts), 3):
            if i + 1 < len(parts):
                new_content += parts[i + 1]  # Keep the part after =======
            if i + 2 < len(parts):
                new_content += parts[i + 2]  # Keep the part after >>>>>>>
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or 'dist' in file_path or 'build' in file_path:
                continue
                
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()