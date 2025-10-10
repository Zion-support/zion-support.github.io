#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflicts
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def replace_conflict(match):
            head_content = match.group(1).strip()
            other_content = match.group(2).strip()
            
            # If head content is empty or just whitespace, use other content
            if not head_content or head_content.isspace():
                return other_content + '\n' if other_content else ''
            
            # If other content is empty or just whitespace, use head content
            if not other_content or other_content.isspace():
                return head_content + '\n' if head_content else ''
            
            # If both have content, prefer head content but clean it up
            return head_content + '\n'
        
        # Replace all merge conflicts
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n', '', new_content, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        '**/*.tsx',
        '**/*.ts'
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_merge_conflicts(file_path):
                fixed_files.append(file_path)
    
    print(f"\nFixed merge conflicts in {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  - {file_path}")
    
    return len(fixed_files)

if __name__ == "__main__":
    main()