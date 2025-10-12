#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the HEAD version
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
            
            # Handle merge conflict markers
            if line.strip() == '<<<<<<< HEAD':
                # Skip the HEAD marker
                i += 1
                # Keep content until we hit =======
                while i < len(lines) and lines[i].strip() != '=======':
                    new_lines.append(lines[i])
                    i += 1
                # Skip the ======= marker
                if i < len(lines):
                    i += 1
                # Skip content until we hit >>>>>>> origin/main
                while i < len(lines) and not lines[i].strip().startswith('>>>>>>>'):
                    i += 1
                # Skip the >>>>>>> origin/main marker
                if i < len(lines):
                    i += 1
            else:
                new_lines.append(line)
                i += 1
        
        # Write the cleaned content back
        new_content = '\n'.join(new_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
        '**/*.js',
        '**/*.jsx'
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
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()