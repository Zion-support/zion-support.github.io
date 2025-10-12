#!/usr/bin/env python3
"""
Script to fix JSX expressions that need parent elements
"""
import os
import re
import glob
from pathlib import Path

def fix_jsx_parent_elements(content):
    """Fix JSX expressions that need parent elements"""
    lines = content.split('\n')
    new_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line has JSX that needs a parent element
        if re.search(r'<[A-Z][a-zA-Z0-9]*', line) and not re.search(r'<[A-Z][a-zA-Z0-9]*[^>]*>', line):
            # This looks like a JSX element that needs a parent
            # Find the matching closing tag or add one
            if not re.search(r'</[A-Z][a-zA-Z0-9]*>', line):
                # No closing tag found, add one
                element_name = re.search(r'<([A-Z][a-zA-Z0-9]*)', line)
                if element_name:
                    element_name = element_name.group(1)
                    line = line + f'</{element_name}>'
        
        new_lines.append(line)
        i += 1
    
    return '\n'.join(new_lines)

def fix_jsx_fragments(content):
    """Fix JSX fragments that need proper wrapping"""
    # Wrap JSX expressions that don't have a parent element
    content = re.sub(r'<>\s*<([A-Z][a-zA-Z0-9]*)', r'<>\n    <\1', content)
    content = re.sub(r'</([A-Z][a-zA-Z0-9]*)>\s*</>', r'    </\1>\n</>', content)
    
    return content

def fix_jsx_syntax_errors(content):
    """Fix common JSX syntax errors"""
    # Fix malformed JSX expressions
    content = re.sub(r'\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    # Fix unclosed JSX tags
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    
    # Fix JSX fragments
    content = re.sub(r'<>\s*$', r'<></>', content, flags=re.MULTILINE)
    
    return content

def fix_common_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix missing commas in object literals
    content = re.sub(r'(\w+)\s*:\s*(\w+)\s*(\w+)\s*:', r'\1: \2,\n  \3:', content)
    
    # Fix missing commas in function parameters
    content = re.sub(r'(\w+)\s+(\w+)\s+(\w+)\s*\)', r'\1, \2, \3)', content)
    
    # Fix malformed JSX expressions
    content = re.sub(r'\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    return content

def process_file(file_path):
    """Process a single file to fix JSX errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_jsx_parent_elements(content)
        content = fix_jsx_fragments(content)
        content = fix_jsx_syntax_errors(content)
        content = fix_common_syntax_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()