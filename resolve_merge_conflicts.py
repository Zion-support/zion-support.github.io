#!/usr/bin/env python3
"""
Script to resolve merge conflicts by keeping the most recent version (after )
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '' not in content:
            return False
        
        # Split by merge conflict markers
        parts = re.split(r'.*?\n(.*?)\n\n(.*?)\n        
        if len(parts) < 2:
            return False
        
        # Keep the first part (before first conflict) and the parts after  (most recent)
        resolved_content = parts[0]
        
        for i in range(1, len(parts), 2):
            if i + 1 < len(parts):
                # Keep the part after  (most recent version)
                resolved_content += parts[i + 1]
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve merge conflicts in all files"""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if resolve_merge_conflicts(file_path):
                files_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved merge conflicts in {files_resolved} files")

if __name__ == "__main__":
    main()