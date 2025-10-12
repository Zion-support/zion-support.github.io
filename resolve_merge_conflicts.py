#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+'
        resolved_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD\n', '', resolved_content)
        resolved_content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+\n?', '', resolved_content, flags=re.DOTALL)
        
        # Clean up any extra newlines
        resolved_content = re.sub(r'\n\n\n+', '\n\n', resolved_content)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts"""
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.jsx',
        'app/**/*.js',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.jsx', 
        'components/**/*.js',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path) and not file_path.startswith('node_modules'):
                files_processed += 1
                if resolve_merge_conflicts(file_path):
                    files_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved merge conflicts in {files_resolved} files")

if __name__ == "__main__":
    main()