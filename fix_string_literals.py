#!/usr/bin/env python3
"""
Fix unterminated string literals in files
"""
import os
import re
import glob

def fix_string_literals(content):
    """Fix unterminated string literals"""
    # Fix import statements with extra quotes
    content = re.sub(r"import\s+([^;]+);'$", r"import \1;", content, flags=re.MULTILINE)
    content = re.sub(r"import\s+([^;]+)';$", r"import \1;", content, flags=re.MULTILINE)
    
    # Fix other unterminated strings
    content = re.sub(r"'([^']*?)$", r"'\1'", content, flags=re.MULTILINE)
    content = re.sub(r'"([^"]*?)$', r'"\1"', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix string literals"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_string_literals(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed string literals in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Get all relevant files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts',
        'api/**/*.tsx',
        'api/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Processing {len(files_to_process)} files...")
    
    fixed_count = 0
    for file_path in files_to_process:
        if process_file(file_path):
            fixed_count += 1
    
    print(f"Fixed string literals in {fixed_count} files")

if __name__ == "__main__":
    main()