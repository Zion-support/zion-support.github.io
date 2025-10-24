#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix common merge conflict patterns in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n', r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> branch (without newlines)
        content = re.sub(r'<<<<<<< HEAD(.*?)=======(.*?)>>>>>>> [^\n]+', r'\1', content, flags=re.DOTALL)
        
        # Pattern 3: Simple <<<<<<< HEAD ... ======= ... >>>>>>> 
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', r'\1\n', content, flags=re.DOTALL)
        
        # Pattern 4: <<<<<<< HEAD ... ======= ... >>>>>>> (inline)
        content = re.sub(r'<<<<<<< HEAD(.*?)=======(.*?)>>>>>>> [^\n]+', r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up any orphaned ======= or >>>>>>> lines
        content = re.sub(r'^=======.*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> .*$', '', content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Clean up trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all relevant files"""
    # Get all TypeScript, JavaScript, and JSX files
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()