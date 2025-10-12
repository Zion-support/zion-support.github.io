#!/usr/bin/env python3
"""
Comprehensive error fixer for the Zion website project.
This script fixes JSX parsing errors, merge conflicts, and syntax issues.
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

def fix_jsx_syntax_errors(content):
    """Fix common JSX syntax errors"""
    # Fix missing semicolons in import statements
    content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*;?\s*$", 
                     r"import {\1} from '\2';", content, flags=re.MULTILINE)
    
    # Fix malformed import statements
    content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*;\s*'use client';", 
                     r"'use client';\nimport {\1} from '\2';", content)
    
    # Fix missing closing tags - add closing div tags where needed
    # This is a simplified approach - more complex cases need manual review
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    
    # Fix unclosed Helmet tags
    content = re.sub(r'<Helmet([^>]*)>\s*$', r'<Helmet\1></Helmet>', content, flags=re.MULTILINE)
    
    # Fix malformed JSX expressions
    content = re.sub(r'<([^>]+)>\s*$', r'<\1></\1>', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_syntax_errors(content):
    """Fix TypeScript syntax errors"""
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix malformed function declarations
    content = re.sub(r'function\s+(\w+)\s*\(\s*\)\s*\{', r'function \1() {', content)
    
    # Fix missing return statements
    content = re.sub(r'(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{', r'\1: React.FC = () => {', content)
    
    return content

def fix_common_issues(content):
    """Fix common issues found in the codebase"""
    # Remove duplicate 'use client' directives
    content = re.sub(r"'use client';\s*'use client';", "'use client';", content)
    
    # Fix malformed import statements with semicolons
    content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*;\s*;", 
                     r"import {\1} from '\2';", content)
    
    # Fix missing closing parentheses
    content = re.sub(r'(\w+)\s*\(\s*([^)]*)\s*$', r'\1(\2)', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes in order
        content = fix_merge_conflicts(content)
        content = fix_jsx_syntax_errors(content)
        content = fix_typescript_syntax_errors(content)
        content = fix_common_issues(content)
        
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