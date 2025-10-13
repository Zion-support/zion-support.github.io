#!/usr/bin/env python3
"""
Script to resolve remaining merge conflicts with more robust parsing
"""
import os
import re
import glob

def resolve_merge_conflicts_robust(file_path):
    """Resolve merge conflicts in a single file with more robust parsing"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '' not in content:
            return False
        
        # More robust regex to handle various conflict patterns
        # This pattern matches the entire conflict block
        conflict_pattern = r'\n(.*?)\n\n(.*?)\n        
        def replace_conflict(match):
            # Keep the newer version (after )
            return match.group(2)
        
        # Replace all conflicts
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve remaining merge conflicts"""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    conflicts_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if '' in open(file_path, 'r', encoding='utf-8').read():
                files_processed += 1
                if resolve_merge_conflicts_robust(file_path):
                    conflicts_resolved += 1
    
    print(f"\nProcessed {files_processed} files with conflicts")
    print(f"Resolved conflicts in {conflicts_resolved} files")

if __name__ == "__main__":
    main()