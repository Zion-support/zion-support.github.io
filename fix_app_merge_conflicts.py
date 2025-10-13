#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the content after =======
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]*'
        
        def replace_conflict(match):
            # Return only the content after =======
            return match.group(1).strip()
        
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there's no ======= (just <<<<<<< HEAD)
        pattern2 = r'<<<<<<< HEAD.*?>>>>>>> [^\n]*'
        new_content = re.sub(pattern2, '', new_content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        new_content = re.sub(r'=======.*?>>>>>>> [^\n]*', '', new_content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()