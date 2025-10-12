#!/usr/bin/env python3
"""
Script to fix remaining syntax errors in the codebase
"""
import os
import re
import glob
from pathlib import Path

def fix_syntax_errors(content):
    """Fix common syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix missing commas in import statements
        if 'import' in line and not line.strip().endswith((';', ',')) and not line.strip().endswith('}'):
            if '{' in line and '}' not in line:
                # Multi-line import, find the closing brace
                j = i
                while j < len(lines) and '}' not in lines[j]:
                    j += 1
                if j < len(lines):
                    lines[j] = lines[j].replace('}', '},')
        
        # Fix missing parentheses in function calls
        line = re.sub(r'(\w+)\s*\(\s*$', r'\1()', line)
        
        # Fix missing commas in object properties
        line = re.sub(r'(\w+):\s*([^,}]+)(?=\s*[}])', r'\1: \2,', line)
        
        # Fix missing closing tags
        if '<div' in line and not line.strip().endswith('>'):
            line = line.rstrip() + '>'
        
        # Fix missing closing parentheses
        if line.count('(') > line.count(')'):
            line = line.rstrip() + ')'
        
        # Fix missing semicolons
        if (line.strip() and 
            not line.strip().endswith((';', '{', '}', ':', ',', '(', ')', '[', ']', '>', '<')) and
            not line.strip().startswith(('import', 'export', 'const', 'let', 'var', 'function', 'class', 'interface', 'type'))):
            line = line.rstrip() + ';'
        
        # Fix JSX closing tag issues
        if '<Helmet' in line and not line.strip().endswith('>'):
            line = line.rstrip() + '>'
        
        # Fix missing closing div tags
        if line.strip() == '<div>' or (line.strip().startswith('<div') and not line.strip().endswith('>')):
            line = line.rstrip() + '>'
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_errors(content):
    """Fix JSX specific errors"""
    # Fix missing closing tags
    content = re.sub(r'<Helmet([^>]*)>\s*$', r'<Helmet\1></Helmet>', content, flags=re.MULTILINE)
    
    # Fix missing closing div tags
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1>', content, flags=re.MULTILINE)
    
    # Fix missing closing fragments
    content = re.sub(r'<>\s*$', r'<>', content, flags=re.MULTILINE)
    
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
        
        # Fix syntax errors
        content = fix_syntax_errors(content)
        
        # Fix JSX errors
        content = fix_jsx_errors(content)
        
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