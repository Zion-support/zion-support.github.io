#!/usr/bin/env python3
"""
Script to fix JSX closing tag errors.
"""

import os
import re
import glob

def fix_jsx_closing_tags(file_path):
    """Fix JSX closing tag errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common JSX issues
        fixes = [
            # Fix missing closing div tags
            (r'<div([^>]*)>\s*$', r'<div\1></div>'),
            # Fix missing closing fragment tags
            (r'<>\s*$', r'<></>'),
            # Fix missing closing section tags
            (r'<section([^>]*)>\s*$', r'<section\1></section>'),
            # Fix missing closing main tags
            (r'<main([^>]*)>\s*$', r'<main\1></main>'),
            # Fix missing closing article tags
            (r'<article([^>]*)>\s*$', r'<article\1></article>'),
            # Fix missing closing header tags
            (r'<header([^>]*)>\s*$', r'<header\1></header>'),
            # Fix missing closing footer tags
            (r'<footer([^>]*)>\s*$', r'<footer\1></footer>'),
            # Fix missing closing nav tags
            (r'<nav([^>]*)>\s*$', r'<nav\1></nav>'),
            # Fix missing closing aside tags
            (r'<aside([^>]*)>\s*$', r'<aside\1></aside>'),
        ]
        
        # Apply fixes
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Fix specific patterns that might be causing issues
        # Fix missing commas in object literals
        content = re.sub(r'(\w+):\s*(\w+)\s*$', r'\1: \2,', content)
        
        # Fix missing closing parentheses
        content = re.sub(r'(\w+)\s*$', r'\1)', content)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX closing tags in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX closing tags."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip .original files
            if '.original' in file_path:
                continue
                
            files_processed += 1
            if fix_jsx_closing_tags(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed JSX closing tags in {files_fixed} files")

if __name__ == "__main__":
    main()