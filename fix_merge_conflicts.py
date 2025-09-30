#!/usr/bin/env python3
import os
import re
import sys
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflict markers in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and everything between them
        # Pattern matches <<<<<<< HEAD, =======, >>>>>>> branch-name
        content = re.sub(r'^[<>=]{7}.*$', '', content, flags=re.MULTILINE)
        
        # Remove lines that contain merge conflict markers anywhere
        lines = content.split('\n')
        cleaned_lines = []
        
        for line in lines:
            # Skip lines that contain merge conflict markers
            if not re.search(r'[<>=]{7,}', line):
                cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Clean up extra whitespace and empty lines
        lines = content.split('\n')
        cleaned_lines = []
        prev_empty = False
        
        for line in lines:
            line = line.rstrip()
            if line.strip() == '':
                if not prev_empty:
                    cleaned_lines.append('')
                prev_empty = True
            else:
                cleaned_lines.append(line)
                prev_empty = False
        
        content = '\n'.join(cleaned_lines)
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    src_dir = Path('src')
    fixed_count = 0
    error_count = 0
    
    # Find all TypeScript/JavaScript files with merge conflicts
    files = list(src_dir.rglob('*.ts')) + list(src_dir.rglob('*.tsx')) + list(src_dir.rglob('*.js')) + list(src_dir.rglob('*.jsx'))
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if re.search(r'[<>=]{7,}', content):
                print(f"Fixing {file_path}")
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
                else:
                    error_count += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            error_count += 1
    
    print(f"\nFixed {fixed_count} files")
    if error_count > 0:
        print(f"Errors in {error_count} files")
        sys.exit(1)

if __name__ == '__main__':
    main()