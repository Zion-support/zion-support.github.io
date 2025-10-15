#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/JSX files
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
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n?'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            other_content = match.group(2).strip()
            
            # If one side is empty or just comments, prefer the non-empty side
            if not head_content or head_content.startswith('//') and not other_content.startswith('//'):
                return other_content + '\n' if other_content else ''
            elif not other_content or other_content.startswith('//') and not head_content.startswith('//'):
                return head_content + '\n' if head_content else ''
            else:
                # If both have content, prefer HEAD (usually the current branch)
                return head_content + '\n' if head_content else ''
        
        # Remove merge conflict markers
        fixed_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', fixed_content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JSX files"""
    # Find all TypeScript/JSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()