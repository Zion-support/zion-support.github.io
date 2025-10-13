#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts by removing all conflict markers and keeping the content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '            return False
        
        # Remove all merge conflict markers and their content
        # Pattern to match from         pattern = r'        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Remove any remaining lines
        content = re.sub(r'\n?', '', content)
        
        # Remove any remaining         content = re.sub(r'        
        # Remove any remaining         content = re.sub(r'        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing conflicts in {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    conflicts_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path or 'backup' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                conflicts_fixed += 1
    
    print(f"Processed {files_processed} files")
    print(f"Fixed conflicts in {conflicts_fixed} files")

if __name__ == "__main__":
    main()