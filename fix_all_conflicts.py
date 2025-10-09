#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Handle simple cases where it's just the same content on both sides
        simple_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n\1\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3a03'
        content = re.sub(simple_pattern, r'\1', content, flags=re.DOTALL)
        
        # Handle cases where one side is empty
        empty_head_pattern = r'<<<<<<< HEAD\n=======\n(.*?)\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3a03'
        content = re.sub(empty_head_pattern, r'\1', content, flags=re.DOTALL)
        
        empty_origin_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3a03'
        content = re.sub(empty_origin_pattern, r'\1', content, flags=re.DOTALL)
        
        # Handle cases where we need to choose the longer/more complete content
        complex_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3a03'
        
        def resolve_complex_conflict(match):
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
            
            # For about page, prefer the more complete version
            if 'About Zion Tech Group' in head_content and 'min-h-screen bg-gradient-to-br from-slate-900' in head_content:
                return head_content
            if 'About Zion Tech Group' in origin_content and 'min-h-screen bg-gradient-to-br from-slate-900' in origin_content:
                return origin_content
            
            # If head content is more substantial, keep it
            if len(head_content) > len(origin_content):
                return head_content
            else:
                return origin_content
        
        content = re.sub(complex_pattern, resolve_complex_conflict, content, flags=re.DOTALL)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
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