#!/usr/bin/env python3
"""
Script to fix missing commas in object literals.
"""

import os
import re
import glob

def fix_object_commas(file_path):
    """Fix missing commas in object literals."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing commas in object literals
        # Pattern: property: value\n      property: value
        content = re.sub(r'(\w+):\s*([^\n]+)\n\s+(\w+):', r'\1: \2,\n      \3:', content)
        
        # Fix missing commas after JSX elements
        content = re.sub(r'(<[^>]+>)\n\s+(\w+):', r'\1,\n      \2:', content)
        
        # Fix missing commas after strings
        content = re.sub(r'(\'[^\']+\')\n\s+(\w+):', r'\1,\n      \2:', content)
        content = re.sub(r'(\"[^\"]+\")\n\s+(\w+):', r'\1,\n      \2:', content)
        
        # Fix missing commas after arrays
        content = re.sub(r'(\[[^\]]+\])\n\s+(\w+):', r'\1,\n      \2:', content)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed object commas in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix object commas."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip .original files
            if '.original' in file_path:
                continue
                
            files_processed += 1
            if fix_object_commas(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed object commas in {files_fixed} files")

if __name__ == "__main__":
    main()