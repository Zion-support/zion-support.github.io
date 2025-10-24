#!/usr/bin/env python3
"""
Script to resolve merge conflicts by choosing the newer version (after =======)
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
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> .*?\n', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
        
        # Reconstruct content by choosing the newer version (after =======)
        resolved_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 2):
            if i + 1 < len(parts):
                # Choose the newer version (after =======)
                resolved_content += parts[i + 1]
                if i + 2 < len(parts):
                    resolved_content += parts[i + 2]
        
        # Clean up any remaining merge markers
        resolved_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> .*?\n', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'=======.*?>>>>>>> .*?\n', '', resolved_content, flags=re.DOTALL)
        
        # Write resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if resolve_merge_conflicts(file_path):
                    files_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved conflicts in {files_resolved} files")

if __name__ == "__main__":
    main()