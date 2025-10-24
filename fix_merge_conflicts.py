#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+'
        fixed_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n', '', fixed_content)
        fixed_content = re.sub(r'=======\n', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        # Clean up any extra newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        if content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            print(f"No conflicts found in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Find all TSX and TS files with merge conflicts
    tsx_files = glob.glob('app/**/*.tsx', recursive=True)
    ts_files = glob.glob('app/**/*.ts', recursive=True)
    
    all_files = tsx_files + ts_files
    
    fixed_count = 0
    total_count = 0
    
    for file_path in all_files:
        if os.path.exists(file_path):
            total_count += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nProcessed {total_count} files, fixed {fixed_count} files with merge conflicts")

if __name__ == "__main__":
    main()