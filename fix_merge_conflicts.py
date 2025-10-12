#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase.
This script will clean up merge conflict markers and choose the appropriate version.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def resolve_conflict(match):
            head_content = match.group(1)
            branch_content = match.group(2)
            
            # Choose the longer, more complete version
            if len(branch_content.strip()) > len(head_content.strip()):
                return branch_content
            else:
                return head_content
        
        # Replace all merge conflicts
        content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n', '', content, flags=re.DOTALL)
        
        # Clean up any orphaned conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up any remaining individual markers
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Fix common syntax issues that might have been introduced
        # Fix missing spaces in className attributes
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
        
        # Fix missing spaces in text content
        content = re.sub(r'text-([a-zA-Z]+)([a-zA-Z])', r'text-\1-\2', content)
        content = re.sub(r'mb-([0-9]+)([a-zA-Z])', r'mb-\1-\2', content)
        content = re.sub(r'ml-([0-9]+)([a-zA-Z])', r'ml-\1-\2', content)
        content = re.sub(r'mr-([0-9]+)([a-zA-Z])', r'mr-\1-\2', content)
        content = re.sub(r'mt-([0-9]+)([a-zA-Z])', r'mt-\1-\2', content)
        content = re.sub(r'mx-([0-9]+)([a-zA-Z])', r'mx-\1-\2', content)
        content = re.sub(r'my-([0-9]+)([a-zA-Z])', r'my-\1-\2', content)
        content = re.sub(r'px-([0-9]+)([a-zA-Z])', r'px-\1-\2', content)
        content = re.sub(r'py-([0-9]+)([a-zA-Z])', r'py-\1-\2', content)
        content = re.sub(r'pt-([0-9]+)([a-zA-Z])', r'pt-\1-\2', content)
        content = re.sub(r'pb-([0-9]+)([a-zA-Z])', r'pb-\1-\2', content)
        content = re.sub(r'pl-([0-9]+)([a-zA-Z])', r'pl-\1-\2', content)
        content = re.sub(r'pr-([0-9]+)([a-zA-Z])', r'pr-\1-\2', content)
        
        # Fix missing spaces in other common patterns
        content = re.sub(r'([a-zA-Z])([a-zA-Z])([a-zA-Z])', lambda m: m.group(1) + ' ' + m.group(2) + m.group(3) if 'className' in content[content.find(m.group(0))-50:content.find(m.group(0))+50] else m.group(0), content)
        
        # Remove extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
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
    """Main function to process all files with merge conflicts."""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other excluded directories
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'out'
    ])]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()