#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?=======.*?>>>>>>> .*?\n', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
            
        # Keep the first part (before first conflict) and the parts after =======
        fixed_content = parts[0]
        
        # Process each conflict section
        conflict_sections = re.findall(r'<<<<<<< HEAD(.*?)=======(.*?)>>>>>>> .*?\n', content, flags=re.DOTALL)
        
        for i, (head_part, new_part) in enumerate(conflict_sections):
            # Use the newer version (after =======)
            fixed_content += new_part
            
            # Add the part between conflicts if it exists
            if i + 1 < len(parts):
                fixed_content += parts[i + 1]
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
            
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()