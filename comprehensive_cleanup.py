#!/usr/bin/env python3
"""
Comprehensive cleanup script for all remaining syntax errors
"""

import os
import re
import glob
from pathlib import Path

def clean_file_content(content):
    """Clean file content by removing merge conflicts and fixing syntax errors"""
    
    # Remove all merge conflict markers
    content = re.sub(r'<<<<<<<.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
    content = re.sub(r'>>>>>>>.*?\n', '', content, flags=re.DOTALL)
    
    # Fix unterminated strings
    lines = content.split('\n')
    cleaned_lines = []
    
    for line in lines:
        # Fix unterminated strings by adding closing quotes
        if line.count('"') % 2 == 1 and not line.strip().endswith('"'):
            line = line + '"'
        if line.count("'") % 2 == 1 and not line.strip().endswith("'"):
            line = line + "'"
        
        # Remove orphaned characters and fix syntax
        line = re.sub(r'^\s*[;,]+\s*$', '', line)
        line = re.sub(r'^\s*[{}]+\s*$', '', line)
        
        # Fix broken JSX
        line = re.sub(r'<(\w+)([^>]*?)\s*$', r'<\1\2>', line)
        
        # Remove lines with only special characters
        if re.match(r'^\s*[;,\{\}<>]+\s*$', line):
            continue
            
        cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def clean_tsx_file(file_path):
    """Clean a TSX file specifically"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Clean the content
        cleaned_content = clean_file_content(content)
        
        # Additional TSX-specific fixes
        cleaned_content = re.sub(r'import\s+React.*?from\s+[\'"][^\'"]*[\'"]\s*;?\s*$', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'export\s+default\s+.*?;?\s*$', '', cleaned_content, flags=re.MULTILINE)
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"✓ Cleaned TSX: {file_path}")
        return True
        
    except Exception as e:
        print(f"✗ Error cleaning {file_path}: {e}")
        return False

def clean_js_file(file_path):
    """Clean a JS file specifically"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Clean the content
        cleaned_content = clean_file_content(content)
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"✓ Cleaned JS: {file_path}")
        return True
        
    except Exception as e:
        print(f"✗ Error cleaning {file_path}: {e}")
        return False

def main():
    """Main cleanup function"""
    print("Starting comprehensive cleanup...")
    
    # Clean TSX files
    tsx_files = glob.glob('**/*.tsx', recursive=True)
    tsx_cleaned = 0
    for file_path in tsx_files:
        if 'node_modules' in file_path or '.git' in file_path:
            continue
        if clean_tsx_file(file_path):
            tsx_cleaned += 1
    
    # Clean JS files
    js_files = glob.glob('**/*.js', recursive=True)
    js_cleaned = 0
    for file_path in js_files:
        if 'node_modules' in file_path or '.git' in file_path:
            continue
        if clean_js_file(file_path):
            js_cleaned += 1
    
    print(f"\nCleanup complete!")
    print(f"✓ TSX files cleaned: {tsx_cleaned}")
    print(f"✓ JS files cleaned: {js_cleaned}")

if __name__ == "__main__":
    main()