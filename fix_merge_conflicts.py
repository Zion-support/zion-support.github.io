#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the most recent version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Split content by conflict markers
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        conflict_depth = 0
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                in_conflict = True
                conflict_depth += 1
                continue
            elif line.strip().startswith('======='):
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                conflict_depth -= 1
                continue
            elif not in_conflict:
                fixed_lines.append(line)
        
        # Write fixed content
        fixed_content = '\n'.join(fixed_lines)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [a-f0-9]+', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'=======.*?>>>>>>> [a-f0-9]+', '', fixed_content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                total_files += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"\nProcessed {total_files} files, fixed {fixed_count} files with merge conflicts")

if __name__ == "__main__":
    main()