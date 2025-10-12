#!/usr/bin/env python3
"""
Script to clean up merge conflicts in the codebase.
This script will:
1. Find all files with merge conflict markers
2. For each file, choose the most complete version (usually the longer one)
3. Remove merge conflict markers and clean up the code
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(content):
    """Clean merge conflicts from file content."""
    lines = content.split('\n')
    cleaned_lines = []
    in_conflict = False
    conflict_sections = []
    current_section = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        if line.strip().startswith('<<<<<<<'):
            if current_section:
                conflict_sections.append(current_section)
            current_section = []
            in_conflict = True
        elif line.strip().startswith('======='):
            if current_section:
                conflict_sections.append(current_section)
            current_section = []
        elif line.strip().startswith('>>>>>>>'):
            if current_section:
                conflict_sections.append(current_section)
            current_section = []
            in_conflict = False
            
            # Choose the best section (longest non-empty one)
            if conflict_sections:
                best_section = max(conflict_sections, key=lambda x: len([l for l in x if l.strip()]))
                cleaned_lines.extend(best_section)
            conflict_sections = []
            current_section = []
        else:
            if in_conflict:
                current_section.append(line)
            else:
                cleaned_lines.append(line)
        i += 1
    
    # Handle any remaining section
    if current_section:
        conflict_sections.append(current_section)
    if conflict_sections:
        best_section = max(conflict_sections, key=lambda x: len([l for l in x if l.strip()]))
        cleaned_lines.extend(best_section)
    
    return '\n'.join(cleaned_lines)

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues."""
    # Fix unclosed JSX tags
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>', r'<\1\2 />', content)
    
    # Fix malformed JSX expressions
    content = re.sub(r'<(\w+)([^>]*?)>\s*</\1>', r'<\1\2 />', content)
    
    # Fix unclosed angle brackets in JSX
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>\s*$', r'<\1\2 />', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to clean merge conflicts."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
            print(f"Processing: {file_path}")
            
            # Clean merge conflicts
            cleaned_content = clean_merge_conflicts(content)
            
            # Fix JSX syntax issues
            if file_path.endswith(('.tsx', '.jsx')):
                cleaned_content = fix_jsx_syntax(cleaned_content)
            
            # Write cleaned content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to process all files with merge conflicts."""
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'coverage'
    ])]
    
    print(f"Found {len(files_to_process)} files to check")
    
    processed_count = 0
    for file_path in files_to_process:
        if process_file(file_path):
            processed_count += 1
    
    print(f"Processed {processed_count} files with merge conflicts")

if __name__ == "__main__":
    main()