#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version (after =======)
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content into lines
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Skip merge conflict markers and choose the newer version (after =======)
            if line.startswith('<<<<<<< HEAD'):
                # Skip until we find =======
                while i < len(lines) and not lines[i].startswith('======='):
                    i += 1
                # Skip the ======= line
                if i < len(lines) and lines[i].startswith('======='):
                    i += 1
                # Continue until we find >>>>>>> 
                while i < len(lines) and not lines[i].startswith('>>>>>>> '):
                    new_lines.append(lines[i])
                    i += 1
                # Skip the >>>>>>> line
                if i < len(lines) and lines[i].startswith('>>>>>>> '):
                    i += 1
            else:
                new_lines.append(line)
                i += 1
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx',
        'lib/**/*.ts',
        'lib/**/*.tsx',
        'hooks/**/*.ts',
        'hooks/**/*.tsx',
        'pages/**/*.ts',
        'pages/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
                    print(f"Fixed merge conflicts in: {file_path}")
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files with merge conflicts")

if __name__ == "__main__":
    main()