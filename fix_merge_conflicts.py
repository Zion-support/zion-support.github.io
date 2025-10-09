#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3a03'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            origin_content = match.group(2).strip()
            
            # If both sides are identical, keep one
            if head_content == origin_content:
                return head_content
            
            # If one side is empty, keep the non-empty one
            if not head_content:
                return origin_content
            if not origin_content:
                return head_content
            
            # If head content is more substantial, keep it
            if len(head_content) > len(origin_content):
                return head_content
            else:
                return origin_content
        
        # Replace all merge conflicts
        new_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Also handle simple cases where it's just the same content
        simple_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n\1\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3a03'
        new_content = re.sub(simple_pattern, r'\1', new_content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed merge conflicts in {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Get all TypeScript/JavaScript files in src directory
    src_files = glob.glob('src/**/*.{ts,tsx,js,jsx}', recursive=True)
    
    fixed_count = 0
    for file_path in src_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()