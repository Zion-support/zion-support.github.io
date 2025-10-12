#!/usr/bin/env python3
"""
Script to fix remaining JSX syntax errors
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_parent_element(content):
    """Fix JSX expressions that must have one parent element"""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Look for JSX expressions that need a parent element
        if re.search(r'return\s*\(', line) and i + 1 < len(lines):
            # Check if the next few lines have multiple JSX elements at the same level
            jsx_start = i
            jsx_lines = []
            i += 1
            
            # Collect JSX content
            while i < len(lines) and (lines[i].strip().startswith('<') or lines[i].strip() == ''):
                jsx_lines.append(lines[i])
                i += 1
            
            # Check if we have multiple top-level JSX elements
            top_level_elements = []
            for jsx_line in jsx_lines:
                if jsx_line.strip().startswith('<') and not jsx_line.strip().startswith('</'):
                    # Count indentation to determine if it's top-level
                    indent = len(jsx_line) - len(jsx_line.lstrip())
                    if indent <= 8:  # Top-level elements have minimal indentation
                        top_level_elements.append(jsx_line.strip())
            
            if len(top_level_elements) > 1:
                # Wrap in a fragment
                result.append(line)
                result.append('    <>')
                for jsx_line in jsx_lines:
                    result.append('    ' + jsx_line)
                result.append('    </>')
                result.append('  );')
                i += 1  # Skip the closing parenthesis line
            else:
                # Single element, keep as is
                result.append(line)
                for jsx_line in jsx_lines:
                    result.append(jsx_line)
        else:
            result.append(line)
            i += 1
    
    return '\n'.join(result)

def fix_jsx_closing_tags(content):
    """Fix missing JSX closing tags"""
    # Fix HelmetProvider closing tag
    content = re.sub(r'<HelmetProvider([^>]*)>\s*$', r'<HelmetProvider\1></HelmetProvider>', content, flags=re.MULTILINE)
    
    # Fix other common missing closing tags
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    content = re.sub(r'<section([^>]*)>\s*$', r'<section\1></section>', content, flags=re.MULTILINE)
    content = re.sub(r'<main([^>]*)>\s*$', r'<main\1></main>', content, flags=re.MULTILINE)
    content = re.sub(r'<article([^>]*)>\s*$', r'<article\1></article>', content, flags=re.MULTILINE)
    
    return content

def fix_jsx_fragments(content):
    """Fix JSX fragments"""
    # Fix empty fragments
    content = re.sub(r'<>\s*$', r'<></>', content, flags=re.MULTILINE)
    
    # Fix fragments with content
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        if line.strip() == '<>':
            # Find the matching closing tag
            fragment_lines = [line]
            i += 1
            while i < len(lines) and lines[i].strip() != '</>':
                fragment_lines.append(lines[i])
                i += 1
            
            if i < len(lines):
                fragment_lines.append(lines[i])
                i += 1
            
            # Check if fragment has multiple top-level elements
            top_level_elements = []
            for frag_line in fragment_lines[1:-1]:  # Skip opening and closing
                if frag_line.strip().startswith('<') and not frag_line.strip().startswith('</'):
                    indent = len(frag_line) - len(frag_line.lstrip())
                    if indent <= 8:
                        top_level_elements.append(frag_line.strip())
            
            if len(top_level_elements) > 1:
                # Keep the fragment
                result.extend(fragment_lines)
            else:
                # Remove fragment wrapper
                result.extend(fragment_lines[1:-1])
        else:
            result.append(line)
            i += 1
    
    return '\n'.join(result)

def fix_import_statements(content):
    """Fix import statements"""
    # Add missing semicolons
    content = re.sub(r'^import\s+.*[^;]\s*$', lambda m: m.group(0) + ';', content, flags=re.MULTILINE)
    
    # Fix missing 'use client' directive
    if 'use client' not in content and 'export default' in content and 'React' in content:
        content = "'use client';\n" + content
    
    return content

def process_file(file_path):
    """Process a single file to fix JSX errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_jsx_closing_tags(content)
        content = fix_jsx_fragments(content)
        content = fix_jsx_parent_element(content)
        content = fix_import_statements(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed JSX errors: {file_path}")
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