#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix simple merge conflicts by keeping the non-HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Pattern to match conflicts where HEAD has simple placeholder content
        # and the other branch has real implementation
        pattern = r'<<<<<<< HEAD\n.*?=======\n(.*?)>>>>>>> [^\n]+\n'
        
        # Find all conflicts
        conflicts = re.findall(pattern, content, re.DOTALL)
        
        if not conflicts:
            return False
            
        # Replace conflicts with the non-HEAD version
        new_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n.*?=======\n', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>> [^\n]+\n', '', new_content)
        
        # Write back if changed
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    # Find all TypeScript/JavaScript files with conflicts
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts', 
        'src/**/*.jsx',
        'src/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
                    print(f"Fixed: {file_path}")
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()