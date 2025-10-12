#!/usr/bin/env python3
"""
Comprehensive script to fix all major syntax and JSX errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def find_problematic_files():
    """Find files that are likely to have syntax errors."""
    problematic_files = []
    
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build', '.next']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Check for common issues
                    if ('<<<<<<< HEAD' in content or 
                        '=======' in content or 
                        '>>>>>>>' in content or
                        'Unexpected closing' in content or
                        'Expected' in content):
                        problematic_files.append(file_path)
                except:
                    pass
    
    return problematic_files

def fix_about_page():
    """Fix the about page specifically."""
    file_path = 'app/about/page.tsx'
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the JSX structure issues
        # The main issue is mismatched tags and missing closing tags
        
        # Find the return statement and fix the JSX structure
        return_match = re.search(r'return\s*\(', content)
        if return_match:
            # Extract the JSX part
            start_pos = return_match.end() - 1
            paren_count = 0
            i = start_pos
            jsx_content = ""
            
            while i < len(content):
                if content[i] == '(':
                    paren_count += 1
                elif content[i] == ')':
                    paren_count -= 1
                    if paren_count == 0:
                        jsx_content = content[start_pos:i+1]
                        break
                i += 1
            
            # Fix common JSX issues in the content
            fixed_jsx = fix_jsx_structure(jsx_content)
            
            # Replace the JSX in the original content
            new_content = content[:start_pos] + fixed_jsx + content[i+1:]
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed about page: {file_path}")
            return True
    except Exception as e:
        print(f"Error fixing about page: {e}")
        return False

def fix_jsx_structure(jsx_content):
    """Fix JSX structure issues."""
    lines = jsx_content.split('\n')
    fixed_lines = []
    tag_stack = []
    
    for line in lines:
        # Check for opening tags
        opening_tags = re.findall(r'<(\w+)(?:\s[^>]*)?(?:/>|>)', line)
        for tag in opening_tags:
            if not line.strip().endswith('/>'):
                tag_stack.append(tag)
        
        # Check for closing tags
        closing_tags = re.findall(r'</(\w+)>', line)
        for tag in closing_tags:
            if tag_stack and tag_stack[-1] == tag:
                tag_stack.pop()
            elif tag_stack:
                # Mismatched tag, try to fix
                expected_tag = tag_stack[-1]
                if expected_tag != tag:
                    # Replace the closing tag
                    line = line.replace(f'</{tag}>', f'</{expected_tag}>')
                    tag_stack.pop()
        
        fixed_lines.append(line)
    
    # Add any missing closing tags
    while tag_stack:
        tag = tag_stack.pop()
        fixed_lines.append(f'</{tag}>')
    
    return '\n'.join(fixed_lines)

def fix_all_files():
    """Fix all problematic files."""
    print("Finding problematic files...")
    problematic_files = find_problematic_files()
    
    print(f"Found {len(problematic_files)} potentially problematic files")
    
    # Fix specific known issues first
    if 'app/about/page.tsx' in problematic_files:
        fix_about_page()
    
    # For other files, try a general fix
    fixed_count = 0
    for file_path in problematic_files:
        if file_path == 'app/about/page.tsx':
            continue  # Already fixed
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove merge conflict markers
            content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
            content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
            
            # Fix common JSX issues
            content = fix_common_jsx_issues(content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed: {file_path}")
            fixed_count += 1
            
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")
    
    print(f"Fixed {fixed_count} files")

def fix_common_jsx_issues(content):
    """Fix common JSX issues."""
    # Fix unclosed JSX elements
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>(\s*</\1>)', r'<\1\2 />', content)
    
    # Fix malformed return statements
    if 'return (' in content and not content.strip().endswith(');'):
        # Find the return statement and ensure it's properly closed
        return_match = re.search(r'return\s*\(', content)
        if return_match:
            start_pos = return_match.end() - 1
            paren_count = 0
            i = start_pos
            while i < len(content):
                if content[i] == '(':
                    paren_count += 1
                elif content[i] == ')':
                    paren_count -= 1
                    if paren_count == 0:
                        break
                i += 1
            
            if paren_count > 0:
                content += ')'
    
    return content

def main():
    """Main function."""
    print("Starting comprehensive fix...")
    fix_all_files()
    print("Comprehensive fix completed!")

if __name__ == "__main__":
    main()