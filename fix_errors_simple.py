#!/usr/bin/env python3
"""
Simple error fixer for the Zion website project.
This script fixes merge conflicts and basic syntax issues.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(content):
    """Fix merge conflict markers by keeping the newer version (after =======)"""
    lines = content.split('\n')
    fixed_lines = []
    in_conflict = False
    keep_section = False
    
    for line in lines:
        if line.startswith('<<<<<<<'):
            in_conflict = True
            continue
        elif line.startswith('======='):
            keep_section = True
            continue
        elif line.startswith('>>>>>>>'):
            in_conflict = False
            keep_section = False
            continue
        elif in_conflict and not keep_section:
            continue
        else:
            fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_basic_syntax(content):
    """Fix basic syntax issues"""
    # Fix malformed import statements
    content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*;\s*'use client';", 
                     r"'use client';\nimport {\1} from '\2';", content)
    
    # Fix missing semicolons in import statements
    content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*$", 
                     r"import {\1} from '\2';", content, flags=re.MULTILINE)
    
    # Fix duplicate 'use client' directives
    content = re.sub(r"'use client';\s*'use client';", "'use client';", content)
    
    # Fix malformed import statements with semicolons
    content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*;\s*;", 
                     r"import {\1} from '\2';", content)
    
    return content

def process_file(file_path):
    """Process a single file to fix errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_merge_conflicts(content)
        content = fix_basic_syntax(content)
        
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
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip backup and original files
            if any(skip in file_path for skip in ['.original', '.backup', '.broken']):
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()