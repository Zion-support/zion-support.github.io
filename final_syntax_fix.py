#!/usr/bin/env python3
"""
Final comprehensive syntax fix for all remaining errors
"""
import os
import re
import glob

def fix_syntax_errors(content):
    """Fix all remaining syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix array elements with semicolons instead of commas
        if re.match(r'^\s*\{.*\}\s*;\s*$', line) and i > 0:
            # Check if next line is closing bracket
            if i + 1 < len(lines) and re.match(r'^\s*\]\s*;\s*$', lines[i + 1]):
                line = re.sub(r'\s*;\s*$', ',', line)
        
        # Fix import statements with semicolons
        if re.match(r'^\s*[A-Za-z][A-Za-z0-9]*Icon\s*;\s*$', line):
            line = re.sub(r'\s*;\s*$', ',', line)
        
        # Fix object properties with semicolons
        if re.match(r'^\s*description:\s*.*\s*;\s*$', line):
            line = re.sub(r'\s*;\s*$', ',', line)
        
        # Fix function parameters with semicolons
        if re.match(r'^\s*[a-zA-Z_][a-zA-Z0-9_]*\s*;\s*$', line) and i > 0:
            # Check if it's in a function parameter context
            prev_line = lines[i - 1].strip()
            if 'function' in prev_line or '=' in prev_line:
                line = re.sub(r'\s*;\s*$', ',', line)
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_syntax_errors(content)
        
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
        'app/**/*.ts'
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