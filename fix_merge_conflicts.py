#!/usr/bin/env python3
"""
Script to fix merge conflicts and syntax errors in the codebase
"""
import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(content):
    """Fix merge conflict markers by choosing the correct version"""
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Handle merge conflict markers
        if line.startswith('<<<<<<<'):
            # Skip until we find =======
            i += 1
            while i < len(lines) and not lines[i].startswith('======='):
                i += 1
            i += 1  # Skip the ======= line
            
            # Keep everything until >>>>>>>
            while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                fixed_lines.append(lines[i])
                i += 1
            i += 1  # Skip the >>>>>>> line
        else:
            fixed_lines.append(line)
            i += 1
    
    return '\n'.join(fixed_lines)

def fix_common_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix missing spaces in class names
    content = re.sub(r'className="([^"]*?)"', lambda m: f'className="{m.group(1).replace("from", " from").replace("to", " to").replace("via", " via")}"', content)
    
    # Fix missing spaces in other attributes
    content = re.sub(r'(\w+)(\w+)(\w+)', lambda m: f'{m.group(1)} {m.group(2)} {m.group(3)}' if len(m.group(0)) > 10 and not m.group(0).startswith('http') else m.group(0), content)
    
    # Fix JSX closing tag issues
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1>', content, flags=re.MULTILINE)
    
    # Fix missing closing tags for common elements
    content = re.sub(r'<Helmet([^>]*)>\s*$', r'<Helmet\1></Helmet>', content, flags=re.MULTILINE)
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file is too large or binary
        if len(content) > 1000000 or '\0' in content:
            return False
        
        original_content = content
        
        # Fix merge conflicts
        content = fix_merge_conflicts(content)
        
        # Fix common syntax errors
        content = fix_common_syntax_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            total_count += 1
            if fix_file(file_path):
                fixed_count += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()