#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in {file_path}")
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        # If we have multiple parts, take the last one (after =======)
        if len(parts) > 1:
            # Find the last ======= and take everything after it
            last_equal_index = content.rfind('=======')
            if last_equal_index != -1:
                # Find the next >>>>>>> line
                next_gt_index = content.find('>>>>>>>', last_equal_index)
                if next_gt_index != -1:
                    # Take everything before the first <<<<<<< and after the last >>>>>>>
                    before_conflict = content[:content.find('<<<<<<< HEAD')]
                    after_conflict = content[next_gt_index + content[next_gt_index:].find('\n') + 1:]
                    fixed_content = before_conflict + after_conflict
                else:
                    fixed_content = parts[-1]
            else:
                fixed_content = parts[-1]
        else:
            fixed_content = content
            
        # Clean up any remaining merge markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+\n?', '', fixed_content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/React files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/components/**/*.tsx',
        '/workspace/components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()