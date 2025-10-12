#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by conflict markers and keep the newer version
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            return False
        
        # Reconstruct content by keeping the newer version (after =======)
        resolved_content = parts[0]  # Content before first conflict
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                resolved_content += parts[i + 1]  # Keep the newer version
                if i + 3 < len(parts):
                    resolved_content += parts[i + 3]  # Content after conflict
        
        # Write resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.md'
    ]
    
    resolved_count = 0
    total_files = 0
    
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if resolve_merge_conflicts(file_path):
                resolved_count += 1
    
    print(f"\nResolved conflicts in {resolved_count} out of {total_files} files processed")

if __name__ == "__main__":
    main()