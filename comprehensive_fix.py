#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts and syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def find_all_tsx_files():
    """Find all TypeScript/JavaScript files"""
    patterns = [
        "**/*.tsx",
        "**/*.ts", 
        "**/*.jsx",
        "**/*.js"
    ]
    
    files = []
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other excluded directories
    filtered_files = []
    for file_path in files:
        if not any(excluded in file_path for excluded in ['node_modules', '.next', 'dist', 'out']):
            filtered_files.append(file_path)
    
    return filtered_files

def clean_merge_conflicts(content):
    """Remove all merge conflict markers and keep the HEAD version"""
    lines = content.split('\n')
    cleaned_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        if line.strip() == '<<<<<<< HEAD':
            # Skip until separator
            i += 1
            while i < len(lines) and lines[i].strip() != '=======':
                cleaned_lines.append(lines[i])
                i += 1
            # Skip separator and everything until end marker
            if i < len(lines):
                i += 1
            while i < len(lines) and not lines[i].strip().startswith('>>>>>>>'):
                i += 1
            # Skip end marker
            if i < len(lines):
                i += 1
        else:
            cleaned_lines.append(line)
            i += 1
    
    return '\n'.join(cleaned_lines)

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues"""
    # Fix self-closing tags
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>$', r'<\1\2 />', content, flags=re.MULTILINE)
    
    # Fix broken JSX expressions
    content = re.sub(r'\{[^}]*$', '', content, flags=re.MULTILINE)
    
    # Fix malformed JSX tags
    content = re.sub(r'<(\w+)([^>]*?)></\1>', r'<\1\2 />', content)
    
    return content

def fix_import_statements(content):
    """Fix import statements"""
    # Fix missing React import
    if 'import React' not in content and ('<div' in content or '<span' in content or '<h1' in content):
        content = "import React from 'react';\n" + content
    
    # Fix missing imports for common components
    if 'Helmet' in content and 'import { Helmet }' not in content:
        content = "import { Helmet } from 'react-helmet-async';\n" + content
    
    if 'Link' in content and 'import { Link }' not in content:
        content = "import { Link } from 'react-router-dom';\n" + content
    
    return content

def fix_export_statements(content):
    """Fix export statements"""
    # Ensure there's a default export
    if 'export default' not in content and 'function ' in content:
        # Find the function name and add export
        match = re.search(r'function\s+(\w+)', content)
        if match:
            function_name = match.group(1)
            content += f'\n\nexport default {function_name};'
    
    return content

def clean_file_content(content):
    """Clean up file content"""
    # Remove merge conflicts
    content = clean_merge_conflicts(content)
    
    # Fix JSX syntax
    content = fix_jsx_syntax(content)
    
    # Fix imports
    content = fix_import_statements(content)
    
    # Fix exports
    content = fix_export_statements(content)
    
    # Remove empty lines at the end
    content = content.rstrip() + '\n'
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        print(f"Processing: {file_path}")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflicts or issues
        has_conflicts = any(marker in content for marker in ['<<<<<<< HEAD', '=======', '>>>>>>>'])
        has_jsx_issues = '<div' in content and 'import React' not in content
        
        if not has_conflicts and not has_jsx_issues:
            print(f"No issues found in {file_path}")
            return True
        
        # Clean the content
        cleaned_content = clean_file_content(content)
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Successfully cleaned {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    print("Starting comprehensive file cleanup...")
    
    # Find all files
    files = find_all_tsx_files()
    
    print(f"Found {len(files)} files to process")
    
    # Process each file
    success_count = 0
    for file_path in files:
        if process_file(file_path):
            success_count += 1
    
    print(f"\nCleanup complete!")
    print(f"Successfully processed: {success_count}/{len(files)} files")

if __name__ == "__main__":
    main()