#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if ' and before >>>>>>>
        pattern1 = r'.*?
        pattern = r'\n(.*?)\n
        content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Pattern 3: Remove any remaining ======= lines
        content = re.sub(r'^=======.*?\n', '', content, flags=re.MULTILINE)
        
        # Pattern 4: Remove any remaining 
        content = re.sub(r'^>>>>>>>.*?\n', '', content, flags=re.MULTILINE)
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.ts',
        'src/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.tsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()