#!/usr/bin/env python3
import os
import re
import glob

def fix_corrupted_file(file_path):
    """Fix corrupted files with merge conflict remnants"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file is too small or doesn't contain corruption markers
        if len(content) < 50 or '";";"' not in content:
            return False
        
        # For TypeScript/JavaScript files, try to extract the clean content
        if file_path.endswith(('.tsx', '.ts', '.js', '.jsx')):
            # Remove all lines with corruption markers
            lines = content.split('\n')
            clean_lines = []
            
            for line in lines:
                # Skip lines with corruption markers
                if '";";"' in line or '<<<<<<< HEAD' in line or '=======' in line or '>>>>>>>' in line:
                    continue
                # Skip lines that are just quotes or semicolons
                if line.strip() in ['";', ';', '"', "'", '`']:
                    continue
                clean_lines.append(line)
            
            # Remove empty lines at the beginning and end
            while clean_lines and not clean_lines[0].strip():
                clean_lines.pop(0)
            while clean_lines and not clean_lines[-1].strip():
                clean_lines.pop()
            
            new_content = '\n'.join(clean_lines)
            
            # If the file is too short or doesn't look like valid code, skip it
            if len(new_content) < 100:
                return False
                
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed corrupted file: {file_path}")
            return True
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_corrupted_file(file_path):
                files_fixed += 1
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()