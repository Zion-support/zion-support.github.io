#!/usr/bin/env python3
"""
Fix comma syntax errors in TypeScript/JavaScript files
"""

import os
import re
import glob

def fix_comma_syntax(content):
    """Fix comma syntax issues"""
    # Fix trailing commas in interface properties
    content = re.sub(r'(\w+):\s*([^,;\n]+);,', r'\1: \2;', content)
    
    # Fix trailing commas in object properties
    content = re.sub(r'(\w+):\s*([^,;\n]+),,', r'\1: \2,', content)
    
    # Fix trailing commas in function parameters
    content = re.sub(r'(\w+)\s*\)\s*{', r'\1) {', content)
    
    # Fix duplicate function definitions
    content = re.sub(r'export function (\w+)\([^)]*\)\s*{,\s*export function \1\([^)]*\)\s*{', r'export function \1(', content)
    
    # Fix trailing commas in object literals
    content = re.sub(r',\s*}', '}', content)
    content = re.sub(r',\s*\)', ')', content)
    
    # Fix trailing commas in arrays
    content = re.sub(r',\s*]', ']', content)
    
    # Fix duplicate commas
    content = re.sub(r',,', ',', content)
    
    return content

def process_file(file_path):
    """Process a single file to fix comma syntax issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_comma_syntax(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    patterns = [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.js',
        'src/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()