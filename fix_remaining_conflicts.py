#!/usr/bin/env python3
"""
Fix remaining merge conflicts that start with =======
"""
import os
import re
import glob

def fix_remaining_conflicts(file_path):
    """Fix remaining merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove lines that start with ======= at the beginning of the file
        lines = content.split('\n')
        new_lines = []
        
        i = 0
        while i < len(lines):
            line = lines[i]
            # Skip lines that start with =======
            if line.strip().startswith('======='):
                i += 1
                continue
            new_lines.append(line)
            i += 1
        
        new_content = '\n'.join(new_lines)
        
        # Also remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>> .*', '', new_content)
        new_content = re.sub(r'=======.*', '', new_content)
        
        # Clean up extra newlines
        new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
        
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining merge conflicts"""
    # Get all TypeScript/JavaScript files
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/**/*.tsx',
        '/workspace/**/*.ts',
        '/workspace/**/*.jsx',
        '/workspace/**/*.js'
    ]
    
    all_files = []
    for pattern in patterns:
        all_files.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other irrelevant directories
    files_to_process = []
    for file_path in all_files:
        if any(exclude in file_path for exclude in ['node_modules', '.git', 'dist', 'build']):
            continue
        files_to_process.append(file_path)
    
    print(f"Processing {len(files_to_process)} files...")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_remaining_conflicts(file_path):
            print(f"Fixed: {file_path}")
            fixed_count += 1
    
    print(f"\nFixed remaining conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()