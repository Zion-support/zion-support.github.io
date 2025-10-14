#!/usr/bin/env python3
"""
Script to automatically resolve Git merge conflicts by keeping the most recent version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def resolve_conflict(match):
            # Get both versions
            head_version = match.group(1)
            other_version = match.group(2)
            
            # Choose the longer version (usually more complete)
            if len(head_version.strip()) > len(other_version.strip()):
                return head_version
            else:
                return other_version
        
        # Replace all conflicts
        new_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # If content changed, write it back
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed conflicts in {file_path}")
            return True
        else:
            print(f"No conflicts found in {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript and JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    total_files = 0
    fixed_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            if fix_merge_conflicts(file_path):
                fixed_files += 1
    
    print(f"\nProcessed {total_files} files")
    print(f"Fixed conflicts in {fixed_files} files")

if __name__ == "__main__":
    main()