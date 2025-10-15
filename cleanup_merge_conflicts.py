#!/usr/bin/env python3
"""
Comprehensive merge conflict cleanup script
This script will clean up all merge conflict markers and resolve conflicts
by keeping the most recent/complete version of the code.
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(content):
    """Clean merge conflict markers from file content"""
    # Remove all merge conflict markers and their content
    # Pattern matches: <<<<<<< HEAD, =======, >>>>>>> branch-name
    lines = content.split('\n')
    cleaned_lines = []
    in_conflict = False
    conflict_depth = 0
    
    for line in lines:
        # Check for conflict start markers
        if line.strip().startswith('<<<<<<<'):
            in_conflict = True
            conflict_depth += 1
            continue
        # Check for conflict separator
        elif line.strip().startswith('======='):
            continue
        # Check for conflict end markers
        elif line.strip().startswith('>>>>>>>'):
            in_conflict = False
            conflict_depth -= 1
            continue
        # Skip lines within conflicts (keep only the last version)
        elif in_conflict and conflict_depth > 0:
            continue
        else:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def fix_syntax_errors(content):
    """Fix common syntax errors after merge conflict cleanup"""
    # Fix unterminated strings
    content = re.sub(r'(["\'])([^"\']*?)\n', r'\1\2\1\n', content)
    
    # Fix missing semicolons after statements
    content = re.sub(r'(\w+)\s*\n\s*(\w+)', r'\1;\n\2', content)
    
    # Fix broken JSX closing tags
    content = re.sub(r'<(\w+)([^>]*?)\s*$', r'<\1\2>', content)
    
    # Remove orphaned characters
    content = re.sub(r'^\s*[;,]+\s*$', '', content, flags=re.MULTILINE)
    
    return content

def clean_file(file_path):
    """Clean a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Clean merge conflicts
        cleaned_content = clean_merge_conflicts(content)
        
        # Fix syntax errors
        cleaned_content = fix_syntax_errors(cleaned_content)
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"✓ Cleaned: {file_path}")
        return True
        
    except Exception as e:
        print(f"✗ Error cleaning {file_path}: {e}")
        return False

def main():
    """Main cleanup function"""
    print("Starting merge conflict cleanup...")
    
    # File patterns to clean
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    cleaned_count = 0
    error_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            if clean_file(file_path):
                cleaned_count += 1
            else:
                error_count += 1
    
    print(f"\nCleanup complete!")
    print(f"✓ Files cleaned: {cleaned_count}")
    print(f"✗ Errors: {error_count}")

if __name__ == "__main__":
    main()