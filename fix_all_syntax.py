#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining syntax errors
"""
import os
import re
import glob
def fix_file_syntax(content):
    """Fix all common syntax errors in a file"""
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        # Remove extra semicolons and quotes
        line = re.sub(r'";$', '";', line)
        line = re.sub(r'": value$', '', line)
        line = re.sub(r';\s*$', ';', line)
        # Fix unterminated strings
        if line.count('"') % 2 == 1 and not line.strip().endswith('"'):
            if 'import' in line or 'from' in line or '=' in line:
                line = line.rstrip() + '";'
            else:
                line = line.rstrip() + '"'
        # Fix malformed JSX
        line = re.sub(r'<([^>]+)\s*$', r'<\1>', line)
        # Remove standalone semicolons
        if line.strip() == ';':
            continue
        # Fix malformed imports
        if line.strip().startswith('import ') and not line.strip().endswith(';'):
            if '{' in line and '}' in line:
                line = line.rstrip() + ';'
            elif 'from' in line:
                line = line.rstrip() + ';'
        fixed_lines.append(line)
    return '\n'.join(fixed_lines)
def clean_merge_conflicts(content):
    """Clean merge conflict markers"""
    content = re.sub(r'<<<<<<<.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'>>>>>>>.*?\n', '', content, flags=re.DOTALL)
    return content
def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        original_content = content
        # Clean merge conflicts first
        content = clean_merge_conflicts(content)
        # Fix syntax errors
        content = fix_file_syntax(content)
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        else:
            return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
def main():
    """Main function to process all TypeScript and JavaScript files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'pages/**/*.tsx',
        'pages/**/*.ts'
    ]
    files_processed = 0
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if 'node_modules' in file_path or 'dist' in file_path:
                continue
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")
if __name__ == "__main__":
    main()