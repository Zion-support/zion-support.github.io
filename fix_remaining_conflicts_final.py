#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining merge conflicts and syntax issues
"""

import os
import re
import glob

def fix_merge_conflicts(content):
    """Fix merge conflict markers by choosing the HEAD version"""
    # Remove merge conflict markers and choose HEAD version
    lines = content.split('\n')
    result = []
    in_conflict = False
    choosing_head = False
    
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            in_conflict = True
            choosing_head = True
            continue
        elif line.startswith('======='):
            choosing_head = False
            continue
        elif line.startswith('>>>>>>> '):
            in_conflict = False
            choosing_head = False
            continue
        elif in_conflict and not choosing_head:
            continue
        else:
            result.append(line)
    
    return '\n'.join(result)

def fix_syntax_issues(content):
    """Fix common syntax issues"""
    # Fix import statements
    content = re.sub(r'import\s*{\s*type\s+ClassValue;\s*clsx\s*}\s*from', 'import { type ClassValue, clsx } from', content)
    
    # Fix semicolons in object literals
    content = re.sub(r',\s*}', '}', content)
    content = re.sub(r',\s*\)', ')', content)
    
    # Fix duplicate semicolons
    content = re.sub(r';;+', ';', content)
    
    # Fix missing commas in object literals
    content = re.sub(r'(\w+)\s*:\s*([^,}\n]+)\s*\n\s*(\w+)', r'\1: \2,\n  \3', content)
    
    return content

def process_file(file_path):
    """Process a single file to fix conflicts and syntax issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix merge conflicts
        content = fix_merge_conflicts(content)
        
        # Fix syntax issues
        content = fix_syntax_issues(content)
        
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
    # Find all relevant files
    patterns = [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.js',
        'src/**/*.jsx',
        '*.ts',
        '*.tsx',
        '*.js',
        '*.jsx'
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