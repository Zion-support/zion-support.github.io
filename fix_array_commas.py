#!/usr/bin/env python3
"""
Script to fix missing commas between array elements.
"""

import os
import re
import glob

def fix_array_commas(file_path):
    """Fix missing commas between array elements."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing commas between objects in arrays
        # Pattern: }\n    {
        content = re.sub(r'}\s*\n\s*{', '},\n    {', content)
        
        # Fix missing commas after closing braces in arrays
        content = re.sub(r'}\s*\n\s*(\w+)', r'},\n    \1', content)
        
        # Fix missing commas after closing braces followed by other elements
        content = re.sub(r'}\s*\n\s*(\w+:)', r'},\n    \1', content)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed array commas in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix array commas."""
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
            if fix_array_commas(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed array commas in {files_fixed} files")

if __name__ == "__main__":
    main()