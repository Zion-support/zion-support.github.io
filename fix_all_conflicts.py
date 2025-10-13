#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining merge conflicts
"""
import os
import re
import glob

def fix_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove all merge conflict markers and keep the content after =======
        # This handles various patterns of conflicts
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_end = True
                continue
            elif line.strip() == '=======':
                skip_until_end = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining conflicts"""
    # Get all files with conflicts
    result = os.popen("grep -l '<<<<<<< HEAD' app/**/*.{ts,tsx,js,jsx} 2>/dev/null").read().strip()
    files_with_conflicts = result.split('\n') if result else []
    
    files_processed = 0
    conflicts_fixed = 0
    
    for file_path in files_with_conflicts:
        if file_path and os.path.exists(file_path):
            files_processed += 1
            if fix_conflicts_in_file(file_path):
                conflicts_fixed += 1
    
    print(f"\nProcessed {files_processed} files with conflicts")
    print(f"Fixed conflicts in {conflicts_fixed} files")

if __name__ == "__main__":
    main()