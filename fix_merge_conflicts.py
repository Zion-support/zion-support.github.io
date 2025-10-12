#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the incoming changes
(typically the content after ======= and before >>>>>>>)
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<<' not in content or '=======' not in content or '>>>>>>>' not in content:
            return False
        
        # Pattern to match merge conflict blocks
        # This will match from <<<<<<< to >>>>>>> and keep the content after =======
        pattern = r'<<<<<<<[^>]*\n(?:.*\n)*?=======\n(.*?)\n>>>>>>>[^\n]*\n?'
        
        # Replace merge conflicts with the incoming changes (after =======)
        def replace_conflict(match):
            incoming_content = match.group(1)
            return incoming_content
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers on the same line
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<<[^\n]*\n?', '', new_content)
        new_content = re.sub(r'=======[^\n]*\n?', '', new_content)
        new_content = re.sub(r'>>>>>>>[^\n]*\n?', '', new_content)
        
        # Clean up any double newlines that might have been created
        new_content = re.sub(r'\n\n\n+', '\n\n', new_content)
        
        # Only write if content changed
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all files"""
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
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
                print(f"Fixed merge conflicts in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()