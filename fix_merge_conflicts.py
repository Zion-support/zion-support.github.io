#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts by choosing the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+'
        
        # Replace with HEAD version (first capture group)
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n', '', new_content)
        new_content = re.sub(r'=======\n.*?\n>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+\n?', '', new_content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed merge conflicts in {file_path}")
            return True
        else:
            print(f"No conflicts found in {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the entire project (excluding node_modules and .next)
    files = []
    for ext in ['*.tsx', '*.ts', '*.js', '*.jsx']:
        files.extend(glob.glob(f'./**/{ext}', recursive=True))
    
    # Filter out node_modules and .next directories
    files = [f for f in files if 'node_modules' not in f and '.next' not in f]
    
    fixed_count = 0
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()