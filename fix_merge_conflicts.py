#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        # <<<<<<< HEAD
        # ... content ...
        # =======
        # ... other content ...
        # >>>>>>> branch_name
        
        # Remove all merge conflict markers and keep only HEAD content
        # This regex matches the entire conflict block and replaces with HEAD content
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+'
        
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts in one file
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n', '', new_content)
        new_content = re.sub(r'=======.*?\n>>>>>>> [^\n]+\n?', '', new_content, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts"""
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to check")
    
    fixed_count = 0
    for file_path in files_to_process:
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has merge conflicts
                if '<<<<<<< HEAD' in content:
                    if fix_merge_conflicts(file_path):
                        fixed_count += 1
                        
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()