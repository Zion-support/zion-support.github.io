#!/usr/bin/env python3
"""
Script to automatically fix common merge conflict patterns
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern 1: Simple merge conflicts with HEAD and branch
        # Keep the HEAD version (first part)
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern1, r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 2: Merge conflicts with just ======= and >>>>>>>
        pattern2 = r'=======\n(.*?)\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Pattern 3: Leftover <<<<<<< HEAD markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        
        # Pattern 4: Fix common syntax issues
        # Fix unterminated string literals
        content = re.sub(r'^([^"]*"[^"]*)$', r'\1"', content, flags=re.MULTILINE)
        
        # Fix missing semicolons after imports
        content = re.sub(r'^import ([^;]+)$', r'import \1;', content, flags=re.MULTILINE)
        
        # Fix missing closing braces
        content = re.sub(r'(\w+)\s*\(\s*\)\s*\{\s*$', r'\1() {\n  // TODO: Implement\n}', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
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
    
    print(f"Processed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()