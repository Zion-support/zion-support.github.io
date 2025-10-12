#!/usr/bin/env python3
"""
Script to fix syntax errors in TypeScript/JSX files after merge conflict resolution.
"""

import os
import re
import sys
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix broken JSX fragments and tags
        # Remove incomplete JSX fragments
        content = re.sub(r'<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix broken JSX tags with incomplete closing
        content = re.sub(r'<(\w+)[^>]*>\s*$', r'<\1>', content, flags=re.MULTILINE)
        
        # Remove lines with only incomplete JSX syntax
        lines = content.split('\n')
        cleaned_lines = []
        
        for i, line in enumerate(lines):
            # Skip lines that are just incomplete JSX fragments or broken syntax
            if (re.match(r'^\s*<>\s*$', line) or 
                re.match(r'^\s*</>\s*$', line) or
                re.match(r'^\s*<[^>]*>\s*$', line) and not re.match(r'^\s*<[^>]*>.*</[^>]*>\s*$', line) or
                re.match(r'^\s*[<>{}]+\s*$', line) or
                re.match(r'^\s*[<>{}]*[<>{}]+\s*$', line)):
                continue
            
            # Fix lines with broken JSX syntax
            if re.search(r'[<>{}]+[^<>{}]*$', line) and not re.search(r'<[^>]*>.*</[^>]*>', line):
                # Try to fix incomplete tags
                if '<' in line and '>' not in line:
                    line = re.sub(r'<[^>]*$', '', line)
                if '>' in line and '<' not in line:
                    line = re.sub(r'^[^<]*>', '', line)
            
            # Skip lines that are just broken characters
            if re.match(r'^\s*[<>{}]+\s*$', line):
                continue
                
            cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Remove any remaining broken JSX fragments at the end
        content = re.sub(r'<>\s*$', '', content)
        content = re.sub(r'</>\s*$', '', content)
        
        # Write the cleaned content back if it changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with syntax errors."""
    workspace = Path('/workspace')
    
    # Find all TypeScript/JavaScript files
    files_to_check = []
    
    for ext in ['*.tsx', '*.ts', '*.jsx', '*.js']:
        for file_path in workspace.rglob(ext):
            if 'node_modules' in str(file_path):
                continue
            files_to_check.append(file_path)
    
    print(f"Checking {len(files_to_check)} files for syntax errors")
    
    fixed_count = 0
    for file_path in files_to_check:
        if fix_syntax_errors(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Successfully fixed {fixed_count} files")

if __name__ == "__main__":
    main()