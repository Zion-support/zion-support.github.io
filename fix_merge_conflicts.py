#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/React files
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove all merge conflict markers and keep the latest version
        # This is a simple approach - keep everything after the last =======
        lines = content.split('\n')
        fixed_lines = []
        skip_until_end = False
        
        for line in lines:
            if '<<<<<<< HEAD' in line:
                skip_until_end = True
                continue
            elif '=======' in line:
                skip_until_end = False
                continue
            elif '>>>>>>> ' in line:
                skip_until_end = False
                continue
            elif not skip_until_end:
                fixed_lines.append(line)
        
        # Join lines and clean up
        fixed_content = '\n'.join(fixed_lines)
        
        # Clean up any remaining syntax issues
        fixed_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', fixed_content)  # Remove excessive newlines
        fixed_content = re.sub(r';\s*;+', ';', fixed_content)  # Fix double semicolons
        fixed_content = re.sub(r'\}\s*\}\s*\}', '}', fixed_content)  # Fix multiple closing braces
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/React files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
    fixed_count = 0
    total_files = len(files_to_fix)
    
    print(f"Found {total_files} files to check for merge conflicts...")
    
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files out of {total_files} total files.")

if __name__ == "__main__":
    main()