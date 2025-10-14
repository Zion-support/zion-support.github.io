#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts in the codebase
"""
import os
import re
import glob

def fix_merge_conflicts_comprehensive(file_path):
    """Fix all types of merge conflicts in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove all merge conflict markers and their content
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern1 = r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern1, '', content, flags=re.DOTALL)
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> branch (without newlines)
        pattern2 = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Pattern 3: Just >>>>>>> markers
        pattern3 = r'>>>>>>> [^\n]+\n?'
        content = re.sub(pattern3, '', content)
        
        # Pattern 4: Just ======= markers
        pattern4 = r'=======\n?'
        content = re.sub(pattern4, '', content)
        
        # Pattern 5: Just <<<<<<< HEAD markers
        pattern5 = r'<<<<<<< HEAD\n?'
        content = re.sub(pattern5, '', content)
        
        # Clean up any double newlines that might have been created
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # If content changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed conflicts in {file_path}")
            return True
        else:
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
            if fix_merge_conflicts_comprehensive(file_path):
                fixed_files += 1
    
    print(f"\nProcessed {total_files} files")
    print(f"Fixed conflicts in {fixed_files} files")

if __name__ == "__main__":
    main()