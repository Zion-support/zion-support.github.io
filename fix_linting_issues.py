#!/usr/bin/env python3
"""
Script to fix remaining linting issues in component files
"""
import os
import re
import glob

def fix_linting_issues(file_path):
    """Fix linting issues in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix empty interfaces
        content = re.sub(r'interface \w+Props \{\s*// Add props as needed\s*\}', '', content)
        
        # Fix unused props parameters
        content = re.sub(r'\(\{ \.\.\.props \}\)', '()', content)
        
        # Fix unused props parameters with children
        content = re.sub(r'\(\{ \.\.\.props, children \}\)', '({ children })', content)
        content = re.sub(r'\(\{ children, \.\.\.props \}\)', '({ children })', content)
        
        # Remove empty lines that might have been created
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed linting issues in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all component files"""
    # Find all component files
    patterns = [
        'app/components/*.tsx',
        'app/components/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_linting_issues(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} component files")
    print(f"Fixed {files_fixed} component files")

if __name__ == "__main__":
    main()