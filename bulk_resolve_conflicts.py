#!/usr/bin/env python3
"""
Bulk conflict resolution script for React/TypeScript files.
This script automatically resolves simple merge conflicts by choosing the HEAD version.
"""

import os
import re
import glob
from pathlib import Path

def resolve_conflicts_in_file(file_path):
    """Resolve conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Processing: {file_path}")
        
        # Create backup
        backup_path = f"{file_path}.backup.{int(time.time())}"
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # Remove everything between ======= and >>>>>>> markers
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Remove remaining <<<<<<< HEAD markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve conflicts in all relevant files."""
    import time
    
    # File patterns to process
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
    ]
    
    resolved_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip backup files and node_modules
            if 'backup' in file_path or 'node_modules' in file_path:
                continue
                
            total_files += 1
            if resolve_conflicts_in_file(file_path):
                resolved_count += 1
    
    print(f"\nResolved conflicts in {resolved_count} out of {total_files} files")
    print("Please review the changes and test the application.")

if __name__ == "__main__":
    main()