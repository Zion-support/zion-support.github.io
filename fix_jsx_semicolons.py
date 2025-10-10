#!/usr/bin/env python3
"""
Script to fix semicolon issues in JSX
"""
import os
import re
import glob
from pathlib import Path

def fix_jsx_semicolons(file_path):
    """Fix semicolon issues in JSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix semicolons in JSX className attributes
        content = re.sub(r'className=\{`[^`]*`\}\};', lambda m: m.group(0).replace('};', '}'), content)
        
        # Fix semicolons in JSX onClick attributes
        content = re.sub(r'onClick=\{\([^}]*\)\};', lambda m: m.group(0).replace('};', '}'), content)
        
        # Fix semicolons in JSX other attributes
        content = re.sub(r'(\w+)=\{[^}]*\}\};', lambda m: m.group(0).replace('};', '}'), content)
        
        # Fix semicolons before closing JSX tags
        content = re.sub(r';\s*>', '\n                >', content)
        
        # Fix semicolons in JSX element attributes
        content = re.sub(r'(\w+)=\{`[^`]*`\}\};', lambda m: m.group(0).replace('};', '}'), content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX semicolons in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX semicolons"""
    # Get all relevant files
    file_patterns = [
        'app/components/*.tsx',
        'app/components/*.ts',
        'src/components/*.tsx',
        'src/components/*.ts'
    ]
    
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_jsx_semicolons(file_path):
            fixed_count += 1
    
    print(f"Fixed JSX semicolons in {fixed_count} files")

if __name__ == "__main__":
    main()