#!/usr/bin/env python3
"""
Script to clean up merge conflict markers and fix common syntax errors
"""
import os
import re
import glob

def clean_merge_conflicts(content):
    """Clean up merge conflict markers and fix common issues"""
    # Remove merge conflict markers
    content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'    
    # Fix common syntax issues
    # Fix missing semicolons after imports
    content = re.sub(r"import ([^;]+)\n", r"import \1;\n", content)
    
    # Fix missing semicolons after variable declarations
    content = re.sub(r"(const|let|var) ([^=]+) = ([^;]+)\n", r"\1 \2 = \3;\n", content)
    
    # Fix missing semicolons after function declarations
    content = re.sub(r"(export default|export) ([^;]+)\n", r"\1 \2;\n", content)
    
    # Fix JSX syntax issues
    content = re.sub(r'className="([^"]*)"\s*$', r'className="\1"', content, flags=re.MULTILINE)
    
    # Fix missing closing braces
    lines = content.split('\n')
    brace_count = 0
    for i, line in enumerate(lines):
        brace_count += line.count('{') - line.count('}')
        if brace_count < 0:
            # Add missing opening brace
            lines[i] = '{' + line
            brace_count = 0
    
    return '\n'.join(lines)

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = clean_merge_conflicts(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()