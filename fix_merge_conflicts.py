#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match merge conflicts
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content + '\n'
        
        # Remove merge conflict markers
        content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.js',
        'components/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that actually have merge conflicts
    files_with_conflicts = []
    for file_path in files_to_fix:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    files_with_conflicts.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
