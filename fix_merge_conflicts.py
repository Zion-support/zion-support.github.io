#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the app directory
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
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            other_content = match.group(2).strip()
            
            # Simple resolution strategy: prefer HEAD content if it's not empty
            if head_content and not head_content.isspace():
                return head_content
            elif other_content and not other_content.isspace():
                return other_content
            else:
                return head_content  # Default to HEAD
        
        # Replace all merge conflicts
        new_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts in app directory"""
    app_dir = '/workspace/app'
    fixed_count = 0
    
    # Find all TypeScript/JavaScript files in app directory
    patterns = [
        f'{app_dir}/**/*.ts',
        f'{app_dir}/**/*.tsx',
        f'{app_dir}/**/*.js',
        f'{app_dir}/**/*.jsx'
    ]
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == '__main__':
    main()