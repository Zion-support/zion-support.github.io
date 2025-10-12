#!/usr/bin/env python3
"""
Script to fix JSX fragment closing tag errors
"""

import os
import re
import glob

def fix_jsx_fragments(content):
    """Fix JSX fragment closing tag errors"""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Look for JSX fragments that need closing tags
        if line.strip() == '<>':
            # Find the matching closing tag
            fragment_lines = [line]
            i += 1
            depth = 1
            
            while i < len(lines) and depth > 0:
                current_line = lines[i]
                fragment_lines.append(current_line)
                
                if current_line.strip() == '<>':
                    depth += 1
                elif current_line.strip() == '</>':
                    depth -= 1
                
                i += 1
            
            # If we didn't find a closing tag, add one
            if depth > 0:
                fragment_lines.append('</>')
            
            result.extend(fragment_lines)
        else:
            result.append(line)
            i += 1
    
    return '\n'.join(result)

def fix_specific_patterns(content):
    """Fix specific JSX patterns that are causing errors"""
    # Fix common patterns that cause fragment errors
    patterns = [
        # Fix missing closing tags for common elements
        (r'<div([^>]*)>\s*$', r'<div\1></div>'),
        (r'<section([^>]*)>\s*$', r'<section\1></section>'),
        (r'<main([^>]*)>\s*$', r'<main\1></main>'),
        (r'<article([^>]*)>\s*$', r'<article\1></article>'),
        (r'<header([^>]*)>\s*$', r'<header\1></header>'),
        (r'<footer([^>]*)>\s*$', r'<footer\1></footer>'),
        (r'<nav([^>]*)>\s*$', r'<nav\1></nav>'),
        (r'<aside([^>]*)>\s*$', r'<aside\1></aside>'),
    ]
    
    for pattern, replacement in patterns:
        content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix JSX fragment errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_specific_patterns(content)
        content = fix_jsx_fragments(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed fragment errors: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/components/**/*.tsx',
        '/workspace/components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()