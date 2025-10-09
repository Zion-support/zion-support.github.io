#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflicts
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> .*?'
        
        # Replace conflicts with the content after =======
        fixed_content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> .*?', '', fixed_content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all .tsx files with merge conflicts
    tsx_files = glob.glob('/workspace/app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<<<<<<< HEAD' in content:
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()