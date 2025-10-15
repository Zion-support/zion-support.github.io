#!/usr/bin/env python3
"""
Comprehensive script to clean up merge conflicts and fix syntax errors
"""
import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(content):
    """Clean merge conflict markers and choose the correct version"""
    lines = content.split('\n')
    cleaned_lines = []
    in_conflict = False
    current_version = None
    
    for line in lines:
        if line.strip().startswith('<<<<<<<'):
            in_conflict = True
            current_version = 'head'
            continue
        elif line.strip().startswith('======='):
            current_version = 'incoming'
            continue
        elif line.strip().startswith('>>>>>>>'):
            in_conflict = False
            current_version = None
            continue
        elif in_conflict:
            if current_version == 'incoming':
                cleaned_lines.append(line)
        else:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def fix_import_syntax(content):
    """Fix common import syntax errors"""
    # Fix missing semicolons in imports
    content = re.sub(r"import\s+([^;]+)\s*$", r"import \1;", content, flags=re.MULTILINE)
    
    # Fix import statements with commas instead of semicolons
    content = re.sub(r"import\s+([^,]+),\s*$", r"import \1;", content, flags=re.MULTILINE)
    
    # Fix multiple imports on same line
    content = re.sub(r"import\s+([^;]+),\s*import\s+([^;]+);", r"import \1;\nimport \2;", content)
    
    return content

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors"""
    # Fix unterminated JSX tags
    content = re.sub(r'<([^>]+)\s*$', r'<\1>', content, flags=re.MULTILINE)
    
    # Fix missing closing tags in fragments
    content = re.sub(r'<>\s*$', r'<>', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_errors(content):
    """Fix common TypeScript syntax errors"""
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix unterminated strings
    content = re.sub(r'"([^"]*)\s*$', r'"\1"', content, flags=re.MULTILINE)
    content = re.sub(r"'([^']*)\s*$", r"'\1'", content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to clean up merge conflicts and syntax errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Clean merge conflicts
        content = clean_merge_conflicts(content)
        
        # Fix import syntax
        content = fix_import_syntax(content)
        
        # Fix JSX syntax
        content = fix_jsx_syntax(content)
        
        # Fix TypeScript errors
        content = fix_typescript_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
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
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and dist directories
            if 'node_modules' in file_path or 'dist' in file_path:
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()