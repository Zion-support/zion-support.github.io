#!/usr/bin/env python3
"""
Script to fix common errors in the codebase:
1. Fix invalid characters (backslashes before quotes)
2. Resolve merge conflicts
3. Fix basic syntax errors
"""

import os
import re
import glob
from pathlib import Path

def fix_invalid_characters(content):
    """Fix invalid characters like \' to '"""
    # Fix backslashes before single quotes
    content = re.sub(r"\\'", "'", content)
    # Fix backslashes before double quotes
    content = re.sub(r'\\"', '"', content)
    return content

def resolve_merge_conflicts(content):
    """Resolve merge conflicts by keeping the HEAD version"""
    # Remove merge conflict markers and keep HEAD version
    lines = content.split('\n')
    result = []
    in_conflict = False
    keep_lines = True
    
    for line in lines:
<<<<<<< HEAD
        if line.strip().startswith(''):
=======
        if line.strip().startswith('            in_conflict = True
            keep_lines = True
            continue
        elif line.strip().startswith(''):
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
            keep_lines = False
            continue
        elif line.strip().startswith('>>>>>>>'):
            in_conflict = False
            keep_lines = True
            continue
        elif not in_conflict or keep_lines:
            result.append(line)
    
    return '\n'.join(result)

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors"""
    # Fix missing closing tags in self-closing elements
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>', r'<\1\2 />', content)
    
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*?)\s*pt-20"', r'className="\1 pt-20"', content)
    
    return content

def fix_typescript_imports(content):
    """Fix TypeScript import issues"""
    # Fix 'use client' directive placement
    if "'use client';" in content:
        lines = content.split('\n')
        if "'use client';" in lines:
            lines.remove("'use client';")
            lines.insert(0, "'use client';")
        content = '\n'.join(lines)
    
    return content

def process_file(file_path):
    """Process a single file to fix errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_invalid_characters(content)
        content = resolve_merge_conflicts(content)
        content = fix_jsx_syntax(content)
        content = fix_typescript_imports(content)
        
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
    """Main function to process all TypeScript/TSX files"""
    # Get all TypeScript and TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts'
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