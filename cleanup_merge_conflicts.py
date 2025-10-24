#!/usr/bin/env python3
"""
Script to clean up merge conflicts and fix common syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(content):
    """Remove merge conflict markers and resolve conflicts by keeping the HEAD version."""
    lines = content.split('\n')
    cleaned_lines = []
    in_conflict = False
    keep_lines = True
    
    for line in lines:
        if line.startswith('<<<<<<<'):
            in_conflict = True
            keep_lines = True
            continue
        elif line.startswith('======='):
            keep_lines = False
            continue
        elif line.startswith('>>>>>>>'):
            in_conflict = False
            keep_lines = True
            continue
        elif in_conflict and not keep_lines:
            continue
        else:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def fix_common_syntax_errors(content):
    """Fix common syntax errors in the code."""
    # Fix missing semicolons after imports
    content = re.sub(r"import\s+([^;]+)(?<!;)$", r"import \1;", content, flags=re.MULTILINE)
    
    # Fix missing semicolons after variable declarations
    content = re.sub(r"(\w+)\s*=\s*([^;]+)(?<!;)$", r"\1 = \2;", content, flags=re.MULTILINE)
    
    # Fix missing commas in object literals
    content = re.sub(r"(\w+):\s*([^,}]+)(?<![,}])\s*\n", r"\1: \2,\n", content)
    
    # Fix missing closing braces
    content = re.sub(r"(\w+)\s*{\s*$", r"\1 {", content, flags=re.MULTILINE)
    
    # Fix JSX syntax issues
    content = re.sub(r"<(\w+)\s*([^>]*?)(?<!>)$", r"<\1 \2>", content, flags=re.MULTILINE)
    
    return content

def fix_import_issues(content):
    """Fix common import issues."""
    # Fix missing imports for lucide-react icons
    if 'Mail' in content and 'import { Mail' not in content:
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]", 
                        r"import { \1, Mail } from 'lucide-react'", content)
    
    if 'Send' in content and 'import { Send' not in content:
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]", 
                        r"import { \1, Send } from 'lucide-react'", content)
    
    if 'CheckCircle' in content and 'import { CheckCircle' not in content:
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]lucide-react['\"]", 
                        r"import { \1, CheckCircle } from 'lucide-react'", content)
    
    return content

def process_file(file_path):
    """Process a single file to clean up merge conflicts and fix syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Clean merge conflicts
        content = clean_merge_conflicts(content)
        
        # Fix common syntax errors
        content = fix_common_syntax_errors(content)
        
        # Fix import issues
        content = fix_import_issues(content)
        
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
    """Main function to process all files."""
    # Get all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
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