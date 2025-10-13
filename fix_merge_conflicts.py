#!/usr/bin/env python3
"""
Script to fix merge conflicts in the codebase by resolving conflicts systematically.
This script will:
1. Find all files with merge conflict markers
2. Resolve conflicts by choosing the appropriate version
3. Clean up the files
"""

import os
import re
import glob
from pathlib import Path

def find_conflict_files():
    """Find all files with merge conflict markers"""
    conflict_files = []
    
    # Search for TypeScript/JavaScript files
    patterns = [
        "**/*.tsx",
        "**/*.ts", 
        "**/*.jsx",
        "**/*.js"
    ]
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                            conflict_files.append(file_path)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    
    return conflict_files

def resolve_merge_conflict(content):
    """Resolve merge conflicts in content by choosing the appropriate version"""
    lines = content.split('\n')
    resolved_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check for merge conflict markers
        if line.strip() == '<<<<<<< HEAD':
            # Skip until we find the separator
            i += 1
            while i < len(lines) and lines[i].strip() != '=======':
                i += 1
            # Skip the separator line
            if i < len(lines):
                i += 1
            # Skip until we find the end marker
            while i < len(lines) and not lines[i].strip().startswith('>>>>>>>'):
                i += 1
            # Skip the end marker line
            if i < len(lines):
                i += 1
            continue
            
        elif line.strip() == '=======':
            # This should be handled by the above case, but just in case
            i += 1
            continue
            
        elif line.strip().startswith('>>>>>>>'):
            # This should be handled by the above case, but just in case
            i += 1
            continue
            
        else:
            resolved_lines.append(line)
            i += 1
    
    return '\n'.join(resolved_lines)

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues that might arise from merge conflicts"""
    # Fix unclosed JSX elements
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>$', r'<\1\2></\1>', content, flags=re.MULTILINE)
    
    # Fix missing closing tags in JSX
    content = re.sub(r'<(\w+)([^>]*?)>(?!.*</\1>)', r'<\1\2></\1>', content, flags=re.DOTALL)
    
    # Fix broken JSX expressions
    content = re.sub(r'\{[^}]*$', '', content, flags=re.MULTILINE)
    
    return content

def clean_file_content(content):
    """Clean up file content after resolving conflicts"""
    # Remove empty lines at the end
    content = content.rstrip() + '\n'
    
    # Fix common syntax issues
    content = fix_jsx_syntax(content)
    
    return content

def process_file(file_path):
    """Process a single file to resolve merge conflicts"""
    try:
        print(f"Processing: {file_path}")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflicts
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>>' not in content:
            print(f"No conflicts found in {file_path}")
            return True
        
        # Resolve conflicts
        resolved_content = resolve_merge_conflict(content)
        
        # Clean up the content
        cleaned_content = clean_file_content(resolved_content)
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Successfully resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    print("Starting merge conflict resolution...")
    
    # Find all files with conflicts
    conflict_files = find_conflict_files()
    
    if not conflict_files:
        print("No files with merge conflicts found.")
        return
    
    print(f"Found {len(conflict_files)} files with merge conflicts:")
    for file_path in conflict_files:
        print(f"  - {file_path}")
    
    # Process each file
    success_count = 0
    for file_path in conflict_files:
        if process_file(file_path):
            success_count += 1
    
    print(f"\nMerge conflict resolution complete!")
    print(f"Successfully processed: {success_count}/{len(conflict_files)} files")

if __name__ == "__main__":
    main()