#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the newer content
and removing conflict markers.
"""

import os
import re
import sys
from pathlib import Path

def fix_merge_conflicts(file_path):
<<<<<<< HEAD
    """Fix merge conflicts in a single file."""
=======
    """Fix merge conflicts in a file by keeping the HEAD version and removing conflict markers."""
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove merge conflict markers and keep the newer content (after =======)
        # Pattern to match merge conflicts and keep the newer content
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+'
        
        # Replace with just the newer content
        new_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict sections
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'^<<<<<<< HEAD.*$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^=======.*$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^>>>>>>> [^\n]+.*$', '', new_content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
=======
        # Remove merge conflict markers and keep HEAD version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix unclosed JSX tags - this is complex, so we'll handle specific patterns
        # Fix missing closing tags for common elements
        fixes = [
            # Fix unclosed Helmet tags
            (r'<Helmet>([^<]*)', r'<Helmet>\1</Helmet>'),
            # Fix unclosed div tags (basic pattern)
            (r'<div([^>]*)>([^<]*)', r'<div\1>\2</div>'),
            # Fix missing semicolons after imports
            (r'import ([^;]+)\n', r'import \1;\n'),
            # Fix missing closing fragments
            (r'<>([^<]*)', r'<>\1</>'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing JSX in {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to process all files with merge conflicts."""
    workspace = Path('/workspace')
    
    # Find all TypeScript/JavaScript files with merge conflicts
    files_with_conflicts = []
    
    for ext in ['*.tsx', '*.ts', '*.jsx', '*.js']:
        for file_path in workspace.rglob(ext):
            if 'node_modules' in str(file_path):
                continue
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Successfully fixed {fixed_count} files")
=======
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                print(f"Processing: {file_path}")
                
                # Fix merge conflicts first
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
                
                # Then fix JSX syntax
                fix_jsx_syntax_errors(file_path)
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

if __name__ == "__main__":
    main()