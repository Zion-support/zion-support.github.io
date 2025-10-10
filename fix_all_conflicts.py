#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern 1: Remove everything from <<<<<<< HEAD to ======= (keep nothing from HEAD)
        content = re.sub(r'<<<<<<< HEAD.*?=======\s*\n', '', content, flags=re.DOTALL)
        
        # Pattern 2: Remove any remaining >>>>>>> lines
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Pattern 3: Remove any remaining <<<<<<< HEAD lines
        content = re.sub(r'^<<<<<<< HEAD.*?\n', '', content, flags=re.MULTILINE)
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js',
        '**/*.css',
        '**/*.json'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nProcessed {total_files} files")
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()