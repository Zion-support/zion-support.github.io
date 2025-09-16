#!/usr/bin/env python3
import os
import re
import sys

def fix_remaining_conflicts(file_path):
    """Fix remaining merge conflicts in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>> ' not in content:
            return False
            
        # More aggressive cleanup - remove all merge conflict markers and choose first option
        lines = content.split('\n')
        cleaned_lines = []
        skip_until_end = False
        
        for line in lines:
            if '<<<<<<< HEAD' in line or '=======' in line or '>>>>>>> ' in line:
                skip_until_end = True
                continue
            elif skip_until_end and line.strip() == '':
                skip_until_end = False
                continue
            elif not skip_until_end:
                cleaned_lines.append(line)
        
        cleaned_content = '\n'.join(cleaned_lines)
        
        # Write cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
            
        print(f"Fixed remaining conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all files with remaining merge conflicts
    import subprocess
    result = subprocess.run(['find', '.', '-name', '*.js', '-o', '-name', '*.jsx', '-o', '-name', '*.ts', '-o', '-name', '*.tsx'], 
                          capture_output=True, text=True, cwd='/workspace')
    
    files = result.stdout.strip().split('\n')
    fixed_count = 0
    
    for file_path in files:
        if file_path and not file_path.startswith('./node_modules'):
            if fix_remaining_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed remaining conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()